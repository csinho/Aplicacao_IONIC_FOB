import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-detalhes-cte',
  templateUrl: 'detalhes-cte.html',
})
export class DetalhesCtePage {

  public DADOS: any;
  public data: any;
  public data_descarga: any;
  public s: any;

  public seguradora: any;
  public nome_CTE: any;
  public detalhes: any;

  public det_CTE: any;
  public det_NFE: any;

  constructor(public navCtrl: NavController,
    public view: ViewController,
    public navParams: NavParams) {

    this.nome_CTE = this.navParams.get("nome_CTE");
    this.det_CTE = this.navParams.get("dados_CTE");
    this.det_NFE = this.navParams.get("dados_NFE");

    if (this.nome_CTE === "CTE") {
      this.detalhes = this.det_CTE
    } else {
      this.detalhes = this.det_NFE
    }


    this.detalhes.forEach(a => {

      this.s = a.Status_Seg

      this.DADOS = a

      if (a.Status_Seg === "Recomendado") {
        this.seguradora = a.Status_Seg
      } if (a.Status_Seg === "Não Recomendado") {
        this.seguradora = "Não recomendado"
      } if (a.Status_Seg === "Enviar Ficha") {
        this.seguradora = "Ficha a ser Enviada"
      } if (a.Status_Seg === "Reenviar") {
        this.seguradora = "Reenviar Ficha"
      } if (a.Status_Seg === "Doc. Pendente") {
        this.seguradora = "Documentos Pendentes"
      } if (a.Status_Seg === "Em Análise") {
        this.seguradora = "Ficha em análise"
      } if (a.Status_Seg === "") {
        this.seguradora = "Favor verificar ficha"
      }

      var aa = moment(a.Data_Previsao_Descarga);
      var b = aa.format("DD/MM/YYYY");

      if (b === "Invalid date") {
        this.data = "Sem previsão de entrega no momento!";
      } else {
        this.data = b
      }

      var a_a = moment(a.Data_Descarga_Efetiva);
      var b_b = a_a.format("DD/MM/YYYY");

      if (b_b === "Invalid date") {
        this.data = "Descarga ainda não realizada";
      } else {
        this.data_descarga = b_b
      }

    });

  }

  fecharModal() {
    this.view.dismiss();
  }


}
