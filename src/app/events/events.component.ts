import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';

export interface response  {
  date: Date;
  description: string;
  name: string;
};

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  events: response[] = []
  
  constructor(private service: EventServiceService) { }
  ngOnInit() {
    this.service.getEvent()
      .subscribe(
        (res:response[]) => this.events = res,
        err => console.log(err)
      )
  }

}
