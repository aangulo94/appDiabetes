import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(router) {
        this.router = router;
    }
    Tab2Page.prototype.starttest = function () {
        this.router.navigate(['/tabs/test']);
    };
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map