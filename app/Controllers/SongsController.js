import { ProxyState } from "../AppState.js";
import songsService from "../Services/SongsService.js";


//Private NOTE this is aaron baby 
/**Draws the Search results to the page */
/* Shanker Karra */
function _drawResults() { 
  const songs = ProxyState.mySongs
  const activeSong = ProxyState.activeSong || {}
  let template = ""
  songs.forEach(s => template += `
  
  `)
  if (!template) {
    template = ''
  }
  document.getElementById("my-songs").innerHTML = template
}
/**Draws the Users saved songs to the page */
function _drawPlaylist() { }

//Public
export default class SongsController {
  constructor() {
    //TODO Don't forget to register your listeners and get your data
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      songService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  async addSong(id) {
    try {
      await SongsService.addSong(id)
    } catch (error) {
      console.error("unable to add song to the list")
      console.log("test")
    }
  }

  /**
 * Takes in a song id to be removed from the users playlist and sends it to the server
 * @param {string} id
 */
  async removeSong(id) {
    try {
      await SongsService.removeSong(id)
    } catch (error){
      console.error("Failed to remove song")
    }

   }
}
