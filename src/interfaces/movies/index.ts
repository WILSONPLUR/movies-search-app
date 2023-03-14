export interface Movie {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
    favourite: boolean;
}

export interface MoviesState {
    movies: Movie[] | [];
    searchQuery: string;
    page: number;
    openSnackbar: boolean;
}
