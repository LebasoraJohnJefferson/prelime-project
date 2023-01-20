//-------------------------------------------- START OF LECTURE GRADE
		//START OF QUIZ
		var Pre_QG = 0;
        // check if the user input is number
        while(true){ 
            Q_count = Number(prompt("LECTURE: How many Quiz did you conduct?"));
            if(isNaN(Q_count)) alert("Letter or special character are not accepted") 
            else break
        }

		x = Q_count + 1;

		i = 1; //initialize variable
		while(i != x){ //condition
			a = parseFloat(prompt("Enter grade for Q" + i));
			if (isNaN(a)){
				alert("Letters and Special Characters are not accepted.");}
			else if(a < 0 || a > 100){
				alert("Negative numbers and numbers higher than 100 and invalid.");}
			else{
				i++; //iteration
				Pre_QG += a;}
		}

		if (Q_count > 1){
			Pre_QG = (Pre_QG / Q_count).toFixed(2);
			prelim_form.Pquiz.value = Pre_QG;} //get the average
		else{
			prelim_form.Pquiz.value = Pre_QG.toFixed(2);
		}
		//END OF QUIZ

		//START OF CLASS STANDING
		while(true){
			PLec_CS = Number(prompt("LECTURE: Enter grade for Class Standing"));
			if (isNaN(PLec_CS)){
				alert("Invalid score!");
			}
			else if(PLec_CS < 0 || PLec_CS > 100){
				alert("Invalid score!");
			}
			else{
				prelim_form.Pcs.value = PLec_CS.toFixed(2);
				break;}
		}//END OF CLASS STANDING

		//START OF INDEPENDENT LEARNING
		while(true){
			PLec_IL = Number(prompt("LECTURE: Enter grade for Indepenent Learning"));
			if (isNaN(PLec_IL)){
				alert("invalid score");
			}
			else if(PLec_IL < 0 || PLec_CS > 100){
				alert("invalid score");
			}
			else{
				prelim_form.Pil.value = PLec_IL.toFixed(2);
				break;
			}
		}//END OF INDEPENDENT LEARNING

		//START OF MAJOR EXAM
		Pre_WritExamScore = 0;
		Pre_WritExamItems = Number(prompt("LECTURE: Enter number of items for written exam."));
		while(true){
			Pre_WritExamScore = Number(prompt("LECTURE: Enter score"));
			if (isNaN(Pre_WritExamScore)){
				alert("Invalid score!");
			}
			else if(Pre_WritExamScore < 0){
				alert("Invalid score!");
			}
			else if (Pre_WritExamScore > Pre_WritExamItems){
				alert("Invalid score!");
			}
			else
				break;
		}
		Pre_Writ_ME = (Pre_WritExamScore / Pre_WritExamItems) * 100;
		prelim_form.Plecme.value = Pre_Writ_ME.toFixed(2);
		//END OF MAJOR EXAM

		//START OF LECTURE GRADE
		Pre_QG = Pre_QG * .3;
		PLec_CS = PLec_CS * .1;
		PLec_IL = PLec_IL * .1;
		Pre_Writ_ME = Pre_Writ_ME *.5;
		PLECGRADE = Pre_QG + PLec_IL + PLec_CS + Pre_Writ_ME;
		prelim_form.PLEC_G.value = PLECGRADE.toFixed(2);
		//END OF LECTURE GRADE

		//-------------------------------------------- START OF LABORATORY GRADE
		//START OF QUIZ
		var PreLAB_QG = 0;
		Q_cnt = Number(prompt("LABORATORY: How many Quiz did you conduct?"));
		y = Q_cnt + 1;

		i = 1; //initialize variable
		while(i != y){ //condition
			b = parseFloat(prompt("Enter grade for Q" + i));
			if (isNaN(b)){
				alert("Letters and Special Characters are not accepted.");}
			else if(b < 0 || b > 100){
				alert("Negative numbers and numbers higher than 100 and invalid.");}
			else{
				i++; //iteration
				PreLAB_QG += b;}
		}

		if (Q_cnt > 1){
			PreLAB_QG = (PreLAB_QG / Q_cnt).toFixed(2); //get the average
			prelim_form.Plabquiz.value = PreLAB_QG;} //get the average
		else{
			prelim_form.Plabquiz.value = PreLAB_QG.toFixed(2);
		}
		//END OF QUIZ

		//START OF CLASS STANDING
		while(true){
			PLab_CS = Number(prompt("LABORATORY: Enter grade for Class Standing"));
			if (isNaN(PLab_CS)){
				alert("Invalid score!");
			}
			else if(PLab_CS < 0 || PLab_CS > 100){
				alert("Invalid score!");
			}
			else
				prelim_form.Plabcs.value = PLab_CS.toFixed(2);
				break;
		}//END OF CLASS STANDING

		//START OF MAJOR EXAM
		Pre_LabExamScore = 0;
		Pre_LabExamItems = Number(prompt("LABORATORY: Enter number of items for written exam."));
		while(true){
			Pre_LabExamScore = Number(prompt("LABORATORY: Enter score"));
			if (isNaN(Pre_LabExamScore)){
				alert("Invalid score!");
			}
			else if(Pre_LabExamScore < 0){
				alert("Invalid score!");
			}
			else if (Pre_LabExamScore > Pre_LabExamItems){
				alert("Invalid score!");
			}
			else
				break;
		}
		Pre_Lab_ME = (Pre_LabExamScore / Pre_LabExamItems) * 100;
		prelim_form.Plabme.value = Pre_Lab_ME.toFixed(2);
		//END OF MAJOR EXAM

		//START OF LABORATORY GRADE
		PreLAB_QG = PreLAB_QG * .4;
		PLab_CS = PLab_CS * .1;
		Pre_Lab_ME = Pre_Writ_ME *.5;
		PLABGRADE = PreLAB_QG + PLab_CS + Pre_Lab_ME;
		prelim_form.PLAB_G.value = PLABGRADE.toFixed(2);
		//END OF LABORATORY GRADE

		//START OF PERIODIC GRACE
		PRELIM = (PLECGRADE * .6) + (PLABGRADE * .4);

		if (PRELIM >= 96 && PRELIM <= 100){
			w = "| A+ | 1.0";
		}
		else if (PRELIM >= 91 && PRELIM <= 95){
			w = "| A | 1.25";
		}

		prelim_form.PRELIM_G.value = PRELIM.toFixed(2) + " " + w; 
		//END OF PERIODIC GRADE
