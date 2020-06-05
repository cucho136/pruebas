import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
        , AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br><br>
  <app-css></app-css>
  <br><br>
  <app-clases></app-clases>
  <br><br>
  <p [appResaltado]="'red'">Hola mundo</p>
  <br><br>
  <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
        , AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor");
   }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnChanges(): void {
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

}
