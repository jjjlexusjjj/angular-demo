import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-answer-array',
  templateUrl: './answer-array.component.html',
  styleUrls: ['./answer-array.component.css']
})
export class AnswerArrayComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() array: string[];
  @Input() placeHolder = "Mat chip elements";

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add element if is not included yet
    if ((value || '').trim() && !this.array.includes(value.trim())) {
      this.array.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(element: string): void {
    const index = this.array.indexOf(element);

    if (index >= 0) {
      this.array.splice(index, 1);
    }
  }
}
