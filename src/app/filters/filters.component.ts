import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  year: string = '';
  period: string = '';
  state: string = '';
  contractor: string = '';
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }

  onClear(){
    this.year = '';
    this.period = '';
    this.state = '';
    this.contractor = '';
  }
}
