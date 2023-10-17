import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderControl = new FormControl(255);

  @Input() color!: string;
  @Output() sliderValue = new EventEmitter<number>();

  // onSliderValueChange(): void {
  //   this.sliderValue.emit(this.sliderControl.value!);
  // }

  ngOnInit() {
    // This observable listens to all the changes in the slider control and immediately it emites those changes.
    this.sliderControl.valueChanges
    .subscribe((value) => this.sliderValue.emit(value || 0));
  }
}