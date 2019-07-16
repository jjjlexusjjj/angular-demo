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
  MatListModule, MatNativeDateModule, MatRadioModule, MatSlideToggleModule, MatToolbarModule, MatProgressSpinnerModule, MatProgressBarModule
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

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

const MATERIAL = [
  MatCardModule, MatListModule, MatDividerModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule,
  MatToolbarModule, MatExpansionModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule,
  MatProgressSpinnerModule, MatProgressBarModule
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
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-first-test'),
    AngularFireDatabaseModule
  ],
  providers: [ServerService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
