import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-table',
  templateUrl: './widget-table.component.html',
  styleUrls: ['./widget-table.component.scss']
})
export class WidgetTableComponent implements OnInit {

  widgetData={
    header:"Dropped",
    subHeaders:[
      "Candidate Details",
      "Interview schedule",
      "Reference Check",
      "Comments"
    ],
    imageObject:[
      {
        thumbImage:"./../../assets/images/profile-pic.jpeg"
      },
      {
        thumbImage:"./../../assets/images/profile-pic.jpeg"
      },
      {
        thumbImage:"./../../assets/images/profile-pic.jpeg"
      },
      {
        thumbImage:"./../../assets/images/profile-pic.jpeg"
      }
    ],
    widgetRows :[
      {
        profileURL:"./../../assets/images/profile-pic.jpeg",
        name:"Shridhar Joshi",
        position:"Director, Piramal Enterprises",
        location:"Mumbai",
        offerDetails : [
          {
            header:"No Hire",
            date:"1 Jul 2018",
            isIcon:true,
            iconName:"dislike",
            dropdownStatus:false,
          },
          {
            header:"No Hire",
            date:"1 Jul 2018",
            isIcon:true,
            iconName:"dislike",
            dropdownStatus:false,
          },
          {
            header:"",
            date:"1 Jul 2018",
            isIcon:true,
            iconName:"calendar",
            dropdownStatus:false,
          },
          {
            header:"",
            date:"1 Jul 2018",
            isIcon:true,
            iconName:"calendar",
            dropdownStatus:false,
          }
        ],
        docName:"DOCUMENT",
        referenceCheck:true,
        references:[
          7,3
        ]
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
