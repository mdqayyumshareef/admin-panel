import { Component, OnInit } from '@angular/core';
import { Customer } from '../../store/models/customer.model';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

    displayedColumns: string[] = ['ID', 'name'];
    dataSource: Customer[] = [{ ID: 1, name: 'Briyn' }];

    constructor() { }

    ngOnInit() {
    }

}
