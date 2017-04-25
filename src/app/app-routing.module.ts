import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemoModule } from './demo/demo.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'demo', pathMatch: 'full'
  },
  {
    path: 'demo', component: DemoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DemoModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
