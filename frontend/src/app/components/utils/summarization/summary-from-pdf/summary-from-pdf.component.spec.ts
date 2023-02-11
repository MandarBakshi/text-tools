import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryFromPdfComponent } from './summary-from-pdf.component';

describe('SummaryFromPdfComponent', () => {
  let component: SummaryFromPdfComponent;
  let fixture: ComponentFixture<SummaryFromPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryFromPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryFromPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
