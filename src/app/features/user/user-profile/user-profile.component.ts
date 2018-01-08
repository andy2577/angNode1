import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserApiService } from '../user-api.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id: string;
  user = {};
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private apiServic: UserApiService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = this.apiServic.getProfile(this.id).subscribe(
      (res) => this.user = res,
      (err) => console.error(err)
    );
  }

}
