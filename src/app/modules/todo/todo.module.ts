import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
    declarations: [
        TodoComponent,
        TodoListComponent
    ],
    imports: [
        CommonModule,
        TodoRoutingModule
    ]
})
export class TodoModule { }
