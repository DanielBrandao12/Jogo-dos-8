let cont = 0


const board = document.querySelectorAll('.box')

const positions = [1,2,3,4,5,6,7,8,""]
 


board.forEach( buttons=>{

  const positions = [1,2,3,4,5,6,7,8,""]

  board[buttons.id-1].innerText = positions[buttons.id-1]

  buttons.addEventListener('click', event=>{
   
  
  })
})

//console.log(board.innerHTML.valueOf())