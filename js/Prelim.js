const addQuizzes = document.getElementById('add-quizzes')
let currentStep = 1
let Q_count = 0 
let quizArray = []
const prelim_form = {'Pquiz':0,'Pcs':0,'Pil':0,'Plecme':0,'ES':0}
const result=()=>{

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
		console.log(prelim_form,Q_count)
		Validate(AveQuiz(),step)
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
		if(prelim_form['Pcs'] > 0 && prelim_form['Pil'] > 0 && prelim_form['Plecme'] && prelim_form['ES']){
			Validate(true,step)
		}else{
			notify('Invalid Score')
		}
	}
	if(step == 4){
		Validate(true,step)
	}
}


const Validate=(isTrue,step)=>{
	if(isTrue){
		document.getElementById(`step${currentStep}`).classList.remove("active")
		currentStep = step;
		document.getElementById(`step${currentStep}`).classList.add("active")
	}else{
		notify("Input must be positive number or greater than 100!")
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

const AveQuiz=()=>{
	let counter = 0
	for(i=0;i<=Q_count;i++){
		let quiz = document.getElementById(`quiz${i}`).value
		if(Number(quiz)>=0 && Number(quiz)<=100){
			counter++
		}
	}
	return Q_count+1 == counter
}



// 		//-------------------------------------------- START OF LABORATORY GRADE
// 		//START OF QUIZ
// 		var PreLAB_QG = 0;
// 		Q_cnt = Number(prompt("LABORATORY: How many Quiz did you conduct?"));
// 		y = Q_cnt + 1;

// 		i = 1; //initialize variable
// 		while(i != y){ //condition
// 			b = parseFloat(prompt("Enter grade for Q" + i));
// 			if (isNaN(b)){
// 				alert("Letters and Special Characters are not accepted.");}
// 			else if(b < 0 || b > 100){
// 				alert("Negative numbers and numbers higher than 100 and invalid.");}
// 			else{
// 				i++; //iteration
// 				PreLAB_QG += b;}
// 		}

// 		if (Q_cnt > 1){
// 			PreLAB_QG = (PreLAB_QG / Q_cnt).toFixed(2); //get the average
// 			prelim_form.Plabquiz.value = PreLAB_QG;} //get the average
// 		else{
// 			prelim_form.Plabquiz.value = PreLAB_QG.toFixed(2);
// 		}
// 		//END OF QUIZ

// 		//START OF CLASS STANDING
// 		while(true){
// 			PLab_CS = Number(prompt("LABORATORY: Enter grade for Class Standing"));
// 			if (isNaN(PLab_CS)){
// 				alert("Invalid score!");
// 			}
// 			else if(PLab_CS < 0 || PLab_CS > 100){
// 				alert("Invalid score!");
// 			}
// 			else
// 				prelim_form.Plabcs.value = PLab_CS.toFixed(2);
// 				break;
// 		}//END OF CLASS STANDING

// 		//START OF MAJOR EXAM
// 		Pre_LabExamScore = 0;
// 		Pre_LabExamItems = Number(prompt("LABORATORY: Enter number of items for written exam."));
// 		while(true){
// 			Pre_LabExamScore = Number(prompt("LABORATORY: Enter score"));
// 			if (isNaN(Pre_LabExamScore)){
// 				alert("Invalid score!");
// 			}
// 			else if(Pre_LabExamScore < 0){
// 				alert("Invalid score!");
// 			}
// 			else if (Pre_LabExamScore > Pre_LabExamItems){
// 				alert("Invalid score!");
// 			}
// 			else
// 				break;
// 		}
// 		Pre_Lab_ME = (Pre_LabExamScore / Pre_LabExamItems) * 100;
// 		prelim_form.Plabme.value = Pre_Lab_ME.toFixed(2);
// 		//END OF MAJOR EXAM

// 		//START OF LABORATORY GRADE
// 		PreLAB_QG = PreLAB_QG * .4;
// 		PLab_CS = PLab_CS * .1;
// 		Pre_Lab_ME = Pre_Writ_ME *.5;
// 		PLABGRADE = PreLAB_QG + PLab_CS + Pre_Lab_ME;
// 		prelim_form.PLAB_G.value = PLABGRADE.toFixed(2);
// 		//END OF LABORATORY GRADE

// 		//START OF PERIODIC GRACE
// 		PRELIM = (PLECGRADE * .6) + (PLABGRADE * .4);

// 		if (PRELIM >= 96 && PRELIM <= 100){
// 			w = "| A+ | 1.0";
// 		}
// 		else if (PRELIM >= 91 && PRELIM <= 95){
// 			w = "| A | 1.25";
// 		}

// 		prelim_form.PRELIM_G.value = PRELIM.toFixed(2) + " " + w; 
// 		//END OF PERIODIC GRADE
