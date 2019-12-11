import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  public detalhes_cliente;
  public cli_mes: any;;
  public data: any;
  public data_descarga: any;

  public seguradora: any;
  public s: any;

  public nome_CTE: any;
  public dados_CTE: any;

  constructor(
    public view: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.detalhes_cliente = this.navParams.get("dados")
    this.cli_mes = this.navParams.get("cli_mes");

    this.s = this.detalhes_cliente.Status_Seg

    if (this.s === "Recomendado") {
      this.seguradora = this.s
    } if (this.s === "Não Recomendado") {
      this.seguradora = "Não recomendado"
    } if (this.s === "Enviar Ficha") {
      this.seguradora = "Ficha a ser Enviada"
    } if (this.s === "Reenviar") {
      this.seguradora = "Reenviar Ficha"
    } if (this.s === "Doc. Pendente") {
      this.seguradora = "Documentos Pendentes"
    } if (this.s === "Em Análise") {
      this.seguradora = "Ficha em análise"
    } if (this.s === "") {
      this.seguradora = "Favor verificar ficha"
    }

    var a = moment(this.detalhes_cliente.Data_Previsao_Descarga);
    var b = a.format("DD/MM/YYYY");

    if (b === "Invalid date") {
      this.data = "Sem previsão de entrega no momento!";
    } else {
      this.data = b
    }

    var a_a = moment(this.detalhes_cliente.Data_Descarga_Efetiva);
    var b_b = a_a.format("DD/MM/YYYY");

    if (b_b === "Invalid date") {
      this.data = "Descarga ainda não realizada";
    } else {
      this.data_descarga = b_b
    }

  }

  fecharModal() {
    this.view.dismiss();
  }

}
