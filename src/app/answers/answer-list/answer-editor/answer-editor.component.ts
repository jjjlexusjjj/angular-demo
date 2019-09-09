import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AnswerService } from '@app/answers/answer.service';
import { Answer } from '@app/answers/model/answer.model';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-editor',
  templateUrl: './answer-editor.component.html',
  styleUrls: ['./answer-editor.component.css']
})
export class AnswerEditorComponent implements OnInit {
  tags: string[] = [
    'scala', 'angular', 'java'
  ];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  links: string[] = [];
  changeAnswer: FormGroup = new FormGroup({
    'title': new FormControl(''),
    'tags': new FormControl(this.tags, [Validators.required]),
    'image': new FormControl('', [Validators.required]),
    'description': new FormControl('', [Validators.required]),
    'links': new FormControl(this.links, [Validators.required]),
    'code': new FormControl('', [Validators.required]),
  });

  constructor(private answerService: AnswerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      // .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((params: Params) => {
        console.log('edit', params.get('id'))
        // TODO fix this part for enabling edit functionality
        if (params.get('id')) {
          const answer = this.answerService.findAnswer(+params.get('id'));
          // +params.get('id') converts to int
          this.changeAnswer = new FormGroup({
            'title': new FormControl(answer.title),
            'tags': new FormControl(answer.tags, [Validators.required]),
            'image': new FormControl(answer.image, [Validators.required]),
            'description': new FormControl(answer.description, [Validators.required]),
            'links': new FormControl(answer.links, [Validators.required]),
            'code': new FormControl(answer.code, [Validators.required]),
          });
          this.links = answer.links;
          this.tags = answer.tags;
        }
      });
  }
  onChange() {
    const newAnswer: Answer = this.changeAnswer.value;
    console.log("onChange is called", newAnswer);
    this.answerService.save(JSON.parse(JSON.stringify(newAnswer)));
    this.cleanModel();
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
