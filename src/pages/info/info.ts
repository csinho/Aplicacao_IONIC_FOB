import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(

    public view: ViewController, public navCtrl: NavController, public navParams: NavParams) {

  }

  fecharModal() {
    this.view.dismiss();
  }

}
