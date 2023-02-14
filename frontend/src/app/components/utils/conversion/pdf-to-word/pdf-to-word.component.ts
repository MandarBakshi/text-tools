import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pdf-to-word',
  templateUrl: './pdf-to-word.component.html',
  styleUrls: ['./pdf-to-word.component.scss']
})
export class PdfToWordComponent implements OnInit, OnDestroy {

  pdfFile?: File;
  isLoading?: boolean;
  downloadLink?: string;
  sub?: Subscription;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
      this.isLoading = false;
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }

  OnFileChange(event: any) {
    this.pdfFile = event.target.files[0];
  }

  OnSubmit(): void {
    if(this.pdfFile) {
      let formData = new FormData();
      formData.append('pdf', this.pdfFile);
      
      this.isLoading = true;
      this.downloadLink = undefined;

      this.sub = this.api.getWordFile(formData).subscribe(
        {
          next: (res: any) => {
            this.isLoading = false;
            this.downloadLink = res['download_link'];
          },
          error: (err: any) => {
            this.isLoading = false;
            console.log(err);
          }
        }
      );
    }
  }

}
