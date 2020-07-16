import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  result: string = '0';
  constructor() {}

  /**
   * This is a lifecycle method that is called when this component is initialized.
   */
  ngOnInit(): void {}

  /**
   * Clears the calculator result screen.
   */
  clr(): void {
    this.result = '0';
  }
}
