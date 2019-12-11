webpackJsonp([3],{

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesPageModule", function() { return DetalhesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhes__ = __webpack_require__(631);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalhesPageModule = /** @class */ (function () {
    function DetalhesPageModule() {
    }
    DetalhesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhes__["a" /* DetalhesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhes__["a" /* DetalhesPage */]),
            ],
        })
    ], DetalhesPageModule);
    return DetalhesPageModule;
}());

//# sourceMappingURL=detalhes.module.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesPage; });
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



var DetalhesPage = /** @class */ (function () {
    function DetalhesPage(view, navCtrl, navParams) {
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detalhes_cliente = this.navParams.get("dados");
        this.cli_mes = this.navParams.get("cli_mes");
        this.s = this.detalhes_cliente.Status_Seg;
        if (this.s === "Recomendado") {
            this.seguradora = this.s;
        }
        if (this.s === "Não Recomendado") {
            this.seguradora = "Não recomendado";
        }
        if (this.s === "Enviar Ficha") {
            this.seguradora = "Ficha a ser Enviada";
        }
        if (this.s === "Reenviar") {
            this.seguradora = "Reenviar Ficha";
        }
        if (this.s === "Doc. Pendente") {
            this.seguradora = "Documentos Pendentes";
        }
        if (this.s === "Em Análise") {
            this.seguradora = "Ficha em análise";
        }
        if (this.s === "") {
            this.seguradora = "Favor verificar ficha";
        }
        var a = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.detalhes_cliente.Data_Previsao_Descarga);
        var b = a.format("DD/MM/YYYY");
        if (b === "Invalid date") {
            this.data = "Sem previsão de entrega no momento!";
        }
        else {
            this.data = b;
        }
        var a_a = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.detalhes_cliente.Data_Descarga_Efetiva);
        var b_b = a_a.format("DD/MM/YYYY");
        if (b_b === "Invalid date") {
            this.data = "Descarga ainda não realizada";
        }
        else {
            this.data_descarga = b_b;
        }
    }
    ;
    DetalhesPage.prototype.fecharModal = function () {
        this.view.dismiss();
    };
    DetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhes',template:/*ion-inline-start:"C:\Users\Poly\Desktop\FOB\src\pages\detalhes\detalhes.html"*/'<ion-content class="detalhes">\n  <div class="t">\n  </div>\n  <ion-scroll scrollY="true">\n    <ion-card>\n      <div *ngIf="detalhes_cliente.Embarque_Efetivo !== \'\' ">\n        <ion-fab right top>\n          <button color="secondary" mini ion-fab>\n            <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n          </button>\n        </ion-fab>\n      </div>\n      <div *ngIf="detalhes_cliente.Embarque_Efetivo === \'\' ">\n        <ion-fab left top>\n          <button color="danger" mini ion-fab>\n            <ion-icon name="ios-pulse-outline"></ion-icon>\n          </button>\n        </ion-fab>\n      </div>\n      <ion-card-content class="detalhes_card">\n        <ion-card-title>\n          <h1>Dados do Transporte</h1>\n        </ion-card-title>\n        <div class="linha"></div>\n        <div text-justify>\n          <div class="dados" *ngIf="detalhes_cliente">\n            <h2>Cliente:</h2>\n            <p>{{detalhes_cliente.Cliente}}</p>\n            <h2>Origem e Destino:</h2>\n            <p>{{detalhes_cliente.Cidade_Origem}}\n              /{{detalhes_cliente.Uf_Origem}}\n              &nbsp;X&nbsp;{{detalhes_cliente.Cidade_Destino}}\n              /{{detalhes_cliente.Uf_Destino}}\n            </p>\n            <ion-row>\n              <ion-col>\n                <h2>Peso Programado:</h2>\n                <p style="font-size: 18px; color: rgb(4, 3, 56);">{{detalhes_cliente.Peso_Programado}}&nbsp;ton</p>\n              </ion-col>\n              <ion-col>\n                <h2>Peso Carregado:</h2>\n                <p style="font-size: 20px; color: rgb(10, 185, 77);">{{detalhes_cliente.Peso_Carregado}}&nbsp;ton</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <h2>Previsão de Entrega:</h2>\n                <p style="font-size: 20px; color: rgb(4, 49, 21);">{{data}}</p>\n              </ion-col>\n              <ion-col>\n                <h2>Descarga Efetiva:</h2>\n                <p style="font-size: 20px; color: rgb(10, 185, 77);">{{data_descarga}}</p>\n              </ion-col>\n            </ion-row>\n            <div class="linha_mot"></div>\n            <h2>Motorista:</h2>\n            <p>{{detalhes_cliente.Motorista}}</p>\n            <h2>Contato: </h2>\n            <a ion-item botton href="tel:`{{detalhes_cliente.Telefone}}`">\n              <p>{{detalhes_cliente.Telefone}}</p>\n              <ion-icon name="md-call" color="primary" item-end></ion-icon>\n            </a>\n            <h2>Placas dos Veículos: </h2>\n            <p>{{detalhes_cliente.Placa}}</p>\n            <h2>Situação Seguradora:</h2>\n            <div *ngIf="s === \'Recomendado\'">\n              <p style="font-size: 20px; color: rgb(10, 185, 77);">\n                {{seguradora}}\n              </p>\n            </div>\n            <div *ngIf="s === \'Não Recomendado\'">\n              <p style="font-size: 20px; color: rgb(243, 59, 59);">\n                {{seguradora}}\n              </p>\n            </div>\n            <div *ngIf="s === \'Enviar Ficha\'">\n              <p style="font-size: 20px; color: rgb(1, 1, 17);">\n                {{seguradora}}\n              </p>\n            </div>\n            <div *ngIf="s === \'Reenviar\'">\n              <p style="font-size: 20px; color: rgb(219, 21, 226);">\n                {{seguradora}}\n              </p>\n            </div>\n            <div *ngIf="s === \'Doc. Pendente\'">\n              <p style="font-size: 20px; color: rgb(64, 48, 207);">\n                {{seguradora}}\n              </p>\n            </div>\n            <div *ngIf="s === \'Em Análise\'">\n              <p style="font-size: 20px; color: rgb(202, 130, 47);">\n                {{seguradora}}\n              </p>\n            </div>\n            <div *ngIf="s === \'\'">\n              <p style="font-size: 20px; color: rgb(0, 0, 0);">\n                {{seguradora}}\n              </p>\n            </div>\n            <div class="linha_man"></div>\n            <h3>Dados do Manifesto</h3>\n            <h2>Ct-e:&nbsp;<label>{{detalhes_cliente.Cte}}</label></h2>\n            <h2>Nf-e:&nbsp;<label>{{detalhes_cliente.Nfe}}</label></h2>\n            <h2>Localização:&nbsp;<label>{{detalhes_cliente.Localizacao}}</label></h2>\n          </div>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </ion-scroll>\n  <ion-buttons>\n    <button class="bt" ion-button block color="plmd" (click)="fecharModal()">OK</button>\n  </ion-buttons>\n</ion-content>'/*ion-inline-end:"C:\Users\Poly\Desktop\FOB\src\pages\detalhes\detalhes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetalhesPage);
    return DetalhesPage;
}());

//# sourceMappingURL=detalhes.js.map

/***/ })

});
//# sourceMappingURL=3.js.map