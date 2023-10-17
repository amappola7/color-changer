import { Component } from '@angular/core';
import { colors } from './data/colors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colorsList = colors;
  backgroundColor: string = `RGB(255, 255, 255)`;
  redValue: number = 255;
  greenValue: number = 255;
  blueValue: number = 255;

  setBackgroundColor(red: number, green: number, blue: number): void {
    this.backgroundColor = `RGB(${red}, ${green}, ${blue})`;
  }

  setColorValueWithSlider(colorValue: number, color: string): void {
    switch(color) {
      case 'red':
        this.redValue = colorValue;
        break;
      case 'green':
        this.greenValue = colorValue;
        break;
      case 'blue':
        this.blueValue = colorValue;
        break;
    }

    this.setBackgroundColor(this.redValue, this.greenValue, this.blueValue);
  }

  setColorValueWithButton(colorValue: number[]) {
    this.setBackgroundColor(colorValue[0], colorValue[1], colorValue[2]);
  }

}
