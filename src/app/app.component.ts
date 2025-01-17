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
import { ReuseFormComponent } from './reuse-form/reuse-form.component';
import { FormElement } from './models/commonmodels';
import { ReuseTableFilter2Component } from './reuse-table-filter2/reuse-table-filter2.component';
@Component({
  selector: 'app-root',
  imports: [LatestupdatesComponent,DashboardComponent,FormsModule,ReactiveFormsModule,SignalTest1Component,SignalTest2Component,UserSingleCompComponent,ResourceTestComponent,BootstrapDialogComponent,NgselectTestComponent,SkeletonTestComponent,PopupsTestComponent,ModalMatComponent,SignalLearnpnComponent,LinkedSignalComponent,TemplateFormValComponent,ReactiveFormComponent,ReuseTableComponent,ReuseFormComponent,ReuseTableFilter2Component],
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
    }
    // 'employeeName', 'contactNo' , 'emailId','deptId'
  ];

  employeesData = [
    { employeeName: 'John Doe', contactNo: '123-456-7890', emailId: 'john.doe@example.com', deptId: 'HR' },
    { employeeName: 'Jane Smith', contactNo: '987-654-3210', emailId: 'jane.smith@example.com', deptId: 'Finance' },
    { employeeName: 'Alice Johnson', contactNo: '456-789-0123', emailId: 'alice.johnson@example.com', deptId: 'IT' },
    { employeeName: 'Bob Brown', contactNo: '789-012-3456', emailId: 'bob.brown@example.com', deptId: 'Operations' },
    { employeeName: 'Eve Adams', contactNo: '321-654-0987', emailId: 'eve.adams@example.com', deptId: 'Marketing' },
    { employeeName: 'Tom Wilson', contactNo: '654-789-1234', emailId: 'tom.wilson@example.com', deptId: 'Sales' },
    { employeeName: 'Nancy White', contactNo: '123-789-4560', emailId: 'nancy.white@example.com', deptId: 'HR' },
    { employeeName: 'Paul Green', contactNo: '321-987-6540', emailId: 'paul.green@example.com', deptId: 'Finance' },
    { employeeName: 'Diana Blue', contactNo: '987-321-4567', emailId: 'diana.blue@example.com', deptId: 'IT' },
    { employeeName: 'Sam Gray', contactNo: '456-123-7890', emailId: 'sam.gray@example.com', deptId: 'Operations' },
    { employeeName: 'Laura Black', contactNo: '789-456-1230', emailId: 'laura.black@example.com', deptId: 'Marketing' },
    { employeeName: 'Peter Parker', contactNo: '654-321-9870', emailId: 'peter.parker@example.com', deptId: 'Sales' },
    { employeeName: 'Clara Kent', contactNo: '987-654-1230', emailId: 'clara.kent@example.com', deptId: 'HR' },
    { employeeName: 'Bruce Wayne', contactNo: '321-456-7890', emailId: 'bruce.wayne@example.com', deptId: 'Finance' },
    { employeeName: 'Clark Kent', contactNo: '123-987-6540', emailId: 'clark.kent@example.com', deptId: 'IT' },
    { employeeName: 'Lois Lane', contactNo: '456-789-3210', emailId: 'lois.lane@example.com', deptId: 'Operations' },
    { employeeName: 'Barry Allen', contactNo: '789-123-4567', emailId: 'barry.allen@example.com', deptId: 'Marketing' },
    { employeeName: 'Diana Prince', contactNo: '654-987-1230', emailId: 'diana.prince@example.com', deptId: 'Sales' },
    { employeeName: 'Hal Jordan', contactNo: '987-123-6540', emailId: 'hal.jordan@example.com', deptId: 'HR' },
    { employeeName: 'Victor Stone', contactNo: '321-654-7890', emailId: 'victor.stone@example.com', deptId: 'IT' },
  ];

  itemsperpage:number = 5;

  onDelete(data:any){

  }

  onEdit(data:any){

  }

  departmentFieldsList: FormElement[] = [
    {fieldName: "deptId" , inputType: "text" , label : "Department Id"},
    {fieldName: "deptName" , inputType: "text" , label : "Department Name"},
    {fieldName: "deptLogo" , inputType: "text" , label : "Department Logo"},
    {fieldName: "isActive" , inputType: "checkbox" , label : "Is Active"}
  ]

}
