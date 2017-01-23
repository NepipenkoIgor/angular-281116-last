import {Component, OnInit, NgZone, Inject} from '@angular/core';
import {CartService} from '../cart.service';
import {C} from '../app.module';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public count: number = 0;

  public constructor(private _cartService: CartService, @Inject('C') private _c,
                     private _ngZone: NgZone) {
  }

  ngOnInit() {
    console.log('Class C', (this._c as any).name)
    this._cartService.getStream.subscribe(value => {
      console.info(value)
      this._ngZone.run(() => {
        this.count += value;
      })

    })
  }

}
