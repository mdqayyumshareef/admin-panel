import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

const materialModule = [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule
];

@NgModule({
    imports: [...materialModule],
    exports: [...materialModule]
})
export class NgMaterialModule { }
