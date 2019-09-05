import { Component } from '@angular/core';
import { IPeopleResults } from './services/interfacePeopleResults';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Star Wars';
  message: IPeopleResults=null;
  
  update = (value: IPeopleResults) => {
    this.message=value;
  }


}
