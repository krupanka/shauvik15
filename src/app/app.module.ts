import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule, MatSelectModule,MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { Routes, RouterModule } from'@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CrmComponent } from './components/crm/crm.component';
import { SourcingComponent } from './components/sourcing/sourcing.component';
import { SalesComponent } from './components/sales/sales.component';
import { CrmHeaderComponent } from './components/crm/crm-header/crm-header.component';
import { CrmFooterComponent } from './components/crm/crm-footer/crm-footer.component';
import { CrmPoComponent } from './components/crm/crm-po/crm-po.component';
import { PoEntryComponent } from './components/crm/crm-po/po-entry/po-entry.component';
import { PoTypeEntryComponent } from './components/crm/crm-po/po-entry/po-type-entry/po-type-entry.component';
import { PoEntryCustomerSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-customer-selection/po-entry-customer-selection.component';
import { PoEntryRequesterSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-requester-selection/po-entry-requester-selection.component';
import { PoEntryReceiverSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-receiver-selection/po-entry-receiver-selection.component';
import { PoEntrySupportingInfoComponent } from './components/crm/crm-po/po-entry/po-entry-supporting-info/po-entry-supporting-info.component';
import { PoEntryProductComponent } from './components/crm/crm-po/po-entry/po-entry-product/po-entry-product.component';
import { SearchPipe } from './pipes/search.pipe';

const routes:Routes=[
  { path:'dragdrop',component:PoEntryCustomerSelectionComponent },
  { path:'checkbox',component:PoEntryRequesterSelectionComponent },
  { path:'form',component:PoEntrySupportingInfoComponent},
  { path : 'validation' , component:PoTypeEntryComponent}
]

@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    CrmComponent,
    SourcingComponent,
    SalesComponent,
    CrmHeaderComponent,
    CrmFooterComponent,
    CrmPoComponent,
    PoEntryComponent,
    PoTypeEntryComponent,
    PoEntryCustomerSelectionComponent,
    PoEntryRequesterSelectionComponent,
    PoEntryReceiverSelectionComponent,
    PoEntrySupportingInfoComponent,
    PoEntryProductComponent,
    SearchPipe,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule, 
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,

    RouterModule.forRoot(routes)
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
