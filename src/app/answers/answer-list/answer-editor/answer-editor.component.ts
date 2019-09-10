import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AnswerService } from '@app/answers/answer.service';
import { Answer } from '@app/answers/model/answer.model';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-answer-editor',
  templateUrl: './answer-editor.component.html',
  styleUrls: ['./answer-editor.component.css']
})
export class AnswerEditorComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  links: string[];
  tags: string[];
  changeAnswer: FormGroup;

  constructor(private router: Router, private answerService: AnswerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.links = [];
    this.tags = [
      'scala', 'angular', 'java'
    ];
    this.changeAnswer = new FormGroup({
      'id': new FormControl(''),
      'title': new FormControl(''),
      'tags': new FormControl(this.tags, [Validators.required]),
      'image': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required]),
      'links': new FormControl(this.links, [Validators.required]),
      'code': new FormControl('', [Validators.required]),
    });
    this.route.paramMap
      // .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((params: Params) => {
        console.log('edit', params.get('id'))
        if (params.get('id')) {
          const answer = this.answerService.findAnswer(+params.get('id'));
          // +params.get('id') converts to int
          console.log('set value:', answer);
          // next code doesn't work for cases where field in json is missed 
          // this.changeAnswer.setValue(answer); 
          this.changeAnswer.patchValue(answer); 
          if(answer.links) {
            this.links = answer.links;
          }
          if(answer.tags) {
            this.tags = answer.tags;
          }
        }
      });
  }
  onChange() {
    const newAnswer: Answer = this.changeAnswer.value;
    console.log("onChange is called", newAnswer);
    // (JSON.parse(JSON.stringify(newAnswer))
    this.answerService.save(newAnswer);
    this.router.navigate(['/'], {relativeTo: this.route});
  }
  cleanModel() {
    this.changeAnswer.reset();
    this.cleanArray(this.links);
    this.cleanArray(this.tags);
  }
  private cleanArray(array: string[]) {
    if (array.length > 0) {
      array.splice(0, array.length);
    }
  }
}
