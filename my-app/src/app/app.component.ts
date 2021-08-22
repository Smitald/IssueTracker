import { Component} from '@angular/core';
import {TableService} from './table.service'
import { EditService } from './edit.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rows: any
  row: any
  id: any
  title: any
  status: any
  dataSource = [];
  statuscheck = [];
  statuscheck1 = [];
  text = 'BizAnalytics';
  selectedvalue: any;

  constructor(private table: TableService, public editService: EditService) {}


  ngOnInit() {

    this.table.getRows().subscribe((data) => {

      this.dataSource = data;
      this.statuscheck = data.map((val: {
        status: any;
      }) => {
        return val.status
      })
      this.statuscheck1 = this.statuscheck.filter((el, i, a) => i === a.indexOf(el))
      this.change(event, this.dataSource);

    })

  }


  displayedColumns: string[] = ['id', 'title', 'status'];

  change(event: any, dataS: any) {

    if (event.isUserInput) {
      dataS.status = event.source.value
      console.log(dataS.status);
    }

  }

}
