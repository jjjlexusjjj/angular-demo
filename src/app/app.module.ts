import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServerService} from './server.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import {ServerComponent} from './servers/server/server.component';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {ServerListComponent} from './servers/server-list/server-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BoxItemComponent } from './box-world/box-item/box-item.component';
import { BoxContainerComponent } from './box-world/box-container/box-container.component';

const MATERIAL = [
  MatCardModule, MatListModule, MatDividerModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    LoginComponent,
    RegistrationComponent,
    ServerListComponent,
    BoxItemComponent,
    BoxContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...MATERIAL,
    BrowserAnimationsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
