import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  messages: string[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.messages = this.messageService.getMessages();
  }
}
