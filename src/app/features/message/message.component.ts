import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  postMessage = '';
  constructor(private messageService: MessageService) { }

  ngOnInit() {

  }

  saveMessage() {
    this.messageService.saveUser({text: this.postMessage});

  }

}
