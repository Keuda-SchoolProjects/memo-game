 document.addEventListener('DOMContentLoaded', () => {


  const memoryGameWindow = document.querySelector('.memoryGameWindow')
  const gameVolumeSelect = document.getElementById('game')
  const btnStartGame = document.querySelector('.btnStartGame')
  const btnResetGame = document.querySelector('.btnResetGame')
  let cardsArray = []
  selectedVolume = 0

  const picsArray = [
    {id: 01, img: './images/pics/01.jpg'},
    {id: 02, img: './images/pics/02.jpg'},
    {id: 03, img: './images/pics/03.jpg'},
    {id: 04, img: './images/pics/04.jpg'},
    {id: 05, img: './images/pics/05.jpg'},
    {id: 06, img: './images/pics/06.jpg'},
    {id: 07, img: './images/pics/07.jpg'},
    {id: 08, img: './images/pics/08.jpg'},
    {id: 09, img: './images/pics/09.jpg'},
    {id: 10, img: './images/pics/10.jpg'},
    {id: 11, img: './images/pics/11.jpg'},
    {id: 12, img: './images/pics/12.jpg'},
    {id: 13, img: './images/pics/13.jpg'},
    {id: 14, img: './images/pics/14.jpg'},
    {id: 15, img: './images/pics/15.jpg'},
    {id: 16, img: './images/pics/16.jpg'},
    {id: 17, img: './images/pics/17.jpg'},
    {id: 18, img: './images/pics/18.jpg'},
  ]

  let gamePics = picsArray.concat(picsArray).sort(() => {
    return 0.5 - Math.random()
  })


  selectVolumeHandler = () => {
    gameVolumeSelect.addEventListener('change', () => {
      selectedVolume = gameVolumeSelect.value
    })
  }
  selectVolumeHandler()
  
  
   btnStartGame.addEventListener('click', () => {
     startGame() 
   })

   btnResetGame.addEventListener('click', () => {
    fullResetGame()
    cardsArray = []
   })

   fullResetGame = () => {
    btnStartGame.disabled = false
    gameVolumeSelect.disabled = false
    cardsArray.forEach((cardItem) => {
      cardItem.parentNode.removeChild(cardItem)
     })
     delete cardsArray
    selectedVolume = 0
   }


   startGame = () => {
    btnStartGame.disabled = true
    gameVolumeSelect.disabled = true
    for (let i = 0; i < selectedVolume; i++) {
      const card = document.createElement('div')

      const frontImage = document.createElement('img')
      frontImage.classList = 'front-face'
      const backImage = document.createElement('img')
      backImage.className = 'back-face'     

      card.appendChild(backImage)
      card.appendChild(frontImage)
      if (selectedVolume == 16) {
        card.className = 'card16'
        backImage.style.width = '100%'
        backImage.style.height = '100%'
      } else if (selectedVolume == 24) {
        card.className = 'card24'
        backImage.style.width = '100%'
        backImage.style.height = '100%'
      } else if (selectedVolume == 36) {
        card.className = 'card36'
        backImage.style.width = '100%'
        backImage.style.height = '100%'
      }
      backImage.src = './images/back.jpg'

      
      let randomPic = Math.floor(Math.random()*picsArray.length)
      frontImage.src = gamePics[randomPic].img
      console.log(frontImage);
      
      
      cardsArray.push(card)
    }


    cardsArray.forEach((cardItem) => {
         memoryGameWindow.appendChild(cardItem)
        })

    cardsArray.forEach(card => card.addEventListener('click', flipCard))

   }

   function flipCard() {
     this.classList.toggle('flip')
   }





 })
