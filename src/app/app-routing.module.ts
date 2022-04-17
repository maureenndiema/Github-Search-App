import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'github', component: GithubComponent},
  { path:'**', component:NotFoundComponent},

  { path: '', redirectTo:"/goals", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
