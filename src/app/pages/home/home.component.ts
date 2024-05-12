import { Component } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav'
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { FiltersComponent } from './components/filters/filters.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    ProductsHeaderComponent,
    FiltersComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cols = 3;

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }
}
