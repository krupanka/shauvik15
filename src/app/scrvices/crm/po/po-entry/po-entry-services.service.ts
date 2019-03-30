import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import  { PoEntryNewCustomer }from '../../../../interface/crm/po/po-entry/po-entry-new-customer'; 
import  { PoEntryCustomerTable }from '../../../../interface/crm/po/po-entry/po-entry-customer-table'; 
 
 
@Injectable({
  providedIn: 'root'
})
export class PoEntryServicesService {

  constructor(private http: HttpClient) { }
  
  getPoProductSelectionList(quot_id):Observable<PoEntryCustomerTable []>{  
    return this.http.get<PoEntryCustomerTable []>("http://192.168.0.110:8086/api/po_from_customer/customer/"+quot_id+"/quotation_product_list/", //PoEntryrejected lineitem list database API LInk
     {
         headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
      });       
  
  }
  PostProductSelectedPage(quotation_lineitems,quot_id){
    console.log(quotation_lineitems);
    return this.http.post("http://192.168.0.110:8086/api/po_from_customer/customer/"+quot_id+"/quotation_product_selected/",
    
    {
       "quotation_lineitems" : quotation_lineitems
},{
  headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
});
  }
getPoEntryCustomerSelection():Observable<PoEntryNewCustomer[]>{
  return this.http.get<PoEntryNewCustomer[]>("http://192.168.0.110:8086/api/po_from_customer/customer_selection/", //PoEntryCustomerSelection database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

}

