var principal = document.getElementsByClassName("div-principal")[0]; // div principal
var lista = principal.querySelectorAll(".div"); // pega os itens da lista
    


lista.forEach(click =>{
    click.addEventListener('click', e=>{

        
       principal.insertBefore( lista[(lista.length -1)],lista[click.id-1] ); // move a última para antes da primeira 
        console.log(click.id)
    })
})

document.getElementById('btn1').addEventListener('click', function() {
    principal.insertBefore( lista[(lista.length - 1)],lista[0] ); // move a última para antes da primeira 
});


document.getElementById('btn2').addEventListener('click', function() {
       
    insertAfter( lista[0],lista[(lista.length - 1)] ); // move a primeira para depois da última
});


// função extraída de: https://stackoverflow.com/a/4793630/4921014
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

