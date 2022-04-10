import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { MaterialModule } from '../material/material.module';
import { GeneralComponent } from './pages/general/general.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './pages/form/form.component';






@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    GeneralComponent,
    RegisterComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class RudaModule { }
