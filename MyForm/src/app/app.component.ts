import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({

  selector: 'app-root',
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent,
    RouterModule,
  ],
 
})


export class AppComponent {
  title = 'homes';
}
