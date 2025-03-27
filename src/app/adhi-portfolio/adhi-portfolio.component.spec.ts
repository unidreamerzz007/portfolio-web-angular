import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhiPortfolioComponent } from './adhi-portfolio.component';

describe('AdhiPortfolioComponent', () => {
  let component: AdhiPortfolioComponent;
  let fixture: ComponentFixture<AdhiPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdhiPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdhiPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
