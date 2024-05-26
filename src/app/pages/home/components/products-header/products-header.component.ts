import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})

export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = 'desc';
  itemsShowCount = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }
  
  onItemsUpdated(count: number): void {
    console.log(count);
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
