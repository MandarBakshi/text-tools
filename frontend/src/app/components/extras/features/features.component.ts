import { Component, OnDestroy, OnInit } from '@angular/core';
import { featuresMain } from './features';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit, OnDestroy {

  featuresDisplay = featuresMain;

  constructor() {}

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      
  }

}
