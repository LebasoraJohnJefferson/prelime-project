const addQuizzes = document.getElementById('add-quizzes')
const addLabQuizzes = document.getElementById('add-lab-quizzes')
const animation = document.getElementById('animation')
const container = document.getElementById('contentContainer')
const calResultContainer = document.getElementById('calResult')

const Q = document.getElementById('Q')
const CS = document.getElementById('CS')
const IL = document.getElementById('IL')
const WR = document.getElementById('WR')
const MP = document.getElementById('MP')
const LCS = document.getElementById('LCS')
const PE = document.getElementById('PE')
const LG = document.getElementById('LG')
const LABG = document.getElementById('LabG')

let Pre_Writ_ME=0
let currentStep = 1
let Q_count = 0 
let L_count = 0
let PLECGRADE  = 0
let PLEC_G = 0
let quizArray = []

const prelim_form = {'Pquiz':0,'Pcs':0,'Pil':0,'Plecme':0,'ES':0}
const lab_prelim_form = {'Pquiz':0,'Pcs':0,'Plecme':0,'ES':0}

const loadingAnimation = ()=>{
	animation.style.display = 'flex'
	container.style.display = 'none'
	setTimeout(()=>{
		animation.style.display = 'none'
		calResultContainer.style.display = 'flex'
	},3000)
}


const result=()=>{
	let lab_PLec_CS = document.getElementById('lab_PLec_CS').value
	let lab_Pre_WritExamItems = document.getElementById('lab_Pre_WritExamItems').value
	let lab_Pre_WritExamScore = document.getElementById('lab_Pre_WritExamScore').value

	lab_prelim_form['Pcs'] = ((isNaN(lab_PLec_CS)) || Number(lab_PLec_CS) < 0 || Number(lab_PLec_CS) > 100 ) ? -1 : Number(lab_PLec_CS)


	lab_prelim_form['Plecme'] = ((isNaN(lab_Pre_WritExamItems)) || Number(lab_Pre_WritExamItems) < 0 || Number(lab_Pre_WritExamItems) > 100 ) ? -1 : Number(lab_Pre_WritExamItems)

	lab_prelim_form['ES'] =  ((isNaN(lab_Pre_WritExamScore)) || prelim_form['Plecme']<Number(lab_Pre_WritExamScore) || Number(lab_Pre_WritExamScore) < 0 || Number(lab_Pre_WritExamScore) > 100 ) ? -1 : Number(lab_Pre_WritExamScore)

	if(prelim_form['Pcs'] != -1 && prelim_form['Pil'] != -1 && prelim_form['Plecme'] && prelim_form['ES'] != -1){
		console.log(lab_prelim_form)
		
		let PreLAB_QG = lab_prelim_form['Pquiz'] * .4;
		let PLab_CS = lab_prelim_form['Pcs'] * .1;
		let Pre_Lab_ME = (Pre_Writ_ME * .5);
		let PLABGRADE = (PreLAB_QG + PLab_CS + Pre_Lab_ME).toFixed(2);
		console.log(PLABGRADE)
		
		
		let PRELIM = (PLECGRADE * .6) + (PLABGRADE * .4);


		if (PRELIM >= 96 && PRELIM <= 100){
			w = "| A+ | 1.0";
		}
		else if (PRELIM >= 91 && PRELIM <= 95){
			w = "| A | 1.25";
		}else if (PRELIM >= 86 && PRELIM <= 90){
			w = "| B | 1.5";

		}else if (PRELIM >= 81 && PRELIM <= 85){
			w = "| C | 2.00";
		}else if (PRELIM >= 76 && PRELIM <= 80){
			w = "| D | 2.50";
		}else if (PRELIM == 75){
			w = "| E | 3.0";
		}else{
			w = "| F | Fail";
		}
		Q.innerHTML = prelim_form['Pquiz']
		CS.innerHTML = prelim_form['Pcs']
		IL.innerHTML = prelim_form['Pil']
		WR.innerHTML = (prelim_form['ES'] / prelim_form['Plecme']) * 100
		MP.innerHTML = lab_prelim_form['Pquiz']
		LCS.innerHTML = lab_prelim_form['Pcs']
		PE.innerHTML = (lab_prelim_form['ES'] / lab_prelim_form['Plecme']) * 100
		
		LG.innerHTML = PLEC_G


		LABG.innerHTML = PLABGRADE
		PG.innerHTML = `<br>${PRELIM.toFixed(2)} ${w}`
		loadingAnimation()

	}else{
		notify('Input must be positive number or greater than 100! or written exam is greater than score')
	}
}

const notify = (msg)=>{
    notification.style.display = 'flex'
    notification.innerHTML = `<div>${msg}</div>`
    setTimeout(()=>{
        notification.style.display='none'
    },3000)
}


