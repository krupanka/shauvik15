import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators,AbstractControl } from '@angular/forms';

import{ Router, ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoEntryServicesService } from 'src/app/scrvices/crm/po/po-entry/po-entry-services.service';
import  { PoEntryCustomerTable }from '../../../../../interface/crm/po/po-entry/po-entry-customer-table'; 
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-po-type-entry',
  templateUrl: './po-type-entry.component.html',
  styleUrls: ['./po-type-entry.component.css']
})
export class PoTypeEntryComponent   {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}