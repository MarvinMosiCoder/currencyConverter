//inputs
var input_1 = 
document.getElementById('input_one');
var input_2 = 
document.getElementById('input_two');

//forms
var form_1 =
document.getElementById('form_one');
var form_2 =
document.getElementById('form_two');

//selection
var sel_one = 
document.getElementById('select_one');
var sel_two = 
document.getElementById('select_two');

//select the value in options 1
function getSelectedOption(sel_one) {
        var opt;
        for ( var i = 0, len = sel_one.options.length; i < len; i++ ) {
            opt = sel_one.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }
//select the value in options 2
function getSelectedOption(sel_two) {
        var opt;
        for ( var i = 0, len = sel_two.options.length; i < len; i++ ) {
            opt = sel_two.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }

	//input one
input_1.addEventListener('input', getCurrency);
function getCurrency(){
	var val = input_1.value;
	
	if(sel_one.value == 'Philippines' && sel_two.value =='USA'){
		document.querySelector('#input_two').value = val*0.021;
	}else if(sel_one.value == 'Philippines' && sel_two.value == 'Dinar'){
		document.querySelector('#input_two').value = val*0.0064;
	}else if(sel_one.value == 'Philippines' && sel_two.value == 'Saudi'){
		document.querySelector('#input_two').value = val*0.079;
	}else if(sel_one.value == 'Dinar' && sel_two.value == 'Philippines'){
		document.querySelector('#input_two').value = val*157.83;
	}
	else if(sel_one.value == 'USA' && sel_two.value == 'Philippines'){
		document.querySelector('#input_two').value = val*48.15;
	}
	
}

//input 2

input_2.addEventListener('input', getCurrency2);
function getCurrency2(){
	var val = input_2.value;
	
	if(sel_one.value == 'Philippines' && sel_two.value =='USA'){
		document.querySelector('#input_one').value = val*48.15;
	}else if(sel_one.value == 'Philippines' && sel_two.value == 'Dinar'){
		document.querySelector('#input_one').value = val*157.83;
	}else if(sel_one.value == 'Philippines' && sel_two.value == 'Saudi'){
		document.querySelector('#input_one').value = val*0.079;
	}
	
	
}
