import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  buttonColor!: string;
  @Input() colorValue!: number[];
  @Output() changeColor = new EventEmitter<number[]>();

  ngOnInit() {
    this.buttonColor = `RGB(${this.colorValue[0]}, ${this.colorValue[1]}, ${this.colorValue[2]})`;
  }

  onChangeColor(): void {
    this.changeColor.emit(this.colorValue);
  }
}