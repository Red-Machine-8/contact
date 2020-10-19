import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {ContactFormPageComponent} from "./contact-page/contact-form-page/contact-form-page.component";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent}
    ]},
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard],children: [
      {path: 'contacts', component: ContactPageComponent},
      {path: 'contacts/new', component: ContactFormPageComponent},
      {path: 'contacts/:id', component: ContactFormPageComponent}
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
