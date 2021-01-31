import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an Array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kamar", "AnupKamar@gmail.com", 50000),
    new SalesPerson("John", "Doe", "john.does@gmail.com", 40000),
    new SalesPerson("Claire", "Murphy", "claire@gmail.com", 90000),
    new SalesPerson("Mai", "Truong", "mai@gmail.com", 60000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
