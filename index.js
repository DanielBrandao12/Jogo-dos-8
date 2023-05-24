const board = document.querySelector('.board')
const btnEmbaralhar = document.querySelector('.embaralhar')
const win = document.querySelector('.divWin')
let positions = [1, 2, 3, 4, 5, 6, 7, 8, ""]
let arr = []
let ganha = ['1', '2', '3', '4', '5', '6', '7', '8', '']



function shuffleArray(positions) {

  for (let i = positions.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];

  }

  return positions;

}

function criarTabuleiro() {
  for (let i = 0; i < positions.length; i++) {

    board.innerHTML += `<button class="box" id="${i + 1}">${positions[i]}</button>`

  }
  const box = document.querySelectorAll('.box')

  for (let i = 0; i < box.length; i++) {
    arr.push(box[i].innerText)
  }

 
  box.forEach(buttons => {
    buttons.addEventListener('click', event => {

      for (let i = 0; i < box.length; i++) {

        if (box[i].innerText == '') {
          console.log(event.target.id)
          console.log(box[i].id)
          if(event.target.id%2 == 1 && box[i].id%2==0){

           
          box[i].innerText = buttons.innerText
          arr[arr.indexOf(buttons.innerText)] = ""
          arr[i] = buttons.innerText
          buttons.innerText = ""
          }else if(event.target.id%2 == 0 && box[i].id%2==1){
            
          box[i].innerText = buttons.innerText
          arr[arr.indexOf(buttons.innerText)] = ""
          arr[i] = buttons.innerText
          buttons.innerText = ""
          }

        }
      }
      

     

      console.log(arr)

     
       if (JSON.stringify(arr) == JSON.stringify(ganha)) {
    console.log("voce ganhou")
    win.style.display = 'flex'
  }
    })
  })
}





btnEmbaralhar.addEventListener('click', () => {

  board.innerHTML = ''
  arr = []
  shuffleArray(positions)
  criarTabuleiro()

  positions.forEach(position => {

    arr[arr.indexOf(position)] = position.toString()

  })
})

criarTabuleiro()


