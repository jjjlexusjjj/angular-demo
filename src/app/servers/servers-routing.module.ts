import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerDetailsComponent } from './server-details/server-details.component';

const routes: Routes = [
  {path: '', component: ServerListComponent, children: [
    {path: ':id', component: ServerDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersRoutingModule { }
