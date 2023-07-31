import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { someFunction } from '@my-org/my-lib';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  version = 'STARTING';

  render() {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
      <p>Imported from a library: ${someFunction()}.</p>
    `;
  }
}
