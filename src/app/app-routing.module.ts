import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';
import { ShoeFormComponent } from './shoe-form/shoe-form.component';
import { ShoeEditComponent } from './shoe-edit/shoe-edit.component';

const routes: Routes = [
  { path: 'shoes', component: ShoeListComponent },
  { path: 'shoes/new', component: ShoeFormComponent },
  { path: 'shoes/edit/:id', component: ShoeEditComponent }, // Corrected route definition
  { path: 'shoes/:id', component: ShoeDetailComponent },
  { path: '', redirectTo: '/shoes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
