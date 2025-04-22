import { Component, OnInit } from '@angular/core';
import employees from './data/employees.json';

@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {

  // created default constructor
  constructor() {
  }

  // run when component initializes
  ngOnInit(): void {
    console.log('Method not implemented.');
  }

  title: string = "Employee Management Solution";
  employees: any[] = employees;
  showIcon: boolean = false;

  toggleIcon() {
    this.showIcon = !this.showIcon;
  }

}