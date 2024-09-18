import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuItems } from '../../constants/menu-item';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems = MenuItems;
}
