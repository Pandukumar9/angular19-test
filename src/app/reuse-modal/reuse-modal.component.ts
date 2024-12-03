import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-reuse-modal',
  imports: [MatIconModule],
  templateUrl: './reuse-modal.component.html',
  styleUrl: './reuse-modal.component.scss'
})
export class ReuseModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ReuseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit() {
    console.log(this.data);
  }

  onCancel() {
    console.log('Action Cancelled');
    // Add your cancel logic here
    this.dialogRef.close(false);
  }

  onConfirm() {
    console.log('Action Confirmed');
    // Add your confirm logic here
    this.dialogRef.close(true);
  }
}
