import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Publisher } from '../models/publisher.model';

@Injectable({
  providedIn: 'root',
})
export class PublishersService {
  baseApiURL: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  getAllPublishers(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(`${this.baseApiURL}/publishers`);
  }

  getSinglePublisher(publisherId: number): Observable<Publisher> {
    return this.http.get<Publisher>(
      `${this.baseApiURL}/publishers/${publisherId}`
    );
  }

  addPublisher(publisher: Publisher): Observable<Publisher> {
    return this.http.post<Publisher>(
      `${this.baseApiURL}/publishers`,
      publisher
    );
  }

  editPublisher(publisher: Publisher): Observable<Publisher> {
    return this.http.put<Publisher>(
      `${this.baseApiURL}/publishers/${publisher.id}`,
      publisher
    );
  }

  deletePublisher(publisherId: number): Observable<Publisher> {
    return this.http.delete<Publisher>(
      `${this.baseApiURL}/publishers/${publisherId}`
    );
  }
}
