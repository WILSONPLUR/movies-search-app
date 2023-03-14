export interface Movie {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
    Plot: string;
    favourite: boolean;
}

export interface MoviesState {
    movies: Movie[] | [];
    searchQuery: string;
    page: number;
    openSnackbar: boolean;
}
