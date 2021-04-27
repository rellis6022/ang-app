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
        <p><strong/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio facilisis mauris sit amet massa vitae tortor condimentum. Sapien eget mi proin sed libero enim sed. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque</strong></p>

        <p><strong>1. FOMC press conference recaps Fed policy stance</strong></p>

        <p>Scelerisque viverra mauris in aliquam sem. Ultrices dui sapien eget mi proin sed libero enim. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Aenean et tortor at risus viverra. Rhoncus dolor purus non enim praesent elementum. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cras tincidunt lobortis feugiat vivamus at augue eget. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Sit amet tellus cras adipiscing.</p>
        <p>Vitae congue mauris rhoncus aenean vel. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eget est lorem ipsum dolor sit amet consectetur. Diam sit amet nisl suscipit adipiscing bibendum est. Porta non pulvinar neque laoreet suspendisse interdum. Ullamcorper.
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
