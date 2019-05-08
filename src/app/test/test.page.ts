import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage{
  
  fem: boolean = false;
  mal: boolean = false;
  riskcounter:any;
  questionCounter: any = 1;
  value: any;
  
  constructor(private router:Router){}
  
  nextQuestion(){
    this.riskcounter =+ this.value;
    this.value = 0;
    if (this.questionCounter == 9) 
      this.questionCounter = this.questionCounter;
      
    else
      this.questionCounter ++; 
   }
  
  
  //QUESTION 1
  female(){
    this.fem= true;
    this.riskcounter= 0;
  }
  male(){
    this.mal= true;
    this.riskcounter= 0;
  }
  
  //QUESTION 2
  
  age2(){
    this.value =2;
  }
  age3(){
    this.value = 3
  }
  age4(){
    this.value = 4
  }
  
  //QUESTION 3
  
  bmi2(){
    this.value = 1;
  }
  bmi3(){
    this.value = 3;
  }
  
  //QUESTION 4
  
  waist2(){
    this.value = 3;
  }
  waist3(){
    this.value = 4;
  }
  //QUESTION 5
  bloodpressure(){
    this.value = 2;
  }
  
  //QUESTION 6
  bloodglucose(){
    this.value = 5;
  }
  
  //QUESTION 7
  activitylow(){
    this.value = 2;
  }
  
  //QUESTION 8
  vegetables(){
    this.value = 1;
  }
  
  //QUESTION 9
  
  familyhistory2(){
    this.value = 3;
  }
  familyhistory3(){
    this.value = 5;
  }
  }
  
  
  
