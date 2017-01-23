import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OpaqueToken} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from './chat/chat.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileService} from './profile/profile.service';
import {DefaultComponent} from './home/default/default.component';
import {OnPushComponent} from './home/on-push/on-push.component';
import {CartComponent} from './cart/cart.component';

import {CartService} from './cart.service'
export const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'chat1', component: ChatComponent, outlet: "aux1"},
  {path: 'chat2', component: ChatComponent, outlet: "aux2"},
  {path: 'lazy', loadChildren: 'app/lazy/lazy.module'},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
]


class A {
  public name: string = 'I am A'
}
class B {
  public name: string = 'I am B'
}
export class C {

}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    ProfileComponent,
    DefaultComponent,
    OnPushComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProfileService, CartService,
    {provide: 'URL', useValue: ''}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

@NgModule({
  declarations: [
    CartComponent
  ],
  exports: [CartComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CartService,
    {provide: 'C', useClass: A},
    {provide: 'C', useClass: B}],
  bootstrap: [CartComponent]
})
export class CartModule {
}
