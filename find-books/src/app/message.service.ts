import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  constructor() {}

  getMessages(): string[] {
    return this.messages;
  }

  pushMessage(message: string): void {
    const time = this.getTime();
    this.messages.push(`${time} - ${message}`);
  }

  getTime(): string {
    return new Date().toDateString() + ', ' + new Date().toLocaleTimeString();
  }

  clearMessages(): void {
    this.messages = [];
  }
}
