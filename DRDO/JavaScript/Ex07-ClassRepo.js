class Movie{
    constructor(id, title, director){
        this.id = id;
        this.title = title;
        this.director = director
    }
}

//Class to represent the collection of movies. 
class MovieDatabase{
    movies = [
        new Movie(111, "RRR", "SS Rajamouli"),
        new Movie(112, "Kalki", "Nag Ashwin"),
        new Movie(113, "Bramhastra", "Ayan Mukerji"),
        new Movie(114, "Animal", "Sandeep RV"),
        new Movie(115, "Dunki", "Rajkumar Hirani"),
        new Movie(116, "Fighter", "Sidharth Anand")
    ];
    
    addMovie = (movie) => this.movies = [...this.movies, movie];//Spread operator..
    getAll = () => this.movies;
    getById = (id) =>this.movies.find(m => m.id ==id);//finds one movie object based on id.
    modifyMovie = (id, movie) =>{
        let index = this.movies.findIndex(m =>m.id ==id);
        if(index < 0)
            alert("Movie not found to delete/update");
        else{
            if(!movie)
                this.movies.splice(index, 1);//removes one(1) movie at the specified index.
            else
                this.movies.splice(index, 1, movie);  //update, replaces the object in the index location.          
        }
    }
}
///testing the code, delete it after the tests................
const db = new MovieDatabase();
db.addMovie(new Movie(111, "2 States", "SomeGuy"));
console.log(db.getAll());
console.log(db.getById(111));
db.modifyMovie(111, new Movie(111, "Bahubali 2", "Rajamouli SS"));
console.log(db.getAll());
