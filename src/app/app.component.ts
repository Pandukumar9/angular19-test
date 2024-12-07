import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LatestupdatesComponent } from './latestupdates/latestupdates.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignalTest1Component } from './signal-test-1/signal-test-1.component';
import { SignalTest2Component } from './signal-test-2/signal-test-2.component';
import { UserSingleCompComponent } from './user-single-comp/user-single-comp.component';
import { ResourceTestComponent } from './resource-test/resource-test.component';
import { BootstrapDialogComponent } from './bootstrap-dialog/bootstrap-dialog.component';
import { NgselectTestComponent } from './ngselect-test/ngselect-test.component';
import { SkeletonTestComponent } from './skeleton-test/skeleton-test.component';
import { PopupsTestComponent } from './popups-test/popups-test.component';
import { ModalMatComponent } from './modal-mat/modal-mat.component';
import { SignalLearnpnComponent } from './signal-learnpn/signal-learnpn.component';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
@Component({
  selector: 'app-root',
  imports: [LatestupdatesComponent,DashboardComponent,FormsModule,ReactiveFormsModule,SignalTest1Component,SignalTest2Component,UserSingleCompComponent,ResourceTestComponent,BootstrapDialogComponent,NgselectTestComponent,SkeletonTestComponent,PopupsTestComponent,ModalMatComponent,SignalLearnpnComponent,LinkedSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19-test';
  // constructor(private modalService: NgbModal) {
  // }

  open(modal: any){
    // this.modalService.open(modal);
  }
}
