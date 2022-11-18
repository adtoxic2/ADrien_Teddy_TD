import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carre-hd',
  templateUrl: './carre-hd.component.html',
  styleUrls: ['./carre-hd.component.css']
})
export class CarreHDComponent implements OnInit {
  @Output() newColorEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  public addNewColor(value: string){
    this.newColorEvent.emit(value);
  }

}
