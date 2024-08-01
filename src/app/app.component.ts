
import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}


