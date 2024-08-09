import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YouTubePlayerModule } from "@angular/youtube-player";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, YouTubePlayerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotasheet-portfolio-client';
}
