var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

var filterFns = {
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

$('.filters-button-group').onclick('button', function() {
  var filterValue = $( this ).attr('data-filter');
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

function viewPathA1(){
	var check = confirm("AUTO > Door 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		var divControl01 = document.getElementById("test01");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>AUTO&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Door</font>";
		document.getElementById("a2").style.display = "none";
		document.getElementById("a3").style.display = "none";
		document.getElementById("a4").style.display = "none";
		setTimeout(function () {
			$('#auto').trigger('click');
		}, 50);
		setTimeout(function () {
			divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' onClick='ModeChange()'><p class='symbol01'>Mode change</p></div>";
		}, 600);
		document.getElementById("a1").style.pointerEvents = 'none';
		document.getElementById("all").style.pointerEvents = 'none';
		document.getElementById("auto").style.pointerEvents = 'none';
		document.getElementById("event").style.pointerEvents = 'none';
		document.getElementById("manual").style.pointerEvents = 'none';
	}
}

function viewPathA2(){
	var check = confirm("AUTO > Valve 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		var divControl01 = document.getElementById("test01");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>AUTO&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Valve</font>";
		document.getElementById("a1").style.display = "none";
		document.getElementById("a3").style.display = "none";
		document.getElementById("a4").style.display = "none";
		setTimeout(function () {
			$('#auto').trigger('click');
		}, 50);
		setTimeout(function () {
			divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' onClick='ModeChange()'><p class='symbol01'>Mode change</p></div>";
		}, 850);
		document.getElementById("a2").style.pointerEvents = 'none';
		document.getElementById("all").style.pointerEvents = 'none';
		document.getElementById("auto").style.pointerEvents = 'none';
		document.getElementById("event").style.pointerEvents = 'none';
		document.getElementById("manual").style.pointerEvents = 'none';
	}
}

function viewPathA3(){
	var check = confirm("AUTO > Egress 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		var divControl01 = document.getElementById("test01");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>AUTO&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Egress</font>";
		document.getElementById("a1").style.display = "none"
		document.getElementById("a2").style.display = "none"
		document.getElementById("a4").style.display = "none"
		setTimeout(function () {
			$('#auto').trigger('click');
		}, 50);
		setTimeout(function () {
			divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' onClick='ModeChange()'><p class='symbol01'>Mode change</p></div>";
		}, 1000);
		document.getElementById("a3").style.pointerEvents = 'none';
		document.getElementById("all").style.pointerEvents = 'none';
		document.getElementById("auto").style.pointerEvents = 'none';
		document.getElementById("event").style.pointerEvents = 'none';
		document.getElementById("manual").style.pointerEvents = 'none';
	}
}

function viewPathA4(){
	var check = confirm("AUTO > Mission4 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		var divControl01 = document.getElementById("test01");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>AUTO&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Mission4</font>";
		document.getElementById("a1").style.display = "none";
		document.getElementById("a2").style.display = "none";
		document.getElementById("a3").style.display = "none";
		setTimeout(function () {
			$('#auto').trigger('click');
		}, 50);
		setTimeout(function () {
			divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' onClick='ModeChange()'><p class='symbol01'>Mode change</p></div>";
		}, 850);
		document.getElementById("a4").style.pointerEvents = 'none';
		document.getElementById("all").style.pointerEvents = 'none';
		document.getElementById("auto").style.pointerEvents = 'none';
		document.getElementById("event").style.pointerEvents = 'none';
		document.getElementById("manual").style.pointerEvents = 'none';
	}
}

function viewPathE1(){
	var check = confirm("EVENT > Handclap 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		var divControl01 = document.getElementById("test01");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Handclap</font>";
		document.getElementById("e2").style.display = "none"
		document.getElementById("e3").style.display = "none"
		document.getElementById("e4").style.display = "none"
		setTimeout(function () {
			$('#event').trigger('click');
		}, 100);
		setTimeout(function () {
		divControl01.innerHTML += "<div class='element-item transition11 ㄴ'  id='ReadyE1' data-category='transition' onClick='ReadyE1()'><p class='symbol01'>Ready</p></div>";
		divControl01.innerHTML += "<div class='element-item transition111 ㄴ'  id='DoE1'    data-category='transition' onClick='DoE1()'><p class='symbol01'>Do</p></div>";
		divControl01.innerHTML += "<div class='element-item transition111 ㄴ'  id='EndE1'   data-category='transition' onClick='EndE1()'><p class='symbol01'>End</p></div>";
		divControl01.innerHTML += "<div class='element-item transition021 ㄴ'  data-category='transition' onClick='ModeChange()'><p class='symbol01'>Mode change</p></div>";
		}, 600);
		document.getElementById("e1").style.pointerEvents = 'none';
		document.getElementById("all").style.pointerEvents = 'none';
		document.getElementById("auto").style.pointerEvents = 'none';
		document.getElementById("event").style.pointerEvents = 'none';
		document.getElementById("manual").style.pointerEvents = 'none';
	}
}

function viewPathE2(){
	var check = confirm("EVENT > Handshake 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		var divControl01 = document.getElementById("test01");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Handshake</font>";
		document.getElementById("e1").style.display = "none"
		document.getElementById("e3").style.display = "none"
		document.getElementById("e4").style.display = "none"
		setTimeout(function () {
			$('#event').trigger('click');
		}, 100);
		setTimeout(function () {
		divControl01.innerHTML += "<div class='element-item transition11 ㄴ'  id='ReadyE2' data-category='transition' onClick='ReadyE2()'><p class='symbol01'>Ready</p></div>";
		divControl01.innerHTML += "<div class='element-item transition111 ㄴ'  id='DoE2'    data-category='transition' onClick='DoE2()'><p class='symbol01'>Do</p></div>";
		divControl01.innerHTML += "<div class='element-item transition111 ㄴ'  id='EndE2'   data-category='transition' onClick='EndE2()'><p class='symbol01'>End</p></div>";
		divControl01.innerHTML += "<div class='element-item transition021 ㄴ'  data-category='transition' onClick='ModeChange()'><p class='symbol01'>Mode change</p></div>";
		}, 850);
		document.getElementById("e2").style.pointerEvents = 'none';
		document.getElementById("all").style.pointerEvents = 'none';
		document.getElementById("auto").style.pointerEvents = 'none';
		document.getElementById("event").style.pointerEvents = 'none';
		document.getElementById("manual").style.pointerEvents = 'none';
	}
}

function viewPathE3(){
	var check = confirm("EVENT > Hello 실행합니다.");
    var width = $('#shade').width();
	if(check == true){
		var divPath = document.getElementById("path");
		var divControl01 = document.getElementById("test01");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Hello</font>" + width;
		document.getElementById("e1").remove()
		document.getElementById("e2").remove()
		document.getElementById("e4").remove()
		setTimeout(function () {
			$('#event').trigger('click');
		}, 100);
		setTimeout(function () {
            if(width >= 1026){
        		divControl01.innerHTML += "<span class='custom-dropdown big' id='CntE3'><select id='CntE33' onClick='OptionCheck()'><option value='1'>1&nbsp;</option><option value='2'>2&nbsp;</option><option value='3'>3&nbsp;</option><option value='4'>4&nbsp;</option><option value='5'>5&nbsp;</option><option value='6'>6&nbsp;</option><option value='7'>7&nbsp;</option><option value='8'>8&nbsp;</option><option value='9'>9&nbsp;</option></select></span>";
        		divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='ReadyE3' data-category='transition' onClick='ReadyE3()'><p class='symbol01'>Ready</p></div>";
        		divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='DoE3'    data-category='transition' onClick='DoE3()'><p class='symbol01'>Do</p></div>";
        		divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='EndE3'   data-category='transition' onClick='EndE3()'><p class='symbol01'>End</p></div>";
        		divControl01.innerHTML += "<div class='element-item transition021 ㄴ'  data-category='transition' onClick='ModeChange()'><p class='symbol01'>Mode change</p></div>";
            }
            else{
                divControl01.innerHTML += "<span class='custom-dropdown big' id='CntE3'><select id='CntE33' onClick='OptionCheck()'><option value='1'>1&nbsp;</option><option value='2'>2&nbsp;</option><option value='3'>3&nbsp;</option><option value='4'>4&nbsp;</option><option value='5'>5&nbsp;</option><option value='6'>6&nbsp;</option><option value='7'>7&nbsp;</option><option value='8'>8&nbsp;</option><option value='9'>9&nbsp;</option></select></span>";
        		divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='ReadyE3' data-category='transition' onClick='ReadyE3()'><p class='symbol01'>Ready</p></div>";
        		divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='DoE3'    data-category='transition' onClick='DoE3()'><p class='symbol01'>Do</p></div>";
        		divControl01.innerHTML += "<div class='element-item transition03 ㄴ'  id='EndE3'   data-category='transition' onClick='EndE3()'><p class='symbol01'>End</p></div>";
        		divControl01.innerHTML += "<div class='element-item transition021 ㄴ'  data-category='transition' onClick='ModeChange()'><p class='symbol01'>Mode change</p></div>";
            }
		}, 1000);
		document.getElementById("e3").style.pointerEvents = 'none';
		document.getElementById("all").style.pointerEvents = 'none';
		document.getElementById("auto").style.pointerEvents = 'none';
		document.getElementById("event").style.pointerEvents = 'none';
		document.getElementById("manual").style.pointerEvents = 'none';
	}
}

function viewPathE4(){
	var check = confirm("EVENT > Introduce 실행합니다.");
    var width = $('#shade').width();	
    if(check == true){
		var divPath = document.getElementById("path");
		var divControl01 = document.getElementById("test01");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Introduce</font>";
		document.getElementById("e1").style.display = "none"
		document.getElementById("e2").style.display = "none"
		document.getElementById("e3").style.display = "none"
		setTimeout(function () {
			$('#event').trigger('click');
		}, 100);
		setTimeout(function () {
		        divControl01.innerHTML += "<div class='element-item transition11 ㄴ'  id='EndE2'   data-category='transition' style='cursor:pointer;' onClick='EndE4()'><p class='symbol01'>End</p></div>";
                if(width >= 1026){
                        divControl01.innerHTML += "<div class='element-item transition021 ㄴ'  data-category='transition' style='cursor:pointer;' onClick='ModeChange()'><p class='symbol01'>Mode change</p></div>";
                }
                else{
                        divControl01.innerHTML += "<div class='element-item transition022 ㄴ'  data-category='transition' style='cursor:pointer;' onClick='ModeChange()'><p class='symbol01'>Mode change</p></div>";
                }
		}, 850);
		document.getElementById("e4").style.pointerEvents = 'none';
		document.getElementById("all").style.pointerEvents = 'none';
		document.getElementById("auto").style.pointerEvents = 'none';
		document.getElementById("event").style.pointerEvents = 'none';
		document.getElementById("manual").style.pointerEvents = 'none';
	}
}

function viewPathM1(){
	var check = confirm("MANUAL > Joint Control 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		var divControl01 = document.getElementById("test01");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>MANUAL&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Joint Control</font>";
		document.getElementById("m2").style.display = "none"
		document.getElementById("m3").style.display = "none"
		setTimeout(function () {
			$('#manual').trigger('click');
		}, 50);
		setTimeout(function () {
			divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' onClick='ModeChange()' style='cursor:pointer;'><p class='symbol01'>Mode change</p></div>";
		}, 700);
		document.getElementById("m1").style.pointerEvents = 'none';
		document.getElementById("all").style.pointerEvents = 'none';
		document.getElementById("auto").style.pointerEvents = 'none';
		document.getElementById("event").style.pointerEvents = 'none';
		document.getElementById("manual").style.pointerEvents = 'none';
	}
}

function viewPathM2(){
	var check = confirm("MANUAL > Task Control 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		var divControl01 = document.getElementById("test01");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>MANUAL&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Task Control</font>";
		document.getElementById("m1").style.display = "none"
		document.getElementById("m3").style.display = "none"
		setTimeout(function () {
			$('#manual').trigger('click');
		}, 50);
		setTimeout(function () {
			divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer;' onClick='ModeChange()'><p class='symbol01'>Mode change</p></div>";
		}, 850);
		document.getElementById("m2").style.pointerEvents = 'none';
		document.getElementById("all").style.pointerEvents = 'none';
		document.getElementById("auto").style.pointerEvents = 'none';
		document.getElementById("event").style.pointerEvents = 'none';
		document.getElementById("manual").style.pointerEvents = 'none';
	}
}

function viewPathM3(){
	var check = confirm("MANUAL > Recog 실행합니다.")
	if(check == true){
		var divPath = document.getElementById("path");
		var divControl01 = document.getElementById("test01");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>MANUAL&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Recog</font>";
		document.getElementById("m1").style.display = "none"
		document.getElementById("m2").style.display = "none"
		setTimeout(function () {
			$('#manual').trigger('click');
		}, 50);
		setTimeout(function () {
			divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer;' onClick='ModeChange()'><p class='symbol01'>Mode change</p></div>";
		}, 1000);
		document.getElementById("m3").style.pointerEvents = 'none';
		document.getElementById("all").style.pointerEvents = 'none';
		document.getElementById("auto").style.pointerEvents = 'none';
		document.getElementById("event").style.pointerEvents = 'none';
		document.getElementById("manual").style.pointerEvents = 'none';
	}
}

function ReadyE1(){
	var check = confirm("Event > Handclap > Ready 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Handclap&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Ready</font>";
	}
}
function DoE1(){
	var check = confirm("Event > Handclap > Do 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Handclap&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Do</font>";
	}
}
function EndE1(){
	var check = confirm("Event > Handclap > End 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Handclap&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>End</font>";
	}
}

function ReadyE2(){
	var check = confirm("Event > Handshake > Ready 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Handshake&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Ready</font>";
	}
	document.getElementById("CntE3").style.pointerEvents = 'none';
}
function DoE2(){
	var check = confirm("Event > Handshake > Do 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Handshake&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Do</font>";
	}
}
function EndE2(){
	var check = confirm("Event > Handshake > End 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>Handshake&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black'>End</font>";
	}
}

function ReadyE3(){
	var check = confirm("Event > Hello > Ready 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red'  style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' >Hello&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' >Ready</font>";
	}
}
function DoE3(){
	var check = confirm("Event > Hello > Do 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red'  style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' >Hello&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' >Do</font>";
	}
}
function EndE3(){
	var check = confirm("Event > Hello > End 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red'  style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' >Hello&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' >End</font>";
	}
}

function EndE4(){
	var check = confirm("Event > Introduce > End 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red'  style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' >Introduce&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' >End</font>";
	}
}

function ModeChange(){
	var check = confirm("Mode를 초기화합니다.");
	if(check == true){
		location.href = "dic_main.html";
	}
}

function OptionCheck(){
	var flag = 1;
	$('#CntE3').on('change', function() {
		var str = this.value + " 회 설정합니다."
		if(flag == 1){
			alert(str);
		}
		else{
			return;
		}
		flag += 1;
	})
}