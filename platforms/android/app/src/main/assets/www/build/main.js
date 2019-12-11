webpackJsonp([5],{

/***/ 193:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detalhes-cte/detalhes-cte.module": [
		627,
		4
	],
	"../pages/detalhes/detalhes.module": [
		630,
		3
	],
	"../pages/escolha-mes/escolha-mes.module": [
		628,
		2
	],
	"../pages/info/info.module": [
		629,
		1
	],
	"../pages/tela-dados/tela-dados.module": [
		631,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 234;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(toast, network) {
        this.toast = toast;
        this.network = network;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.displayNetworkUpdate = function (connectionState) {
        this.toast.create({
            message: "Você está " + connectionState,
            duration: 3000
        }).present();
    };
    TabsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.network.onConnect().subscribe(function (data) {
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
        this.network.onDisconnect().subscribe(function (data) {
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"Z:\Public\Backup - Emerson\Emerson\APLICATIVOS\APP\FOB\src\pages\tabs\tabs.html"*/'<ion-tabs color="plmd">\n  <ion-tab [root]="tab1Root" tabTitle="HOJE" tabIcon="md-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="BUSCAR" tabIcon="md-search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="STATUS" tabIcon="md-stats"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"Z:\Public\Backup - Emerson\Emerson\APLICATIVOS\APP\FOB\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_date_picker__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = /** @class */ (function () {
    function AboutPage(keyboard, datePicker, modalCtrl, alertCtrl, loadingCtrl, db, navCtrl) {
        this.keyboard = keyboard;
        this.datePicker = datePicker;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.db = db;
        this.navCtrl = navCtrl;
        this.mensal = "MENSAL";
        this.myDate = new Date();
        this.meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
        this.mes = this.meses[this.myDate.getMonth()];
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
        this.hora();
    }
    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                               PEGA POR DATA ESCOLHIDA
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    AboutPage.prototype.pegarData = function () {
        var _this = this;
        this.keyboard.close();
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: 4
        }).then(function (date) {
            var dataFormatada = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).substr(-2) + "-" + ("0" + date.getDate()).substr(-2);
            var dataFormatada1 = ("0" + date.getDate()).substr(-2) + "/" + ("0" + (date.getMonth() + 1)).substr(-2) + "/" + date.getFullYear();
            var mesEscolhido = _this.meses[date.getMonth()];
            _this.getPorData(dataFormatada, mesEscolhido, dataFormatada1);
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    AboutPage.prototype.getPorData = function (dataFormatada, mesEscolhido, dataFormatada1) {
        var _this = this;
        this.db.list(mesEscolhido, function (ref) { return ref.orderByChild('Data_Programada').equalTo(dataFormatada + "T03:00:00.000Z"); })
            .valueChanges()
            .subscribe(function (datas) {
            for (var x = 0; x < datas.length; x++) {
                if (datas[x] !== null && datas[x] !== undefined)
                    var date = datas;
            }
            var b = "dataEscolhida";
            _this.PegaData(date, b, dataFormatada1);
        }, function (err) {
            console.log("Problema : ", err);
        });
    };
    AboutPage.prototype.PegaData = function (a, b, c) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Carregando dados...'
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.push('TelaDadosPage', { dados: a, nome_d: b, data_dia: c });
        }, 200);
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                               PEGA DATAS DE ONTEM E AMANHÃ
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    AboutPage.prototype.hora = function () {
        this.data_ontem = this.myDate.getFullYear() + "-" + ("0" + (this.myDate.getMonth() + 1)).substr(-2) + "-" + ("0" + (this.myDate.getDate() - 1)).substr(-2);
        this.data_amanha = this.myDate.getFullYear() + "-" + ("0" + (this.myDate.getMonth() + 1)).substr(-2) + "-" + ("0" + (this.myDate.getDate() + 1)).substr(-2);
        this.data_dia_ontem = ("0" + (this.myDate.getDate() - 1)).substr(-2) + "/" + ("0" + (this.myDate.getMonth() + 1)).substr(-2) + "/" + this.myDate.getFullYear();
        this.data_dia_amanha = ("0" + (this.myDate.getDate() + 1)).substr(-2) + "/" + ("0" + (this.myDate.getMonth() + 1)).substr(-2) + "/" + this.myDate.getFullYear();
    };
    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    AboutPage.prototype.tela = function () {
        var modal = this.modalCtrl.create('EscolhaMesPage', { escolhaCli: "cliente" });
        modal.present();
    };
    AboutPage.prototype.telaMotorista = function () {
        var modal = this.modalCtrl.create('EscolhaMesPage', { escolhaMot: "motorista" });
        modal.present();
    };
    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    AboutPage.prototype.mes_escolhido = function () {
        if (this.mes_model == null) {
            alert("Desculpa, selecione um Mês válido.");
        }
        else {
            this.getMes(this.mes_model);
            this.mes_model = "";
        }
    };
    AboutPage.prototype.getMes = function (m) {
        this.navCtrl.push('TelaDadosPage', { mes_escolhido: m.id, nome: m.mes, tela: this.mensal });
    };
    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                               CHAMA POR NOTA FISCAL
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    AboutPage.prototype.getNfe = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                    }
                },
                {
                    text: 'Buscar',
                    handler: function (data) {
                        var NFE = parseInt(data.Nfe);
                        var z;
                        for (var i = 0; i < _this.meses.length; i++) {
                            _this.db.list(_this.meses[i])
                                .valueChanges()
                                .subscribe(function (d_nfe) {
                                for (var x = 0; x < d_nfe.length; x++) {
                                    if (d_nfe[x] !== null && d_nfe[x] !== undefined)
                                        z = d_nfe;
                                    for (var y = 0; y < z.length; y++) {
                                        if (z[y].Nfe === NFE) {
                                            var a_nfe = z.splice(y, 1);
                                            _this.tesN(a_nfe);
                                        }
                                    }
                                }
                            }, function (err) {
                                console.log("Problema : ", err);
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    AboutPage.prototype.tesN = function (c) {
        var dados_NFE;
        c.forEach(function (a) {
            var data = __WEBPACK_IMPORTED_MODULE_3_moment___default()(a.Embarque_Efetivo);
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
    };
    AboutPage.prototype.chamaNFE = function (a) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Carregando dados...'
        });
        loading.present();
        setTimeout(function () {
            var modal = _this.modalCtrl.create('DetalhesCtePage', { dados_NFE: a });
            modal.present();
        }, 500);
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                CHAMA POR CTE
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    AboutPage.prototype.getCte = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                    }
                },
                {
                    text: 'Buscar',
                    handler: function (data) {
                        var CTE = parseInt(data.Cte);
                        var z;
                        for (var i = 0; i < _this.meses.length; i++) {
                            _this.db.list(_this.meses[i])
                                .valueChanges()
                                .subscribe(function (d_cte) {
                                for (var x = 0; x < d_cte.length; x++) {
                                    if (d_cte[x] !== null && d_cte[x] !== undefined)
                                        z = d_cte;
                                    for (var y = 0; y < z.length; y++) {
                                        if (z[y].Cte === CTE) {
                                            var a_cte = z.splice(y, 1);
                                            _this.tesC(a_cte);
                                        }
                                    }
                                }
                            }, function (err) {
                                console.log("Problema : ", err);
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    AboutPage.prototype.tesC = function (c) {
        var dados_CTE;
        c.forEach(function (a) {
            var data = __WEBPACK_IMPORTED_MODULE_3_moment___default()(a.Embarque_Efetivo);
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
        var cte = "CTE";
        this.chamaCTE(dados_CTE, cte);
    };
    AboutPage.prototype.chamaCTE = function (a, b) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Carregando dados...'
        });
        loading.present();
        setTimeout(function () {
            var modal = _this.modalCtrl.create('DetalhesCtePage', { dados_CTE: a, nome_CTE: b });
            modal.present();
        }, 500);
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                       DIRECIONA PARA TELA DE DETALHES
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    AboutPage.prototype.presentLoadingText = function (c) {
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
    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     PEGA DADOS DO DIA ANTERIOR
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    AboutPage.prototype.getOntem = function () {
        var _this = this;
        this.db.list(this.mes, function (ref) { return ref.orderByChild('Data_Programada').equalTo(_this.data_ontem + "T03:00:00.000Z"); })
            .valueChanges()
            .subscribe(function (datas) {
            for (var x = 0; x < datas.length; x++) {
                if (datas[x] !== null && datas[x] !== undefined)
                    var _ontem = datas;
            }
            var d = "ontem";
            _this.ontem_amannha(_ontem, d, _this.data_dia_ontem);
        }, function (err) {
            console.log("Problema : ", err);
        });
    };
    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     PEGA DADOS DO DIA POSTERIOR
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    AboutPage.prototype.getAmanha = function () {
        var _this = this;
        this.db.list(this.mes, function (ref) { return ref.orderByChild('Data_Programada').equalTo(_this.data_amanha + "T03:00:00.000Z"); })
            .valueChanges()
            .subscribe(function (datas) {
            for (var x = 0; x < datas.length; x++) {
                if (datas[x] !== null && datas[x] !== undefined)
                    var _amanha = datas;
            }
            var d = "amanha";
            _this.ontem_amannha(_amanha, d, _this.data_dia_amanha);
        }, function (err) {
            console.log("Problema : ", err);
        });
    };
    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                       DIRECIONAMENTO DE DADOS DOS DIAS ANTERIOR E POSTERIOR
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    AboutPage.prototype.ontem_amannha = function (a, b, c) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Carregando dados...'
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.push('TelaDadosPage', { dados: a, nome_d: b, data_dia: c });
        }, 200);
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"Z:\Public\Backup - Emerson\Emerson\APLICATIVOS\APP\FOB\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <h2 class="text_titulo">Faça sua Pesquisa</h2>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item padding no-lines>\n    <ion-label style="font-size: 20px; color: rgb(1, 2, 27);">Por Mês:</ion-label>\n    <ion-icon name="md-calendar" color="plmd" item-start></ion-icon>\n    <ion-select [(ngModel)]="mes_model" class="selector">\n      <ion-option *ngFor="let item of Meses" [value]="item">\n        <p><b>{{item.mes}}</b></p>\n      </ion-option>\n    </ion-select>\n  </ion-item>\n  <button ion-button clear full (click)="mes_escolhido()"><span style="color: white">Buscar cargas deste\n      Mês</span></button>\n  <div class="linha"></div>\n\n  <div cards>\n    <div class="grid-full">\n      <ion-row>\n        <ion-col class="animated fadeInDownBig">\n          <ion-card (click)="getCte()" class="container">\n            <h1>\n              <ion-icon name="md-paper" color="primary"></ion-icon>\n            </h1>\n            <p>Buscar por Ct-e</p>\n          </ion-card>\n        </ion-col>\n        <ion-col class="animated fadeInDownBig">\n          <ion-card (click)="getNfe()" class="container">\n            <h1>\n              <ion-icon name="md-barcode" color="primary"></ion-icon>\n            </h1>\n            <p>Buscar por NF-e</p>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class="linha_"></div>\n\n  <div cards1>\n    <div class="grid-full1">\n      <ion-row>\n        <ion-col class="animated flipInY">\n          <ion-card (click)="tela()" class="container4">\n            <h1>\n              <ion-icon name="ios-people" color="primary"></ion-icon>\n            </h1>\n            <p>Cliente</p>\n          </ion-card>\n        </ion-col>\n        <ion-col class="animated flipInY">\n          <ion-card (click)="telaMotorista()" class="container4">\n            <h1>\n              <ion-icon name="md-contact" color="primary"></ion-icon>\n            </h1>\n            <p>Motorista</p>\n          </ion-card>\n        </ion-col>\n        <ion-col class="animated fadeInUp">\n          <ion-card (click)="getOntem()" class="container4">\n            <h1 class="antes">\n              <ion-icon name="md-arrow-round-back" color="primary"></ion-icon>\n            </h1>\n            <p>Ontem</p>\n          </ion-card>\n        </ion-col>\n        <ion-col class="animated fadeInUp">\n          <ion-card (click)="getAmanha()" class="container4">\n            <h1>\n              <ion-icon name="md-arrow-round-forward" color="primary"></ion-icon>\n            </h1>\n            <p>Amanhã</p>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <ion-row>\n    <ion-col class="animated fadeInUp">\n      <ion-card class="container_data" (click)="pegarData()">\n        <h1>\n          <ion-icon name="ios-calendar" color="primary"></ion-icon>\n        </h1>\n        <p>Buscar por Data</p>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"Z:\Public\Backup - Emerson\Emerson\APLICATIVOS\APP\FOB\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(71);
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




var ContactPage = /** @class */ (function () {
    //--------------------------------------------------------------------
    function ContactPage(db, navCtrl) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.data_Atual = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format('DD/MM/YYYY');
        this.myDate = new Date();
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
        this.mes = this.Meses[this.myDate.getMonth()];
        this.mes_atual = this.mes.mes;
        this.mes_id = this.mes.id;
        this.doughnutChartType_0 = 'doughnut';
        this.doughnutChartType_1 = 'doughnut';
        this.doughnutChartType_2 = 'doughnut';
        this.getDadosGrafico();
    }
    //---------------------------------------------------------------------
    ContactPage.prototype.getDadosGrafico = function () {
        var _this = this;
        var a_a;
        var b_b;
        this.db.list(this.mes_id)
            .valueChanges()
            .subscribe(function (datas) {
            if (datas !== null && datas !== undefined)
                a_a = datas;
            for (var i = 0; i < a_a.length; i++) {
                if (a_a[i].d_mes === "") {
                    b_b = a_a.splice(i, 3);
                    _this.Grafico = [{
                            Quant_Viagens_Mes: b_b[0].Quant_Viagens_Mes,
                            Quant_Restantes_Mes: b_b[0].Quant_Restantes_Mes,
                            Saldo_Prog_Dia: b_b[1].Saldo_Prog_Dia,
                            Saldo_Embar_Dia: b_b[1].Saldo_Embar_Dia,
                            Quant_Liberada_Mes: b_b[2].Quant_Liberada_Mes,
                            Quant_Embarcada_Mes: b_b[2].Quant_Embarcada_Mes,
                        }];
                    for (var x = 0; x < 1; x++) {
                        var Quant_Liberada = _this.Grafico[x].Quant_Liberada_Mes.toFixed(2);
                        var Quant_Embarcado = _this.Grafico[x].Quant_Embarcada_Mes.toFixed(2);
                        var Saldo_do_Mes = Quant_Liberada - Quant_Embarcado;
                        _this.doughnutChartLabels_0 = ['Quant. Liberada', 'Quant. Embarcado', 'Saldo do Mês'];
                        _this.doughnutChartData_0 = [Quant_Liberada, Quant_Embarcado, Saldo_do_Mes.toFixed(2)];
                        var Cargas_do_Mes = _this.Grafico[x].Quant_Viagens_Mes;
                        var Cargas_Restantes = _this.Grafico[x].Quant_Restantes_Mes;
                        var Cargas_Embarcadas = Cargas_do_Mes - Cargas_Restantes;
                        _this.doughnutChartLabels_1 = ['Viagens do Mês', 'Viagens Embarcadas', 'Viagens Restantes'];
                        _this.doughnutChartData_1 = [Cargas_do_Mes, Cargas_Embarcadas, Cargas_Restantes];
                        var Saldo_Programado = _this.Grafico[x].Saldo_Prog_Dia;
                        var Embarcados = _this.Grafico[x].Saldo_Embar_Dia;
                        var Saldo_do_Dia = Saldo_Programado - Embarcados;
                        _this.doughnutChartLabels_2 = ['Saldo Programado', 'Embarcados', 'Saldo do Dia'];
                        _this.doughnutChartData_2 = [Saldo_Programado.toFixed(2), Embarcados.toFixed(2), Saldo_do_Dia.toFixed(2)];
                    }
                }
            }
        }, function (err) {
            console.log("Problema : ", err);
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"Z:\Public\Backup - Emerson\Emerson\APLICATIVOS\APP\FOB\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <h2 class="featured-text">Dados</h2>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card class="animated fadeInRight">\n    <ion-card-header>\n      Balanço do Mês:<b>&nbsp;{{mes_atual}}</b>\n    </ion-card-header>\n    <div width="1000" height="1000">\n      <div style="display: block">\n        <canvas baseChart [data]="doughnutChartData_0" [labels]="doughnutChartLabels_0"\n          [chartType]="doughnutChartType_0"></canvas>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col *ngFor="let text of doughnutChartLabels_0 ">\n            <div>{{text}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngFor="let val of doughnutChartData_0 ">\n            <div><b>{{val}}</b></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-card>\n  <ion-card class="animated fadeInLeft">\n    <ion-card-header>\n      Balanço de Viagens Mensal\n    </ion-card-header>\n    <div width="1000" height="1000">\n      <div style="display: block">\n        <canvas baseChart [data]="doughnutChartData_1" [labels]="doughnutChartLabels_1"\n          [chartType]="doughnutChartType_1"></canvas>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col *ngFor="let text of doughnutChartLabels_1 ">\n            <div>{{text}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngFor="let val of doughnutChartData_1 ">\n            <div><b>{{val}}</b></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-card>\n  <ion-card class="animated fadeInUp">\n    <ion-card-header>\n      Balanço de Peso Diário:&nbsp;<b>{{data_Atual}}</b>\n    </ion-card-header>\n    <div width="1000" height="1000">\n      <div style="display: block">\n        <canvas baseChart [data]="doughnutChartData_2" [labels]="doughnutChartLabels_2"\n          [chartType]="doughnutChartType_2"></canvas>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col *ngFor="let text of doughnutChartLabels_2 ">\n            <div>{{text}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngFor="let val of doughnutChartData_2 ">\n            <div><b>{{val}}</b></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"Z:\Public\Backup - Emerson\Emerson\APLICATIVOS\APP\FOB\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, db, modalCtrl, screenOrientation, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.screenOrientation = screenOrientation;
        this.loadingCtrl = loadingCtrl;
        this.splash = true;
        this.myDate = new Date();
        this.meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
        this.mes = this.meses[this.myDate.getMonth()];
        this.data_Atual = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format('DD/MM/YYYY');
        this.dataAtual = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format('YYYY-MM-DD');
        this.Img_PLMD = [
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
        ];
        this.tabBarElement = document.querySelector('.tabbar');
        this.getDay();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.tabBarElement.style.display = 'none';
        setTimeout(function () {
            _this.splash = false;
            _this.tabBarElement.style.display = 'flex';
        }, 5000);
        this.screenOrientation.onChange()
            .subscribe(
        //value => console.log("Orientação"),
        function (error) { return console.log(error); }, function () { return console.log(); });
    };
    HomePage.prototype.girar = function () {
        if (this.screenOrientation.type === "portrait-primary") {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        }
        else {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
    };
    HomePage.prototype.info = function () {
        var modal = this.modalCtrl.create('InfoPage');
        modal.present();
    };
    HomePage.prototype.sicronizar = function (c) {
        this.doRefresh(c);
    };
    HomePage.prototype.doRefresh = function (event) {
        this.getDay();
        setTimeout(function () {
            event.complete();
        }, 1000);
    };
    HomePage.prototype.presentLoadingText = function (c) {
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
    HomePage.prototype.getDay = function () {
        var _this = this;
        this.db.list(this.mes, function (ref) { return ref.orderByChild('Data_Programada').equalTo(_this.dataAtual + "T03:00:00.000Z"); })
            .valueChanges()
            .subscribe(function (datas) {
            for (var x = 0; x < datas.length; x++) {
                if (datas[x] !== null && datas[x] !== undefined)
                    _this.dadosCli = datas;
            }
        }, function (err) {
            console.log("Problema : ", err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"Z:\Public\Backup - Emerson\Emerson\APLICATIVOS\APP\FOB\src\pages\home\home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img class="animated flip" src="assets/imgs/splash.png">\n    <div id="text" class="animated  lightSpeedIn">FOB</div>\n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button (click)="girar()" ion-button icon-only>\n        <ion-icon *ngIf="this.screenOrientation.type === \'portrait-primary\'" name="ios-phone-landscape-outline">\n        </ion-icon>\n        <ion-icon *ngIf="this.screenOrientation.type === \'landscape-primary\'" name="ios-phone-portrait-outline">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n    <h2 class="featured-text">Polimodallog Logística</h2>\n    <ion-buttons end>\n      <button (click)="info()" ion-button icon-only>\n        <ion-icon name="md-information-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionStart)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Puxe e atualize os dados"\n      refreshingSpinner="bubbles" refreshingText="Sicronizando...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class="header-banner">\n    <ion-slides class="home-slide" pager initialSlide=0 loop=true autoplay=2000 speed=2000>\n      <ion-slide *ngFor="let item of Img_PLMD">\n        <img src="{{item.img}}">\n      </ion-slide>\n    </ion-slides>\n    <h2 class="text">Cargas que temos hoje</h2>\n    <div class="hora_atual" *ngIf="data_Atual">{{data_Atual}}</div>\n\n    <div cards>\n      <div class="grid-full">\n        <ion-row>\n          <ion-col *ngFor="let c of dadosCli" class="animated fadeInUp">\n            <ion-card (click)="presentLoadingText(c)">\n              <div *ngIf="c.Embarque_Efetivo !== \'\' ">\n                <ion-icon style="zoom:1.8;" item-end color="secondary" name="md-checkmark-circle-outline"></ion-icon>\n                <h1>{{c.Cliente}}</h1>\n                <p>{{c.Cidade_Origem}} X {{c.Cidade_Destino}}</p>\n              </div>\n              <div *ngIf="c.Embarque_Efetivo  === \'\'">\n                <ion-icon style="zoom:1.8;" item-start color="danger" name="ios-pulse-outline"></ion-icon>\n                <h1>{{c.Cliente}}</h1>\n                <p>{{c.Cidade_Origem}} X {{c.Cidade_Destino}}</p>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"Z:\Public\Backup - Emerson\Emerson\APLICATIVOS\APP\FOB\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(554);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts_x__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_date_picker__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_keyboard__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detalhes-cte/detalhes-cte.module#DetalhesCtePageModule', name: 'DetalhesCtePage', segment: 'detalhes-cte', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/escolha-mes/escolha-mes.module#EscolhaMesPageModule', name: 'EscolhaMesPage', segment: 'escolha-mes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhes/detalhes.module#DetalhesPageModule', name: 'DetalhesPage', segment: 'detalhes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tela-dados/tela-dados.module#TelaDadosPageModule', name: 'TelaDadosPage', segment: 'tela-dados', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_ng2_charts_x__["a" /* ChartsModule */],
                //novo
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["AngularFireModule"].initializeApp({
                    apiKey: "AIzaSyDiwIdEyBHncXazT2nqyDNlY3-vCZ-Lr0w",
                    authDomain: "tabela-fob-66a5e.firebaseapp.com",
                    databaseURL: "https://tabela-fob-66a5e.firebaseio.com",
                    projectId: "tabela-fob-66a5e",
                    storageBucket: "tabela-fob-66a5e.appspot.com",
                    messagingSenderId: "84292087533",
                    appId: "1:84292087533:web:8e34c2ef1bfde3ca"
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["AngularFireDatabaseModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_keyboard__["a" /* Keyboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 235,
	"./af.js": 235,
	"./ar": 236,
	"./ar-dz": 237,
	"./ar-dz.js": 237,
	"./ar-kw": 238,
	"./ar-kw.js": 238,
	"./ar-ly": 239,
	"./ar-ly.js": 239,
	"./ar-ma": 240,
	"./ar-ma.js": 240,
	"./ar-sa": 241,
	"./ar-sa.js": 241,
	"./ar-tn": 242,
	"./ar-tn.js": 242,
	"./ar.js": 236,
	"./az": 243,
	"./az.js": 243,
	"./be": 244,
	"./be.js": 244,
	"./bg": 245,
	"./bg.js": 245,
	"./bm": 246,
	"./bm.js": 246,
	"./bn": 247,
	"./bn.js": 247,
	"./bo": 248,
	"./bo.js": 248,
	"./br": 249,
	"./br.js": 249,
	"./bs": 250,
	"./bs.js": 250,
	"./ca": 251,
	"./ca.js": 251,
	"./cs": 252,
	"./cs.js": 252,
	"./cv": 253,
	"./cv.js": 253,
	"./cy": 254,
	"./cy.js": 254,
	"./da": 255,
	"./da.js": 255,
	"./de": 256,
	"./de-at": 257,
	"./de-at.js": 257,
	"./de-ch": 258,
	"./de-ch.js": 258,
	"./de.js": 256,
	"./dv": 259,
	"./dv.js": 259,
	"./el": 260,
	"./el.js": 260,
	"./en-SG": 261,
	"./en-SG.js": 261,
	"./en-au": 262,
	"./en-au.js": 262,
	"./en-ca": 263,
	"./en-ca.js": 263,
	"./en-gb": 264,
	"./en-gb.js": 264,
	"./en-ie": 265,
	"./en-ie.js": 265,
	"./en-il": 266,
	"./en-il.js": 266,
	"./en-nz": 267,
	"./en-nz.js": 267,
	"./eo": 268,
	"./eo.js": 268,
	"./es": 269,
	"./es-do": 270,
	"./es-do.js": 270,
	"./es-us": 271,
	"./es-us.js": 271,
	"./es.js": 269,
	"./et": 272,
	"./et.js": 272,
	"./eu": 273,
	"./eu.js": 273,
	"./fa": 274,
	"./fa.js": 274,
	"./fi": 275,
	"./fi.js": 275,
	"./fo": 276,
	"./fo.js": 276,
	"./fr": 277,
	"./fr-ca": 278,
	"./fr-ca.js": 278,
	"./fr-ch": 279,
	"./fr-ch.js": 279,
	"./fr.js": 277,
	"./fy": 280,
	"./fy.js": 280,
	"./ga": 281,
	"./ga.js": 281,
	"./gd": 282,
	"./gd.js": 282,
	"./gl": 283,
	"./gl.js": 283,
	"./gom-latn": 284,
	"./gom-latn.js": 284,
	"./gu": 285,
	"./gu.js": 285,
	"./he": 286,
	"./he.js": 286,
	"./hi": 287,
	"./hi.js": 287,
	"./hr": 288,
	"./hr.js": 288,
	"./hu": 289,
	"./hu.js": 289,
	"./hy-am": 290,
	"./hy-am.js": 290,
	"./id": 291,
	"./id.js": 291,
	"./is": 292,
	"./is.js": 292,
	"./it": 293,
	"./it-ch": 294,
	"./it-ch.js": 294,
	"./it.js": 293,
	"./ja": 295,
	"./ja.js": 295,
	"./jv": 296,
	"./jv.js": 296,
	"./ka": 297,
	"./ka.js": 297,
	"./kk": 298,
	"./kk.js": 298,
	"./km": 299,
	"./km.js": 299,
	"./kn": 300,
	"./kn.js": 300,
	"./ko": 301,
	"./ko.js": 301,
	"./ku": 302,
	"./ku.js": 302,
	"./ky": 303,
	"./ky.js": 303,
	"./lb": 304,
	"./lb.js": 304,
	"./lo": 305,
	"./lo.js": 305,
	"./lt": 306,
	"./lt.js": 306,
	"./lv": 307,
	"./lv.js": 307,
	"./me": 308,
	"./me.js": 308,
	"./mi": 309,
	"./mi.js": 309,
	"./mk": 310,
	"./mk.js": 310,
	"./ml": 311,
	"./ml.js": 311,
	"./mn": 312,
	"./mn.js": 312,
	"./mr": 313,
	"./mr.js": 313,
	"./ms": 314,
	"./ms-my": 315,
	"./ms-my.js": 315,
	"./ms.js": 314,
	"./mt": 316,
	"./mt.js": 316,
	"./my": 317,
	"./my.js": 317,
	"./nb": 318,
	"./nb.js": 318,
	"./ne": 319,
	"./ne.js": 319,
	"./nl": 320,
	"./nl-be": 321,
	"./nl-be.js": 321,
	"./nl.js": 320,
	"./nn": 322,
	"./nn.js": 322,
	"./pa-in": 323,
	"./pa-in.js": 323,
	"./pl": 324,
	"./pl.js": 324,
	"./pt": 325,
	"./pt-br": 326,
	"./pt-br.js": 326,
	"./pt.js": 325,
	"./ro": 327,
	"./ro.js": 327,
	"./ru": 328,
	"./ru.js": 328,
	"./sd": 329,
	"./sd.js": 329,
	"./se": 330,
	"./se.js": 330,
	"./si": 331,
	"./si.js": 331,
	"./sk": 332,
	"./sk.js": 332,
	"./sl": 333,
	"./sl.js": 333,
	"./sq": 334,
	"./sq.js": 334,
	"./sr": 335,
	"./sr-cyrl": 336,
	"./sr-cyrl.js": 336,
	"./sr.js": 335,
	"./ss": 337,
	"./ss.js": 337,
	"./sv": 338,
	"./sv.js": 338,
	"./sw": 339,
	"./sw.js": 339,
	"./ta": 340,
	"./ta.js": 340,
	"./te": 341,
	"./te.js": 341,
	"./tet": 342,
	"./tet.js": 342,
	"./tg": 343,
	"./tg.js": 343,
	"./th": 344,
	"./th.js": 344,
	"./tl-ph": 345,
	"./tl-ph.js": 345,
	"./tlh": 346,
	"./tlh.js": 346,
	"./tr": 347,
	"./tr.js": 347,
	"./tzl": 348,
	"./tzl.js": 348,
	"./tzm": 349,
	"./tzm-latn": 350,
	"./tzm-latn.js": 350,
	"./tzm.js": 349,
	"./ug-cn": 351,
	"./ug-cn.js": 351,
	"./uk": 352,
	"./uk.js": 352,
	"./ur": 353,
	"./ur.js": 353,
	"./uz": 354,
	"./uz-latn": 355,
	"./uz-latn.js": 355,
	"./uz.js": 354,
	"./vi": 356,
	"./vi.js": 356,
	"./x-pseudo": 357,
	"./x-pseudo.js": 357,
	"./yo": 358,
	"./yo.js": 358,
	"./zh-cn": 359,
	"./zh-cn.js": 359,
	"./zh-hk": 360,
	"./zh-hk.js": 360,
	"./zh-tw": 361,
	"./zh-tw.js": 361
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 581;

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"Z:\Public\Backup - Emerson\Emerson\APLICATIVOS\APP\FOB\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"Z:\Public\Backup - Emerson\Emerson\APLICATIVOS\APP\FOB\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[421]);
//# sourceMappingURL=main.js.map