import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-tela-dados',
  templateUrl: 'tela-dados.html',
})
export class TelaDadosPage {

  public d_ontem = [];
  public d_ontem_nome: any;
  public d_amanha = [];
  public d_amanha_nome: any;
  public data_dia: any

  public dia_escolhida = [];
  public data_escolhida: any;

  //----------------------------------------
  public mes_escolhido: any;
  public erro = "";
  public dados_mes: any;
  public tela: "";
  public nome_tela_mes: any;
  public d: any;
  //----------------------------------------

  public cliente: any;
  public motorista: any;
  public mes: any;

  public cli_dados_mes = [];
  public mot_dados_mes = [];
  public diario = [];

  //-------------------------------------------

  constructor(
    public db: AngularFireDatabase,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams) {

    //----------------------------------------------------------

    this.mes_escolhido = this.navParams.get("mes_escolhido")
    this.tela = this.navParams.get("tela")
    this.nome_tela_mes = this.navParams.get("nome")

    //----------------------------------------------------------

    this.cliente = this.navParams.get("cliente");
    this.mes = this.navParams.get("mes");
    this.motorista = this.navParams.get("motorista");

    //------------------------------------------------------------

    this.d_ontem = this.navParams.get("dados");
    this.d_ontem_nome = this.navParams.get("nome_d");

    this.data_dia = this.navParams.get("data_dia");

    this.d_amanha = this.navParams.get("dados");
    this.d_amanha_nome = this.navParams.get("nome_d");

    this.dia_escolhida = this.navParams.get("dados");
    this.data_escolhida = this.navParams.get("nome_d");

    //------------------------------------------------------------

    if (this.mes_escolhido !== undefined || null) {
      this.getMes();
    } if (this.cliente !== undefined || null) {
      this.getdadosCliente();
    } if (this.d_ontem !== undefined || null) {
      this.d_ontem;
    } if (this.d_amanha !== undefined || null) {
      this.d_amanha;
    } if (this.dia_escolhida !== undefined || null) {
      this.dia_escolhida;
    } if (this.motorista !== undefined || null) {
      this.getdadosMotorista();
    }
  }
  //------------------------------ CLIENTE ------------------------------------------

  getdadosCliente() {
    var z = [];
    this.db.list(this.mes, ref => ref.orderByChild('Cliente'))
      .valueChanges()
      .subscribe(d_cli => {

        for (var x = 0; x < d_cli.length; x++) {
          if (d_cli[x] !== null && d_cli[x] !== undefined)
            z = d_cli

          for (var i = 0; i < z.length; i++) {
            if (z[i].Cliente !== this.cliente) {
              z.splice(i, 1);
              i--;
            }
          }

          if (z[x] !== null && z[x] !== undefined) {

            var a = moment(z[x].Data_Programada);
            var b = a.format("DD/MM/YYYY");

            this.cli_dados_mes.push({
              Data_Programada: b,
              Cliente: z[x].Cliente,
              Cidade_Origem: z[x].Cidade_Origem,
              Uf_Origem: z[x].Uf_Origem,
              Cidade_Destino: z[x].Cidade_Destino,
              Uf_Destino: z[x].Uf_Destino,
              Peso_Programado: z[x].Peso_Programado,
              Peso_Carregado: z[x].Peso_Carregado,
              Data_Previsao_Descarga: z[x].Data_Previsao_Descarga,
              Motorista: z[x].Motorista,
              Telefone: z[x].Telefone,
              Placa: z[x].Placa,
              Status_Seg: z[x].Status_Seg,
              Cte: z[x].Cte,
              Nfe: z[x].Nfe,
              Localizacao: z[x].Localizacao
            });
          }
        }

      }, (err) => {
        console.log("Problema : ", err)
      })
  }

  //---------------------------- MOTORISTA ---------------------------------------

  getdadosMotorista() {
    var z = [];
    this.db.list(this.mes, ref => ref.orderByChild('Motorista'))
      .valueChanges()
      .subscribe(d_mot => {

        for (var x = 0; x < d_mot.length; x++) {
          if (d_mot[x] !== null && d_mot[x] !== undefined)
            z = d_mot

          for (var i = 0; i < z.length; i++) {
            if (z[i].Motorista !== this.motorista) {
              z.splice(i, 1);
              i--;
            }
          }

          if (z[x] !== null && z[x] !== undefined) {

            var a = moment(z[x].Embarque_Efetivo);
            var b = a.format("DD/MM/YYYY");

            this.mot_dados_mes.push({
              Embarque_Efetivo: b,
              Cliente: z[x].Cliente,
              Cidade_Origem: z[x].Cidade_Origem,
              Uf_Origem: z[x].Uf_Origem,
              Cidade_Destino: z[x].Cidade_Destino,
              Uf_Destino: z[x].Uf_Destino,
              Peso_Programado: z[x].Peso_Programado,
              Peso_Carregado: z[x].Peso_Carregado,
              Data_Previsao_Descarga: z[x].Data_Previsao_Descarga,
              Data_Descarga_Efetiva: z[x].Data_Descarga_Efetiva,
              Motorista: z[x].Motorista,
              Telefone: z[x].Telefone,
              Placa: z[x].Placa,
              Status_Seg: z[x].Status_Seg,
              Cte: z[x].Cte,
              Nfe: z[x].Nfe,
              Localizacao: z[x].Localizacao
            });
          }
        }

      }, (err) => {
        console.log("Problema : ", err)
      })
  }

  //----------------------------------------------------------------------------/////
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

  // -------------------------------------------------------------------------------
  // PEGA TODOS OS DELES E ORDENA ELES A/Z

  getMes() {

    this.db.list(this.mes_escolhido, ref => ref.orderByChild('Data_Programada'))
      .valueChanges()
      .subscribe(mes => {

        for (var x = 0; x < mes.length; x++) {
          if (mes[x] !== null && mes[x] !== undefined)
            this.dados_mes = mes

          if (this.dados_mes[x].d_mes === "") {
            this.dados_mes.splice(x, 3);
          }

          var a = moment(this.dados_mes[x].Data_Programada);
          var b = a.format("DD/MM/YYYY");

          this.diario.push({
            Data_Programada: b,
            Cliente: this.dados_mes[x].Cliente,
            Cidade_Origem: this.dados_mes[x].Cidade_Origem,
            Uf_Origem: this.dados_mes[x].Uf_Origem,
            Cidade_Destino: this.dados_mes[x].Cidade_Destino,
            Uf_Destino: this.dados_mes[x].Uf_Destino,
            Peso_Programado: this.dados_mes[x].Peso_Programado,
            Peso_Carregado: this.dados_mes[x].Peso_Carregado,
            Data_Previsao_Descarga: this.dados_mes[x].Data_Previsao_Descarga,
            Data_Descarga_Efetiva: this.dados_mes[x].Data_Descarga_Efetiva,
            Motorista: this.dados_mes[x].Motorista,
            Telefone: this.dados_mes[x].Telefone,
            Placa: this.dados_mes[x].Placa,
            Status_Seg: this.dados_mes[x].Status_Seg,
            Cte: this.dados_mes[x].Cte,
            Nfe: this.dados_mes[x].Nfe,
            Localizacao: this.dados_mes[x].Localizacao
          });
        }
      }, (err) => {
        console.log("Problema : ", err)
      })
  }
}

