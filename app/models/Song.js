export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    getTemplate() {
        return ` 
    <div class="card col-3">
        <img class="card-img-top" src="${this.albumArt}" alt="Card image cap">
        <div class="card-body">
        <h5 class="house-title>${this.artist}</h5>
          <h5 class="house-title>${this.collection}</h5>
          <p class="card-text">${this.price}</p>
          <button onclick="app.controllers.itunes-Controller.deleteHouse(${this.preview})">Preview</button>
          
        </div>
      </div>`
    }
}