import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { featureDetailsList } from './featuredetails';

@Component({
  selector: 'app-feature-details',
  templateUrl: './feature-details.component.html',
  styleUrls: ['./feature-details.component.scss']
})
export class FeatureDetailsComponent implements OnInit, OnDestroy {

  featuresListDisplay: any;

  currentFeature?: any;
  routeSub?: Subscription;

  constructor(private a_route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.routeSub = this.a_route.queryParams.subscribe(
      (res) => {
        if (JSON.stringify(res) === "{}") {
          this.router.navigateByUrl('/features');
        } else {
          console.log('query param: ', res['category']);
          this.currentFeature = res['category'];
          this.featuresListDisplay = featureDetailsList[this.currentFeature];
          console.log(this.featuresListDisplay);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

}
