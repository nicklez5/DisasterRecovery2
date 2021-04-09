import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { Home2Component } from './components/home2/home2.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { AddMachineComponent } from './components/add-machine/add-machine.component';
import { EditJobComponent } from './components/edit-job/edit-job.component';
import { EditMachineComponent } from './components/edit-machine/edit-machine.component';
import { JobListComponent } from './components/job_list/job_list.component';
import { MachineListComponent } from './components/machine-list/machine-list.component';
import { TimecardListComponent } from './components/timecard-list/timecard-list.component';
import { UserAddTimecardListComponent } from './components/user-add-timecard-list/user-add-timecard-list.component';
import { UserTimecardListComponent } from './components/user-timecard-list/user-timecard-list.component';
import { Machine } from './models';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home2', component: Home2Component },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/add', component: AddJobComponent },
  { path: 'jobs/:code/update', component: EditJobComponent},
  { path: 'machines', component: MachineListComponent },
  { path: 'machines/add', component: AddMachineComponent },
  { path: 'machines/:machine_code/update', component: EditMachineComponent },
  { path: 'timecards', component: TimecardListComponent },
  { path: 'usertimecards', component: UserTimecardListComponent },
  { path: 'usertimecards/add', component: UserAddTimecardListComponent },
  { path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SigninComponent,HomeComponent,Home2Component,JobListComponent,AddJobComponent,EditJobComponent,MachineListComponent,AddMachineComponent,EditMachineComponent,TimecardListComponent,UserTimecardListComponent,UserAddTimecardListComponent,PagenotfoundComponent]
