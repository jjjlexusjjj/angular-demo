import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-answer-search-bar',
  templateUrl: './answer-search-bar.component.html',
  styleUrls: ['./answer-search-bar.component.css']
})
export class AnswerSearchBarComponent implements OnInit {
  searchAnswer: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.searchAnswer = new FormGroup({
      // 'title': new FormControl('', [Validators.required]),
      // 'tags': new FormControl('', Validators.required)
      'title': new FormControl(''),
      'tags': new FormControl('')
    });
  }

  onSearch() {
    console.log("form", this.searchAnswer.value);
  }
}
