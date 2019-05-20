import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InfoPage } from './info.page';
var routes = [
    {
        path: '',
        component: InfoPage
    }
];
var InfoPageModule = /** @class */ (function () {
    function InfoPageModule() {
    }
    InfoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [InfoPage]
        })
    ], InfoPageModule);
    return InfoPageModule;
}());
export { InfoPageModule };
//# sourceMappingURL=info.module.js.map