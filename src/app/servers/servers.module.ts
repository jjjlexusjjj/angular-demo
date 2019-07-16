import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ServerComponent } from './server/server.component';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerService } from './server.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ServerComponent,
    ServerListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: ServerListComponent}])
  ],
  providers: [
    ServerService
  ]
})
export class ServersModule { }
