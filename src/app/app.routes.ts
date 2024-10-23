import { Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { SobreComponent } from './pagina/sobre/sobre.component';
import { ContatoComponent } from './pagina/contato/contato.component';
import { EventosComponent } from './pagina/eventos/eventos.component';

export const routes: Routes = [
    {path:'inicio', component: InicioComponent},
    {path:'sobre',component:SobreComponent},
    {path:'contato',component:ContatoComponent},
    {path:'eventos' ,component:EventosComponent}
];
