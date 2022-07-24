import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnDemandStrategy } from './services/on-demand-strategy.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
    data: {
      name: 'About',
    },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    data: {
      name: 'Admin',
    },
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: {
      name: 'Home',
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: OnDemandStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
