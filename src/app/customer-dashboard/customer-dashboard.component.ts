import { Component, OnInit } from '@angular/core';
import  { DataService }  from '../service/data.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})

export class CustomerDashboardComponent implements OnInit {
  displayedColumns: string[] = ['Registration_No', 'Model_Name', 'Vehicle_Type', 'Number_Of_Seat','AC_Avail'];
  
  dataSource:any = [];
  res:any;
  vehiclesData:any=[]
  
  constructor(private dataService: DataService) {
   
  }

  ngOnInit() {
    this.getVehicleData();
   
        
   

  }
  getVehicleData(){
    this.dataService.getVehicleData().subscribe((data) => {
      console.log("data vec",data)
      this.res=data;
      if (this.res.isSuccess == true) {
        this.vehiclesData=this.res.vehicles
        console.log("this.vehiclesData",this.vehiclesData)
      //  this.dataSource=this.vehiclesData

    } else {
        
        alert('Sorry Login Fail');
    }

    })
  }

  // updatevehicledata(data){

  // }
  deletevehicledata(data: { registrationNo: any; }){
    console.log("delete",data.registrationNo)
    this.dataService.deleteVehicleData(data.registrationNo).subscribe((data) => {
      console.log("data vec",data)
      this.res=data;
      if (this.res.isSuccess == true) {
      
        alert('data delete sucess');
    } else {
        
        alert('data not delete ');
    }

    })
  }
}
