import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  offerDetails = [
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
      isIcon:false
    },
    {
      header:"Background Verification",
      date:"",
      isIcon:false
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
