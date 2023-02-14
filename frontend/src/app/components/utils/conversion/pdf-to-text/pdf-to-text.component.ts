import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pdf-to-text',
  templateUrl: './pdf-to-text.component.html',
  styleUrls: ['./pdf-to-text.component.scss']
})
export class PdfToTextComponent implements OnDestroy, OnInit {

  conversionSub?: Subscription;
  pdfFile?: File;
  result?: any;
  downloadLink?: string;
  isLoading?: boolean;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
      this.isLoading = false;
  }

  ngOnDestroy(): void {
    this.conversionSub?.unsubscribe();
  }

  onFileChange(event: any) {
    this.pdfFile = event.target.files[0];
  }

  OnSubmit(): void {
    if (this.pdfFile) {
      this.result = undefined;
      this.downloadLink = undefined;
      this.isLoading = true;
      let formData = new FormData();
      formData.append('pdf', this.pdfFile);
      this.conversionSub = this.api.getText(formData).subscribe(
        {
          next: (res: any) => {
            this.result = res['txt_output'];
            this.downloadLink = res['download_link'];
            this.isLoading = false;
            console.log(res);
          },
          error: err => {
            this.isLoading = false;
            console.log(err);
          }
        }
      );
    }
  }

}
