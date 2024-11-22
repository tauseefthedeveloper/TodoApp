import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterLoginComponent } from './pages/register-login/register-login.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { authguardGuard } from './service/authguard.guard';
import { TodoCreateComponent } from './pages/todo-create/todo-create.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
    { path:'' , redirectTo:'login-register', pathMatch:'full' },
    { path:'login-register', component:RegisterLoginComponent },
    { 
        path:'layout' , component:LayoutComponent, canActivate:[authguardGuard],
        children: [
            { path:'home' , component:HomeComponent, canActivate:[authguardGuard], },
            { path:'todo-list' , component:TodoListComponent, canActivate:[authguardGuard] },
            { path:'add-todo' , component:TodoCreateComponent, canActivate:[authguardGuard] },
            { path: 'add-todo/:index', component: TodoCreateComponent, canActivate: [authguardGuard] },
        ]
    },
];
