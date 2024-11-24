import { Component } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-latestupdates',
  imports: [CommentsComponent],
  templateUrl: './latestupdates.component.html',
  styleUrl: './latestupdates.component.scss'
})
export class LatestupdatesComponent {

  img = '../../assets/images/sample.png';

  comments:number =10;
  price =10;

  users = ['pandu','madhi','sai','akil'];

  mode = 2;
  data = 'Angular developer';
  login= 'noname';

  displayName(){
    this.login ='manokumar';
  }
}
