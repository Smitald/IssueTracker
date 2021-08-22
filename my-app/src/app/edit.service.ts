import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditService {


  editLog: string[] = [];
  
  constructor() { }

  save(path: string, value: string) {
    this.editLog.push(`save: ${path}, ${value}`);
  }
}
