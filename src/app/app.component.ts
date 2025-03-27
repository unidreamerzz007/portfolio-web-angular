import { Component } from '@angular/core';

import { AdhiPortfolioComponent } from "./adhi-portfolio/adhi-portfolio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AdhiPortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngportfolio';
}
