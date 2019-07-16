import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '@env/environment';
import { SharedModule } from '@app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';

const declarationsForExport = [HeaderComponent, LoginComponent];

@NgModule({
  declarations: [...declarationsForExport],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-first-test'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  providers: [AuthService],
  exports: [...declarationsForExport]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
 }
