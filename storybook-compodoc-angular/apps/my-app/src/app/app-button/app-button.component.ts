import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'storybook-compodoc-angular-app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css'],
})
export class AppButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary
      ? 'storybook-compodoc-angular-app-button--primary'
      : 'storybook-compodoc-angular-app-button--secondary';

    return [
      'storybook-compodoc-angular-app-button',
      `storybook-compodoc-angular-app-button--${this.size}`,
      mode,
    ];
  }
}
