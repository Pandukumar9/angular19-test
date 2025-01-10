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
import { TemplateFormValComponent } from './template-form-val/template-form-val.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReuseTableComponent, TableColumn } from './reuse-table/reuse-table.component';
@Component({
  selector: 'app-root',
  imports: [LatestupdatesComponent,DashboardComponent,FormsModule,ReactiveFormsModule,SignalTest1Component,SignalTest2Component,UserSingleCompComponent,ResourceTestComponent,BootstrapDialogComponent,NgselectTestComponent,SkeletonTestComponent,PopupsTestComponent,ModalMatComponent,SignalLearnpnComponent,LinkedSignalComponent,TemplateFormValComponent,ReactiveFormComponent,ReuseTableComponent],
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

  colomnlist:TableColumn[] = [
    {
      fieldName : "employeeName",
      headerName : "Employee Name"
    },
    {
      fieldName : "contactNo",
      headerName : "Contact No"
    },
    {
      fieldName : "emailId",
      headerName : "Email Id"
    },
    {
      fieldName : "deptId",
      headerName : "Dept Id"
    },
    // 'employeeName', 'contactNo' , 'emailId','deptId'
  ];

  employeesData = [
    { employeeName: 'John Doe', contactNo: '123-456-7890', emailId: 'john.doe@example.com', deptId: 'HR' },
    { employeeName: 'Jane Smith', contactNo: '987-654-3210', emailId: 'jane.smith@example.com', deptId: 'Finance' },
    { employeeName: 'Alice Johnson', contactNo: '456-789-0123', emailId: 'alice.johnson@example.com', deptId: 'IT' },
    { employeeName: 'Bob Brown', contactNo: '789-012-3456', emailId: 'bob.brown@example.com', deptId: 'Operations' },
    { employeeName: 'Eve Adams', contactNo: '321-654-0987', emailId: 'eve.adams@example.com', deptId: 'Marketing' },
  ];

  onDelete(data:any){

  }

  onEdit(data:any){

  }

}
