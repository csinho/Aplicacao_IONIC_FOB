webpackJsonp([0],{

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelaDadosPageModule", function() { return TelaDadosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tela_dados__ = __webpack_require__(634);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TelaDadosPageModule = /** @class */ (function () {
    function TelaDadosPageModule() {
    }
    TelaDadosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tela_dados__["a" /* TelaDadosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tela_dados__["a" /* TelaDadosPage */]),
            ],
        })
    ], TelaDadosPageModule);
    return TelaDadosPageModule;
}());

//# sourceMappingURL=tela-dados.module.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelaDadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TelaDadosPage = /** @class */ (function () {
    //-------------------------------------------
    function TelaDadosPage(db, modalCtrl, loadingCtrl, navCtrl, navParams) {
        //----------------------------------------------------------
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.d_ontem = [];
        this.d_amanha = [];
        this.erro = "";
        this.cli_dados_mes = [];
        this.mot_dados_mes = [];
        this.diario = [];
        this.mes_escolhido = this.navParams.get("mes_escolhido");
        this.tela = this.navParams.get("tela");
        this.nome_tela_mes = this.navParams.get("nome");
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
        //------------------------------------------------------------
        if (this.mes_escolhido !== undefined || null) {
            this.getMes();
        }
        if (this.cliente !== undefined || null) {
            this.getdadosCliente();
        }
        if (this.d_ontem !== undefined || null) {
            this.d_ontem;
        }
        if (this.d_amanha !== undefined || null) {
            this.d_amanha;
        }
        if (this.motorista !== undefined || null) {
            this.getdadosMotorista();
        }
    }
    //------------------------------ CLIENTE ------------------------------------------
    TelaDadosPage.prototype.getdadosCliente = function () {
        var _this = this;
        var z;
        this.db.list(this.mes, function (ref) { return ref.orderByChild('Cliente'); })
            .valueChanges()
            .subscribe(function (d_cli) {
            for (var x = 0; x < d_cli.length; x++) {
                if (d_cli[x] !== null && d_cli[x] !== undefined)
                    z = d_cli;
                for (var i = 0; i < z.length; i++) {
                    if (z[i].Cliente !== _this.cliente) {
                        z.splice(i, 1);
                        i--;
                    }
                }
                var a = __WEBPACK_IMPORTED_MODULE_3_moment___default()(z[x].Data_Programada);
                var b = a.format("DD/MM/YYYY");
                _this.cli_dados_mes.push({
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
        }, function (err) {
            console.log("Problema : ", err);
        });
    };
    //---------------------------- MOTORISTA ---------------------------------------
    TelaDadosPage.prototype.getdadosMotorista = function () {
        var _this = this;
        var z;
        this.db.list(this.mes, function (ref) { return ref.orderByChild('Motorista'); })
            .valueChanges()
            .subscribe(function (d_mot) {
            for (var x = 0; x < d_mot.length; x++) {
                if (d_mot[x] !== null && d_mot[x] !== undefined)
                    z = d_mot;
                for (var i = 0; i < z.length; i++) {
                    if (z[i].Motorista !== _this.motorista) {
                        z.splice(i, 1);
                        i--;
                    }
                }
                var a = __WEBPACK_IMPORTED_MODULE_3_moment___default()(z[x].Embarque_Efetivo);
                var b = a.format("DD/MM/YYYY");
                _this.mot_dados_mes.push({
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
        }, function (err) {
            console.log("Problema : ", err);
        });
    };
    //----------------------------------------------------------------------------/////
    TelaDadosPage.prototype.presentLoadingText = function (c) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Carregando dados...'
        });
        loading.present();
        setTimeout(function () {
            var modal = _this.modalCtrl.create('DetalhesPage', { dados: c });
            modal.present();
        }, 500);
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    // -------------------------------------------------------------------------------
    // PEGA TODOS OS DELES E ORDENA ELES A/Z
    TelaDadosPage.prototype.getMes = function () {
        var _this = this;
        this.db.list(this.mes_escolhido, function (ref) { return ref.orderByChild('Data_Programada'); })
            .valueChanges()
            .subscribe(function (mes) {
            for (var x = 0; x < mes.length; x++) {
                if (mes[x] !== null && mes[x] !== undefined)
                    _this.dados_mes = mes;
                if (_this.dados_mes[x].d_mes === "") {
                    _this.dados_mes.splice(x, 3);
                }
                var a = __WEBPACK_IMPORTED_MODULE_3_moment___default()(_this.dados_mes[x].Data_Programada);
                var b = a.format("DD/MM/YYYY");
                _this.diario.push({
                    Data_Programada: b,
                    Cliente: _this.dados_mes[x].Cliente,
                    Cidade_Origem: _this.dados_mes[x].Cidade_Origem,
                    Uf_Origem: _this.dados_mes[x].Uf_Origem,
                    Cidade_Destino: _this.dados_mes[x].Cidade_Destino,
                    Uf_Destino: _this.dados_mes[x].Uf_Destino,
                    Peso_Programado: _this.dados_mes[x].Peso_Programado,
                    Peso_Carregado: _this.dados_mes[x].Peso_Carregado,
                    Data_Previsao_Descarga: _this.dados_mes[x].Data_Previsao_Descarga,
                    Data_Descarga_Efetiva: _this.dados_mes[x].Data_Descarga_Efetiva,
                    Motorista: _this.dados_mes[x].Motorista,
                    Telefone: _this.dados_mes[x].Telefone,
                    Placa: _this.dados_mes[x].Placa,
                    Status_Seg: _this.dados_mes[x].Status_Seg,
                    Cte: _this.dados_mes[x].Cte,
                    Nfe: _this.dados_mes[x].Nfe,
                    Localizacao: _this.dados_mes[x].Localizacao
                });
            }
        }, function (err) {
            console.log("Problema : ", err);
        });
    };
    TelaDadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tela-dados',template:/*ion-inline-start:"C:\Users\Poly\Desktop\FOB\src\pages\tela-dados\tela-dados.html"*/'<ion-header>\n  <ion-navbar>\n    <h2 class="featured-text" *ngIf="tela == \'MENSAL\'"> Cargas do Mês - {{nome_tela_mes}} </h2>\n    <h2 class="featured-text" *ngIf="cliente"> Cargas - {{cliente}}</h2>\n    <h2 class="featured-text" *ngIf="motorista"> Carregados por - {{motorista}} </h2>\n    <h2 class="featured-text" *ngIf="data_dia"> Cargas do dia - {{data_dia}} </h2>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="tela == \'MENSAL\'">\n    <ion-list>\n      <ion-item *ngFor="let item of diario" (click)="presentLoadingText(item)">\n        <p>{{item.Data_Programada}}</p>\n        <h2><b>{{item.Cliente}}</b></h2>\n        <p>\n          {{item.Cidade_Origem}}/{{item.Uf_Origem}}&nbsp;X&nbsp;{{item.Cidade_Destino}}/{{item.Uf_Destino}}\n        </p>\n        <p>Peso Carregado:&nbsp;{{item.Peso_Carregado}}</p>\n        <button ion-button clear item-end>Sobre</button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf="cliente">\n    <div class="dados">\n      <ion-list>\n        <ion-item *ngFor="let cli of cli_dados_mes" (click)="presentLoadingText(cli)">\n          <p>{{cli.Data_Programada}}</p>\n          <h2><b>{{cli.Cliente}}</b></h2>\n          <p>\n            {{cli.Cidade_Origem}}/{{cli.Uf_Origem}}&nbsp;X&nbsp;{{cli.Cidade_Destino}}/{{cli.Uf_Destino}}\n          </p>\n          <p>Peso Carregado:&nbsp;{{cli.Peso_Carregado}}</p>\n          <button ion-button clear item-end>Sobre</button>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n  <div *ngIf="motorista">\n    <div class="dados">\n      <ion-list>\n        <ion-item *ngFor="let cli of mot_dados_mes" (click)="presentLoadingText(cli)">\n          <p>{{cli.Embarque_Efetivo}}</p>\n          <h2><b>{{cli.Motorista}}</b></h2>\n          <h3>{{cli.Cliente}}</h3>\n          <p>\n            {{cli.Cidade_Origem}}/{{cli.Uf_Origem}}&nbsp;X&nbsp;{{cli.Cidade_Destino}}/{{cli.Uf_Destino}}\n          </p>\n          <p>Peso Carregado:&nbsp;{{cli.Peso_Carregado}}</p>\n          <button ion-button clear item-end>Sobre</button>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n  <div *ngIf="d_ontem_nome === \'ontem\'">\n    <div class="dados">\n      <ion-list>\n        <ion-item *ngFor="let o of d_ontem" (click)="presentLoadingText(o)">\n          <h2><b>{{o.Cliente}}</b></h2>\n          <h3>{{o.Motorista}}</h3>\n          <p>\n            {{o.Cidade_Origem}}/{{o.Uf_Origem}}&nbsp;X&nbsp;{{o.Cidade_Destino}}/{{o.Uf_Destino}}\n          </p>\n          <p>Peso Carregado:&nbsp;{{o.Peso_Carregado}}</p>\n          <button ion-button clear item-end>Sobre</button>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf="d_amanha_nome === \'amanha\'">\n    <div class="dados">\n      <ion-list>\n        <ion-item *ngFor="let a of d_amanha" (click)="presentLoadingText(a)">\n          <h2><b>{{a.Cliente}}</b></h2>\n          <h3>Motorista contratado -&nbsp;<b>{{a.Motorista}}</b></h3>\n          <p>\n            {{a.Cidade_Origem}}/{{a.Uf_Origem}}&nbsp;X&nbsp;{{a.Cidade_Destino}}/{{a.Uf_Destino}}\n          </p>\n          <p>Peso Programado:&nbsp;{{a.Peso_Programado}}</p>\n          <button ion-button clear item-end>Sobre</button>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Poly\Desktop\FOB\src\pages\tela-dados\tela-dados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TelaDadosPage);
    return TelaDadosPage;
}());

//# sourceMappingURL=tela-dados.js.map

/***/ })

});
//# sourceMappingURL=0.js.map