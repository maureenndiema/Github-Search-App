import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: 'github', component: GithubComponent},
  {path: 'form', component: FormComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo:"/github", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
