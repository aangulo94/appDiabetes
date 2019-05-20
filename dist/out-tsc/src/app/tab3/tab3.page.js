import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/auth.service';
var Tab3Page = /** @class */ (function () {
    function Tab3Page(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
    }
    Tab3Page.prototype.logout = function () {
        var _this = this;
        this.authService.logoutUser()
            .then(function (res) {
            console.log(res);
            _this.navCtrl.navigateBack('');
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    Tab3Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab3',
            templateUrl: 'tab3.page.html',
            styleUrls: ['tab3.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AuthenticateService])
    ], Tab3Page);
    return Tab3Page;
}());
export { Tab3Page };
//# sourceMappingURL=tab3.page.js.map