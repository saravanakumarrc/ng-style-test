import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pm-splash',
  templateUrl: './pm-splash.component.html',
  styleUrls: ['./pm-splash.component.css'],
})
export class PmSplashComponent implements OnInit {
  initialLeftPosition: 100;
  pmDuesList: Array<{ dueDate: Date; pmName: string }> = [
    { dueDate: new Date(2020, 9, 25), pmName: 'pm1' },
    { dueDate: new Date(2020, 6, 1), pmName: 'pm2' },
    { dueDate: new Date(2020, 6, 20), pmName: 'pm3' },
  ];

  constructor() {}

  ngOnInit(): void {}

  getLeftPositionStyle(leftPx: string): any {
    const style = {
      left: leftPx,
    };
    return style;
  }

  getUnitStyle() {
    let unitPosition = 0;
    const currentDate = new Date(2020, 9, 20);
    const currentMonthNumber = currentDate.getMonth();
    const currentDayNumber = currentDate.getDate();
    const currentMonthIndex = this.MonthNames.findIndex(
      (p) => p.number === currentMonthNumber
    );
    if (currentMonthIndex >= 0) {
      const monthPosition = currentMonthIndex * 90;
      const dayPosition = currentDayNumber * 3;
      unitPosition = monthPosition + dayPosition;
    }
    const leftPosition = unitPosition - 200 + 'px';
    const style = {
      left: leftPosition,
    };
    return style;
  }

  get PmDuePositions(): Array<{ position: number; text: string }> {
    const pmDuePositions: Array<{ position: number; text: string }> = [];
    this.pmDuesList.forEach((pmDue) => {
      const pmMonth = pmDue.dueDate.getMonth();
      const pmDayNumber = pmDue.dueDate.getDate();
      const pmMonthIndex = this.MonthNames.findIndex(
        (p) => p.number === pmMonth
      );
      if (pmMonthIndex >= 0) {
        const monthPosition = pmMonthIndex * 90;
        const dayPosition = pmDayNumber * 3;
        const finalPosition = monthPosition + dayPosition;
        pmDuePositions.push({ position: finalPosition, text: pmDue.pmName });
      }
    });
    return pmDuePositions;
  }

  get MonthNames(): Array<{ monthName: string; number: number }> {
    const monthNames = [
      { monthName: 'Dec', number: 0 },
      { monthName: 'Jan', number: 1 },
      { monthName: 'Feb', number: 2 },
      { monthName: 'Mar', number: 3 },
      { monthName: 'Apr', number: 4 },
      { monthName: 'May', number: 5 },
      { monthName: 'Jun', number: 6 },
      { monthName: 'Jul', number: 7 },
      { monthName: 'Aug', number: 8 },
      { monthName: 'Sep', number: 9 },
      { monthName: 'Oct', number: 10 },
      { monthName: 'Nov', number: 11 },
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
}
