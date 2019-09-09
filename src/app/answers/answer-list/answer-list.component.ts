import { Component, OnInit } from '@angular/core';
import { Answer } from '../model/answer.model';
import { deprecate } from 'util';
import { AnswerService } from '../answer.service';
import { AnswerItemComponent } from './answer-item/answer-item.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  answers: Answer[];
  private _selected:AnswerItemComponent;

  constructor(private answerService: AnswerService, private router: Router, private route: ActivatedRoute) { }

  get selected() {
    return this._selected;
  }

  set selected(value: AnswerItemComponent) {
    if (this._selected) {
      this._selected.selected = false;
    }
    this._selected = value;

    if (this._selected) {
      this._selected.selected = true;
      console.log('before navigation', this._selected.answer.id);
      // this.router.navigate(['view', { id: this._selected.answer.id}], {relativeTo: this.route});
      this.router.navigate([this._selected.answer.id], {relativeTo: this.route});
      // this.router.navigate(['create'], {relativeTo: this.route});
    }
  }

  ngOnInit() {
    this.answers = this.answerService.getAnswers();
  }

  // todo delete
  private generateId(): number {
    return Math.round(Math.random() * 10000);
  }

  onClick(answerItem: AnswerItemComponent) {
    console.log("selected", answerItem.answer);
    this.selected = answerItem;
  }
}
