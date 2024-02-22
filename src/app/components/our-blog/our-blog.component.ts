import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.css']
})
export class OurBlogComponent implements OnInit {
  blogsTab: any= [
    {id:1,title:"blog1",description:"attLorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.aquant",date:"12,5,2023"},
     {id:2,title:"blog2",description:"attLorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.aquant",date:"15,6,2022"},
     
    
];
  constructor() { }

  ngOnInit() {
  }

}
