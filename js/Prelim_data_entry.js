const studentInfoContainer = document.getElementById('student-information-details-container')
const studentInfoContainer3 = document.getElementById('studentInfoContainer')
const studentInformation = document.getElementById('student-information')
const prelimPeriodContainer = document.getElementById('PRELIM-PERIOD')
const animation = document.getElementById('animation')
const studentUSN = document.getElementById('student-USN')
const studentLname = document.getElementById('student-Lname')
const studentFname = document.getElementById('student-Fname')
const studentMname = document.getElementById('student-Mname')
const field = document.getElementById('field')
const we_items = document.getElementById('we_items')
const we_score = document.getElementById('we_score')

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

let tempTotalQuizScore = {}
let tempLecCs={}
let tempLecPil={}
let tempPlecme = {}
let tempPLAB_G={}
let tempPRELIM_G={}
let tempPLEC_G={}
let tempPlabquiz={}
let tempPlabcsz={}
let tempPlabme={}
let q1={}
let q2={}
let q3={}
let ps={}
let m1={}
let m2={}
let m3={}
let tScore={}
let tItems={}
let fScore={}
let fItems={}
let context = 'PRELIM'


let totalQuiz=0

const show=(tempContext)=>{
    context=tempContext
    LecPil.innerHTML=isNaN(tempLecPil[context]) ? '' : tempLecPil[context]
    Plecme.innerHTML=isNaN(tempPlecme[context]) ? '' : tempPlecme[context]
    PLAB_G.innerHTML=isNaN(tempPLAB_G[context]) ? '' : tempPLAB_G[context]
    PRELIM_G.innerHTML=isNaN(tempPRELIM_G[context]) ? '' : tempPRELIM_G[context]
    PLEC_G.innerHTML=isNaN(tempPLEC_G[context]) ? '' : tempPLEC_G[context]
    Plabquiz.innerHTML=isNaN(tempPlabquiz[context]) ? '' : tempPlabquiz[context]
    Plabcsz.innerHTML=isNaN(tempPlabcsz[context]) ? '' : tempPlabcsz[context]
    Plabme.innerHTML=isNaN(tempPlabme[context]) ? '' : tempPlabme[context]
    LecCS.innerHTML=isNaN(tempLecCs[context]) ? '' : tempLecCs[context]
    field.innerHTML=context
    totalQuizScore.innerHTML= isNaN(q1[context]) | isNaN(q3[context]) | isNaN(q2[context]) ? '' : ((Number(q1[context]) + Number(q2[context]) + Number(q3[context])) / 3).toFixed(2)
    prelim_entry.q1.value =isNaN(q1[context]) ? '' : q1[context]
    prelim_entry.q2.value =isNaN(q2[context]) ? '' : q2[context]
    prelim_entry.q3.value =isNaN(q3[context]) ? '' : q3[context]
    prelim_entry.Ps.value =isNaN(tempLecCs[context]) ? '' : tempLecCs[context]
    prelim_entry.Pil.value=isNaN(tempLecPil[context]) ? '' : tempLecPil[context]
    Plecme.innerHTML = isNaN(tempPlecme[context]) ? '' : tempPlecme[context]
    PRELIM_G.innerHTML = isNaN(tempPRELIM_G[context]) ? '' : tempPRELIM_G[context]
    prelim_entry.we_score.value = isNaN(tScore[context]) ? '' : tScore[context]
    prelim_entry.we_items.value = isNaN(tItems[context]) ? '' : tItems[context]
    prelim_entry.m1.value = isNaN(m1[context]) ? '' : m1[context]
    prelim_entry.m2.value = isNaN(m2[context]) ? '' : m2[context]
    prelim_entry.m3.value = isNaN(m3[context]) ? '' : m3[context]
    Plabquiz.innerHTML = isNaN(tempPlabquiz[context]) ? '' : tempPlabquiz[context]
    prelim_entry.Plabcs.value = isNaN(tempPlabcsz[context]) ? '' : tempPlabcsz[context]
    Plabcsz.innerHTML = isNaN(tempPlabcsz[context]) ? '' : tempPlabcsz[context]
    prelim_entry.PE_score.value = isNaN(fScore[context] ) ? '' : fScore[context] 
    prelim_entry.PE_items.value = isNaN(fItems[context]) ? '' : fItems[context]
    Plabme.innerHTML = isNaN(tempPlabme[context]) ? '' : tempPlabme[context]
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
    q1[context] = prelim_entry.q1.value;
    q2[context] = prelim_entry.q2.value;
    q3[context] = prelim_entry.q3.value;
    Prelim_Q = (parseFloat(q1[context]) + parseFloat(q2[context]) + parseFloat(q3[context])) / 3;
    if((q1[context]!='') && q2[context] !='' && q3[context] !=''){
        if ((isNaN(Prelim_Q)) || (q1[context] < 0 || q1[context] > 100) || (q2[context] < 0 || q2[context] > 100) || (q3[context] < 0 || q3[context] > 100)){
            notify("Invalid Entries")
            tempTotalQuizScore[context] = 'Invalid Entries'
            return
        } 
        tempTotalQuizScore[context] = Prelim_Q.toFixed(2)
        totalQuizScore.innerHTML = Prelim_Q.toFixed(2)
    }
}

