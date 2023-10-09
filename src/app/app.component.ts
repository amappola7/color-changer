import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _redValue: number = 255;
  get redValue(): number {
    return this._redValue;
  }
  set redValue(value: number) {
    this._redValue = value;
  }

  private _greenValue: number = 255;
  get greenValue(): number {
    return this._greenValue;
  }
  set greenValue(value: number) {
    this._greenValue = value;
  }

  private _blueValue: number = 255;
  get blueValue(): number {
    return this._blueValue;
  }
  set blueValue(value: number) {
    this._blueValue = value;
  }

  backgroundColor: string = `RGB(${this.redValue}, ${this.greenValue}, ${this.blueValue})`;

  setRedValue(colorValue: number) {
    this.redValue = colorValue;
    this.backgroundColor = `RGB(${this.redValue}, ${this.greenValue}, ${this.blueValue})`;
  }

  setGreenValue(colorValue: number) {
    this.greenValue = colorValue;
    this.backgroundColor = `RGB(${this.redValue}, ${this.greenValue}, ${this.blueValue})`;
  }

  setBlueValue(colorValue: number) {
    this.blueValue = colorValue;
    this.backgroundColor = `RGB(${this.redValue}, ${this.greenValue}, ${this.blueValue})`;
  }
}
