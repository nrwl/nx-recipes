import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myngapp-shared-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-ui.component.html',
  styleUrls: ['./shared-ui.component.css'],
})
export class SharedUiComponent {}
