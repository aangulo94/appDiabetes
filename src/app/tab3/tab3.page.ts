import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ModalController, IonSegment, IonList } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  @ViewChild(IonSegment) segmento: IonSegment;
  @ViewChild(IonList) lista: IonList;
  sel: boolean = false;
 
  constructor(
    private navCtrl: NavController
  ) {}

  ngOnInit(){
    this.segmento.value = "actividad";
  }

  segmentChanged(ev: any) {
    if(ev.detail.value === 'actividad'){
      this.sel = false;
    } else if (ev.detail.value === 'dietas'){
      this.sel = true;
    }
  }

  buttonClick(ev: any){
    if(ev.srcElement.classList[0] === 'activity'){
      this.navCtrl.navigateForward('/tabs/tab3/detalle');
    } else if (ev.srcElement.classList[0] === 'food'){
      this.navCtrl.navigateForward('/tabs/tab3/detalle2');
    }
    
  }
 
}
