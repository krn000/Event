import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';

export interface special {
  name: String;
  description: String;
  date: Date
}

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})

export class SpecialComponent implements OnInit {

  specialEvents: special[] = []

  constructor( private service: EventServiceService) {  }
    
  ngOnInit() {
    this.service.getSpecial()
      .subscribe(
        (res:special[]) => this.specialEvents = res,
        err => console.log(err)
      )
  }
  }