import { Routes } from '@angular/router';
import { MainPageComponent } from './core/pages/main-page/main-page.component';
import { AgendamentoComponent } from './core/pages/agendamento/agendamento.component';

export const routes: Routes = [
    {
        path:"",
        component: MainPageComponent
    },
    {
        path:"agendamento",
        component: AgendamentoComponent
    }
];
