import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/bookStore-app/about/about.component';
import { BookStoreAppComponent } from './component/bookStore-app/book-store-app.component';
import { SuporteComponent } from './component/bookStore-app/suporte/suporte.component'

const routes: Routes = [
  {
    path: ' ', redirectTo: 'product', pathMatch: 'full'
  },
  {
    path: 'product', component: BookStoreAppComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'suport', component: SuporteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
