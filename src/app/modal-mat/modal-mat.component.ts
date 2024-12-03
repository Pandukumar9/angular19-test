import { Component, inject, TemplateRef } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ReuseModalComponent } from '../reuse-modal/reuse-modal.component';

@Component({
  selector: 'app-modal-mat',
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './modal-mat.component.html',
  styleUrl: './modal-mat.component.scss'
})
export class ModalMatComponent {
  readonly dialog = inject(MatDialog);
  dialogRef: MatDialogRef<any> | undefined;

  name = 'Pandukumar'; // Example data
  position = 'Angular developer';    // Example data

  openDialog(template: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(template, {
      data: { name: this.name, position: this.position }, // Pass data to the template
    });

    this.dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed with result:', result);
      // if (result) {
      //   this.position = result; // Update position or handle the result
      // }
    });
  }

  closeDialog(result: any): void {
    if (this.dialogRef) {
      this.dialogRef.close(result); // Close the dialog and pass the result
    }
  }

  // this is dialog with passing data
   users = [
    {id:1,name:'madhu',city:'wgl'},
    {id:2,name:'prudvi',city:'hnk'},
    {id:3,name:'kartik',city:'hyd'}
  ];

  openDialog2(){
    const dialogref = this.dialog.open(ReuseModalComponent, {
      data: {
       userdata : this.users
      }
    });

    dialogref.afterClosed().subscribe(res => {
      console.log(res,'pandu');
    })
  }
}
