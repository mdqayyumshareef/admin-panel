import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        MainLayoutComponent
    ],
    imports: [
        CommonModule,
        NgMaterialModule,
        RouterModule
    ],
    exports: [
        MainLayoutComponent
    ]
})
export class LayoutModule { }
