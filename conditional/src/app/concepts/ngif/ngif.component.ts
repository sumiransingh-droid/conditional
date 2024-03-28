import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent{

  isLoggedIn:boolean=false;

  emp:any;

  ngOnInit():void{
    setTimeout(() =>{
      this.emp ={
        name:"Jhon",
        age:23,
        position:"Ui/Ux Designer"
      }
    }, 2000);
  }


  employee={
    name:"Jhon",
    age:23,
    position:"Ui/Ux Designer",
    active:false

  }

}
