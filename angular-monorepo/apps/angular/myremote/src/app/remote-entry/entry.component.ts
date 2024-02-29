import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'angular-monorepo-myremote-entry',
  template: `<angular-monorepo-nx-welcome></angular-monorepo-nx-welcome>`,
})
export class RemoteEntryComponent {}
