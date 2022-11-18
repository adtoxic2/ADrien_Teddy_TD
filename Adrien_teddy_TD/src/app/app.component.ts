import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Adrien_teddy_TD';
  constructor() { }

  public color: string = "";

  ngOnInit(): void {
  }

  public setColor(newColor: string){
    this.color=newColor;
  }

}
