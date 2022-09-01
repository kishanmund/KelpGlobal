import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

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
          isIcon:false
        },
        {
          header:"Offer Accepted on",
          date:"23 Jul 2020",
          isIcon:false
        },
        {
          header:"Date of Joining",
          date:"1 Sep 2020",
          isIcon:false
        },
        {
          header:"Status",
          date:"",
          isIcon:true,
          iconName:"approved"
        },
        {
          header:"Background Verification",
          date:"",
          isIcon:true,
          iconName:"approved"
        },
      ],
      docName:"DOCUMENT",
      referenceCheck:false,
      references:[]
    },
    {
      header:"Dropped",
      profileURL:"./../../assets/images/profile-pic.jpeg",
      name:"Shridhar Joshi",
      position:"Director, Piramal Enterprises",
      location:"Mumbai",
      offerDetails : [
        {
          header:"No Hire",
          date:"1 Jul 2018",
          isIcon:true,
          iconName:"dislike"
        },
        {
          header:"No Hire",
          date:"1 Jul 2018",
          isIcon:true,
          iconName:"dislike"
        },
        {
          header:"",
          date:"1 Jul 2018",
          isIcon:true,
          iconName:"calendar"
        },
        {
          header:"",
          date:"1 Jul 2018",
          isIcon:true,
          iconName:"calendar"
        },
        {
          header:"",
          date:"1 Jul 2018",
          isIcon:true,
          iconName:"calendar"
        },
      ],
      docName:"DOCUMENT",
      referenceCheck:true,
      references:[
        7,3
      ]
    }
  ]

  

  constructor() { }

  ngOnInit() {
  }

}
