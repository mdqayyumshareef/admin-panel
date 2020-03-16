import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'todo', loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule) },
            { path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule) }
        ]
    },

];

@NgModule({
    imports: [
        LayoutModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
