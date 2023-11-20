

var Filme = /** @class */ (function () {
    function Filme(adult, backdrop_path, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count) {
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.id = id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.title = title;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
    return Filme;
}());



var guardiansOfTheGalaxyVol3 = new Filme(false, "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg", 447365, "en", "Guardians of the Galaxy Vol. 3", "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.", 4145.055, "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", "2023-05-03", "Guardians of the Galaxy Vol. 3", false, 8.1, 3154);
console.log(guardiansOfTheGalaxyVol3);