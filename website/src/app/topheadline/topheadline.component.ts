import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }

    //display headlines
    topHeadlinesData:any[]=[]


  ngOnInit(): void {

    this.api.topHeadline().subscribe(data=>
      {
        this.topHeadlinesData=data.articles
        console.log(this.topHeadlinesData)
      }
      
      )
 

  }

}
