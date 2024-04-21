import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @ViewChild('txtInput')
  text!: ElementRef<HTMLInputElement>;

  @Output()
  onValue:EventEmitter<string> = new EventEmitter();

  emitValue(){
    this.onValue.emit(this.text.nativeElement.value);
  }


  onInput(){
    const text1 = this.text.nativeElement.value;

  }

}
