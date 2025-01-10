import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-reuse-table',
  imports: [CommonModule],
  templateUrl: './reuse-table.component.html',
  styleUrl: './reuse-table.component.scss'
})
export class ReuseTableComponent {
  @Input() columnArray:string[] =[];

  @Input() gridData:any[] =[];

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  isEdit:boolean = false;

  editItem(item: any) {
    alert(`Editing item: ${item.name}`);
  }

  deleteItem(item: any) {
    if (confirm(`Are you sure you want to delete ${item.name}?`)) {
      this.gridData = this.gridData.filter(i => i !== item);
    }
  }

}
