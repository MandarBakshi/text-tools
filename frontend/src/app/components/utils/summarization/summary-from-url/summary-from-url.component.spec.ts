import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryFromUrlComponent } from './summary-from-url.component';

describe('SummaryFromUrlComponent', () => {
  let component: SummaryFromUrlComponent;
  let fixture: ComponentFixture<SummaryFromUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryFromUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryFromUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
