import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';
@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }

  //display headlines
  topHeadlinesData:any[]=[]


ngOnInit(): void {

  this.api.sport().subscribe(data=>
    {
      this.topHeadlinesData=data.articles
      console.log(this.topHeadlinesData)
    }
    
    )


}


}
