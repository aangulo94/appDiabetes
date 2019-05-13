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
  riskcounter:any =0;
  questionCounter: any = 1;
  value: any=0;
  value_extra: any=0;
  
  constructor(private router:Router){}
  
  nextQuestion(){
    this.riskcounter = this.riskcounter+this.value;
    this.value=0;
    this.value_extra=0;
     if (this.questionCounter == 10) 
      this.questionCounter = this.questionCounter;
      
    else
      this.questionCounter ++; 
   }
  
  
  //QUESTION 1
  female(){
    this.fem= true;
    this.mal=false;
    
    
    
  }
  male(){
    this.mal= true;
    this.fem=false;
    
  }
  
  //QUESTION 2
  
  age1(){
    this.value_extra =2;
    this.value =0;
  }
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
  bmi1(){
    this.value_extra = 2;
    this.value =0;
  }
  
  bmi2(){
    this.value = 1;
  }
  bmi3(){
    this.value = 3;
  }
  
  //QUESTION 4
  
  waist1(){
    this.value_extra = 2;
    this.value =0;
  }
  waist2(){
    this.value = 3;
  }
  waist3(){
    this.value = 4;
  }
  //QUESTION 5
  bloodpressure_extra(){
    this.value_extra = 2;
    this.value =0;
    }
  bloodpressure(){
    this.value = 2;
  }
  
  //QUESTION 6
  bloodglucose_extra(){
    this.value_extra = 2;
    this.value =0;
    }
  bloodglucose(){
    this.value = 5;
  }
  
  //QUESTION 7
  activitylow_extra(){
    this.value_extra = 2;
    this.value =0;
  }
  activitylow(){
    this.value = 2;
  }
  
  //QUESTION 8
  vegetables(){
    this.value = 1;
  }
  vegetables_extra(){
    this.value_extra = 2;
    this.value =0;
  }
  
  //QUESTION 9

  familyhistory1(){
    this.value_extra = 2;
    this.value =0;
  }
  familyhistory2(){
    this.value = 3;
  }
  familyhistory3(){
    this.value = 5;
  }
  }
  
  
  
