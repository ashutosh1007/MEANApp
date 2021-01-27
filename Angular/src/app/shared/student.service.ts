import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { Student } from './student.model';
import { SubjectDetail } from './subjectdetails.model';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  subjectDetails: SubjectDetail;
  
  readonly baseURL = 'http://localhost:3000/students';
  students: Student[];

  constructor(private http: HttpClient) { }

  postStudent(student: Student){
    return this.http.post(this.baseURL, student);
  }

  getStudentList(){
    return  this.http.get(this.baseURL);
  }
} 