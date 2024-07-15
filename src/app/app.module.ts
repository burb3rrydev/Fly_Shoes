import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';
import { ShoeFormComponent } from './shoe-form/shoe-form.component';
import { ShoeEditComponent } from './shoe-edit/shoe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoeListComponent,
    ShoeDetailComponent,
    ShoeFormComponent,
    ShoeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()) // Enable fetch API
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
