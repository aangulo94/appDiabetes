import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AuthenticateService } from './services/auth.service';
import * as firebase from 'firebase';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsPageModule } from './tabs/tabs.module';
import { Tab1PageModule } from './tab1/tab1.module';
firebase.initializeApp(environment.firebase);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [
                BrowserModule,
                IonicModule.forRoot(),
                AppRoutingModule,
                AngularFireAuthModule,
                ReactiveFormsModule,
                TabsPageModule,
                Tab1PageModule,
                Tab1PageModule,
                Tab1PageModule
            ],
            providers: [
                StatusBar,
                SplashScreen,
                AuthenticateService,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map