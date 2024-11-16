let Ai =[]
let hum = []
let start = false
let level = 0
let index = ['one','two','three','four']
scr = 0

document.addEventListener('keypress',()=>{
    if(start==false){
        start = true
        levelup()
    }
})
function flash(btn){
    btn.classList.add('flash')
    setTimeout(()=>{
        btn.classList.remove('flash')
    },400)
    idd = btn.getAttribute("id")
    Ai.push(idd)
    console.log(Ai)
    
}
function bflash(btn){
    btn.classList.add('blackflash')
    setTimeout(()=>{
        btn.classList.remove('blackflash')
    },400)
    idd = btn.getAttribute("id")
    hum.push(idd)
    console.log(hum)
    Check()
}
function Check(){
    id = hum.length - 1
    if(Ai[id]==hum[id]){
        if(Ai.length == hum.length){
            console.log("matched")
            scr++
            box = document.querySelector(".scrr")
            h3 = box.querySelector('h3')
            h3.innerText = `Heightest score = ${scr}`
            setTimeout(levelup,200)
        }}
        else{
            h4.innerText = "game over, Press any key to restart"
            
            document.addEventListener('keypress', reset())
        } 
    }

function levelup(){
    level++
    hum = []
    h4 = document.querySelector('h4')
    h4.innerText = `level ${level}`
    num = Math.floor(Math.random()*3)
    btnindx = index[num]
    btn = document.querySelector(`.${btnindx}`)
    flash(btn)
}
butns = document.querySelectorAll(".btn")
for(but of butns){
    but.addEventListener("click",function(){
        box = this
        bflash(box)
    })
}
function reset(){
    start = false
    level = 0
    Ai = []
    hum = []
}