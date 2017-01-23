/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ProfileComponent} from './profile.component';
import {ProfileService} from './profile.service';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
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


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [{provide: ProfileService, useClass: MockService}]
    })
    fixture = TestBed.createComponent(ProfileComponent);
    component =  fixture.componentInstance;
    fixture.detectChanges()
  }));

  it('should get users', () => {
    expect(component.users.length).toBe(3);
  });

  it('should repeat users', () => {
    let divs = fixture.nativeElement.querySelectorAll('div')
    expect(divs.length).toBe(3);
    expect(divs[0].textContent).toBe('Игорь Савин');
    expect(divs[1].textContent).toBe('Андрей Иващенко');
  });
});
