import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carre-hg',
  templateUrl: './carre-hg.component.html',
  styleUrls: ['./carre-hg.component.css']
})
export class CarreHGComponent implements OnInit {
  @Output() newColorEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  public addNewColor(value: string){
    this.newColorEvent.emit(value);
  }

}