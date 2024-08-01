
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hello',
  standalone: true, 
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  imageUrl: string = 'https://www.plymouthchiropractic.com/wp-content/uploads/2022/11/welcome-poster-spectrum-brush-strokes-white-background-colorful-gradient-brush-design-vector-paper-illustration-r-welcome-125370796.jpg'; // Image URL
  message: string = '';
  ngOnInit(): void {
    this.title = 'HELLO';
    this.description = 'New Project!! ';
    this.createdAt = new Date();
  
  export class HelloComponent {
    message: string = '';
  
    showMessage(): void {
      console.log('Button clicked!');
      this.message = 'Welcome to our new project';
    }
  }
}



