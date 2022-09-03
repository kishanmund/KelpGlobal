import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-table',
  templateUrl: './widget-table.component.html',
  styleUrls: ['./widget-table.component.scss']
})
export class WidgetTableComponent implements OnInit {

  widgetData= [
    {
      header:"Prospects",
      subHeaders:[
        {
          width:"275px",
          name:"Candidate Details",
        },
        {
          width:"500px",
          name:"Interview schedule",
        },
        {
          width:"200px",
          name:"Reference Check",
        },
        {
          width:"unset",
          name:"Comments"
        }  
      ],
      
      widgetRows :[
        {
          offerDetails : [
            {
              slider: false,
              body:false
            },
            {
              slider: true,
              body:false,
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
            },
            {
              slider: false,
              body:false,
              header:true,
              values:[
                "Leads",
                "Captured"
              ]
            },
            {
              slider: false,
              body:false
            }
          ],
        },
        {
          offerDetails : [
            {
              profileURL:"./../../assets/images/profile-pic.jpeg",
              name:"Shridhar Joshi",
              position:"Director, Piramal Enterprises",
              location:"Mumbai",
              slider: false,
              body:true,
              profile:true
            },
            {
              columns:[
                  {
                    header:"Hire",
                    date:"1 Jul 2018",
                    isIcon:true,
                    iconName:"like",
                    dropdownStatus:false,
                  },
                  {
                    header:"Awaiting",
                    date:"Feedback",
                    isIcon:true,
                    iconName:"",
                    dropdownStatus:false,
                  },
                  {
                    header:"Undecided",
                    date:"1 Jul 2018",
                    isIcon:true,
                    iconName:"undecided",
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
              slider: false,
              body:true,
              interview:true
            },
            {
              reference:true,
              slider: false,
              body:true,
              interview:true,
              references:[
                7,3
              ]
            },
            {
                
              slider: false,
              body:true,
              comments:true,
              docName:"DOCUMENT",
          referenceCheck:true,
            },
            
          ],
          menuOpen:false
          
        },
        {
          offerDetails : [
            {
              profileURL:"./../../assets/images/profile-pic.jpeg",
              name:"Shridhar Joshi",
              position:"Director, Piramal Enterprises",
              location:"Mumbai",
              slider: false,
              body:true,
              profile:true
            },
            {
              columns:[
                  {
                    header:"Hire",
                    date:"1 Jul 2018",
                    isIcon:true,
                    iconName:"like",
                    dropdownStatus:false,
                  },
                  {
                    header:"Awaiting",
                    date:"Feedback",
                    isIcon:true,
                    iconName:"",
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
                  }
              ],
              slider: false,
              body:true,
              interview:true
            },
            {
              reference:true,
              slider: false,
              body:true,
              interview:true,
              references:[
                7,3
              ]
            },
            {
                
              slider: false,
              body:true,
              comments:true,
              docName:"DOCUMENT",
          referenceCheck:true,
            },
            
          ],
          menuOpen:false
          
        },
        {
          offerDetails : [
            {
              profileURL:"./../../assets/images/profile-pic.jpeg",
              name:"Shridhar Joshi",
              position:"Director, Piramal Enterprises",
              location:"Mumbai",
              slider: false,
              body:true,
              profile:true
            },
            {
              columns:[
                  {
                    header:"Hire",
                    date:"1 Jul 2018",
                    isIcon:true,
                    iconName:"dislike",
                    dropdownStatus:false,
                  },
                  {
                    header:"Awaiting",
                    date:"Feedback",
                    isIcon:true,
                    iconName:"",
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
                  }
              ],
              slider: false,
              body:true,
              interview:true
            },
            {
              reference:true,
              slider: false,
              body:true,
              interview:true,
              references:[
                7,3
              ]
            },
            {
                
              slider: false,
              body:true,
              comments:true,
              docName:"DOCUMENT",
          referenceCheck:true,
            },
            
          ],
          menuOpen:false
        }
      ]
    },
    {
      subheaderExist:false,
      subHeaders:[
        {
          width:"275px",
          name:"Candidate Details",
        },
        {
          width:"500px",
          name:"Interview schedule",
        },
        {
          width:"200px",
          name:"Reference Check",
        },
        {
          width:"unset",
          name:"Comments"
        }  
      ],
      header:"Dropped",
      
      widgetRows :[
        {
          offerDetails : [
            {
              profileURL:"./../../assets/images/profile-pic.jpeg",
              name:"Shridhar Joshi",
              position:"Director, Piramal Enterprises",
              location:"Mumbai",
              slider: false,
              body:true,
              profile:true,
              width:"275px"
            },
            {
              width:"500px",
              columns:[
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
              slider: false,
              body:true,
              interview:true
            },
            {
              reference:true,
              slider: false,
              body:true,
              interview:true,
              references:[
                7,3
              ],
              width:"200px",
            },
            {
                
              slider: false,
              body:true,
              comments:true,
              docName:"DOCUMENT",
          referenceCheck:true,
            }            
          ],
          menuOpen:false
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  menuOpen = false
  previousIndex 
  previousRowIndex
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.widgetData[0].widgetRows, event.previousIndex, event.currentIndex);
  }

  menuToggle(i,index){
    if( this.previousIndex == undefined){
      this.widgetData[index].widgetRows[i].menuOpen = true
      this.previousIndex = i
      this.previousRowIndex=index
    }
    else if(this.previousIndex == i && this.previousRowIndex==index){
      this.widgetData[this.previousRowIndex].widgetRows[this.previousIndex].menuOpen = false
      this.previousIndex = undefined
      this.previousRowIndex= undefined
    }
    else if(this.previousIndex != i){
      this.widgetData[this.previousRowIndex].widgetRows[this.previousIndex].menuOpen = false
      this.previousIndex = undefined
      this.previousRowIndex=undefined
      setTimeout(()=>{
        this.menuToggle(i,index)
      },100)
    }

  }

  onClickedOutside(i,index){
    if(this.widgetData[this.previousRowIndex].widgetRows[this.previousIndex].menuOpen ){
      this.widgetData[this.previousRowIndex].widgetRows[this.previousIndex].menuOpen = false
      if(this.previousIndex != i){
        this.menuToggle(i,index)
      }
    }
   
  }

  


  

}
