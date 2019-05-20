import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var TestPage = /** @class */ (function () {
    function TestPage(router) {
        this.router = router;
        this.fem = false;
        this.mal = false;
        this.riskcounter = 0;
        this.questionCounter = 1;
        this.value = 0;
        this.value_extra = 0;
    }
    TestPage.prototype.nextQuestion = function () {
        this.riskcounter = this.riskcounter + this.value;
        this.value = 0;
        this.value_extra = 0;
        if (this.questionCounter == 10)
            this.questionCounter = 1;
        else
            this.questionCounter++;
    };
    //QUESTION 1
    TestPage.prototype.female = function () {
        this.fem = true;
        this.mal = false;
    };
    TestPage.prototype.male = function () {
        this.mal = true;
        this.fem = false;
    };
    //QUESTION 2
    TestPage.prototype.age1 = function () {
        this.value_extra = 2;
        this.value = 0;
    };
    TestPage.prototype.age2 = function () {
        this.value = 2;
    };
    TestPage.prototype.age3 = function () {
        this.value = 3;
    };
    TestPage.prototype.age4 = function () {
        this.value = 4;
    };
    //QUESTION 3
    TestPage.prototype.bmi1 = function () {
        this.value_extra = 2;
        this.value = 0;
    };
    TestPage.prototype.bmi2 = function () {
        this.value = 1;
    };
    TestPage.prototype.bmi3 = function () {
        this.value = 3;
    };
    //QUESTION 4
    TestPage.prototype.waist1 = function () {
        this.value_extra = 2;
        this.value = 0;
    };
    TestPage.prototype.waist2 = function () {
        this.value = 3;
    };
    TestPage.prototype.waist3 = function () {
        this.value = 4;
    };
    //QUESTION 5
    TestPage.prototype.bloodpressure_extra = function () {
        this.value_extra = 2;
        this.value = 0;
    };
    TestPage.prototype.bloodpressure = function () {
        this.value = 2;
    };
    //QUESTION 6
    TestPage.prototype.bloodglucose_extra = function () {
        this.value_extra = 2;
        this.value = 0;
    };
    TestPage.prototype.bloodglucose = function () {
        this.value = 5;
    };
    //QUESTION 7
    TestPage.prototype.activitylow_extra = function () {
        this.value_extra = 2;
        this.value = 0;
    };
    TestPage.prototype.activitylow = function () {
        this.value = 2;
    };
    //QUESTION 8
    TestPage.prototype.vegetables = function () {
        this.value = 1;
    };
    TestPage.prototype.vegetables_extra = function () {
        this.value_extra = 2;
        this.value = 0;
    };
    //QUESTION 9
    TestPage.prototype.familyhistory1 = function () {
        this.value_extra = 2;
        this.value = 0;
    };
    TestPage.prototype.familyhistory2 = function () {
        this.value = 3;
    };
    TestPage.prototype.familyhistory3 = function () {
        this.value = 5;
    };
    //FinTest
    TestPage.prototype.finishtest = function () {
        this.router.navigate(['/tabs/tab3']);
        this.riskcounter = 0;
        this.questionCounter = 1;
        this.value = 0;
        this.value_extra = 0;
    };
    TestPage = tslib_1.__decorate([
        Component({
            selector: 'app-test',
            templateUrl: './test.page.html',
            styleUrls: ['./test.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], TestPage);
    return TestPage;
}());
export { TestPage };
//# sourceMappingURL=test.page.js.map