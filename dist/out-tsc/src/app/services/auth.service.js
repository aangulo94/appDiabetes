import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
var AuthenticateService = /** @class */ (function () {
    function AuthenticateService() {
    }
    AuthenticateService.prototype.registerUser = function (value) {
        return new Promise(function (resolve, reject) {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AuthenticateService.prototype.loginUser = function (value) {
        return new Promise(function (resolve, reject) {
            firebase.auth().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AuthenticateService.prototype.logoutUser = function () {
        return new Promise(function (resolve, reject) {
            if (firebase.auth().currentUser) {
                firebase.auth().signOut()
                    .then(function () {
                    console.log("LOG Out");
                    resolve();
                }).catch(function (error) {
                    reject();
                });
            }
        });
    };
    AuthenticateService.prototype.userDetails = function () {
        return firebase.auth().currentUser;
    };
    AuthenticateService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], AuthenticateService);
    return AuthenticateService;
}());
export { AuthenticateService };
//# sourceMappingURL=auth.service.js.map