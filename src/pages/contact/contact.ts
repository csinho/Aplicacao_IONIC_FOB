import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import moment from 'moment';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public data_Atual = moment().format('DD/MM/YYYY');
  myDate = new Date();
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
  public mes = this.Meses[this.myDate.getMonth()];
  public mes_atual = this.mes.mes
  public mes_id = this.mes.id

  public Grafico: [any];
  //----------------------- GRAFICOS PIZA -------------------------------

  doughnutChartLabels_0: string[];
  doughnutChartData_0: number[];
  doughnutChartType_0: string = 'doughnut';

  doughnutChartLabels_1: string[];
  doughnutChartData_1: number[];
  doughnutChartType_1: string = 'doughnut';

  doughnutChartLabels_2: string[];
  doughnutChartData_2: number[];
  doughnutChartType_2: string = 'doughnut';

  public bar_chart_horizontal

  //--------------------------------------------------------------------
  constructor(public db: AngularFireDatabase, public navCtrl: NavController) {

    this.getDadosGrafico();
  }

  //---------------------------------------------------------------------

  getDadosGrafico() {  //pega dados para gráfico
    var a_a: any;
    var b_b: any;

    this.db.list(this.mes_id)
      .valueChanges()
      .subscribe(datas => {
        if (datas !== null && datas !== undefined)
          a_a = datas

        for (var i = 0; i < a_a.length; i++) {
          if (a_a[i].d_mes === "") {
            b_b = a_a.splice(i, 3);

            this.Grafico = [{
              Quant_Viagens_Mes: b_b[0].Quant_Viagens_Mes,
              Quant_Restantes_Mes: b_b[0].Quant_Restantes_Mes,
              Saldo_Prog_Dia: b_b[1].Saldo_Prog_Dia,
              Saldo_Embar_Dia: b_b[1].Saldo_Embar_Dia,
              Quant_Liberada_Mes: b_b[2].Quant_Liberada_Mes,
              Quant_Embarcada_Mes: b_b[2].Quant_Embarcada_Mes,
            }];

            for (var x = 0; x < 1; x++) {

              var Quant_Liberada = this.Grafico[x].Quant_Liberada_Mes.toFixed(2);
              var Quant_Embarcado = this.Grafico[x].Quant_Embarcada_Mes.toFixed(2);
              var Saldo_do_Mes = Quant_Liberada - Quant_Embarcado

              this.doughnutChartLabels_0 = ['Quant. Liberada', 'Quant. Embarcado', 'Saldo do Mês'];
              this.doughnutChartData_0 = [Quant_Liberada, Quant_Embarcado, Saldo_do_Mes.toFixed(2)];

              var Cargas_do_Mes = this.Grafico[x].Quant_Viagens_Mes
              var Cargas_Restantes = this.Grafico[x].Quant_Restantes_Mes
              var Cargas_Embarcadas = Cargas_do_Mes - Cargas_Restantes

              this.doughnutChartLabels_1 = ['Viagens do Mês', 'Viagens Embarcadas', 'Viagens Restantes'];
              this.doughnutChartData_1 = [Cargas_do_Mes, Cargas_Embarcadas, Cargas_Restantes];

              var Saldo_Programado = this.Grafico[x].Saldo_Prog_Dia
              var Embarcados = this.Grafico[x].Saldo_Embar_Dia
              var Saldo_do_Dia = Saldo_Programado - Embarcados

              this.doughnutChartLabels_2 = ['Saldo Programado', 'Embarcados', 'Saldo do Dia'];
              this.doughnutChartData_2 = [Saldo_Programado.toFixed(2), Embarcados.toFixed(2), Saldo_do_Dia.toFixed(2)];
            }
          }
        }
      }, (err) => {
        console.log("Problema : ", err)
      })
  }

}
