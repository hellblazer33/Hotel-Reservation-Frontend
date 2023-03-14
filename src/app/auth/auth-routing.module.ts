import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from '../Components/registration/registration.component';
import { SigninComponent } from '../Components/signin/signin.component';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'register',
        component: RegistrationComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
