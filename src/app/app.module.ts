import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NgMaterialModule } from './shared/ng-material.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        //Modules
        LayoutModule,
        NgMaterialModule,
        DashboardModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
