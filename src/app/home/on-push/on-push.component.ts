import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {

  @Input('profile')
  public profileValue;

  @Input()
  public items:Observable<number>;

  public counter: number = 0;

  constructor(private _changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
    Observable.fromEvent(window,'resize').subscribe(()=>{})
    // this.items.subscribe(value=>{
    //   this.counter++;
    //   if(this.counter%5 === 0){
    //     this._changeDetectorRef.markForCheck();
    //   }
    // },null,()=>{
    //   this._changeDetectorRef.markForCheck();
    // });
  }

}
