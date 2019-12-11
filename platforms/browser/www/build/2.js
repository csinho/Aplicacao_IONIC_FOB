webpackJsonp([2],{

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscolhaMesPageModule", function() { return EscolhaMesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__escolha_mes__ = __webpack_require__(632);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EscolhaMesPageModule = /** @class */ (function () {
    function EscolhaMesPageModule() {
    }
    EscolhaMesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__escolha_mes__["a" /* EscolhaMesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__escolha_mes__["a" /* EscolhaMesPage */]),
            ],
        })
    ], EscolhaMesPageModule);
    return EscolhaMesPageModule;
}());

//# sourceMappingURL=escolha-mes.module.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolhaMesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EscolhaMesPage = /** @class */ (function () {
    function EscolhaMesPage(navCtrl, db, view, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.view = view;
        this.navParams = navParams;
        this.clientes_BD = [];
        this.motorista_BD = [];
        this.Meses = [
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
        ];
        this.MesesANO = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
        this.escolhaCli = this.navParams.get("escolhaCli");
        this.escolhaMot = this.navParams.get("escolhaMot");
        this.getCliente();
        this.getMotorista();
    }
    EscolhaMesPage.prototype.fecharModal = function () {
        this.view.dismiss();
    };
    EscolhaMesPage.prototype.okCli = function () {
        if (this.mes_model == null || undefined
            && this.cliente_model == null || undefined) {
            alert("Desculpa, selecione um Cliente ou Mês válido.");
        }
        else {
            this.navCtrl.push('TelaDadosPage', {
                cliente: this.cliente_model,
                mes: this.mes_model.id
            });
            this.mes_model = "";
            this.cliente_model = "";
        }
    };
    EscolhaMesPage.prototype.okMot = function () {
        if (this.mes_model == null || undefined
            && this.motorista_model == null || undefined) {
            alert("Desculpa, selecione um Motorista ou Mês válido.");
        }
        else {
            this.navCtrl.push('TelaDadosPage', {
                motorista: this.motorista_model,
                mes: this.mes_model.id
            });
            this.mes_model = "";
            this.motorista_model = "";
        }
    };
    EscolhaMesPage.prototype.getCliente = function () {
        var _this = this;
        var a = [];
        var y = [];
        for (var i = 0; i < this.MesesANO.length; i++) {
            this.db.list(this.MesesANO[i], function (ref) { return ref.orderByChild('Cliente'); })
                .valueChanges()
                .subscribe(function (datas) {
                for (var x = 0; x < datas.length; x++) {
                    if (datas[x] !== null && datas[x] !== undefined)
                        a = datas;
                    //LER O ARRAY QUE VEM DO BANCO, ADICIONA TODOS OS CLIENTES EM UM NOVO ARRAY
                    var o = a.map(function (ler) {
                        return ler.Cliente;
                    });
                    //LER O NOVO ARRAY SEM DUPLICADOS E RETIRA CLIENTE == "CLIENTE"
                    for (var i = 0; i < o.length; i++) {
                        if (o[x] === "Cliente") {
                            o.splice(i, x);
                        }
                    }
                    _this.clientes_BD.push(o[x]);
                    //LER O NOVO ARRAY APENAS COM CLIENTES, E RETIRA OS DUPLICADOS
                    y = _this.clientes_BD.filter(function (elem, pos, self) {
                        return self.indexOf(elem) == pos;
                    });
                }
                //ENVIAR PARA TELA
                _this.clientes_BD = y;
            }, function (err) {
                console.log("Problema : ", err);
            });
        }
    };
    EscolhaMesPage.prototype.getMotorista = function () {
        var _this = this;
        var a = [];
        for (var i = 0; i < this.MesesANO.length; i++) {
            this.db.list(this.MesesANO[i], function (ref) { return ref.orderByChild('Motorista'); })
                .valueChanges()
                .subscribe(function (motorista) {
                for (var x = 0; x < motorista.length; x++) {
                    if (motorista[x] !== null && motorista[x] !== undefined)
                        a = motorista;
                    //LER O ARRAY QUE VEM DO BANCO, ADICIONA TODOS OS CLIENTES EM UM NOVO ARRAY
                    var o = a.map(function (ler) {
                        return ler.Motorista;
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
                    _this.motorista_BD.push(o[x]);
                    _this.tes();
                }
            }, function (err) {
                console.log("Problema : ", err);
            });
        }
    };
    EscolhaMesPage.prototype.tes = function () {
        var y = [];
        //LER O NOVO ARRAY APENAS COM CLIENTES, E RETIRA OS DUPLICADOS
        y = this.motorista_BD.filter(function (elem, pos, self) {
            return self.indexOf(elem) == pos;
        });
        //ENVIAR PARA TELA
        this.motorista_BD = y;
    };
    EscolhaMesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-escolha-mes',template:/*ion-inline-start:"C:\Users\Poly\Desktop\FOB\src\pages\escolha-mes\escolha-mes.html"*/'<ion-content class="detalhes" padding (click)="fecharModal()">\n\n  <div *ngIf="escolhaCli === \'cliente\'">\n    <div class="text_titulo">\n      <h2>Escolha o Cliente</h2>\n    </div>\n    <div class="bot">\n      <ion-item class="item_cli">\n        <ion-label class="text">Escolha o Cliente:</ion-label>\n        <ion-select [(ngModel)]="cliente_model" class="selector">\n          <ion-option *ngFor="let item of clientes_BD" [value]="item">\n            <h1 class="h1">{{item}}</h1>\n          </ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item class="item_mes">\n        <ion-label class="text">Escolha o Mês:</ion-label>\n        <ion-select [(ngModel)]="mes_model">\n          <ion-option *ngFor="let item of Meses" [value]="item" class="selector">\n            <p><b>{{item.mes}}</b></p>\n          </ion-option>\n        </ion-select>\n      </ion-item>\n      <div class="linha"></div>\n      <button ion-button full (click)="okCli()">OK</button>\n    </div>\n  </div>\n\n  <div *ngIf="escolhaMot === \'motorista\'">\n    <div class="text_titulo">\n      <h2>Escolha o Motorista</h2>\n    </div>\n    <div class="bot">\n      <ion-item class="item_cli">\n        <ion-label class="text">Escolha o Motorista:</ion-label>\n        <ion-select [(ngModel)]="motorista_model" class="selector">\n          <ion-option *ngFor="let item of motorista_BD" [value]="item">\n            <h1 class="h1">{{item}}</h1>\n          </ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item class="item_mes">\n        <ion-label class="text">Escolha o Mês:</ion-label>\n        <ion-select [(ngModel)]="mes_model">\n          <ion-option *ngFor="let item of Meses" [value]="item" class="selector">\n            <p><b>{{item.mes}}</b></p>\n          </ion-option>\n        </ion-select>\n      </ion-item>\n      <div class="linha"></div>\n      <button ion-button full (click)="okMot()">OK</button>\n    </div>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Poly\Desktop\FOB\src\pages\escolha-mes\escolha-mes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EscolhaMesPage);
    return EscolhaMesPage;
}());

//# sourceMappingURL=escolha-mes.js.map

/***/ })

});
//# sourceMappingURL=2.js.map