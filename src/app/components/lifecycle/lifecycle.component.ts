import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent {
  @Input() title!: string;
  @Input() name!: string;
  @Input() obj!: object;

  text: string = 'Some text';

  constructor() {
    console.log('%c Child component created', 'background: darkgreen');
  }

  // ngOnChanges() method is called whenever the values of the input
  // properties (input properties) of the component change.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c Component changes', 'color: red');
    console.log('changes :>> ', changes);
  }

  // ngOnInit() method is called once after the first ngOnChanges()
  // in child component. In parent - is called just once, when the
  // component is initialized.
  ngOnInit(): void {
    console.log('%c ngOnInit', 'color: lightgreen');
  }

  // ngDoCheck() method is called during every change detection run,
  // immediately after ngOnChanges() and ngOnInit().
  ngDoCheck(): void {
    console.log('%c ngDoCheck', 'color: yellow');
  }

  // ngAfterContentInit() method is called once after the first
  // ngDoCheck().
  ngAfterContentInit(): void {
    console.log('%c ngAfterContentInit', 'color: blue');
  }

  // ngAfterContentChecked() method is called after ngAfterContentInit()
  // and after every subsequent ngDoCheck().
  ngAfterContentChecked(): void {
    console.log('%c ngAfterContentChecked', 'color: purple');
  }

  // ngAfterViewInit() method is called once after the first
  // ngAfterContentChecked().
  ngAfterViewInit(): void {
    console.log('%c ngAfterViewInit', 'color: orange');
  }

  // ngAfterViewChecked() method is called after ngAfterViewInit()
  // and after every subsequent ngAfterContentChecked().
  ngAfterViewChecked(): void {
    console.log('%c ngAfterViewChecked', 'color: pink');
  }

  // ngOnDestroy() method is called once, just before the component
  // is destroyed.
  ngOnDestroy(): void {
    console.log('%c ngOnDestroy', 'color: darkred');
  }
}
