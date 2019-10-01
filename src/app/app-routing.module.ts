import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';
import { FlexedDivComponent } from './flexed-div/flexed-div.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/answers'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', loadChildren: () => import('./reg/registration.module').then(m => m.RegistrationModule)},
  {path: 'servers', loadChildren: () => import('./servers/servers.module').then(m => m.ServersModule), canActivate: [AuthGuard]},
  {path: 'boxes', loadChildren: () => import('./box-world/box-world.module').then(m => m.BoxWorldModule), canActivate: [AuthGuard]},
  {path: 'demo', loadChildren: () => import('./test-page/test-page.module').then(m => m.TestPageModule)},
  {path: 'answers', loadChildren: () => import('./answers/answers.module').then(m => m.AnswersModule)},
  {path: 'divs', component: FlexedDivComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
