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
import { AddressLineComponent } from './address-line/address-line.component';
import { AddressPipe } from './address-line/address.pipe';
import { MyPanelComponent } from './my-panel/my-panel.component';
import { TemplateDirective } from './template.directive';

const MATERIAL = [
  MatCardModule, MatListModule, MatDividerModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule,
  MatToolbarModule, MatExpansionModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule,
  MatProgressSpinnerModule, MatProgressBarModule
];

const ANGULAR = [
  CommonModule, HttpClientModule, ReactiveFormsModule
];

const DECLARE_TO_EXPORT = [
  AddressLineComponent, AddressPipe, MyPanelComponent, TemplateDirective
];

@NgModule({
  declarations: [...DECLARE_TO_EXPORT],
  imports: [
    ...ANGULAR,
    ...MATERIAL
  ],
  exports: [
    ...ANGULAR,
    ...MATERIAL,
    ...DECLARE_TO_EXPORT
  ]
})
export class SharedModule { }
