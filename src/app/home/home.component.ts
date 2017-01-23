import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';

import {CartService} from '../cart.service';
class Profile {
  public constructor(public firstName: string, public lastName: string) {

  }

  public lastChanged() {
    return new Date();
  }
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profile1: Profile;
  public profile2: Profile;
  public isVisible: boolean = true;

  public constructor(private _cartService: CartService) {
  }

  ngOnInit() {
    this.profile1 = new Profile('Igor', 'Nepipenko');
    this.profile2 = new Profile('Vova', 'Loban');
    setTimeout(() => {
      this.isVisible = false;
    }, 5000)
  }

  public items: Observable<number> = Observable.timer(100, 100).take(101)

  public addToCart() {
    this._cartService.setStreamValue = 1;
  }

}
