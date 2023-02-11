import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryFromTextComponent } from './summary-from-text.component';

describe('SummaryFromTextComponent', () => {
  let component: SummaryFromTextComponent;
  let fixture: ComponentFixture<SummaryFromTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryFromTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryFromTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
