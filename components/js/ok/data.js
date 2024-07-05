let q = document.querySelector('.q')
let w = document.querySelector('.w')
let e = document.querySelector('.e')
let r = document.querySelector('.r')
let ch = () =>{
    let qval = q.value
    let wval = w.value
    let eval = e.value
    let result = 0
    console.log(wval);

    if (wval === '+'){
        result = Number(qval) + Number(eval)
    }
     if (wval =='-'){
        result = Number(qval) - Number(eval)

    }
    if (wval == '*'){
       result = Number(qval) * Number(eval)

    }
    if (wval == '/'){
        result = Number(qval) / Number(eval)
    }
    if (result == 'Infinity'){
        result = 'на ноль не делим'
    }
    r.innerHTML = result
    console.log(result)


}
q.onchange = ch
w.onchange = ch
e.onchange = ch



