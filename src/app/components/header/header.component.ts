import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule} from '@angular/material/badge'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: 
  [
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  
}
