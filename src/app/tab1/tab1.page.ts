import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  result: number = 0;
  sex: string = "";

  constructor(private router: Router, private actRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.actRoute.queryParams
      .subscribe(params =>{
        this.result = params.risk;
        this.sex = params.sex;
      })
  }

  starttest() {
    this.router.navigate(['/tabs/test'])
  }

}
