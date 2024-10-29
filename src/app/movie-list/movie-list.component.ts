import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SearchBarComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies!:any;

  constructor(private movieService: MovieService) {}

  searchMovie(searched:any) {
    this.movieService.selectedMovieDetails="";
    this.movieService.getMovieList(searched).subscribe((data) => {
      this.movies = data.Search;
      // console.log(this.movies)
    });
  }

  showDetails(id:string) {
    this.movieService.getMovieById(id).subscribe((data) => {
      this.movies="";
      this.movieService.selectedMovieDetails = data;
      // console.log("selected details : "+this.movieService.selectedMovieDetails);
      

      if (this.movieService.selectedMovieDetails.imdbID in this.movieService.wishList) {
        // console.log("heeeeeey")
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



    });
  }
}
