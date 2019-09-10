import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '@app/answers/model/answer.model';
import { AnswerService } from '@app/answers/answer.service';

@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrls: ['./answer-item.component.css']
})
export class AnswerItemComponent implements OnInit {
  @Input("answer") answer: Answer;
  selected: boolean;

  constructor(private answerService: AnswerService) { }

  ngOnInit() {
  }

  onRemoveClick(id: number) {
    this.answerService.removeAnswer(id);
  }
}
