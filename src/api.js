export default async function getCats(count, cb) { 
  fetch(`https://api.thecatapi.com/v1/images/search?category_ids=1&limit=${count}&mime_types=jpg,png`)
    .then(response => response.json()).then(result => cb(result))
}