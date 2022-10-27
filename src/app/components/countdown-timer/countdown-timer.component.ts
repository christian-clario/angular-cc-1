import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css'],
})
export class CountdownTimerComponent implements OnInit {
  intervalId = 0;
  message = '';

  constructor() {}

  ngOnInit() {
    this.initCountdown();
  }

  private initCountdown() {
    this.intervalId = window.setInterval(() => {
      var remainingSeconds = moment.duration(moment.utc().diff(moment.utc('2022-10-27T09:00', 'YYYY-MM-DDTHH:mm')))
        .asSeconds();

      if (remainingSeconds >= 0) {
        this.message = 'Release sent out! :-(';
      } else {
        this.message = `T${Math.round(remainingSeconds)} seconds and counting`;
      }
    }, 1000);
  }
}
