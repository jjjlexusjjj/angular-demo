import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatDividerModule, MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule, MatRadioModule, MatSlideToggleModule, MatToolbarModule, MatProgressSpinnerModule, MatProgressBarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const MATERIAL = [
  MatCardModule, MatListModule, MatDividerModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule,
  MatToolbarModule, MatExpansionModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule,
  MatProgressSpinnerModule, MatProgressBarModule
];

const ANGULAR = [
  CommonModule, HttpClientModule, ReactiveFormsModule
];

@NgModule({
  declarations: [],
  imports: [
    ...ANGULAR,
    ...MATERIAL
  ],
  exports: [
    ...ANGULAR,
    ...MATERIAL
  ]
})
export class SharedModule { }
