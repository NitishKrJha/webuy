import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'categorylist',
    loadChildren: () => import('./pages/categorylist/categorylist.module').then( m => m.CategorylistPageModule)
  },
  {
    path: 'productlist',
    loadChildren: () => import('./pages/productlist/productlist.module').then( m => m.ProductlistPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'productdetail',
    loadChildren: () => import('./pages/productdetail/productdetail.module').then( m => m.ProductdetailPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pro-details',
    loadChildren: () => import('./pages/pro-details/pro-details.module').then( m => m.ProDetailsPageModule)
  },
  {
    path: 'cart-list',
    loadChildren: () => import('./pages/cart-list/cart-list.module').then( m => m.CartListPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./pages/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'addeditaddress',
    loadChildren: () => import('./pages/addeditaddress/addeditaddress.module').then( m => m.AddeditaddressPageModule)
  },
  {
    path: 'orderlist',
    loadChildren: () => import('./pages/orderlist/orderlist.module').then( m => m.OrderlistPageModule)
  },
  {
    path: 'orderdetail',
    loadChildren: () => import('./pages/orderdetail/orderdetail.module').then( m => m.OrderdetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
