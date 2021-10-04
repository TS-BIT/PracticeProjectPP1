import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <app-footer></app-footer>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,

  styles: [],
})
export class AppComponent {
  title = 'PracticeProjectPP1';
}
