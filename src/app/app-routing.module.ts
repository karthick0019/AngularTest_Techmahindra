import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './Components/TestComponent/test/test.component';
import { ParentcompComponent } from './Components/Parent/parentcomp/parentcomp.component';
const routes: Routes = [
  { path: '', redirectTo: '/Parent', pathMatch: 'full' },
  {path:'Test',component:TestComponent},
  {path:'Parent',component:ParentcompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
