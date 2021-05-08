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

  @Output() incrementValue = new EventEmitter<{myValue: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  processIncrementValue(){
    
      var randomNo = Math.floor((Math.random()*100)+1);
      console.log("generating random number: " + randomNo);
    //  this.incrementValue.emit(randomNo);

  }

  stop(){
    clearInterval(this.myVar);

  }

  start(){
    this.myVar = setInterval(this.processIncrementValue, 1000);
  }

}
