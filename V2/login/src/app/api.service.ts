import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Machine, Job, Timecard } from './models'; 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url: string = "http://127.0.0.1:8000/machine/";
  private _url2: string = "http://127.0.0.1:8000/job/";
  private _url3: string = "http://127.0.0.1:8000/timecard/";
  constructor(private http: HttpClient) { }

  //============================= Machine===============================\\
  getMachines(): Observable<Machine[]>{
    return this.http.get<Machine[]>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
  getMachineById(id:number): Observable<Machine[]>{
    return this.http.get<Machine[]>(this._url + id).pipe(catchError(this.errorHandler)); 
  }
  postMachine(empData: any): Observable<Machine[]>{
    return this.http.post<Machine[]>(this._url, empData).pipe(catchError(this.errorHandler));
  }
  updateMachine(id:number, empData: any): Observable<Machine[]>{
    console.log(empData);
    console.log(this._url + id);
    return this.http.put<Machine[]>(this._url + id,empData).pipe(catchError(this.errorHandler));

  }

  deleteMachine(id:any){
    return this.http.delete(this._url + id);
  }

  //===========================Job======================================\\
  getJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(this._url2).pipe(catchError(this.errorHandler));
  }
  getJobById(id: number): Observable<Job[]>{
    return this.http.get<Job[]>(this._url2 + id).pipe(catchError(this.errorHandler));
  }

  postJob(empData: any): Observable<Job[]>{
    return this.http.post<Job[]>(this._url2,empData).pipe(catchError(this.errorHandler));
  }

  updateJob(id: number, empData: any): Observable<Job[]>{
    console.log(empData);
    console.log(this._url2 + id);
    return this.http.put<Job[]>(this._url2 + id,empData).pipe(catchError(this.errorHandler));
  }

  deleteJob(id:any){
    return this.http.delete(this._url2 + id);
  }

  //===========================Timecard==================================\\
  getTimecards(): Observable<Timecard[]>{
    return this.http.get<Timecard[]>(this._url3).pipe(catchError(this.errorHandler));
  }

  getTimecardById(id: number): Observable<Timecard[]>{
    return this.http.get<Timecard[]>(this._url3 + id).pipe(catchError(this.errorHandler));
  }

  postTimecard(empData: any): Observable<Timecard[]>{
    return this.http.post<Timecard[]>(this._url3,empData).pipe(catchError(this.errorHandler));
  }

  updateTimecard(id: number, empData:any): Observable<Timecard[]>{
    console.log(empData);
    console.log(this._url3 + id);
    return this.http.put<Timecard[]>(this._url3 + id,empData).pipe(catchError(this.errorHandler));
  }

  deleteTimecard(id:any){
    return this.http.delete(this._url3 + id);
  }
}
