import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reuse-table',
  imports: [CommonModule,FormsModule],
  templateUrl: './reuse-table.component.html',
  styleUrl: './reuse-table.component.scss'
})
export class ReuseTableComponent implements OnChanges{
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

  // @Input() columnArray: TableColumn[] = [];
  // @Input() gridData: any[] = [];

  // @Output() onEditClicked = new EventEmitter<any>();
  // @Output() onDeleteClicked = new EventEmitter<any>();

  // Pagination variables
  searchTerm: string = '';
  filteredData: any[] = [];
  paginatedData: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 2;
  totalItems: number = 0;

  // Sorting variables
  sortColumnIndex: number | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor() {
    this.updatePaginatedData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['gridData']) {
      this.filteredData = [...this.gridData];
      this.totalItems = this.filteredData.length;
      this.updatePaginatedData();
    }

    if (changes['columnArray']) {
      // Handle column array changes if needed
    }
  }

  // onEditBtnClicked(item: any) {
  //   this.onEditClicked.emit(item);
  // }

  // onDeleteBtnClicked(item: any) {
  //   this.onDeleteClicked.emit(item);
  // }

  // Pagination handler
  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePaginatedData();
  }

  // Sorting handler
  onSort(columnIndex: number) {
    if (this.sortColumnIndex === columnIndex) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumnIndex = columnIndex;
      this.sortDirection = 'asc';
    }
    this.sortData();
    this.updatePaginatedData();
  }

  // Sort data based on the column and direction
  sortData() {
    const column = this.columnArray[this.sortColumnIndex!];
    const fieldName = column.fieldName;

    this.filteredData.sort((a, b) => {
      if (a[fieldName] < b[fieldName]) return this.sortDirection === 'asc' ? -1 : 1;
      if (a[fieldName] > b[fieldName]) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

 // Filter the data based on search term
 onSearch() {
  if (this.searchTerm.trim()) {
    this.filteredData = this.gridData.filter(item => {
      return Object.values(item).some(val =>
        String(val).toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  } else {
    this.filteredData = [...this.gridData];
  }
  this.totalItems = this.filteredData.length;
  this.updatePaginatedData();
}

// Update the paginated data
updatePaginatedData() {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;
  this.paginatedData = this.filteredData.slice(start, end);
}

}


export interface TableColumn{
   fieldName : string,
   headerName : string,
  //  dataType : string
}
