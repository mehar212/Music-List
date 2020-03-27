// playlist

function Playlist() {
    this.songs = [];
    this.nowPlayingIndex = 0;
  }
  
  Playlist.prototype.add = function(song) {
    this.songs.push(song);
  };
  
  Playlist.prototype.play = function() {
    var currentSong = this.songs[this.nowPlayingIndex];
    currentSong.play();
  };
   
  Playlist.prototype.stop = function(){
    var currentSong = this.songs[this.nowPlayingIndex];
    currentSong.stop();
  };
  
  Playlist.prototype.next = function() {
    this.stop();
    this.nowPlayingIndex++;
    if (this.nowPlayingIndex === this.songs.length) {
      this.nowPlayingIndex = 0;
    };
    this.play();
  };
  
  Playlist.prototype.renderInElement = function(list) {
    list.innerHTML = "";
    for (i = 0; i < this.songs.length; i++) {
      list.innerHTML += this.songs[i].toHTML();
    }
  };
  
  // media
  
  function Media(title, year, duration) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
  }
  
  Media.prototype.play = function() {
    this.isPlaying = true;
  };
  
  Media.prototype.stop = function() {
    this.isPlaying = false;
  };
  
  // songs
  
  function Song(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.isPlaying = false;
  }
  
  Song.prototype.play = function() {
    this.isPlaying = true;
  };
  
  Song.prototype.stop = function() {
    this.isPlaying = false;
  };
  
  Song.prototype.toHTML = function() {
   var htmlString = '<li';
    if(this.isPlaying) {
   htmlString += ' class="current"';
    }
   htmlString += '>';
   htmlString += this.title;
   htmlString += ' - ';
   htmlString += this.artist;
   htmlString += '<span class="duration">';
   htmlString += this.duration;
   htmlString += '</span></li>';
   return htmlString;
  };
  
  
  // app
  
  var playlist = new Playlist();
  
  var havana = new Song("havana", "eves", "2.05");
  var calma = new Song("calma", "nick John", "3.00");
  var smackthat = new Song("smackthat", "akon", "6:30");
  var lonely = new Song("lonely", "akon", "3:02");
  
  playlist.add(havana);
  playlist.add(calma);
  playlist.add(smackthat);
  playlist.add(lonely);
  
  var playlistElement = document.getElementById('playlist');
  
  playlist.renderInElement(playlistElement);
  
  var playButton = document.getElementById('play');
  playButton.onclick = function() {
    playlist.play();
    playlist.renderInElement(playlistElement);
  };
  var nextButton = document.getElementById('next');
  nextButton.onclick = function() {
    playlist.next();
    playlist.renderInElement(playlistElement);
  };
  var stopButton = document.getElementById('stop');
  stopButton.onclick = function() {
    playlist.stop();
    playlist.renderInElement(playlistElement);
  };
  
  
 