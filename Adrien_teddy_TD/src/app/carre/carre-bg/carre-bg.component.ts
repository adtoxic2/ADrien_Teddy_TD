import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carre-bg',
  templateUrl: './carre-bg.component.html',
  styleUrls: ['./carre-bg.component.css']
})
export class CarreBGComponent implements OnInit {
  @Output() newColorEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public addNewColor(value: string){
    this.newColorEvent.emit(value);
  }

}
