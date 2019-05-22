import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  fem: boolean;
  mal: boolean;
  riskcounter: any;
  questionCounter: any;
  value: any;
  value_extra: any;
  peso: number;
  altura: number;
  bmi: number;
  sex:string;

  constructor(private router: Router, private navCtrl: NavController) {
  }

  ngOnInit(){
    this.riskcounter = 0;
    this.fem = false;
    this.mal = false;
    this.questionCounter = 1;
    this.value = 0;
    this.value_extra = 0;
    this.peso = 0;
    this.altura = 0;
    this.bmi = 0;
    this.sex = '';

  }

  nextQuestion() {
    if (this.questionCounter === 3){
      this.bmiCalc();
    }
    if(this.questionCounter === 10){
      this.questionCounter = 1;
    } else {
      this.questionCounter++;
    }
    this.riskcounter = this.riskcounter + this.value;
    this.value = 0;
    this.value_extra = 0;
  }

  //QUESTION 1
  female() {
    this.fem = true;
    this.mal = false;
  }
  male() {
    this.mal = true;
    this.fem = false;
  }

  //QUESTION 2
  age1() {
    this.value = 0;
    this.value_extra = 2;
  }
  age2() {
    this.value = 2;
    this.value_extra = 0;
  }
  age3() {
    this.value = 3
    this.value_extra = 0;
  }
  age4() {
    this.value = 4
    this.value_extra = 0;
  }

  //QUESTION 3
  bmiCalc() {
     this.bmi = this.peso / Math.pow(this.altura,2);
     console.log(this.bmi);
     if(this.bmi<25){
       this.bmi1();
     } else if ((this.bmi>=25)&&(this.bmi<30)) {
       this.bmi2();
     } else if ( this.bmi >= 30) {
       this.bmi3();
     }
  }

  //QUESTION 3
  bmi1() {
    this.value = 0;
    this.value_extra = 2;
  }
  bmi2() {
    this.value = 1;
    this.value_extra = 0;
  }
  bmi3() {
    this.value = 3;
    this.value_extra = 0;
  }

  //QUESTION 4
  waist1() {
    this.value_extra = 2;
    this.value = 0;
  }
  waist2() {
    this.value = 3;
    this.value_extra = 0;
  }
  waist3() {
    this.value = 4;
    this.value_extra = 0;
  }

  //QUESTION 5
  bloodpressure_extra() {
    this.value_extra = 2;
    this.value = 0;
  }
  bloodpressure() {
    this.value = 2;
    this.value_extra = 0;
  }

  //QUESTION 6
  bloodglucose_extra() {
    this.value_extra = 2;
    this.value = 0;
  }
  bloodglucose() {
    this.value = 5;
    this.value_extra = 0;
  }

  //QUESTION 7
  activitylow_extra() {
    this.value_extra = 2;
    this.value = 0;
  }
  activitylow() {
    this.value = 2;
    this.value_extra = 0;
  }

  //QUESTION 8
  vegetables() {
    this.value = 1;
    this.value_extra = 0;
  }
  vegetables_extra() {
    this.value_extra = 2;
    this.value = 0;
  }

  //QUESTION 9
  familyhistory1() {
    this.value_extra = 2;
    this.value = 0;
  }
  familyhistory2() {
    this.value = 3;
    this.value_extra = 0;
  }
  familyhistory3() {
    this.value = 5;
    this.value_extra = 0;
  }

  //FinTest
  finishtest() {
    this.riskcounter = this.riskcounter + this.value;
    if(this.fem){
      this.sex = "fem";
    } else if (this.mal){
      this.sex = "masc";
    }
    this.router.navigate(['/tabs/tab1'],{queryParams: {risk: this.riskcounter, sex: this.sex}});
    this.questionCounter = 1;
    this.value = 0;
    this.value_extra = 0;
    this.riskcounter = 0;
    this.fem = false;
    this.mal = false;



  }
}



