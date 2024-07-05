let h = document.querySelector('#wdwd')
let inp = document.querySelector('.numb')
let inpu = document.querySelector('.tex')
let but = document.querySelector('.butto')
let g = document.querySelectorAll('.ghd')
inp.value = 0
let mas = ['0', '1', '2', '3', '4', '5' , 'selected']
    g[0].innerHTML = mas[0]
    g[1].innerHTML = mas[1]
    g[2].innerHTML = mas[2]
    g[3].innerHTML = mas[3]
    g[4].innerHTML = mas[4]
    g[5].innerHTML = mas[5]
g[0].style.backgroundColor = 'red'
let f = () =>{
    let num = inp.value
    let select = g[num]
    
    g[0].style.backgroundColor = 'white'
    g[1].style.backgroundColor = 'white'
    g[2].style.backgroundColor = 'white'
    g[3].style.backgroundColor = 'white'
    g[4].style.backgroundColor = 'white'
    g[5].style.backgroundColor = 'white'
    select.style.backgroundColor = 'red'
    
    g[0].innerHTML = mas[0]
    g[1].innerHTML = mas[1]
    g[2].innerHTML = mas[2]
    g[3].innerHTML = mas[3]
    g[4].innerHTML = mas[4]
    g[5].innerHTML = mas[5]
    select.innerHTML = mas[6]
}
let k = () =>{
    let num = inp.value
    let select = g[num]
    let valqs = inpu.value
     mas[num]= valqs
    select.innerHTML = valqs
}
inp.onchange = f
but.onclick = k

