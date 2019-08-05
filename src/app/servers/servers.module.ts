import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ServerComponent } from './server/server.component';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerService } from './server.service';
import { RouterModule, Route } from '@angular/router';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { ServersRoutingModule } from './servers-routing.module';

// const routes: Route[] = [
//   {path: '', component: ServerListComponent, children: [
//     {path: ':id', component: ServerDetailsComponent}
//   ]}
// ];

@NgModule({
  declarations: [
    ServerComponent,
    ServerListComponent,
    ServerDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ServersRoutingModule
    // RouterModule.forChild(routes)
  ],
  providers: [
    ServerService
  ]
})
export class ServersModule { }
