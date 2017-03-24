// https://github.com/wdi-atx-10/music_artist_oop_relationships

// OOPlaylist

///???*******
// a name property, which can be accepted as an argument of the constructor function and set on the object
// and a songs property that defaults to an empty array
// Create a constructor function called Song. The Song constructor function should have 3 properties:
 function Artist(name, songs) {
   this.name = name;
   this.songs = [];
  }
// a title property, which can be accepted as an argument of the constructor function and set on the object
// the title should be a string containing the title of a song
// an artist property, which can be accepted as an argument of the constructor function and set on the object
// the artist should be an instance of an Artist object
// a playCount property that defaults to 0 (NOTE: playCount is not passed in as a parameter on the constructor function)
// Inside the Song constructor function, find the current song's artist property, and push the current song object into the artist's songs array property.

 function Song(title, artist, playCount) {
   this.title = title;
   this.artist = artist;
   this.playCount = 0;
  }
 Song.prototype.songCount = function(songs){
   this.playCount = this.playCount + 1;
 };
//This way, the song has a reference to the artist, and the artist has an array that contains all of their songs.
  var subLime = new Artist("Sublime");
  var forty = new Song("forty!", subLime);
  forty.songCount();

console.log(forty);
console.log(subLime);
