import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { youtubeKeys } from '../../environments/environment.prod'

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  public fetchData() {
    return this.http.get(
      `${youtubeKeys.apiUrl}?q=dota2&key=${youtubeKeys.apiKey}&part=snippet`
    )
  }
}
