const studentInfoContainer = document.getElementById('student-information-details-container')
const studentInfoContainer3 = document.getElementById('studentInfoContainer')
const studentInformation = document.getElementById('student-information')
const prelimPeriodContainer = document.getElementById('PRELIM-PERIOD')
const animation = document.getElementById('animation')
const studentUSN = document.getElementById('student-USN')
const studentLname = document.getElementById('student-Lname')
const studentFname = document.getElementById('student-Fname')
const studentMname = document.getElementById('student-Mname')
const totalQuizScore = document.getElementById('totalQuizScore')
const LecCS = document.getElementById('LecCS')
const LecPil = document.getElementById('LecPil')
const Plecme = document.getElementById('Plecme')
const PLAB_G = document.getElementById('PLAB_G')
const PRELIM_G = document.getElementById('PRELIM_G')
const PLEC_G = document.getElementById('PLEC_G')
const Plabquiz = document.getElementById('Plabquiz')
const Plabcsz = document.getElementById('Plabcsz')
const Plabme = document.getElementById('Plabme')

let totalQuiz=0

const show=(context)=>{
    let redirect = context=='prelim' ? 'flex' : 'none'
    prelimPeriodContainer.style.display = redirect
}

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
        studentInfoContainer3.style.display = 'grid'
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


// calculation 

const prelim_quiz=()=>{
    var Prelim_Q = 0;
    q1 = prelim_entry.q1.value;
    q2 = prelim_entry.q2.value;
    q3 = prelim_entry.q3.value;
    Prelim_Q = (parseFloat(q1) + parseFloat(q2) + parseFloat(q3)) / 3;
    if((q1!='') && q2!='' && q3!=''){
        if ((isNaN(Prelim_Q)) || (q1 < 0 || q1 > 100) || (q2 < 0 || q2 > 100) || (q3 < 0 || q3 > 100)){
            notify("Invalid Entries")
            totalQuizScore.innerHTML = 'Invalid Entries'
        } 
        else totalQuizScore.innerHTML = Prelim_Q.toFixed(2)
    }
}

const prelim_cs=()=>{
    var z = 0;
    if(prelim_entry.Ps.value=='') return
    z = parseFloat(prelim_entry.Ps.value);
    if (isNaN(z) || (z < 0 || z > 100)){
        notify('Invalid Entries')
        LecCS.innerHTML = "Invalid Entry";}
    else{
        LecCS.innerHTML = z.toFixed(2);}
}

const prelim_il=()=>{
    if(prelim_entry.Pil.value=='') return
    var z = 0;
    z = parseFloat(prelim_entry.Pil.value);
    if (isNaN(z) || (z < 0 || z > 100)){
        LecPil.innerHTML = "Invalid Entry"
        notify('Invalid Entry')
    }else{
        LecPil.innerHTML = z.toFixed(2)
    }	
}

const prelim_we=(score,items)=>{
    var res = 0;
    if (parseFloat(score) > parseFloat(items)){
        Plecme.innerHTML = "Invalid Entry";
    }else{
        a = totalQuizScore.innerHTML;
        b = LecCS.innerHTML;
        c = LecPil.innerHTML;
        d = 0;
        f = PLAB_G.innerHTML;
        res = parseFloat(score/items) * 100;
        Plecme.innerHTML = res.toFixed(2);
    }
        d = (a * .3) + (b * .1) + (c * .1) + (res * .5);
        PLEC_G.innerHTML = d.toFixed(2);
        PRELIM_G.innerHTML = ((d * .4) + (f * .6)).toFixed(2);
}

const prelim_LAB_quiz=()=>{
    var Prelim_mQ = 0;
    m1 = prelim_entry.m1.value;
    m2 = prelim_entry.m2.value;
    m3 = prelim_entry.m3.value;

    Prelim_mQ = (parseFloat(m1) + parseFloat(m2) + parseFloat(m3)) / 3;
    if(m1 == '' || m2=='' || m3 == '') return
    if (isNaN(Prelim_mQ) || (m1 < 0 || m1 > 100) || (m2 < 0 || m2 > 100) || (m3 < 0 || m3 > 100)){
        Plabquiz.innerHTML = "Invalid Entries"
        notify('invalid Entry')
    ;}
    else{
        Plabquiz.innerHTML = Prelim_mQ.toFixed(2);}
}

const  prelim_lab_cs=()=>{
    var z = 0;
    if(prelim_entry.Plabcs.value == '') return
    z = parseFloat(prelim_entry.Plabcs.value);
    if (isNaN(z) || (z < 0 || z > 100)){
        Plabcsz.innerHTML = "Invalid Entry"
    }
    else{
        Plabcsz.innerHTML = z.toFixed(2);}
}

const pre_PE = ()=>{
    score = prelim_entry.PE_score.value
    items = prelim_entry.PE_items.value
    if(score == '' || items=='') return
    score = parseFloat(score);
    items = parseFloat(items);
    if(score>items){
        notify('items must greater than score')
        return
    }
    if(isNaN(score) || (score < 0 || score > 100) || isNaN(items) || (items < 0 || items > 100)){
        Plabme.innerHTML = "Invalid Entry"
        notify('invalid Entry')
        return
    }
    items = items == 0 ? 1 : items
    Plabme.innerHTML = (score / items ) * 100
}
    
