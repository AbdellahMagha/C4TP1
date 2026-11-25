import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student, STUDENTS } from './models/student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EduManager';
  students: Student[] = STUDENTS;
  searchQuery: string = '';

  get moyenneGenerale(): number {
    if (this.students.length === 0) return 0;
    const total = this.students.reduce((acc, s) => acc + s.moyenne, 0);
    return total / this.students.length;
  }

  get filteredStudents(): Student[] {
    if (!this.searchQuery) return this.students;
    const query = this.searchQuery.toLowerCase();
    return this.students.filter(s =>
      s.nom.toLowerCase().includes(query) ||
      s.prenom.toLowerCase().includes(query)
    );
  }
}
