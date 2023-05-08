import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-compodoc-angular-button',
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
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
      ? 'storybook-compodoc-angular-button--primary'
      : 'storybook-compodoc-angular-button--secondary';

    return [
      'storybook-compodoc-angular-button',
      `storybook-compodoc-angular-button--${this.size}`,
      mode,
    ];
  }
}
