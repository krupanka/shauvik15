import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import{ Router, ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoEntryServicesService } from 'src/app/scrvices/crm/po/po-entry/po-entry-services.service';



@Component({
  selector: 'app-po-entry-customer-selection',
  templateUrl: './po-entry-customer-selection.component.html',
  styleUrls: ['./po-entry-customer-selection.component.css']
})
export class PoEntryCustomerSelectionComponent implements OnInit {
query:string='';
id='';
list:Object[]=[];
selected_data=[];
selected_id=[];

customerselectionlist:Object[]=[];
constructor(private poEntryServicesService:PoEntryServicesService,
  private router:Router, private route:ActivatedRoute) { }
 

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex,
                        );
    }
    console.log(event.container.data);
    this.selected_data = event.container.data;
  }
  ngOnInit(){
   
  
  }
  
  dragid(event){
   
      for(let d of this.selected_data)
      this.selected_id.push(d['id']);
      console.log(this.selected_id);


}
}
