export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
                <div class="card my-3" style="max-width: 300px;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${this.albumArt}" class="card-img" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this.artist}</h5>
                                <p class="card-text">${this.title}</p>
                                <button type="button" class="btn btn-success"
                                    onclick="app.songsController.selectSong(${this._id})">Play Now</button>
                            </div>
                        </div>
                    </div>
                </div>

        `;
  }

  get playlistTemplate() {
    return `
         <div class="card my-3" style="max-width: 300px;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${this.albumArt}" class="card-img" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this.artist}</h5>
                                <p class="card-text">${this.title}</p>
                                <button type="button" class="btn btn-danger"
                                    onclick="app.songsController.removeSong(${this._id})">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
        `;
  }

  get activeSongTemplate() {
    return `
                <div class="col-12 m-0">
                    <div class="card" style="width: 80vh;">
                        <img class="card-img-top" src="${this.albumArt}" alt="Card image cap">
                        <div class="card-body text-center">
                            <h5 class="card-title">${this.artist} - ${this.title}</h5>
                            <p class="card-text">Album: <em>${this.album}</em> | Price: <em>${this.price}</em></p>
                            <audio controls><source src="${this.preview}"/></audio>
                            <button type="action" class="btn btn-primary"
                                onclick="app.songsController.addSong(songId)">Add</a>
                        </div>
                    </div>
                </div>
    `
  }
}
