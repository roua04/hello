
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-hello',
  standalone: true,
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  imports: [CommonModule], 
  animations: [
    trigger('fadeIn', [
      transition(':enter', [ // Animation pour l'entrée
        style({ opacity: 0 }), // Départ avec opacité 0
        animate('1s', style({ opacity: 1 })) // Animation vers opacité 1 en 1 seconde
      ])
    ])
  ]
})
export class HelloComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  imageUrl: string = 'https://www.plymouthchiropractic.com/wp-content/uploads/2022/11/welcome-poster-spectrum-brush-strokes-white-background-colorful-gradient-brush-design-vector-paper-illustration-r-welcome-125370796.jpg';
  message: string = '';
  clickCount: number = 0;
  ngOnInit(): void {
    this.title = 'HELLO';
    this.description = 'New Project!!';
    this.createdAt = new Date();
  }
  showMessage(): void {
    this.clickCount++;
    if (this.clickCount < 3) {
      this.message = 'Welcome to our new project';
    } else {
      this.message = ''; // Cache le message quand le nombre de clics est supérieur à 3
    }
  }
}
