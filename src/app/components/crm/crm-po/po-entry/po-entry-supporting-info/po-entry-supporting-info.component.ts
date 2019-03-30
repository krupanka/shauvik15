
import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

import { FormBuilder,FormControl, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import{ Router, ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoEntryServicesService } from 'src/app/scrvices/crm/po/po-entry/po-entry-services.service';
import  { PoEntryCustomerTable }from '../../../../../interface/crm/po/po-entry/po-entry-customer-table'; 
import  { PoEntryNewCustomer }from '../../../../../interface/crm/po/po-entry/po-entry-new-customer'; 
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-po-entry-supporting-info',
  templateUrl: './po-entry-supporting-info.component.html',
  styleUrls: ['./po-entry-supporting-info.component.css']
})
export class PoEntrySupportingInfoComponent implements OnInit {
  
 dataSource = new UserDataSource(this.poEntryServicesService);
 displayedColumns =['name'];//'description', 'model','brand','product_code','part_number','pack_size','moq','hsn_code','gst','quantity','uom','unit_price','lead_time'];

 @ViewChild(MatPaginator) paginator : MatPaginator;
 @ViewChild(MatSort) sort : MatSort;
 
 ngAfterViewInit(){
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
applyfilter(filterValue : string) {
  filterValue = filterValue.trim();
  filterValue = filterValue.toLocaleLowerCase();
  this.dataSource.filter =filterValue;
}
  constructor(private poEntryServicesService:PoEntryServicesService,
    private router:Router,private route:ActivatedRoute, private formBuilder: FormBuilder) { }
  
    ngOnInit() {
     
    }
}
  
 
export class UserDataSource extends DataSource<any>{
  paginator: MatPaginator;
  sort: MatSort;
  filter: string;
  constructor(private poEntryServicesService : PoEntryServicesService){
    super();
  }
  connect():Observable<PoEntryNewCustomer[]>{
   
    return this.poEntryServicesService.getPoEntryCustomerSelection();

  }
  disconnect(){

  }
  
}