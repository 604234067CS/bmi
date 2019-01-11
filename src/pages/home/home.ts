import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BniProvider } from '../../providers/bni/bni';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  height:number;
  weight:number;
  bmivalue:number;
  constructor(private bmiRest:BniProvider ,public navCtrl: NavController) {
    
  }

  calculateBMI(){
    console.log(this.height);
    console.log(this.weight);
    this.bmivalue=this.bmiRest.bmiCalculate(this.height,this.weight);
  }
}
