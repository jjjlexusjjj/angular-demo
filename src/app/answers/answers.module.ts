import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { AnswerItemComponent } from './answer-list/answer-item/answer-item.component';
import { AnswerEditorComponent } from './answer-list/answer-editor/answer-editor.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerSearchBarComponent } from './answer-search-bar/answer-search-bar.component';
import { AnswersRoutingModule } from './answers-routing.module';
import { AnswerDetailsComponent } from './answer-list/answer-details/answer-details.component';
import { AnswerService } from './answer.service';
import { AnswersContainerComponent } from './answers-container/answers-container.component';
import { AnswerArrayComponent } from './answer-list/answer-editor/answer-array/answer-array.component';

@NgModule({
  declarations: [AnswerItemComponent, AnswerEditorComponent, AnswerListComponent, AnswerSearchBarComponent, AnswerDetailsComponent, AnswersContainerComponent, AnswerArrayComponent],
  imports: [
    CommonModule,
    SharedModule,
    AnswersRoutingModule
  ],
  providers: [
    AnswerService
  ]
})
export class AnswersModule { }
