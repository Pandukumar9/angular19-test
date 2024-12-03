import { Component, inject, Input } from '@angular/core';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-popups-test',
  imports: [],
  templateUrl: './popups-test.component.html',
  styleUrl: './popups-test.component.scss'
})
export class PopupsTestComponent {
  // private modalService = inject(NgbModal);

	// open() {
	// 	const modalRef = this.modalService.open(NgbdModalContent);
	// 	modalRef.componentInstance.name = 'World';
	// }

  constructor(){
    // const exampleModal = document.getElementById('exampleModal')
// if (exampleModal) {
//   exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    // const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    // const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    // const modalTitle = exampleModal.querySelector('.modal-title')
    // const modalBodyInput = exampleModal.querySelector('.modal-body input')

    // modalTitle.textContent = `New message to ${recipient}`
    // modalBodyInput.value = recipient
  // })
// }
  }

  // modalTitle: string = '';
  // modalBody: string = '';
  // constructor(private modalService: NgbModal) {}

  openModal(content: any, data: { title: string; body: string }) {
    // const modalRef = this.modalService.open(content);
    // modalRef.componentInstance.title = data.title;
    // modalRef.componentInstance.body = data.body;
  }

}
