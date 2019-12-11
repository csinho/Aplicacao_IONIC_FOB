import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-escolha-mes',
  templateUrl: 'escolha-mes.html',
})
export class EscolhaMesPage {

  public cliente_model: any;
  public motorista_model: any;
  public clientes_BD = [];
  public motorista_BD = [];

  public escolhaCli: any;
  public escolhaMot: any;

  public mes_model: any;
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

  public MesesANO = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

  constructor(
    public navCtrl: NavController,
    public db: AngularFireDatabase,
    public view: ViewController,
    public navParams: NavParams) {

    this.escolhaCli = this.navParams.get("escolhaCli");
    this.escolhaMot = this.navParams.get("escolhaMot");

    this.getCliente();
    this.getMotorista();

  }

  fecharModal() {
    this.view.dismiss();
  }

  okCli() {
    if (this.mes_model == null || undefined
      && this.cliente_model == null || undefined
    ) {
      alert("Desculpa, selecione um Cliente ou Mês válido.");
    } else {
      this.navCtrl.push('TelaDadosPage', {
        cliente: this.cliente_model,
        mes: this.mes_model.id
      });
      this.mes_model = "";
      this.cliente_model = "";
    }
  }

  okMot() {
    if (this.mes_model == null || undefined
      && this.motorista_model == null || undefined
    ) {
      alert("Desculpa, selecione um Motorista ou Mês válido.");
    } else {
      this.navCtrl.push('TelaDadosPage', {
        motorista: this.motorista_model,
        mes: this.mes_model.id
      });
      this.mes_model = "";
      this.motorista_model = "";
    }
  }


  getCliente() {
    var a = [];
    var y = [];

    for (var i = 0; i < this.MesesANO.length; i++) {

      this.db.list(this.MesesANO[i], ref => ref.orderByChild('Cliente'))
        .valueChanges()
        .subscribe(datas => {

          for (var x = 0; x < datas.length; x++) {
            if (datas[x] !== null && datas[x] !== undefined)
              a = datas

            //LER O ARRAY QUE VEM DO BANCO, ADICIONA TODOS OS CLIENTES EM UM NOVO ARRAY
            var o = a.map((ler) => {
              return ler.Cliente
            });

            //LER O NOVO ARRAY SEM DUPLICADOS E RETIRA CLIENTE == "CLIENTE"
            for (var i = 0; i < o.length; i++) {
              if (o[x] === "Cliente") {
                o.splice(i, x);
              }
            }
            this.clientes_BD.push(o[x])

            //LER O NOVO ARRAY APENAS COM CLIENTES, E RETIRA OS DUPLICADOS
            y = this.clientes_BD.filter(function (elem, pos, self) {
              return self.indexOf(elem) == pos;
            })
          }
          //ENVIAR PARA TELA
          this.clientes_BD = y

        }, (err) => {
          console.log("Problema : ", err)
        })
    }
  }

  getMotorista() {

    var a = [];
    var motorista_BD = [];

    for (var i = 0; i < this.MesesANO.length; i++) {

      this.db.list(this.MesesANO[i], ref => ref.orderByChild('Motorista'))
        .valueChanges()
        .subscribe(motorista => {

          for (var x = 0; x < motorista.length; x++) {
            if (motorista[x] !== null && motorista[x] !== undefined)
              a = motorista

            //LER O ARRAY QUE VEM DO BANCO, ADICIONA TODOS OS CLIENTES EM UM NOVO ARRAY
            var o = a.map((ler) => {
              return ler.Motorista
            });

            //LER O NOVO ARRAY SEM DUPLICADOS E RETIRA CLIENTE == "CLIENTE"
            for (var i = 0; i < o.length; i++) {
              if (o[i] === "Nome do Motorista") {
                o.splice(i, 1);
              }
            }            
            if (o[x] === "") {
              o.splice(x, 1);
            } 
        
            motorista_BD.push(o[x])

            this.tes(motorista_BD);
          }

        }, (err) => {
          console.log("Problema : ", err)
        })
    }
  }

  tes(motorista_BD) {
    var y = [];
    //LER O NOVO ARRAY APENAS COM CLIENTES, E RETIRA OS DUPLICADOS
    y = motorista_BD.filter(function (elem, pos, self) {
      return self.indexOf(elem) == pos;
    })
    //ENVIAR PARA TELA
    this.motorista_BD = y
  }

}