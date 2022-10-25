let cont = 0

const board = document.querySelector('.board')


let positions = [1,2,3,4,5,6,7,8,""]

let arr = []





for(let i =0; i<positions.length;i++){

  board.innerHTML += `<div class="box" id="${i+1}">${positions[i]}</div>`
  arr.push(board.innerHTML)
  
  
}
console.log(arr)

const box = document.querySelectorAll('.box')
box.forEach( buttons=>{


  box[buttons.id-1].innerText = positions[buttons.id-1]

  buttons.addEventListener('click', event=>{
      console.log(buttons)
    if(buttons.innerText == '6'){
        arr[5] =''
        arr[9] ='6'
       box[buttons.id-1].innerText =""
      box[8].innerText='6'
    }
    console.log(arr)
  })
})

//console.log(box.innerHTML.valueOf())