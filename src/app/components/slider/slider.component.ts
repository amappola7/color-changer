import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  sliderControl = new FormControl(255);

  @Input() color!: string;
  @Output() sliderValue = new EventEmitter<number>();

  onSliderValueChange(): void {
    this.sliderValue.emit(this.sliderControl.value!);
  }
}