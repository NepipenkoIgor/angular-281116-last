import {Component, OnInit} from '@angular/core';
import {ProfileService} from './profile.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public users: any[];

  public constructor(private _profileService: ProfileService) {
  }

  ngOnInit() {
    this._profileService.getUsers().subscribe(users => this.users = users)
  }

}
