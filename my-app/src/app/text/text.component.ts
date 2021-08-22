import { Component, OnInit, Input } from '@angular/core';
import { EditService } from '../edit.service';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() 
  text: any;

  editmode = false;
  editText = '';

  constructor(public editService:EditService) {}

  ngOnInit() {
  }

  edit() {
    this.editmode = true;
    this.editText = this.text;
  }

  save() {
    this.editmode = false;
    this.text = this.editText;
    this.editService.save('text', this.editText);
  }

  cancel() {
    this.editmode = false;
    this.editText = '';
  }

}