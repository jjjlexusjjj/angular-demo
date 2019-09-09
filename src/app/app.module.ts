import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/auth/token.interceptor';
import { UserService } from './core/auth/user.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FlexedDivComponent } from './flexed-div/flexed-div.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexedDivComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [UserService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
