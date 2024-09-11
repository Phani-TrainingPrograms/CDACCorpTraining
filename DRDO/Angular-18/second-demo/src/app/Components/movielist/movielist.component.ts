import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../Pipes/filter.pipe';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [CommonModule, MovieDetailComponent, FormsModule, FilterPipe],
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
//For initializing the data of UR Component, we can use a hook(Sp fn that will be invoked at a specific time)
export class MovielistComponent implements OnInit {
  movieList : Movie[] = [];
  title : string = ""//To store the filter title value 


  ngOnInit(): void {
    this.movieList.push({ id :101, title : "KGF 1", director : "Prashant Neel", moviePic : "images/pic1.png" });
    this.movieList.push({ id :102, title : "KGF 2", director : "Prashant Neel", moviePic : "images/pic2.png" });
    this.movieList.push({ id :103, title : "RRR", director : "Rajamouli SS", moviePic : "images/pic3.png" });
    this.movieList.push({ id :104, title : "Animal", director : "Sandeep Reddy Vanga", moviePic : "images/pic4.png" });
    this.movieList.push({ id :105, title : "Fighter", director : "Siddharth Anand", moviePic : "images/pic5.png" });
    this.movieList.push({ id :106, title : "Jawan", director : "Atlee Kumar", moviePic : "images/pic6.png" });
    this.movieList.push({ id :107, title : "Kantara", director : "Rishab Shetty", moviePic : "images/pic7.png" });
    this.movieList.push({ id :108, title : "1983", director : "Kabir Khan", moviePic : "images/pic8.png" });
    this.movieList.push({ id :109, title : "Ek Tha Tiger", director : "Kabir Khan", moviePic : "images/pic9.png" });
    this.movieList.push({ id :110, title : "Munna Bhai MBBS", director : "Rajkumar Hirani", moviePic : "images/pic10.png" });
  }

  onDataUpdated(movie : Movie){
    const index = this.movieList.findIndex(m => m.id == movie.id);
    if(index < 0){
      alert("No record found to update");
    }else{
      this.movieList.splice(index, 1, movie);
      alert("Movie details are updated");
    }
  }

  onDataDeleted(id : number){
    const index = this.movieList.findIndex(m => m.id == id);
    if(index < 0){
      alert("No record found to Delete");
    }else{
      this.movieList.splice(index, 1);
      alert("Movie details are Deleted");
    }
  }
}
