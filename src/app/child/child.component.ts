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
  Input,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
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
  showLogs: boolean = true;
  @Input() count: number;

  // all component lifecycle methods in order
  constructor() {
    if (this.showLogs) console.log('Child: Constructor()');
  }

  ngOnInit(): void {
    if (this.showLogs) console.log('Child: OnInit()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.showLogs) console.log('Child: OnChanges()');
  }

  ngDoCheck(): void {
    if (this.showLogs) console.log('Child: DoCheck()');
  }

  ngAfterContentInit(): void {
    if (this.showLogs) console.log('Child: AfterContentInit()');
  }

  ngAfterContentChecked(): void {
    if (this.showLogs) console.log('Child: AfterContentChecked()');
  }

  ngAfterViewInit(): void {
    if (this.showLogs) console.log('Child: AfterViewInit()');
  }

  ngAfterViewChecked(): void {
    if (this.showLogs) console.log('Child: AfterViewChecked()');
  }

  ngOnDestroy(): void {
    if (this.showLogs) console.log('Child: OnDestroy()');
  }
}
