import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importanción de componentes que se usarán en el Routing
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';

//Rutas necesarias para el funcionamiento adecuado del enrutamiento
//dentro de la aplicación, 1) por defecto, 2) route empleado, 3) route fruta, 4) route cuando ocurre un error
const appRoutes: Routes = [
  {path: '', component: EmpleadoComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: '**', component: EmpleadoComponent}
];

//Procedimiento necesario por angular para cargar el provider de la ruta
export const appRoutingProviders: any[] = [];

//Toma todas las rutas y las agrega al framework para que sean provisionadas
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);