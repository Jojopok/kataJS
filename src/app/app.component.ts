import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompatibiliteComponent} from "./compatibilite/compatibilite.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompatibiliteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kata-base';
}
