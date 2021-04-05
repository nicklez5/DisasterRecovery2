import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobListComponent } from './components/job_list/job_list.component';
import { MachineListComponent } from './components/machine-list/machine-list.component';
import { TimecardListComponent } from './components/timecard-list/timecard-list.component';
import { EditMachineComponent } from './components/edit-machine/edit-machine.component';
import { AddMachineComponent } from './components/add-machine/add-machine.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { EditJobComponent } from './components/edit-job/edit-job.component';
import { UserTimecardListComponent } from './components/user-timecard-list/user-timecard-list.component';
import { UserAddTimecardListComponent } from './components/user-add-timecard-list/user-add-timecard-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    JobListComponent,
    MachineListComponent,
    TimecardListComponent,
    EditMachineComponent,
    AddMachineComponent,
    AddJobComponent,
    EditJobComponent,
    UserTimecardListComponent,
    UserAddTimecardListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
