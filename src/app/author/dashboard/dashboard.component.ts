import { Component, OnInit } from '@angular/core';
import { USERS, AUTHORS, Author, User } from "../../ui-lib/types/user";
import * as ContentEditor from '@uxui-guy/ckeditor5-custom-inline';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:User[] = USERS;
  authors:Author[] = AUTHORS;
  Editor = ContentEditor
  content = `
        <h4>Authoring</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel perspiciatis tempore qui distinctio obcaecati. Quidem saepe similique officia tempore eaque dicta laudantium quia ipsum beatae dolore rerum, non dignissimos, suscipit reiciendis voluptatum? Incidunt maiores eaque nobis praesentium placeat esse voluptatibus, sapiente consequatur, cupiditate reiciendis ea tenetur ullam quos autem possimus!
        </p>`

  onChange(ev:any){
    console.log(ev.editor)
  }

  onSave() {
    console.log('onSave')
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
