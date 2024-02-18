export function getTracks() {
   const response = fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/")

   return response.then(data => data)

}