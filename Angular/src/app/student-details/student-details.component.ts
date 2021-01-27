import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  providers: [StudentService]
})

export class StudentDetailsComponent implements OnInit {

  students: Student;
  
  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.students = new Student();
    this.students.subjectDetails = [];
  }

  addSubject() {
    this.students.subjectDetails.push({
      id:  this.students.subjectDetails.length + 1,
      subject: '',
      marks: null
    });
  }

  removeSubject(i: number) {
    this.students.subjectDetails.splice(i, 1);
  }

  addStudent(){
    console.log(this.students);
    this.studentService.postStudent(this.students).subscribe((res) => {
      alert("success"+res);
    });
  }
} 