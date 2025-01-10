import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reuse-table',
  imports: [CommonModule],
  templateUrl: './reuse-table.component.html',
  styleUrl: './reuse-table.component.scss'
})
export class ReuseTableComponent {
  @Input() columnArray:TableColumn[] =[];

  @Input() gridData:any[] =[];

  @Output() onEditClicked = new EventEmitter<any>();
  @Output() onDeleteClicked = new EventEmitter<any>();

  isEdit:boolean = false;

  onEditBtnClicked(item: any) {
    this.onEditClicked.emit(item);
  }

  onDeleteBtnClicked(item: any) {
    this.onDeleteClicked.emit(item);
  }

}


export interface TableColumn{
   fieldName : string,
   headerName : string,
   dataType : string
}
