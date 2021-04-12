import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule,  routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './components/signin/signin.component';
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
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { Home2Component } from './components/home2/home2.component';

import { AdminPipe } from './admin.pipe'
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    JobListComponent,
    MachineListComponent,
    TimecardListComponent,
    EditMachineComponent,
    AddMachineComponent,
    AddJobComponent,
    EditJobComponent,
    UserTimecardListComponent,
    UserAddTimecardListComponent,
    HomeComponent,
    PagenotfoundComponent,
    routingComponents,
    Home2Component,
    AdminPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
