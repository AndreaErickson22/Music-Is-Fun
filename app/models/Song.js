export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
        this.kind = song.kind
    }
    getTemplate() {
        return ` 
    <div class="card col-lg-6 col-sm-12 text-center">
        <img class="card-img-top img-fluid" src="${this.albumArt}" alt="Card image cap">
        <div class="card-body text-center">
        <h5 class="artist">${this.artist}</h5>
          <h5 class="song-title">${this.title}</h5>
          <button class="btn btn-primary" onclick="app.controllers.itunesCtrl.play('${this.preview}')">Play Song</button>
           <p class="card-text">$${this.price}</p>
        </div>
      </div>`
    }
}
