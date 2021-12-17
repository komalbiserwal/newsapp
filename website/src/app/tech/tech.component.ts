import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }

  //display headlines
  topHeadlinesData:any[]=[]


ngOnInit(): void {

  this.api.technology().subscribe(data=>
    {
      console.log(data)
      this.topHeadlinesData=data.articles
      console.log(this.topHeadlinesData)
    }
    
    )


}


}
