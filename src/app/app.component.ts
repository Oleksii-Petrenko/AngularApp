import { Component } from '@angular/core';

export interface Todo {
  id:number
  title:string
  completed:Boolean
  date?:any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle='Angular todo aplication';

  public todos: Todo[] = [
    {id: 1, title:"купить хлеб", completed:false, date: new Date()},
    {id: 2, title:"купить масло", completed:true, date: new Date()},
    {id: 3, title:"купить пиво", completed:false, date: new Date()},
  ]


}
