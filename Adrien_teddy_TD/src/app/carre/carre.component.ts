import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.css']
})
export class CarreComponent implements OnInit {

  constructor() { }

  public color: string = "";

  ngOnInit(): void {
  }

  @Output() newColorEvent: EventEmitter<string> = new EventEmitter<string>();

  public setColor(newColor: string){
    this.color=newColor;
    this.newColorEvent.emit(newColor);
  }
}
