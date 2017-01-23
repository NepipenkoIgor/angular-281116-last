import {Component, OnInit,OnDestroy,OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit,OnDestroy {
  public profileValue;

  @Input()
  public set profile(newValue) {
    if (!newValue) {
      return;
    }
    this.profileValue = newValue;
  };

  constructor() {
    console.log('in constructor', this.profileValue)
  }

  public ngOnInit() {
    console.log('in ngOnInit', this.profileValue)
  }


  public ngOnDestroy(){
    console.log('in ngOnDestroy aaaaaa!!!!', )
  }
}


// constructor
// OnInit
// DoCheck
//  -AfterContentInit
//  -...
// OnDestroy
