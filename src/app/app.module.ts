import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServerService} from './server.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatDividerModule, MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule, MatRadioModule, MatSlideToggleModule, MatToolbarModule
} from '@angular/material';
import {ServerComponent} from './servers/server/server.component';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {ServerListComponent} from './servers/server-list/server-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BoxItemComponent} from './box-world/box-item/box-item.component';
import {BoxContainerComponent} from './box-world/box-container/box-container.component';
import {TokenInterceptor} from './auth/token.interceptor';
import { AddressLineComponent } from './address-line/address-line.component';
import { AddressPipePipe } from './address-line/address-pipe.pipe';

const MATERIAL = [
  MatCardModule, MatListModule, MatDividerModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule,
  MatToolbarModule, MatExpansionModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    LoginComponent,
    RegistrationComponent,
    ServerListComponent,
    BoxItemComponent,
    BoxContainerComponent,
    AddressLineComponent,
    AddressPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...MATERIAL,
    BrowserAnimationsModule
  ],
  providers: [ServerService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