const nextStep=(step)=> {
	if(step == 2){

		let Pre_QG = 0
		for(i=0;i<=Q_count;i++){
			let quiz = document.getElementById(`quiz${i}`)
			Pre_QG+=Number(quiz.value)
		}
		prelim_form['Pquiz'] = Q_count+1 > 1 ? Number((Pre_QG / (Q_count+1)).toFixed(2)) : Number(Pre_QG.toFixed(2))
		Validate(AveQuiz(),step,"Input must be positive number or greater than 100!")
	}
	if(step == 3){
		
		let PLec_CS = document.getElementById('PLec_CS').value
		let PLec_IL = document.getElementById('PLec_IL').value
		let Pre_WritExamItems = document.getElementById('Pre_WritExamItems').value
		let Pre_WritExamScore = document.getElementById('Pre_WritExamScore').value


		prelim_form['Pcs'] = ((isNaN(PLec_CS)) || Number(PLec_CS) < 0 || Number(PLec_CS) > 100 ) ? -1 : Number(PLec_CS)

		prelim_form['Pil'] = ((isNaN(PLec_IL)) || Number(PLec_IL) < 0 || Number(PLec_IL) > 100 ) ? -1 : Number(PLec_IL)

		prelim_form['Plecme'] = ((isNaN(Pre_WritExamItems)) || Number(Pre_WritExamItems) < 0 || Number(Pre_WritExamItems) > 100 ) ? -1 : Number(Pre_WritExamItems)

		prelim_form['ES'] =  ((isNaN(Pre_WritExamScore)) || prelim_form['Plecme']<Number(Pre_WritExamScore) || Number(Pre_WritExamScore) < 0 || Number(Pre_WritExamScore) > 100 ) ? -1 : Number(Pre_WritExamScore)
		console.log(prelim_form)

		
		let Pre_QG = prelim_form['Pquiz'] * .3;
		PLec_CS = prelim_form['Pcs'] * .1;
		PLec_IL = prelim_form['Pil'] * .1;
		Pre_Writ_ME = (Pre_WritExamScore/Pre_WritExamItems) * 100 *.5;
		PLECGRADE = Pre_QG + PLec_IL + PLec_CS + Pre_Writ_ME;
		PLEC_G = PLECGRADE.toFixed(2);

		Validate(prelim_form['Pcs'] != -1 && prelim_form['Pil'] != -1 && prelim_form['Plecme'] && prelim_form['ES'] != -1,step,"Input must be positive number or greater than 100! or written exam is greater than score")

	}
	if(step == 4){
		let Pre_QG_Lab = 0
		for(i=0;i<=L_count;i++){
			let quiz = document.getElementById(`labQuiz${i}`)
			Pre_QG_Lab+=Number(quiz.value)
		}
		lab_prelim_form['Pquiz'] = L_count+1 > 1 ? Number((Pre_QG_Lab / (L_count+1)).toFixed(2)) : Number(Pre_QG_Lab.toFixed(2))
		Validate(AveLabQuiz(),step,"Input must be positive number or greater than 100!")
	}
}


const Validate=(isTrue,step,msg)=>{
	if(isTrue){
		document.getElementById(`step${currentStep}`).classList.remove("active")
		currentStep = step;
		document.getElementById(`step${currentStep}`).classList.add("active")
	}else{
		notify(msg)
	}
}

const prevStep=(step)=>{
  document.getElementById(`step${currentStep}`).classList.remove("active")
  currentStep = step;
  document.getElementById(`step${currentStep}`).classList.add("active")
}

document.getElementById("step1").classList.add("active")

const AddQuizBtn= ()=>{
	Q_count++
	addQuizzes.innerHTML+=`
	<div class="input-container" id="add-quizzes">
	<label for="quiz${Q_count}">Quiz ${Q_count+1}:</label>
	<input type="text" type='number' placeholder='Enter score for quiz number ${Q_count+1}' id="quiz${Q_count}" name="quiz${Q_count}">
	</div>`
}

const AddLabQuizBtn=()=>{
	L_count++
	addLabQuizzes.innerHTML+=`
	<div class="input-container" id="add-quizzes">
	<label for="labQuiz${L_count}">Quiz ${L_count+1}:</label>
	<input type="text" type='number' placeholder='Enter score for quiz number ${L_count+1}' id="labQuiz${L_count}" name="labQuiz${L_count}">
	</div>`
}

const AveQuiz=()=>{
	let counter = 0
	for(i=0;i<=Q_count;i++){
		let quiz = document.getElementById(`quiz${i}`).value
		if(Number(quiz)>=0 && Number(quiz)<=100 && quiz.length!=0){
			counter++
		}
	}
	return Q_count+1 == counter
}

const AveLabQuiz=()=>{
	let counter = 0
	for(i=0;i<=L_count;i++){
		let quiz = document.getElementById(`labQuiz${i}`).value
		if(Number(quiz)>=0 && Number(quiz)<=100 && quiz.length!=0){
			counter++
		}
	}
	return L_count+1 == counter
}


