/* tslint:disable:no-unused-variable */

import {TestBed, fakeAsync, inject,tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Location} from '@angular/common';
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {ChatComponent} from "./chat/chat.component";
import {routes} from "./app.module";
import {Router} from "@angular/router";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileService} from "./profile/profile.service";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of'
class MockService {
  public getUsers() {
    return Observable.of([
      {"firstName": "Игорь", "surname": "Савин", "country": "ru"},
      {
        "firstName": "Андрей",
        "surname": "Иващенко",
        "photo": "http://i.imgur.com/NktCSrP.png",
        "country": "ua"
      }, {
        "firstName": "Андрей", "surname": "Еременко",
        "photo": "http://i.imgur.com/OVMrkuw.png", "country": "ru"
      }
    ])
  }
}



describe('App: testing component links', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        ChatComponent,
        ProfileComponent
      ],
      providers: [{provide: ProfileService, useClass: MockService}],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    });

  });

  it('should have router links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.nativeElement.querySelector('.home').textContent).toBe('Home');
    expect(fixture.nativeElement.querySelector('.chat1').textContent).toBe('Open Chat 1');
    expect(fixture.nativeElement.querySelector('.chat2').textContent).toBe('Open Chat 2');
    expect(fixture.nativeElement.querySelector('.lazy').textContent).toBe('Lazy');
    expect(fixture.nativeElement.querySelector('.profile').textContent).toBe('Profile');
  });

  it('should be able to navigate to lazy by router API', fakeAsync(inject([Router, Location],
    (router: Router, location: Location) => {
      TestBed.createComponent(AppComponent);
      router.navigate(['profile']);
      tick();
      expect(location.path()).toBe('/profile')
      router.navigateByUrl('/profile');
      tick();
      expect(location.path()).toBe('/profile')
    })))

  it('should be able to redirect on no state', fakeAsync(inject([Router, Location],
    (router: Router, location: Location) => {
      TestBed.createComponent(AppComponent);
      router.navigate(['profileasdasdasdsd']);
      tick();
      expect(location.path()).toBe('/home')
      router.navigateByUrl('/home/asdasd/1');
      tick();
      expect(location.path()).toBe('/home')
    })))

  it('should be able to navigate by click', fakeAsync(inject([Router, Location],
    (router: Router, location: Location) => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      fixture.nativeElement.querySelector('.profile').click();
      tick();
      expect(location.path()).toBe('/profile')

      fixture.nativeElement.querySelector('.home').click();
      tick();
      expect(location.path()).toBe('/home')
    })))
});
