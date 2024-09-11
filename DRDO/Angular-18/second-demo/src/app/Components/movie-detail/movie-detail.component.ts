import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
//When the user modifies the data of the movie, he shall click on the a tag which has pencil icon in it. The values shall be pushed to the outer component(MovielistComponent) as an Event which is captured by the outer component and make appropriate changes. 

export class MovieDetailComponent {
  @Output() onUpdate : EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() onDelete : EventEmitter<number> = new EventEmitter<number>();

  @Input() movie = {} as Movie //This becomes the input for this component. This value will be provided by the MovielistComponent. 

  //event handler for update
  onMovieUpdate(){
    alert(JSON.stringify(this.movie));
    this.onUpdate.emit(this.movie);
  }

  onMovieDelete(){
    this.onDelete.emit(this.movie.id);
  }


}
