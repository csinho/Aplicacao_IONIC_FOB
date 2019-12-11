import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import moment from 'moment';
import { LoadingController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tabBarElement: any;
  public splash = true;

  public dadosCli;
  public check: boolean;

  myDate = new Date();
  public meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
  public mes = this.meses[this.myDate.getMonth()];

  public data_Atual = moment().format('DD/MM/YYYY');
  public dataAtual = moment().format('YYYY-MM-DD');


  public Img_PLMD = [
    {
      "img": "/assets/imgs/1.jpeg",
    }, {
      "img": "assets/imgs/2.jpeg",
    }, {
      "img": "assets/imgs/3.jpeg",
    }, {
      "img": "assets/imgs/4.jpeg",
    }, {
      "img": "assets/imgs/5.jpeg",
    }
  ]

  constructor(public navCtrl: NavController,
    public db: AngularFireDatabase,
    public modalCtrl: ModalController,
    private screenOrientation: ScreenOrientation,
    public loadingCtrl: LoadingController,
  ) {

    this.tabBarElement = document.querySelector('.tabbar');
    this.getDay();

  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 5000);

    this.screenOrientation.onChange()
      .subscribe(
        //value => console.log("Orientação"),
        error => console.log(error),
        () => console.log(),
      );

  }

  girar() {
    if (this.screenOrientation.type === "portrait-primary") {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    } else {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
  }

  info() {
    let modal = this.modalCtrl.create('InfoPage');
    modal.present();
  }

  sicronizar(c) {
    this.doRefresh(c);
  }

  doRefresh(event) {
    this.getDay();
    setTimeout(() => {
      event.complete();
    }, 1000);
  }

  presentLoadingText(c) {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Carregando dados...'
    });

    loading.present();

    setTimeout(() => {
      let modal = this.modalCtrl.create('DetalhesPage', { dados: c });
      modal.present();
    }, 500);

    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  getDay() {  //pega dados do dia atual

    this.db.list(this.mes, ref => ref.orderByChild('Data_Programada').equalTo(this.dataAtual + "T03:00:00.000Z"))
      .valueChanges()
      .subscribe(datas => {
        for (var x = 0; x < datas.length; x++) {
          if (datas[x] !== null && datas[x] !== undefined)
            this.dadosCli = datas
        }
      }, (err) => {
        console.log("Problema : ", err)
      })
  }

}
