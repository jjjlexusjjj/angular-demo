import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnswerService } from '@app/answers/answer.service';
import { Answer } from '@app/answers/model/answer.model';

@Component({
  selector: 'app-answer-details',
  templateUrl: './answer-details.component.html',
  styleUrls: ['./answer-details.component.css']
})
export class AnswerDetailsComponent implements OnInit {
  answer: Answer = null;

  constructor(private router: Router, private route: ActivatedRoute, private answerService: AnswerService) {}

  ngOnInit() {
    this.route.paramMap
    // .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((params: Params) => {
        // +params.get('id') converts to int
        this.answer = this.answerService.findAnswer(+params.get('id'));
      });
  }
  onRemoveClick() {
    this.answerService.removeAnswer(this.answer.id);
    this.router.navigate(['/'], {relativeTo: this.route});
  }
}
