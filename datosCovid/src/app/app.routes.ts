import{ RouterModule, Routes} from '@angular/router';
import { InformacionComponent } from "./components/informacion/informacion.component";
import { ChartsComponent} from "./components/charts/charts.component";
import {CuestionarioComponent} from "./components/cuestionario/cuestionario.component";
import { ContactoComponent } from "./components/contacto/contacto.component";

//arreglo de rutas 
const APP_ROUTES:Routes=[
    {path: 'info', component:InformacionComponent},
    {path: 'chart', component:ChartsComponent},
    {path: 'test', component:CuestionarioComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: '**', pathMatch:'full', redirectTo:'info'}
   
];
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);