 document.addEventListener('DOMContentLoaded', () => {


  const memoryGameWindow = document.querySelector('.memoryGameWindow')
  const gameVolumeSelect = document.getElementById('game')
  const btnStartGame = document.querySelector('.btnStartGame')
  const btnResetGame = document.querySelector('.btnResetGame')
  let cardsArray = []
  selectedVolume = 0
  let picsArr = []
  let frontImageArr = []
  let count = 0
  let firstCard = ''
  let secondCard = ''
  let divFirstCard = ''
  let divSecondCard = ''

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

////////////////////////////// RANDOM PICS ///////////////////////////////////////
let gamePics = picsArray.sort(() => {
  return 0.5 - Math.random()
})

///////////////////////////// GAME SELECT CONTROL ////////////////////////////////
  selectVolumeHandler = () => {
    gameVolumeSelect.addEventListener('change', () => {
      selectedVolume = gameVolumeSelect.value
      if (selectedVolume == 0) {
        btnStartGame.disabled = true
      } else { 
        btnStartGame.disabled = false
      }
    })
  }
  selectVolumeHandler()
  
////////////////////////// START BUTTON //////////////////////////////////////
   btnStartGame.addEventListener('click', () => {
     startGame() 
   })

////////////////////////// RESET BUTTON //////////////////////////////////////
   btnResetGame.addEventListener('click', () => {
    fullResetGame()
    cardsArray = []
   })

////////////////////////// GAME FULL RESET ///////////////////////////////////
   fullResetGame = () => {
    btnStartGame.disabled = false
    gameVolumeSelect.disabled = false
    gameVolumeSelect.value = 0
    cardsArray.forEach((cardItem) => {
      cardItem.parentNode.removeChild(cardItem)
     })
     delete cardsArray
     selectedVolume = 0
     delete picsArr
     resetGuesses()
   }


   resetGuesses = () => {
     firstCard = ''
     secondCard = ''
     count = 0
   }

/////////////////////////// GAME START ///////////////////////////////////////
   startGame = () => {
    btnStartGame.disabled = true
    gameVolumeSelect.disabled = true    
    for (let i = 0; i < selectedVolume; i++) {
      const card = document.createElement('div')
      card.className = 'card'
      const frontImage = document.createElement('img')
      frontImage.classList = 'front-face'
      const backImage = document.createElement('img')
      backImage.className = 'back-face'   
      frontImageArr.push(frontImage)

      if (selectedVolume == 16) {
        picsArr = gamePics.slice(0, 8)
        card.style.width = 'calc(22% + 10px)'
        card.style.height = 'calc(24%)'
        card.style.marginBottom = '5px'
        memoryGameWindow.style.width = '1000px'
      } else if (selectedVolume == 24) {
        picsArr = gamePics.slice(0, 12)
        card.style.width = 'calc(16.1%)'
        card.style.height = 'calc(22%)'
        memoryGameWindow.style.width = '1200px'
      } else if (selectedVolume == 36) {
        picsArr = gamePics.slice(0, 18)
        card.style.width = 'calc(15% + 10px)'
        card.style.height = 'calc(16%)'
        memoryGameWindow.style.width = '1000px'
      }
      backImage.src = './images/back.jpg'
      cardsArray.push(card)
      card.appendChild(backImage) 
      card.appendChild(frontImage) 
      
    }
    
    picsArr = picsArr.concat(picsArr)

    cardsArray.forEach((item, index) => {
      item.children[1].src = picsArr[index].img
      item.children[1].dataset.id = picsArr[index].id
      


      item.addEventListener('click', (e) => {
        
        if (count < 2) {
          count++
          if (count === 1) {
            divFirstCard = item
            firstCard = e.target.nextSibling.dataset.id
            console.log(divFirstCard);
            
          } else {
            divSecondCard = item
            secondCard = e.target.nextSibling.dataset.id
            console.log(divSecondCard)
            
          }



          if (firstCard && secondCard) {
            if (firstCard === secondCard) {
              console.log('found');
              divFirstCard.classList.add('found')
              divSecondCard.classList.add('found')
            }
            resetGuesses()
            setTimeout(() => {
              divFirstCard.classList.remove('flip')
              divSecondCard.classList.remove('flip')
            }, 500)
            
            
            
          }
        }
      })
    })

    




/////////////////////////// PICTURES SORT ////////////////////////////////////////
    cardsArray.sort(() => {
      return 0.5 - Math.random()
    })
      
////////////////////////// CARDS ADDING FROM MASSIVE TO GAME WINDOW //////////////      
    cardsArray.forEach((cardItem) => {
         memoryGameWindow.appendChild(cardItem)
        })
////////////////////////////// FLIP CARDS ////////////////////////////////////////
    cardsArray.forEach(card => card.addEventListener('click', flipCard))
    

   }

///////////////////////////// FLIP CARDS FUNCTION //////////////////////////////
   function flipCard() {
     this.classList.add('flip')
     console.log(this.classList[1]);
   }

   function removeFlipCardClass() {    
      this.classList.remove('flip')
   }
   


 })
