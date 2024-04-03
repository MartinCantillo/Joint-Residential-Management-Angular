import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloginComponent } from './Components/Login/clogin/clogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CRegistrarseComponent } from './Components/Registrarse/cregistrarse/cregistrarse.component';

const appRoutes: Routes = [
  { path: "Login", component: CloginComponent },
  {path:"Registrarse", component:CRegistrarseComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    CloginComponent,
    CRegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
