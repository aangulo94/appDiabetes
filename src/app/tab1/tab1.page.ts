import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  result: any;

  constructor(private router: Router, private actRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.result = this.actRoute.snapshot.paramMap.get('result');
    console.log(this.result);
  }



  starttest() {
    this.router.navigate(['/tabs/test'])
  }

}
