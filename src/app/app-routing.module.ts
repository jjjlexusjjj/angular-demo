import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {ServerListComponent} from './servers/server-list/server-list.component';
import {RegistrationComponent} from './auth/registration/registration.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'servers', component: ServerListComponent},
  {path: 'boxes', loadChildren: './box-world/box-world.module#BoxWorldModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
