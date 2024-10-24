import { Component } from '@angular/core';
import { ConservationModule } from "./conservationArea/conservation.module";

@Component({
  selector: 'app',
  standalone: true,
  imports: [ConservationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration';
}
