import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  employees:any[] = ['Jhon','Max','Robert']

  employeesall:any=[
    {
      id:1,
      name:'Jhon',
      age:30,
      Department:'HR',
      salary: 50000,
      skills:['html','css']
    },
    {
      id:2,
      name:'Max',
      age:35,
      Department:'HR',
      salary: 50000,
      skills:['html','vue','python']
    },
    {
      id:3,
      name:'Tom',
      age:40,
      Department:'HR',
      salary: 50000,
      skills:['angular','css']
    },
    {
      id:4,
      name:'Sam',
      age:27,
      Department:'HR',
      salary: 50000,
      skills:['python','html','c++']
    }
  ]

}
