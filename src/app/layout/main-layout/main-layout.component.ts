import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

    isSidebarOpen = true;
    sidebarMode = "side";

    constructor() { }

    ngOnInit() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Any mobile device (phones or tablets).
            this.isSidebarOpen = false;
            this.sidebarMode = "over";
        }
    }

    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }
}