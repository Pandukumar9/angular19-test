import { Component } from '@angular/core';
import { ReuseDeleteDialogComponent } from '../reuse-delete-dialog/reuse-delete-dialog.component';

@Component({
  selector: 'bootstrap-dialog',
  imports: [],
  templateUrl: './bootstrap-dialog.component.html',
  styleUrl: './bootstrap-dialog.component.scss'
})
export class BootstrapDialogComponent {
  onConfirm(): void {
    console.log('Confirm button clicked');
    // Add your logic here
  }

  // constructor(private modalService: NgbModal) {}

  // openModal(): void {
  //   const modalRef = this.modalService.open(ReuseDeleteDialogComponent, {
  //     size: 'lg', // Options: 'sm', 'lg', 'xl'
  //     backdrop: 'static', // Prevent closing on click outside
  //     keyboard: false, // Disable closing on Esc key
  //   });

  //   modalRef.result
  //     .then((result:any) => {
  //       console.log('Modal closed with:', result);
  //     })
  //     .catch((error:any) => {
  //       console.log('Modal dismissed with:', error);
  //     });
  // }
}
