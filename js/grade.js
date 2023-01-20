const app = document.getElementById('app')
const start = document.getElementsByClassName('start-container')
const form = document.getElementsByClassName('form-container')
const form2 = document.getElementsByClassName('second-form-container')
const quizzesInput = document.getElementById('form')
const otherInput = document.getElementById('form2')
const notification = document.getElementById('notification')
const animation = document.getElementById('animation')

let LEC_Q = 0


const notify = (msg)=>{
    notification.style.display = 'flex'
    notification.innerHTML = `<div>${msg}</div>`
    setTimeout(()=>{
        notification.style.display='none'
    },3000)
}

const createHTMLForm =()=>{
    if(start[0]) start[0].style.display="none"
    if(form[0]) form[0].style.display = "flex"
}

const SumOfQuizzes=(e)=>{
    const data = Object.fromEntries(new FormData(quizzesInput).entries())
    let count = 0 
    LEC_Q = 0
    for(i=0;i<3;i++){
        if(isNaN(Number(data[`quiz${i+1}`])) | Number(data[`quiz${i+1}`])<0){
            notify('Negative Number is not allowed')
            i = 3
        }else{
            LEC_Q += Number(data[`quiz${i+1}`])
            count++;
        }
    }
    if(count==3){
        form[0].style.display = "none"
        animation.style.display = 'flex'
        LEC_Q = (LEC_Q.toFixed(2)/3) * .3
        console.log(LEC_Q)
        setTimeout(()=>{
            animation.style.display = 'none'
            form2[0].style.display = "flex"
        },2000)
    }
}

const Calculate=()=>{
    let LEC_CS=0
    let LEC_IL = 0
    let LEC_ME=0
    let LEC_G=0
    const data2 = Object.fromEntries(new FormData(otherInput).entries())
    if( Number(data2['LEC_CS']<0) | Number(data2['LEC_IL'] < 0 ) | Number(data2['WE_items'])<0 | Number(data2['WE_score'])<0){
        notify('Negative Number is not allowed')
    }else{
        if(Number(data2['WE_items']) >= Number(data2['WE_score'])){
            LEC_CS = Number(data2['LEC_CS']) * .1
            LEC_IL = Number(data2['LEC_IL']) * .1
            LEC_ME = parseFloat(
                (Number(data2['WE_score']) / Number(data2['WE_items'])) * 100
            ) * .5
            LEC_G=parseFloat(LEC_Q + LEC_CS + LEC_IL + LEC_ME).toFixed(2)
            LEC_G = isNaN(LEC_G) ? 0 : LEC_G
            if (LEC_G >= 50 && LEC_G <= 100) alert("your grade is " + LEC_G + "\nyou have a passing grade");
            else alert("your grade is " + LEC_G + "\nyou have a failing grade");
        }else{
            notify('Item must be greater then score!')
        }
    }
}
