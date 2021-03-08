import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor( private service: EventServiceService,
    
    private _router: Router) {  }
    
  ngOnInit() {
    this.service.getSpecial()
      .subscribe(
        (res:special[]) => this.specialEvents = res,
        err => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              this._router.navigate(['/login'])
            }
          }
        }
        
      )
  }
  }