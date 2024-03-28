import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
count=0

  counter( type:string ){
    type==='add' ? this.count++: this.count--;
  }



count1=0
plus(){
  this.count1++;
}

show=false
}