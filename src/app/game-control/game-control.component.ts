import { 
  Component, 
  EventEmitter, 
  OnInit, 
  Output 
} from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

   myVar : any;

//  @Output() incrementValue = new EventEmitter();

  randomValue: number;
  randomArray =  [];

  constructor() { 
    this.randomValue = 100;
  }

  ngOnInit(): void {
  }

  processIncrementValue(){
    this.randomValue = Math.floor((Math.random()*100)+1);
    this.randomArray.push(this.randomValue);
    console.log("generating random number: " + this.randomValue);
  }

  stop(){
    console.log("generating random number: stop " + this.randomValue);
    clearInterval(this.myVar);

  }

  start(){
    console.log("generating random number: start " + this.randomValue);

    this.myVar = setInterval(()=>{this.processIncrementValue()}, 1000);
    // following code won't be showing valye in html component
    //this.myVar = setInterval(this.processIncrementValue, 1000);
  }

}
