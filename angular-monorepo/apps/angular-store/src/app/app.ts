import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-store';
}
