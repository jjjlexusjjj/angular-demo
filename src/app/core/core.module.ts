import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { environment } from '@env/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SharedModule } from '@app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const declarationsForExport = [HeaderComponent];

@NgModule({
  declarations: [...declarationsForExport],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-first-test'),
    AngularFireDatabaseModule,
    SharedModule,
    RouterModule.forChild([])
  ],
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
