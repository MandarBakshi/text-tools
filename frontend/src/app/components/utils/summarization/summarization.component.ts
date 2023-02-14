import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-summarization',
  templateUrl: './summarization.component.html',
  styleUrls: ['./summarization.component.scss']
})
export class SummarizationComponent implements OnInit {

  summaryType?: string;

  constructor() {}

  ngOnInit(): void {
      this.summaryType = "text";
  }

}
