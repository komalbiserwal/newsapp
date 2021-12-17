import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';
@Component({
  selector: 'app-bussines',
  templateUrl: './bussines.component.html',
  styleUrls: ['./bussines.component.css']
})
export class BussinesComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }

  //display headlines
  topHeadlinesData:any[]=[]


ngOnInit(): void {

  this.api.bussiness().subscribe(data=>
    {
      this.topHeadlinesData=data.articles
      console.log(this.topHeadlinesData)
    }
    
    )


}

}
