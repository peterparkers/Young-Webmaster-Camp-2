var url = "https://ywc15.ywc.in.th/api/interview"; //API data
$.getJSON(url,function(peopleObj) {

	var ctMajor = []; //content major list name
	var dsMajor = []; //design major list name
	var mkMajor = []; //marketing major list name
	var pgMajor = []; //programming major list name
    
	//Value to display list name in each major
	var listMorning = "";
	var listAfternoon = "";
    
    var ctShowMorning = 25;
    var dsShowMorning = 20;
    var mkShowMorning = 18;
    var pgShowMorning = 23;
    var max;
    var idMajor = ["#ct", "#ds", "#mk", "#pg"];

	//push obj of all major in each array allow each major
	for(var i = 0; i < peopleObj.length; i++){
        peopleObj[i].firstName = peopleObj[i].firstName.replace(/^\s+|\s+$/gm,'');
        peopleObj[i].lastName = peopleObj[i].lastName.replace(/^\s+|\s+$/gm,'');
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
    var allShow = [ctShowMorning, dsShowMorning, mkShowMorning, pgShowMorning, ctMajor.length, dsMajor.length, mkMajor.length, pgMajor.length];
    
	for(var q = 0; q < peopleObj.length; q++){
		peopleObj[q].firstName = peopleObj[q].firstName + " " + peopleObj[q].lastName;
		peopleObj[q].lastName = "";
	}
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
		for(var i = 0; i < ctShowMorning; i++){
			listMorning += "<p>" + ctMajor[i].interviewRef + " " + ctMajor[i].firstName + " " + ctMajor[i].lastName + "</p>";
		}
		for(var i = ctShowMorning; i < ctMajor.length; i++){
			listAfternoon += "<p>" + ctMajor[i].interviewRef + " " + ctMajor[i].firstName + " " + ctMajor[i].lastName + "</p>";
		}
        listShow(listMorning, listAfternoon, 1);
	}
	//Show design list name
	function dsShow(){
		clearShow();
		for(var i = 0; i < dsShowMorning; i++){
			listMorning += "<p>" + dsMajor[i].interviewRef + " " + dsMajor[i].firstName + " " + dsMajor[i].lastName + "</p>";
		}
		for(var i = dsShowMorning; i < dsMajor.length; i++){
			listAfternoon += "<p>" + dsMajor[i].interviewRef + " " + dsMajor[i].firstName + " " + dsMajor[i].lastName + "</p>";
		}
		listShow(listMorning, listAfternoon, 2);
	}
	//Show marketing list name
	function mkShow(){
		clearShow();
		for(var i = 0; i < mkShowMorning; i++){
			listMorning += "<p>" + mkMajor[i].interviewRef + " " + mkMajor[i].firstName + " " + mkMajor[i].lastName + "</p>";
		}
		for(var i = mkShowMorning; i < mkMajor.length; i++){
			listAfternoon += "<p>" + mkMajor[i].interviewRef + " " + mkMajor[i].firstName + " " + mkMajor[i].lastName + "</p>";
		}
		listShow(listMorning, listAfternoon, 3);
	}
	//Show programming list name
	function pgShow(){
		clearShow();
		for(var i = 0; i < pgShowMorning; i++){
			listMorning += "<p>" + pgMajor[i].interviewRef + " " + pgMajor[i].firstName + " " + pgMajor[i].lastName + "</p>";
		}
		for(var i = pgShowMorning; i < pgMajor.length; i++){
			listAfternoon += "<p>" + pgMajor[i].interviewRef + " " + pgMajor[i].firstName + " " + pgMajor[i].lastName + "</p>";
		}
		listShow(listMorning, listAfternoon, 4);
	}

	//default show
	ctShow();

    //Display list name ( 2 sections morning and afternoon)
    function listShow(listMorning, listAfternoon, type){
        max = (allShow[type - 1] <= (allShow[type + 3] - allShow[type - 1]) ? allShow[type + 3] - allShow[type - 1] : allShow[type - 1]);
        var listBoxHeight = (max * 44) + 180;
        var mHeight = (allShow[type - 1] * 44) + 65;
        var aHeight = ((allShow[type + 3] - allShow[type - 1]) * 44) + 65;

        $("#list-name-morning").html(listMorning);
        $("#list-name-afternoon").html(listAfternoon);
        $("#list-box").height(listBoxHeight + "px");
        $("#list-box-morning").height(mHeight + "px");
        $("#list-box-afternoon").height(aHeight + "px");
        $(idMajor[type - 1] + "-text").css("background-color","#F24C27");
        $(idMajor[type - 1] + "-text-inside").css("color","white");
    }

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

    //display search result
    function showSearchResult(resultName, lResults){
        var boxHeight = 0;
        var resultHeight = 0;
        if(resultName.length > 1){
            boxHeight = 145 + (40 * (lResults - 1)) - (3.9 * (lResults - 1));
            resultHeight = (40 * lResults) - (3.9 * (lResults - 1));
            $("#search-box").height(boxHeight + "px");
            $("#search-result").height(resultHeight + "px");
            $("#search-result").css("background-color", "white");
            $("#search-result-text").html(resultName);
        }
        if(resultName.length == 1){
            $("#search-box").height("145px");
            $("#search-result").height("40px");
            $("#search-result").css("background-color", "white");
            $("#search-result-text").html("<h5>ไม่พบรายชื่อที่ค้นหา</h5>");
        }
        if(resultName.length == 0){
            $("#search-box").height("100px");
			$("#search-result").height("0");
			$("#search-result-text").html("");
        }
    }

    //check if result of search array is duplicate
    function checkDuplicate(results){
        var uniqueNames = [];
        $.each(results, function(i, el){
            if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
        });
        return uniqueNames;
    }

	//search name (must be Thai language)
	function searchName(){
		var results = [];
		var input = $("#nameInput").val();
		var resultName = "";
        var english = /^[A-Za-z0-9]*$/;
        var lResults;
        var d;
		if(input.length > 0){
			if(!(english.test(input))){
				for(var i = 0; i < peopleObj.length; i++) {
					for(key in peopleObj[i]) {
						if(peopleObj[i][key].indexOf(input)!=-1) {
							results.push(peopleObj[i]);
						}
					}
                }
                d = checkDuplicate(results);
				if(d.length >= 1){
					for(var j = 0; j < d.length; j++){
						resultName += "<h5>" + d[j].firstName + " " + d[j].lastName + " สาขา " + d[j].major + " " + "<mark>" + d[j].interviewRef + "</mark>"+ "</h5>";
                    }
                    lResults = d.length;
                    
                    showSearchResult(resultName, lResults);
					
				}
				else{
                    resultName = "1";
					showSearchResult(resultName, lResults);
				}
			}
			else if(english.test(input)){
                resultName = "1";
				showSearchResult(resultName, lResults);
			}
		}
		else{
			showSearchResult(resultName, lResults);
		}
    }

	//Clear all value in input textbox and search result
	function clearName(){
		$("#search-box").height("100px");
		$("#search-result").height("0");
		$("#nameInput").val("");
		$("#search-result-text").html("");
    }
    setInterval(searchName, 100);
})

//Scroll up to the top of page
function toTopOfPage(){
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}
function toDownOfPage(){
	$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
}
