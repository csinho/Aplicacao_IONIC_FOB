webpackJsonp([4],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesCtePageModule", function() { return DetalhesCtePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhes_cte__ = __webpack_require__(630);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalhesCtePageModule = /** @class */ (function () {
    function DetalhesCtePageModule() {
    }
    DetalhesCtePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhes_cte__["a" /* DetalhesCtePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhes_cte__["a" /* DetalhesCtePage */]),
            ],
        })
    ], DetalhesCtePageModule);
    return DetalhesCtePageModule;
}());

//# sourceMappingURL=detalhes-cte.module.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesCtePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalhesCtePage = /** @class */ (function () {
    function DetalhesCtePage(navCtrl, view, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
        this.nome_CTE = this.navParams.get("nome_CTE");
        this.det_CTE = this.navParams.get("dados_CTE");
        this.det_NFE = this.navParams.get("dados_NFE");
        if (this.nome_CTE === "CTE") {
            this.detalhes = this.det_CTE;
        }
        else {
            this.detalhes = this.det_NFE;
        }
        this.detalhes.forEach(function (a) {
            _this.s = a.Status_Seg;
            _this.DADOS = a;
            if (a.Status_Seg === "Recomendado") {
                _this.seguradora = a.Status_Seg;
            }
            if (a.Status_Seg === "Não Recomendado") {
                _this.seguradora = "Não recomendado";
            }
            if (a.Status_Seg === "Enviar Ficha") {
                _this.seguradora = "Ficha a ser Enviada";
            }
            if (a.Status_Seg === "Reenviar") {
                _this.seguradora = "Reenviar Ficha";
            }
            if (a.Status_Seg === "Doc. Pendente") {
                _this.seguradora = "Documentos Pendentes";
            }
            if (a.Status_Seg === "Em Análise") {
                _this.seguradora = "Ficha em análise";
            }
            if (a.Status_Seg === "") {
                _this.seguradora = "Favor verificar ficha";
            }
            var aa = __WEBPACK_IMPORTED_MODULE_2_moment___default()(a.Data_Previsao_Descarga);
            var b = aa.format("DD/MM/YYYY");
            if (b === "Invalid date") {
                _this.data = "Sem previsão de entrega no momento!";
            }
            else {
                _this.data = b;
            }
            var a_a = __WEBPACK_IMPORTED_MODULE_2_moment___default()(a.Data_Descarga_Efetiva);
            var b_b = a_a.format("DD/MM/YYYY");
            if (b_b === "Invalid date") {
                _this.data = "Descarga ainda não realizada";
            }
            else {
                _this.data_descarga = b_b;
            }
        });
    }
    DetalhesCtePage.prototype.fecharModal = function () {
        this.view.dismiss();
    };
    DetalhesCtePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhes-cte',template:/*ion-inline-start:"C:\Users\Poly\Desktop\FOB\src\pages\detalhes-cte\detalhes-cte.html"*/'<ion-content class="detalhes">\n  <div class="t">\n  </div>\n  <ion-scroll scrollY="true">\n    <ion-card>\n      <div *ngIf="DADOS.Embarque_Efetivo !== \'\' ">\n        <ion-fab right top>\n          <button color="secondary" mini ion-fab>\n            <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n          </button>\n        </ion-fab>\n      </div>\n      <div *ngIf="DADOS.Embarque_Efetivo === \'\' ">\n        <ion-fab left top>\n          <button color="danger" mini ion-fab>\n            <ion-icon name="ios-pulse-outline"></ion-icon>\n          </button>\n        </ion-fab>\n      </div>\n      <ion-card-content class="detalhes_card">\n        <ion-card-title>\n          <div *ngIf="nome_CTE === \'CTE\'">\n            <h1>Dados do CT-e</h1>\n          </div>\n          <div *ngIf="nome_CTE !== \'CTE\'">\n            <h1>Dados do NF-e</h1>\n          </div>\n        </ion-card-title>\n        <div class="linha"></div>\n\n        <div class="dados" *ngIf="DADOS">\n          <div *ngIf="nome_CTE === \'CTE\'">\n            <h2>Ct-e:</h2>\n            <label>{{DADOS.Cte}}</label>\n            <h2>Nf-e:</h2>\n            <p>{{DADOS.Nfe}}</p>\n          </div>\n          <div *ngIf="nome_CTE !== \'CTE\'">\n            <h2>Nf-e:</h2>\n            <label>{{DADOS.Nfe}}</label>\n            <h2>Ct-e:</h2>\n            <p>{{DADOS.Cte}}</p>\n          </div>\n          <h2>Cliente:</h2>\n          <p>{{DADOS.Cliente}}</p>\n          <h2>Origem e Destino:</h2>\n          <p>{{DADOS.Cidade_Origem}}\n            /{{DADOS.Uf_Origem}}\n            &nbsp;X&nbsp;{{DADOS.Cidade_Destino}}\n            /{{DADOS.Uf_Destino}}\n          </p>\n          <ion-row>\n            <ion-col>\n              <h2>Peso Programado:</h2>\n              <p style="font-size: 18px; color: rgb(4, 3, 56);">{{DADOS.Peso_Programado}}&nbsp;ton</p>\n            </ion-col>\n            <ion-col>\n              <h2>Peso Carregado:</h2>\n              <p style="font-size: 20px; color: rgb(10, 185, 77);">{{DADOS.Peso_Carregado}}&nbsp;ton</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <h2>Previsão da Entrega:</h2>\n              <p style="font-size: 18px; color: rgb(4, 3, 56);">{{data}}</p>\n            </ion-col>\n            <ion-col>\n              <h2>Descarga Efetiva:</h2>\n              <p style="font-size: 20px; color: rgb(10, 185, 77);">{{data_descarga}}</p>\n            </ion-col>\n          </ion-row>\n          <div class="linha_mot"></div>\n          <h2>Motorista:</h2>\n          <p>{{DADOS.Motorista}}</p>\n          <h2>Contato: </h2>\n          <a ion-item botton href="tel:`{{DADOS.Telefone}}`">\n            <p>{{DADOS.Telefone}}</p>\n            <ion-icon name="md-call" color="primary" item-end></ion-icon>\n          </a>\n          <h2>Placas dos Veículos: </h2>\n          <p>{{DADOS.Placa}}</p>\n          <h2>Localização:&nbsp;<label>{{DADOS.Localizacao}}</label></h2>\n          <h2>Situação Seguradora:</h2>\n          <div *ngIf="s === \'Recomendado\'">\n            <p style="font-size: 20px; color: rgb(10, 185, 77);">\n              {{seguradora}}\n            </p>\n          </div>\n          <div *ngIf="s === \'Não Recomendado\'">\n            <p style="font-size: 20px; color: rgb(243, 59, 59);">\n              {{seguradora}}\n            </p>\n          </div>\n          <div *ngIf="s === \'Enviar Ficha\'">\n            <p style="font-size: 20px; color: rgb(1, 1, 17);">\n              {{seguradora}}\n            </p>\n          </div>\n          <div *ngIf="s === \'Reenviar\'">\n            <p style="font-size: 20px; color: rgb(219, 21, 226);">\n              {{seguradora}}\n            </p>\n          </div>\n          <div *ngIf="s === \'Doc. Pendente\'">\n            <p style="font-size: 20px; color: rgb(64, 48, 207);">\n              {{seguradora}}\n            </p>\n          </div>\n          <div *ngIf="s === \'Em Análise\'">\n            <p style="font-size: 20px; color: rgb(202, 130, 47);">\n              {{seguradora}}\n            </p>\n          </div>\n          <div *ngIf="s === \'\'">\n            <p style="font-size: 20px; color: rgb(0, 0, 0);">\n              {{seguradora}}\n            </p>\n          </div>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </ion-scroll>\n  <ion-buttons>\n    <button class="bt" ion-button block color="plmd" (click)="fecharModal()">OK</button>\n  </ion-buttons>\n</ion-content>'/*ion-inline-end:"C:\Users\Poly\Desktop\FOB\src\pages\detalhes-cte\detalhes-cte.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetalhesCtePage);
    return DetalhesCtePage;
}());

//# sourceMappingURL=detalhes-cte.js.map

/***/ })

});
//# sourceMappingURL=4.js.map