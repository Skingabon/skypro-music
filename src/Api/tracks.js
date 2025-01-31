export function getTracks() {
   const response = fetch("https://webdev-music-003b5b991590.herokuapp.com")

   return response.then(data => data)

}