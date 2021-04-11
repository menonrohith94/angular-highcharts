import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Feedback } from '../models/feedback';

@Injectable({
    providedIn:'root'
})
export class FeedbackService {
    constructor(private _http: HttpClient) {
 
    }
    getAllTechnologies():Observable<string[]>{
        return this._http.get<string[]>("http://localhost:9090/api/feedbacks");
    }
    getAverageFeedbacks(technology: string): Observable<Feedback[]> {
        return this._http.get<Feedback[]>("http://localhost:9090/api/avgfeedbacks/" + technology);
    }
}