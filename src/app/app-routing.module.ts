import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/servers'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', loadChildren: './reg/registration.module#RegistrationModule'},
  {path: 'servers', loadChildren: './servers/servers.module#ServersModule', canActivate: [AuthGuard]},
  {path: 'boxes', loadChildren: './box-world/box-world.module#BoxWorldModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
