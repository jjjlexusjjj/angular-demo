import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersContainerComponent } from './answers-container/answers-container.component';
import { AnswerEditorComponent } from './answer-list/answer-editor/answer-editor.component';
import { AnswerDetailsComponent } from './answer-list/answer-details/answer-details.component';

const routes: Routes = [
  {path: '', component: AnswersContainerComponent, children: [
    {path: 'create', component: AnswerEditorComponent},
    {path: 'edit/:id', component: AnswerEditorComponent},
    {path: ':id', component: AnswerDetailsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswersRoutingModule { }
