import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { AddMachineComponent } from './components/add-machine/add-machine.component';
import { EditJobComponent } from './components/edit-job/edit-job.component';
import { EditMachineComponent } from './components/edit-machine/edit-machine.component';
import { JobListComponent } from './components/job_list/job_list.component';
import { MachineListComponent } from './components/machine-list/machine-list.component';
import { TimecardListComponent } from './components/timecard-list/timecard-list.component';
import { UserAddTimecardListComponent } from './components/user-add-timecard-list/user-add-timecard-list.component';
import { UserTimecardListComponent } from './components/user-timecard-list/user-timecard-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/add', component: AddJobComponent },
  { path: 'jobs/:id/update', component: EditJobComponent},
  { path: 'machines', component: MachineListComponent },
  { path: 'machines/add', component: AddMachineComponent },
  { path: 'machines/:id/update', component: EditMachineComponent },
  { path: 'timecards', component: TimecardListComponent },
  { path: 'usertimecards', component: UserTimecardListComponent },
  { path: 'usertimecards/add', component: UserAddTimecardListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
