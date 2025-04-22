import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import employees from './data/employees.json';
import { CurrenyFormatterPipe } from '../pipe/curreny-formatter.pipe';
import { Employee } from '../models/Employees.model';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, CurrenyFormatterPipe],
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
  employees: Employee[] = employees;
  showIcon: boolean = false;

  toggleIcon() {
    this.showIcon = !this.showIcon;
  }

}