import { Component, OnInit } from '@angular/core';
import Contractors from '../interfaces/contractors';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  viewButton: boolean = true;


    tableData: Contractors[] = [
    {
    id: 1,
    contrator: 'Jhoan #108249',
    noOfRides: 42,
    totPeriod: 1476.60,
    cost: 25.55
    },
    {
    id: 2,
    contrator: 'Jhoan #108249',
    noOfRides: 42,
    totPeriod: 1476.60,
    cost: 25.55
    },
    {
    id: 3,
    contrator: 'Jhoan #108249',
    noOfRides: 42,
    totPeriod: 1476.60,
    cost: 25.55
    },
    {
    id: 4,
    contrator: 'Jhoan #108249',
    noOfRides: 42,
    totPeriod: 1476.60,
    cost: 25.55
    },
    {
    id: 5,
    contrator: 'Jhoan #108249',
    noOfRides: 42,
    totPeriod: 1476.60,
    cost: 25.55
    },
    {
    id: 6,
    contrator: 'Jhoan #108249',
    noOfRides: 42,
    totPeriod: 1476.60,
    cost: 25.55
    },
    {
    id: 7,
    contrator: 'Jhoan #108249',
    noOfRides: 42,
    totPeriod: 1476.60,
    cost: 25.55
    },
    {
    id: 8,
    contrator: 'Jhoan #108249',
    noOfRides: 42,
    totPeriod: 1476.60,
    cost: 25.55
    },
];
dataLength: number = this.tableData.length;
  ngOnInit(): void {
  }
  onToggle(){
    this.viewButton = !this.viewButton;
  }

}
