import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-summary-from-text',
  templateUrl: './summary-from-text.component.html',
  styleUrls: ['./summary-from-text.component.scss']
})
export class SummaryFromTextComponent implements OnInit, OnDestroy {

  sub?: Subscription;
  isLoading?: boolean;
  downloadLink?: string;
  txtResult?: string;
  txtSummaryForm?: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
      this.initializeForm();
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }

  initializeForm(): void {
    this.txtSummaryForm = this.fb.group(
      {
        txt: ['', Validators.required],
        length: ['', Validators.required]
      }
    );
  }

  OnSubmit(): void {}

}
