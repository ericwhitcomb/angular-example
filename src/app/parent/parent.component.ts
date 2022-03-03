import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  counter: number;
  showLogs: boolean = true;

  // click handler to cause state change for showing loop inside component lifecycle
  incrementCounter(): void {
    if (this.showLogs) console.log('Parent: incrementCounter()');
    this.counter = this.counter + 1;
  }

  decrementCounter(): void {
    if (this.showLogs) console.log('Parent: decrementCounter()');
    this.counter = this.counter - 1;
  }

  // all component lifecycle methods in order
  constructor() {
    if (this.showLogs) console.log('Parent: Constructor()');
    this.counter = 0;
  }

  ngOnInit(): void {
    if (this.showLogs) console.log('Parent: OnInit()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.showLogs) console.log('Parent: OnChanges()');
  }

  ngDoCheck(): void {
    if (this.showLogs) console.log('Parent: DoCheck()');
  }

  ngAfterContentInit(): void {
    if (this.showLogs) console.log('Parent: AfterContentInit()');
  }

  ngAfterContentChecked(): void {
    if (this.showLogs) console.log('Parent: AfterContentChecked()');
  }

  ngAfterViewInit(): void {
    if (this.showLogs) console.log('Parent: AfterViewInit()');
  }

  ngAfterViewChecked(): void {
    if (this.showLogs) console.log('Parent: AfterViewChecked()');
  }

  ngOnDestroy(): void {
    if (this.showLogs) console.log('Parent: OnDestroy()');
  }
}
