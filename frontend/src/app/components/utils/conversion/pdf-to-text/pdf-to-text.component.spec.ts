import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfToTextComponent } from './pdf-to-text.component';

describe('PdfToTextComponent', () => {
  let component: PdfToTextComponent;
  let fixture: ComponentFixture<PdfToTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfToTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
