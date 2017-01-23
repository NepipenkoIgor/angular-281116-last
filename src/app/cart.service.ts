import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs";

@Injectable()
export class CartService {

  private static _cartStream:Subject<any> = new Subject();
  constructor() { }

  public get getStream():Observable<any>{
    return CartService._cartStream;
  }

  public set setStreamValue(newValue:number){
    CartService._cartStream.next(newValue)
  }

}