const prelim_cs=()=>{
    var z = 0;
    if(prelim_entry.Ps.value=='') return
    z = parseFloat(prelim_entry.Ps.value);
    if (isNaN(z) || (z < 0 || z > 100)){
        notify('Invalid Entries')
        tempLecCs[context]='Invalid Entry'
        LecCS.innerHTML = "Invalid Entry";}
    else{
        tempLecCs[context]=z.toFixed(2)
        LecCS.innerHTML = z.toFixed(2)
        ;}
}

const prelim_il=()=>{
    if(prelim_entry.Pil.value=='') return
    var z = 0;
    z = parseFloat(prelim_entry.Pil.value);
    if (isNaN(z) || (z < 0 || z > 100)){
        tempLecPil[context] = "Invalid Entry"
        LecPil.innerHTML = "Invalid Entry"
        notify('Invalid Entry')
    }else{
        tempLecPil[context]=z.toFixed(2)
        LecPil.innerHTML = z.toFixed(2)
    }	
}

const prelim_we=(score,items)=>{
    var res = 0;
    tScore[context]=score
    tItems[context]=items
    if (parseFloat(score) > parseFloat(items)){
        Plecme.innerHTML = "Invalid Entry";
        tempPlecme[context]='Invalid Entry'
    }else{
        a = totalQuizScore.innerHTML;
        b = LecCS.innerHTML;
        c = LecPil.innerHTML;
        d = 0;
        f = PLAB_G.innerHTML;
        res = parseFloat(score/items) * 100;
        Plecme.innerHTML = res.toFixed(2);
        tempPlecme[context]=res.toFixed(2)
    }
        d = (a * .3) + (b * .1) + (c * .1) + (res * .5);
        PLEC_G.innerHTML = d.toFixed(2);
        tempPLEC_G[context] = d.toFixed(2)
        PRELIM_G.innerHTML = ((d * .4) + (f * .6)).toFixed(2);
        tempPRELIM_G[context] =  ((d * .4) + (f * .6)).toFixed(2);
}

const prelim_LAB_quiz=()=>{
    var Prelim_mQ = 0;
    m1[context] = prelim_entry.m1.value;
    m2[context] = prelim_entry.m2.value;
    m3[context] = prelim_entry.m3.value;

    Prelim_mQ = (parseFloat(m1[context]) + parseFloat(m2[context]) + parseFloat(m3[context])) / 3;
    if(m1[context] == '' || m2[context]=='' || m3[context] == '') return
    if (isNaN(Prelim_mQ) || (m1[context] < 0 || m1[context] > 100) || (m2[context] < 0 || m2[context] > 100) || (m3[context] < 0 || m3[context] > 100)){
        Plabquiz.innerHTML = "Invalid Entries"
        tempPlabquiz[context]='Invalid Entries'
        notify('invalid Entry')
        ;}
    else{
        Plabquiz.innerHTML = Prelim_mQ.toFixed(2)
        tempPlabquiz[context]=Prelim_mQ.toFixed(2)
    }
}

const  prelim_lab_cs=()=>{
    var z = 0;
    if(prelim_entry.Plabcs.value == '') return
    z = parseFloat(prelim_entry.Plabcs.value);
    if (isNaN(z) || (z < 0 || z > 100)){
        Plabcsz.innerHTML = "Invalid Entry"
        tempPlabcsz[context] = "Invalid Entry"
    }
    else{
        tempPlabcsz[context] = z.toFixed()
        Plabcsz.innerHTML = z.toFixed(2);}
}

const pre_PE = ()=>{
    fScore[context] = prelim_entry.PE_score.value
    fItems[context] = prelim_entry.PE_items.value
    if(fItems[context] == '' || fScore[context]=='') return
    fScore[context] = parseFloat(fScore[context]);
    fItems[context] = parseFloat(fItems[context]);
    if(fItems[context]<fScore[context]){
        notify('items must greater than score')
        return
    }
    if(isNaN(fScore[context]) || (fScore[context] < 0 || fScore[context] > 100) || isNaN(fItems[context]) || (fItems[context] < 0 || fItems[context] > 100)){
        Plabme.innerHTML = "Invalid Entry"
        notify('invalid Entry')
        return
    }
    fItems[context] = fItems[context] == 0 ? 1 : fItems[context]
    tempPlabme[context]=(fScore[context] / fItems[context] ) * 100
    Plabme.innerHTML = (fScore[context] / fItems[context] ) * 100
}
    
