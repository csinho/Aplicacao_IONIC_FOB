import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor( public toast: ToastController, private network: Network,) {

  }
  
  displayNetworkUpdate(connectionState: string) {

    this.toast.create({
      message: "Você está " + connectionState,
      duration: 3000
    }).present();
  }


  ionViewDidEnter() {

    this.network.onConnect().subscribe(data => {
      this.displayNetworkUpdate(data.type);

    }, error => console.error(error));

    this.network.onDisconnect().subscribe(data => {

      this.displayNetworkUpdate(data.type);

    }, error => console.error(error));

  }

}
