import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

    isSidebarOpen = true;
    constructor() { }

    ngOnInit() {}

    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }
}