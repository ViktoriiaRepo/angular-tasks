import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tasks';
  name = 'name';
  toggler: boolean = true;

  obj = { age: 18 };

  constructor() {
    console.log('%c Parent component created', 'background: darkgreen');

    setTimeout(() => {
      this.name = 'Vika';
      this.obj = { ...this.obj, age: 20 };
      // this.obj.age = 20; - does not work because link doesn't changes
    }, 3000);
  }

  // ngOnChanges() method is called whenever the values of the input
  // properties(input properties) of the component change.

  ngOnChanges(): void {
    console.log('%c Parent component changes', 'color: red; background: black');
  }

  // ngOnInit() method is called once after the first ngOnChanges()
  // in child component. In parent - is called just once, when the
  // component is initialized.
  ngOnInit(): void {
    console.log('%c ngOnInit', 'color: lightgreen; background: black');
  }

  // ngDoCheck() method is called during every change detection run,
  //  immediately after ngOnChanges() and ngOnInit().
  ngDoCheck(): void {
    console.log('%c ngDoCheck', 'color: yellow; background: black');
  }

  ngAfterContentInit(): void {
    console.log('%c ngAfterContentInit', 'color: blue; background: black');
  }

  // викликається після ngAfterContentInit перший раз, а потім після ngDoCheck
  ngAfterContentChecked(): void {
    console.log('%c ngAfterContentChecked', 'color: purple; background: black');
  }

  ngAfterViewInit(): void {
    console.log('%c ngAfterViewInit', 'color: orange; background: black');
  }

  ngAfterViewChecked(): void {
    console.log('%c ngAfterViewChecked', 'color: pink; background: black');
  }
}
