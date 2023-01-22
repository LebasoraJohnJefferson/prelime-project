const studentInformation = document.getElementById('student-information')
const studentInfoContainer = document.getElementById('student-information-details-container')
const prelimPeriodContainer = document.getElementById('PRELIM-PERIOD')
const animation = document.getElementById('animation')
const studentUSN = document.getElementById('student-USN')
const studentLname = document.getElementById('student-Lname')
const studentFname = document.getElementById('student-Fname')
const studentMname = document.getElementById('student-Mname')


const Save=()=>{
    const data = Object.fromEntries(new FormData(studentInformation).entries())
    if(data.USN.trim().length|| data.Lname.trim().length || data.Fname.trim().length || data.Mname.trim().length ){
        loadingAnimation()
        studentUSN.innerHTML = data.USN
        studentLname.innerHTML = data.Lname
        studentFname.innerHTML = data.Fname
        studentMname.innerHTML = data.Mname
        studentInfoContainer.style.display = 'none'
        prelimPeriodContainer.style.display = 'flex'
    }else{
        notify('Empty Input!')
    }
}

const loadingAnimation = ()=>{
	animation.style.display = 'flex'
	setTimeout(()=>{
		animation.style.display = 'none'
	},3000)
}

const Reset=()=>{
    document.getElementById('USN').value=''
    document.getElementById('Lname').value=''
    document.getElementById('Fname').value=''
    document.getElementById('Mname').value=''
}

const notify = (msg)=>{
    notification.style.display = 'flex'
    notification.innerHTML = `<div>${msg}</div>`
    setTimeout(()=>{
        notification.style.display='none'
    },3000)
}


