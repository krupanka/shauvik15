import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoEntryServicesService } from 'src/app/scrvices/crm/po/po-entry/po-entry-services.service';





@Component({
  selector: 'app-po-entry-requester-selection',
  templateUrl: './po-entry-requester-selection.component.html',
  styleUrls: ['./po-entry-requester-selection.component.css']
})
export class PoEntryRequesterSelectionComponent implements OnInit {
  quotation_id="";
  products=[];
  quotation_lineitems = [];
 
 
  constructor(private poEntryServicesService:PoEntryServicesService,
    private router:Router,private route:ActivatedRoute, private formBuilder: FormBuilder) { }
  
    

    ngOnInit() {
      let quot_id="ec57ccf3-cc37-400c-b699-16b25c045111";
      this.PoProductSelectionPage(quot_id)
    }
    PoProductSelectionPage(quot_id){
      console.log(quot_id);
      this.poEntryServicesService.getPoProductSelectionList(quot_id).subscribe((data)=>{  // get method
       this.products=data;
        console.log(this.products);  
        
    })
  }
 
  }  


  

