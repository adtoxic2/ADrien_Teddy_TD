import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carre-bd',
  templateUrl: './carre-bd.component.html',
  styleUrls: ['./carre-bd.component.css']
})
export class CarreBDComponent implements OnInit {
  @Output() newColorEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public addNewColor(value: string){
    this.newColorEvent.emit(value);
  }

}
