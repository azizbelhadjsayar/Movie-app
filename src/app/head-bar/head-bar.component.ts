import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-head-bar',
  standalone: true,
  imports: [],
  templateUrl: './head-bar.component.html',
  styleUrl: './head-bar.component.css'
})
export class HeadBarComponent {
  constructor(public movieService: MovieService) {}
  displayWishList() {
    this.movieService.selectedMovieDetails="";
    this.movieService.showWishList=true;
  }
}
