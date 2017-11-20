var url = "https://ywc15.ywc.in.th/api/interview"; //API data
$.getJSON(url,function(peopleObj) {

	var ctMajor = []; //content major list name
	var dsMajor = []; //design major list name
	var mkMajor = []; //marketing major list name
	var pgMajor = []; //programming major list name

	//Value to display list name in each major
	var listMorning = "";
	var listAfternoon = "";
	
	//push obj of all major in each array allow each major
	for(var i = 0; i < peopleObj.length; i++){
		if(peopleObj[i].major == "content"){
			ctMajor.push(peopleObj[i]);
		}
		if(peopleObj[i].major == "design"){
			dsMajor.push(peopleObj[i]);
		}
		if(peopleObj[i].major == "marketing"){
			mkMajor.push(peopleObj[i]);
		}
		if(peopleObj[i].major == "programming"){
			pgMajor.push(peopleObj[i]);
		}
	}
	
	//Sorting all major in ascending order
	ctMajor.sort(function(a, b) {return parseInt(a.interviewRef.substring(2,4)) - parseInt(b.interviewRef.substring(2,4));});
	dsMajor.sort(function(a, b) {return parseInt(a.interviewRef.substring(2,4)) - parseInt(b.interviewRef.substring(2,4));});
	mkMajor.sort(function(a, b) {return parseInt(a.interviewRef.substring(2,4)) - parseInt(b.interviewRef.substring(2,4));});
	pgMajor.sort(function(a, b) {return parseInt(a.interviewRef.substring(2,4)) - parseInt(b.interviewRef.substring(2,4));});
	
	//User can press enter instead of click on search button
	document.getElementById("nameInput").addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("search").click();
		}
	});

	//if user click on this id it will do function
	document.getElementById("major-box-ct").addEventListener("click", ctShow);
	document.getElementById("major-box-ds").addEventListener("click", dsShow);
	document.getElementById("major-box-mk").addEventListener("click", mkShow);
	document.getElementById("major-box-pg").addEventListener("click", pgShow);
	document.getElementById("search").addEventListener("click", searchName);
	document.getElementById("clear").addEventListener("click", clearName);

	//Show content list name
	function ctShow(){
		clearShow();
		for(var i = 0; i < 25; i++){
			listMorning += "<p>" + ctMajor[i].interviewRef + " " + ctMajor[i].firstName + " " + ctMajor[i].lastName + "</p>";
		}
		for(var i = 25; i < ctMajor.length; i++){
			listAfternoon += "<p>" + ctMajor[i].interviewRef + " " + ctMajor[i].firstName + " " + ctMajor[i].lastName + "</p>";
		}
		$("#list-name-morning").html(listMorning);
		$("#list-name-afternoon").html(listAfternoon);
		$("#list-box").height("1500px");
		$("#list-box-morning").height("79%");
		$("#list-box-afternoon").height("97%");
		$("#ct-text").css("background-color","#F24C27");
		$("#ct-text-inside").css("color","white");
	}
	//Show design list name
	function dsShow(){
		clearShow();
		for(var i = 0; i < 20; i++){
			listMorning += "<p>" + dsMajor[i].interviewRef + " " + dsMajor[i].firstName + " " + dsMajor[i].lastName + "</p>";
		}
		for(var i = 20; i < dsMajor.length; i++){
			listAfternoon += "<p>" + dsMajor[i].interviewRef + " " + dsMajor[i].firstName + " " + dsMajor[i].lastName + "</p>";
		}
		$("#list-name-morning").html(listMorning);
		$("#list-name-afternoon").html(listAfternoon);
		$("#list-box").height("1600px");
		$("#list-box-morning").height("61%");
		$("#list-box-afternoon").height("91%");
		$("#ds-text").css("background-color","#F24C27");
		$("#ds-text-inside").css("color","white");
	}
	//Show marketing list name
	function mkShow(){
		clearShow();
		for(var i = 0; i < 18; i++){
			listMorning += "<p>" + mkMajor[i].interviewRef + " " + mkMajor[i].firstName + " " + mkMajor[i].lastName + "</p>";
		}
		for(var i = 18; i < mkMajor.length; i++){
			listAfternoon += "<p>" + mkMajor[i].interviewRef + " " + mkMajor[i].firstName + " " + mkMajor[i].lastName + "</p>";
		}
		$("#list-name-morning").html(listMorning);
		$("#list-name-afternoon").html(listAfternoon);
		$("#list-box").height("1600px");
		$("#list-box-morning").height("55%");
		$("#list-box-afternoon").height("93%");
		$("#mk-text").css("background-color","#F24C27");
		$("#mk-text-inside").css("color","white");
	}
	//Show programming list name
	function pgShow(){
		clearShow();
		for(var i = 0; i < 23; i++){
			listMorning += "<p>" + pgMajor[i].interviewRef + " " + pgMajor[i].firstName + " " + pgMajor[i].lastName + "</p>";
		}
		for(var i = 23; i < pgMajor.length; i++){
			listAfternoon += "<p>" + pgMajor[i].interviewRef + " " + pgMajor[i].firstName + " " + pgMajor[i].lastName + "</p>";
		}
		$("#list-name-morning").html(listMorning);
		$("#list-name-afternoon").html(listAfternoon);
		$("#list-box").height("2000px");
		$("#list-box-morning").height("55%");
		$("#list-box-afternoon").height("93%");
		$("#pg-text").css("background-color","#F24C27");
		$("#pg-text-inside").css("color","white");
	}

	//default show
	ctShow();

	//clear all listname when click on another major
	function clearShow(){
		listMorning = "";
		listAfternoon = "";
		$("#ct-text").css("background-color","rgb(243, 243, 243");
		$("#ds-text").css("background-color","rgb(243, 243, 243");
		$("#mk-text").css("background-color","rgb(243, 243, 243");
		$("#pg-text").css("background-color","rgb(243, 243, 243");
		$("#ct-text-inside").css("color","#0f0f0f");
		$("#ds-text-inside").css("color","#0f0f0f");
		$("#mk-text-inside").css("color","#0f0f0f");
		$("#pg-text-inside").css("color","#0f0f0f");
	}

	//search name (must be Thai language)
	function searchName(){
		var results = [];
		var input = $("#nameInput").val();
		var resultName = "<h5>ไม่พบรายชื่อที่ค้นหา</h5>";
		var english = /^[A-Za-z0-9]*$/;
		var boxHeight = 0;
		var resultHeight = 0;
		if(input.length > 0){
			if(!(english.test(input))){
				for(var i = 0; i < peopleObj.length; i++) {
					for(key in peopleObj[i]) {
						if(peopleObj[i][key].indexOf(input)!=-1) {
							results.push(peopleObj[i]);
							resultName = "";
						}
					}
				}
				if(results.length >= 1){
					for(var j = 0; j < results.length; j++){
						resultName += "<h5>" + results[j].firstName + " " + results[j].lastName + " สาขา " + results[j].major + "</h5>";
					}
					boxHeight = 145 + (40 * (results.length - 1)) - (3.9 * (results.length - 1));
					resultHeight = (40 * results.length) - (3.9 * (results.length - 1));
					$("#search-box").height(boxHeight + "px");
					$("#search-result").height(resultHeight + "px");
					$("#search-result").css("background-color", "white");
					$("#search-result-text").html(resultName);
				}
				else{
					$("#search-box").height("145px");
					$("#search-result").height("40px");
					$("#search-result").css("background-color", "white");
					$("#search-result-text").html(resultName);
				}
			}
			else if(english.test(input)){
				$("#search-box").height("145px");
				$("#search-result").height("40px");
				$("#search-result").css("background-color", "white");
				$("#search-result-text").html(resultName);
			}
		}
		else{
			$("#search-box").height("100px");
			$("#search-result").height("0");
			$("#search-result-text").html("");
		}
	}
	//Clear all value in input textbox and search result
	function clearName(){
		$("#search-box").height("100px");
		$("#search-result").height("0");
		$("#nameInput").val("");
		$("#search-result-text").html("");
	}
})

//Scroll up to the top of page
function toTopOfPage(){
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}
function toDownOfPage(){
	$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
}