import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  @Output() eventMessage = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendMessage(): void {
    this.eventMessage.emit('Hello from child');
  }
}
