import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  backgroundColor: string = `RGB(255, 255, 255)`;
  redValue: number = 255;
  greenValue: number = 255;
  blueValue: number = 255;

  setBackgroundColor(): void {
    this.backgroundColor = `RGB(${this.redValue}, ${this.greenValue}, ${this.blueValue})`;
  }

  setColorValue(colorValue: number, color: string): void {
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

    this.setBackgroundColor();
  }
}
