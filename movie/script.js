
const addBtn = document.getElementById('addmov')
const section =  document.getElementById('tile')

addBtn.addEventListener('click', function(){
    const movieUrl = document.getElementById('MovieUrl').value
    const movieTit = document.getElementById('MovieTitle').value

    const movieTile = document.createElement('div')
    movieTile.className = 'tiles'

    const movieImg = document.createElement('img')
    movieImg.src = movieUrl

    const caption = document.createElement('p')
    caption.textContent = movieTit

    movieTile.appendChild(movieImg)
    movieTile.appendChild(caption)
 console.log('append successful')
    section.appendChild(movieTile)
  console.log('movie added')
})