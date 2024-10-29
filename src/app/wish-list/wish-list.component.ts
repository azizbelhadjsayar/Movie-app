import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  constructor(public movieService: MovieService) {}

  
  showDetails(movie:any) {
      this.movieService.selectedMovieDetails = movie;
      this.movieService.showWishList=false;

      if (this.movieService.selectedMovieDetails.imdbID in this.movieService.wishList) {
        this.movieService.HeartStyle = {
          'position': 'absolute',
          'right': '30px',
          'top': '30px',
          'font-size': '30px',
          'color': 'red',
          'cursor': 'pointer'
        };
      }
      else {
        this.movieService.HeartStyle = {
          'position': 'absolute',
          'right': '30px',
          'top': '30px',
          'font-size': '30px',
          'color': 'white',
          'cursor': 'pointer'
        };
      }
    }
}
