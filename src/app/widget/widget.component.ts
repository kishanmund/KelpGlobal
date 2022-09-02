import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  currentDropdownIndex 
  enabled=true
  

  widgetRows =[
    {
      header:"Offer Extended",
      profileURL:"./../../assets/images/profile-pic.jpeg",
      name:"Anil Kapoor",
      position:"Director, Piramal Enterprises",
      location:"Mumbai",
      offerDetails : [
        {
          header:"Offer Extended on",
          date:"21 Jul 2020",
          isIcon:false,
          status:false,
          dropdownStatus:false
        },
        {
          header:"Offer Accepted on",
          date:"23 Jul 2020",
          isIcon:false,
          status:false,
          dropdownStatus:false
        },
        {
          header:"Date of Joining",
          date:"1 Sep 2020",
          isIcon:false,
          status:false,
          dropdownStatus:false
        },
        {
          header:"Status",
          date:"",
          isIcon:true,
          iconName:"approved",
          status:true,
          dropdown:true,
          dropdownStatus:false,
        },
        {
          header:"Background Verification",
          date:"",
          isIcon:true,
          iconName:"approved",
          status:true,
          dropdown:true,
          dropdownStatus:false,
        },
      ],
      docName:"DOCUMENT",
      referenceCheck:false,
      references:[]
    }
  ]

  

  constructor() { }

  ngOnInit() {
  }

  selectIcon(value){
    if(value == 'like'){
      this.widgetRows[0].offerDetails[this.currentDropdownIndex].iconName = 'approved'
      
    }
    else if(value == 'reject'){
      this.widgetRows[0].offerDetails[this.currentDropdownIndex].iconName = 'reject'
    }
    else if(value == 'neutral'){
      this.widgetRows[0].offerDetails[this.currentDropdownIndex].iconName = 'neutral'
    }
    this.widgetRows[0].offerDetails[this.currentDropdownIndex].dropdownStatus = false
  }

  onClickDropdown(value,i,j){
   if(i != this.currentDropdownIndex){
    if(this.currentDropdownIndex != undefined){
      this.widgetRows[j].offerDetails[this.currentDropdownIndex].dropdownStatus = false
      this.currentDropdownIndex = i
      this.widgetRows[j].offerDetails[this.currentDropdownIndex].dropdownStatus = !this.widgetRows[j].offerDetails[this.currentDropdownIndex].dropdownStatus
    }
    else{
      this.currentDropdownIndex = i
      this.widgetRows[j].offerDetails[this.currentDropdownIndex].dropdownStatus = !this.widgetRows[j].offerDetails[this.currentDropdownIndex].dropdownStatus
    }
   }
   else if( value == "outside"){
    this.widgetRows[j].offerDetails[this.currentDropdownIndex].dropdownStatus = false
   }
   else{
    this.widgetRows[j].offerDetails[this.currentDropdownIndex].dropdownStatus = !this.widgetRows[j].offerDetails[this.currentDropdownIndex].dropdownStatus
   }
  }

  onClickedOutside(value,i,j){
    this.onClickDropdown("outside",this.currentDropdownIndex,j)
  }

}
