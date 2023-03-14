import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookingComponent } from './Components/addbooking/addbooking.component';
import { AdminSigninComponent } from './Components/adminsignin/adminsignin.component';
import { BookingdashboardComponent } from './Components/bookingdashboard/bookingdashboard.component';



;

import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';


import { RegistrationComponent } from './Components/registration/registration.component';

import { SigninComponent } from './Components/signin/signin.component';




const routes: Routes = [ 
  // {path:'auth',
  // loadChildren: () => import('./auth/auth.module').then(mod=>mod.AuthModule)},
  { path:'', redirectTo:"/signin", pathMatch:'full' },

  { path:'register',component:RegistrationComponent},
  { path:'signin',component:SigninComponent},
  { path:'forgotemail',component:ForgotemailComponent},
  { path:'resetpassword',component:ForgotpasswordComponent},
  { path:'admin',component:AdminSigninComponent},
 
  {path:'dashboard',component:BookingdashboardComponent},
  {path:'addbooking',component:AddbookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
