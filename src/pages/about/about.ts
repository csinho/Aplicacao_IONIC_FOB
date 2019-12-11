import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import moment from 'moment';

import { Keyboard } from '@ionic-native/keyboard';
import { DatePicker } from '@ionic-native/date-picker';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public data_dia_ontem: any;
  public data_dia_amanha: any;

  public mes_model: any;
  public mensal = "MENSAL";

  myDate = new Date();
  public meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
  public mes = this.meses[this.myDate.getMonth()];

  public data_ontem: any;
  public data_amanha: any;

  public Meses = [
    { mes: 'JANEIRO', id: 'JAN' },
    { mes: 'FEVEREIRO', id: 'FEV' },
    { mes: 'MARÇO', id: 'MAR' },
    { mes: 'ABRIL', id: 'ABR' },
    { mes: 'MAIO', id: 'MAI' },
    { mes: 'JUNHO', id: 'JUN' },
    { mes: 'JULHO', id: 'JUL' },
    { mes: 'AGOSTO', id: 'AGO' },
    { mes: 'SETEMBRO', id: 'SET' },
    { mes: 'OUTUBRO', id: 'OUT' },
    { mes: 'NOVEMBRO', id: 'NOV' },
    { mes: 'DEZEMBRO', id: 'DEZ' }
  ]

  constructor(

    public keyboard: Keyboard,
    public datePicker: DatePicker,

    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public db: AngularFireDatabase,
    public navCtrl: NavController) {

    this.hora()
  }

  /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                             PEGA POR DATA ESCOLHIDA
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  pegarData() {
    this.keyboard.close();
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: 4

    }).then(
      date => {

        var dataFormatada = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).substr(-2) + "-" + ("0" + date.getDate()).substr(-2)

        var dataFormatada1 = ("0" + date.getDate()).substr(-2) + "/" + ("0" + (date.getMonth() + 1)).substr(-2) + "/" + date.getFullYear()

        var mesEscolhido = this.meses[date.getMonth()];

        this.getPorData(dataFormatada, mesEscolhido, dataFormatada1)

      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  getPorData(dataFormatada, mesEscolhido, dataFormatada1) {  //pega dados com data escolhida

    this.db.list(mesEscolhido, ref => ref.orderByChild('Data_Programada').equalTo(dataFormatada + "T03:00:00.000Z"))
      .valueChanges()
      .subscribe(datas => {
        for (var x = 0; x < datas.length; x++) {
          if (datas[x] !== null && datas[x] !== undefined)
            var date = datas
        }
        var b = "dataEscolhida";
        this.PegaData(date, b, dataFormatada1)


      }, (err) => {
        console.log("Problema : ", err)
      })
  }

  PegaData(a, b, c) {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Carregando dados...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push('TelaDadosPage', { dados: a, nome_d: b, data_dia: c });
    }, 200);

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }


  /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                             PEGA DATAS DE ONTEM E AMANHÃ 
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  hora() {

    this.data_ontem = this.myDate.getFullYear() + "-" + ("0" + (this.myDate.getMonth() + 1)).substr(-2) + "-" + ("0" + (this.myDate.getDate() - 1)).substr(-2)
    this.data_amanha = this.myDate.getFullYear() + "-" + ("0" + (this.myDate.getMonth() + 1)).substr(-2) + "-" + ("0" + (this.myDate.getDate() + 1)).substr(-2)

    this.data_dia_ontem = ("0" + (this.myDate.getDate() - 1)).substr(-2) + "/" + ("0" + (this.myDate.getMonth() + 1)).substr(-2) + "/" + this.myDate.getFullYear()
    this.data_dia_amanha = ("0" + (this.myDate.getDate() + 1)).substr(-2) + "/" + ("0" + (this.myDate.getMonth() + 1)).substr(-2) + "/" + this.myDate.getFullYear()

  }

  /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


  tela() {
    let modal = this.modalCtrl.create('EscolhaMesPage', { escolhaCli: "cliente" });
    modal.present();
  }

  telaMotorista() {
    let modal = this.modalCtrl.create('EscolhaMesPage', { escolhaMot: "motorista" });
    modal.present();
  }

  /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  mes_escolhido() {
    if (this.mes_model == null) {
      alert("Desculpa, selecione um Mês válido.");
    } else {
      this.getMes(this.mes_model);
      this.mes_model = "";
    }
  }

  getMes(m) {
    this.navCtrl.push('TelaDadosPage', { mes_escolhido: m.id, nome: m.mes, tela: this.mensal });
  }

  /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                             CHAMA POR NOTA FISCAL 
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  getNfe() {
    const prompt = this.alertCtrl.create({
      title: 'NF-e',
      message: "Digite o número da Nf-e, para realizar sua busca com sucesso.",
      inputs: [
        {
          name: 'Nfe',
          placeholder: 'Nfe',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {

          }
        },
        {
          text: 'Buscar',
          handler: data => {

            var NFE = parseInt(data.Nfe);
            var z: any;
            for (var i = 0; i < this.meses.length; i++) {

              this.db.list(this.meses[i])
                .valueChanges()
                .subscribe(d_nfe => {

                  for (var x = 0; x < d_nfe.length; x++) {
                    if (d_nfe[x] !== null && d_nfe[x] !== undefined)
                      z = d_nfe

                    for (var y = 0; y < z.length; y++) {
                      if (z[y].Nfe === NFE) {
                        var a_nfe = z.splice(y, 1);
                        this.tesN(a_nfe);
                      }
                    }
                  }

                }, (err) => {
                  console.log("Problema : ", err)
                })
            }

          }
        }
      ]
    });
    prompt.present();
  }


  tesN(c) {
    var dados_NFE: any;
    c.forEach(function (a) {

      var data = moment(a.Embarque_Efetivo);
      var b = data.format("DD/MM/YYYY");

      dados_NFE = [{
        Embarque_Efetivo: b,
        Cliente: a.Cliente,
        Cidade_Origem: a.Cidade_Origem,
        Uf_Origem: a.Uf_Origem,
        Cidade_Destino: a.Cidade_Destino,
        Uf_Destino: a.Uf_Destino,
        Peso_Carregado: a.Peso_Carregado,
        Peso_Programado: a.Peso_Programado,
        Data_Previsao_Descarga: a.Data_Previsao_Descarga,
        Data_Descarga_Efetiva: a.Data_Descarga_Efetiva,
        Motorista: a.Motorista,
        Telefone: a.Telefone,
        Placa: a.Placa,
        Status_Seg: a.Status_Seg,
        Cte: a.Cte,
        Nfe: a.Nfe,
        Localizacao: a.Localizacao
      }];
    });
    this.chamaNFE(dados_NFE);
  }

  chamaNFE(a) {

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Carregando dados...'
    });

    loading.present();

    setTimeout(() => {
      let modal = this.modalCtrl.create('DetalhesCtePage', { dados_NFE: a });
      modal.present();
    }, 500);

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                              CHAMA POR CTE
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  getCte() {
    const prompt = this.alertCtrl.create({
      title: 'CT-e',
      message: "Digite o número do Ct-e, para realizar sua busca com sucesso.",
      inputs: [
        {
          name: 'Cte',
          placeholder: 'Cte',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {

          }
        },
        {
          text: 'Buscar',
          handler: data => {
            var CTE = parseInt(data.Cte);
            var z: any;
            for (var i = 0; i < this.meses.length; i++) {

              this.db.list(this.meses[i])
                .valueChanges()
                .subscribe(d_cte => {

                  for (var x = 0; x < d_cte.length; x++) {
                    if (d_cte[x] !== null && d_cte[x] !== undefined)
                      z = d_cte

                    for (var y = 0; y < z.length; y++) {
                      if (z[y].Cte === CTE) {
                        var a_cte = z.splice(y, 1);
                        this.tesC(a_cte);
                      }
                    }
                  }
                }, (err) => {
                  console.log("Problema : ", err)
                })
            }
          }
        }
      ]
    });
    prompt.present();
  }

  tesC(c) {

    var dados_CTE: any;
    c.forEach(function (a) {
      var data = moment(a.Embarque_Efetivo);
      var b = data.format("DD/MM/YYYY");
      dados_CTE = [{
        Embarque_Efetivo: b,
        Cliente: a.Cliente,
        Cidade_Origem: a.Cidade_Origem,
        Uf_Origem: a.Uf_Origem,
        Cidade_Destino: a.Cidade_Destino,
        Uf_Destino: a.Uf_Destino,
        Peso_Carregado: a.Peso_Carregado,
        Peso_Programado: a.Peso_Programado,
        Data_Previsao_Descarga: a.Data_Previsao_Descarga,
        Data_Descarga_Efetiva: a.Data_Descarga_Efetiva,
        Motorista: a.Motorista,
        Telefone: a.Telefone,
        Placa: a.Placa,
        Status_Seg: a.Status_Seg,
        Cte: a.Cte,
        Nfe: a.Nfe,
        Localizacao: a.Localizacao
      }];
    });

    var cte = "CTE"
    this.chamaCTE(dados_CTE, cte)
  }
  chamaCTE(a, b) {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Carregando dados...'
    });
    loading.present();
    setTimeout(() => {
      let modal = this.modalCtrl.create('DetalhesCtePage', { dados_CTE: a, nome_CTE: b });
      modal.present();
    }, 500);
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     DIRECIONA PARA TELA DE DETALHES
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */



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


  /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                   PEGA DADOS DO DIA ANTERIOR
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  getOntem() {  //pega dados do dia anterior

    this.db.list(this.mes, ref => ref.orderByChild('Data_Programada').equalTo(this.data_ontem + "T03:00:00.000Z"))
      .valueChanges()
      .subscribe(datas => {
        for (var x = 0; x < datas.length; x++) {
          if (datas[x] !== null && datas[x] !== undefined)
            var _ontem = datas
        }
        var d = "ontem";
        this.ontem_amannha(_ontem, d, this.data_dia_ontem)
      }, (err) => {
        console.log("Problema : ", err)
      })
  }

  /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                   PEGA DADOS DO DIA POSTERIOR
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  getAmanha() {  //pega dados do próximo dia

    this.db.list(this.mes, ref => ref.orderByChild('Data_Programada').equalTo(this.data_amanha + "T03:00:00.000Z"))
      .valueChanges()
      .subscribe(datas => {
        for (var x = 0; x < datas.length; x++) {
          if (datas[x] !== null && datas[x] !== undefined)
            var _amanha = datas
        }
        var d = "amanha";
        this.ontem_amannha(_amanha, d, this.data_dia_amanha)
      }, (err) => {
        console.log("Problema : ", err)
      })
  }

  /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     DIRECIONAMENTO DE DADOS DOS DIAS ANTERIOR E POSTERIOR
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


  ontem_amannha(a, b, c) {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Carregando dados...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push('TelaDadosPage', { dados: a, nome_d: b, data_dia: c });
    }, 200);

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }
}
