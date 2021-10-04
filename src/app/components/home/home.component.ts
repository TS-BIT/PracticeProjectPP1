import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title= 'Simple calculator';

  public num1:number = 0;
  public num2:number = 0;
  public num3:number = 0;

add(){
  this.num3=this.num1+this.num2;
}
sub(){
  this.num3=this.num1-this.num2;
}

multiply(){
  this.num3=this.num1*this.num2;
}

divide(){
  this.num3=this.num1/this.num2;
}

reset(){
  this.num3=0;
}


  constructor() { }

  ngOnInit(): void {
  }

}
