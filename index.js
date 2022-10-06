let cont = 0
const board = document.querySelectorAll('.board .box').forEach( i=>{
  const positions = [1,2,3,4,5,6,7,8,""]
 
  i.innerText=positions[cont]
  cont++
  console.log(i.innerHTML.valueOf())
  i.addEventListener('click', event=>{
   
    console.log('oi')
  })
})

//console.log(board.innerHTML.valueOf())