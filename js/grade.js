const app = document.getElementById('app')
const form2 = document.getElementsByClassName('second-form-container')
const quizzesInput = document.getElementById('form')
const otherInput = document.getElementById('form2')
const notification = document.getElementById('notification')
const animation = document.getElementById('animation')
const congratsAnimation = document.getElementById('congrats')
const gradeStatus = document.getElementById('grade-status')

let LEC_Q = 0


const notify = (msg)=>{
    notification.style.display = 'flex'
    notification.innerHTML = `<div>${msg}</div>`
    setTimeout(()=>{
        notification.style.display='none'
    },3000)
}

const back=()=>{
    animation.style.display = 'flex'
    if(form2[0]) form2[0].style.display = "none"
    setTimeout(()=>{
        animation.style.display = 'none'    
        if(form[0]) form[0].style.display = "flex"
    },2000)
}


const congrats=()=>{
    congratsAnimation.style.display = 'flex'
}

const confirmation=()=>{
    congratsAnimation.style.display = 'none'
}

const SumOfQuizzes=(e)=>{
    const data = Object.fromEntries(new FormData(quizzesInput).entries())
    let count = 0 
    LEC_Q = 0
    for(i=0;i<3;i++){
        if(isNaN(Number(data[`quiz${i+1}`])) | Number(data[`quiz${i+1}`])<0 | Number(data[`quiz${i+1}`])>100){
            notify('Input must be greater than 1 and less than 100')
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
    if( Number(data2['LEC_CS']<0) | Number(data2['LEC_IL'] < 0 ) | Number(data2['WE_items'])<0 | Number(data2['WE_score'])<0 | Number(data2['LEC_CS']>100) | Number(data2['LEC_IL'] > 100 )){
        notify('Input must be greater than 1 and less than 100')
    }else{
        let status=''
        if(Number(data2['WE_items']) >= Number(data2['WE_score'])){
            LEC_CS = Number(data2['LEC_CS']) * .1
            LEC_IL = Number(data2['LEC_IL']) * .1
            WE_items =  Number(data2['WE_items']) == 0 ? 1 : Number(data2['WE_items'])
            LEC_ME = (parseFloat((Number(data2['WE_score']) / WE_items)) * 100) * .5
            LEC_G=parseFloat(LEC_Q + LEC_CS + LEC_IL + LEC_ME).toFixed(2)
            if(LEC_G >= 50 && LEC_G <= 100){
                status = "Your grade is " + LEC_G + "\nyou have a passing grade"
                gradeStatus.classList.remove('fail')
                gradeStatus.classList.add('pass')
                congratsAnimation.style.backgroundImage='url(../assets/congrats.gif)'
                gradeStatus.style.background = 'green'
            }
            else { 
                status = "Your grade is " + LEC_G + "\nyou have a failing grade" 
                gradeStatus.classList.remove('pass')
                congratsAnimation.style.backgroundImage='none'
                gradeStatus.classList.add('fail')
                gradeStatus.style.background = 'red'
            }
            gradeStatus.innerHTML = `<h3>${status}</h3>`
            congrats()
        }else{
            notify('Item must be greater then score!')
        }
    }
}
