import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-grid.component.html',
  styleUrl: './user-grid.component.css'
})
export class UserGridComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any) => {
      this.users = data.slice(0, 16); // Show only first 16 users (4x4 matrix)
    });
  }
}