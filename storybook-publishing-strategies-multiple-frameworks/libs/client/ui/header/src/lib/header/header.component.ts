import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-publishing-strategies-multiple-frameworks-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() clientName = 'Test Client';
}
