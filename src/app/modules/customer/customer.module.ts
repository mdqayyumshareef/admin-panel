import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';

@NgModule({
    declarations: [
        CustomerComponent,
        CustomerListComponent
    ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        NgMaterialModule
    ]
})
export class CustomerModule { }
