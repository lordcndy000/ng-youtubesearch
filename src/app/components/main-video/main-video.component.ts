import { Component, OnInit } from '@angular/core'
import { AppService } from '../../providers/app.service'
import { youtubeKeys } from '../../../environments/environment.prod'
import 'rxjs/Rx'

@Component({
  selector: 'app-main-video',
  templateUrl: './main-video.component.html',
  styleUrls: ['./main-video.component.css']
})
export class MainVideoComponent implements OnInit {
  result: any
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.fetchData().subscribe(data => {
      this.result = data
      // this.result = JSON.parse(data._body)
      console.log(this.result)
    })
    // .map(res => res.json())
    // .map(res => res.items)
  }
}
