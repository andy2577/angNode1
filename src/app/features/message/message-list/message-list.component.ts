import { Component, OnInit } from '@angular/core';
import { MessageListService } from './message-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: any[];
  id: string;
  constructor(private messageListService: MessageListService,
    private route: ActivatedRoute,
    private location: Location
    ) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.messageListService.getMessages(this.id).subscribe(
      res => this.messages = res,
      err => console.error(err)
    );
  }

}
