import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pm-splash',
  templateUrl: './pm-splash.component.html',
  styleUrls: ['./pm-splash.component.css'],
})
export class PmSplashComponent implements OnInit {
  initialLeftPosition: 100;

  getFlagStyle(leftPx: string) {
    const flagStyle = {
      left: leftPx,
    };
    return flagStyle;
  }

  getMonthPosition(leftPx: string) {
    const monthStyle = {
      left: leftPx,
    };
    return monthStyle;
  }

  get PmDuePositions(): Array<number> {
    return [400, 500, 550];
  }

  get MonthNames(): Array<string> {
    const monthNames = [
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
    ];
    const currentMonth = new Date().getMonth();
    return [
      monthNames[
        currentMonth - 2 < 0
          ? 12 - Math.abs(currentMonth - 2)
          : currentMonth - 2
      ],
      monthNames[
        currentMonth - 1 < 0
          ? 12 - Math.abs(currentMonth - 1)
          : currentMonth - 1
      ],
      monthNames[currentMonth],
      monthNames[(currentMonth + 1) % 12],
      monthNames[(currentMonth + 2) % 12],
      monthNames[(currentMonth + 3) % 12],
      monthNames[(currentMonth + 4) % 12],
    ];
  }

  constructor() {}

  ngOnInit(): void {}
}
