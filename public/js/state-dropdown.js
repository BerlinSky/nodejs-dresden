import $ from 'jquery';

export function initStateDropDownBox() {
	
	let countryDropDown = $('#country');
	if (countryDropDown.length > 0) { 
		updateStateInput(countryDropDown.val());
		countryDropDown.change((event) => {
			updateStateInput(countryDropDown.val());
		});

	}
	
	
	/**
	 * make ajax call to get state from country
	 * @param country
	 * @returns
	 */
	function updateStateInput(country){

		if($("#state").length > 0){

			let curStateValue = $("#state").val();
			
			$.post(
				'/service/getstatesajax', // url
				{'country':country}, // data
				function(data){ 
					EvaluateStateResponse(data,curStateValue); 
				}, // callback
				"json" // type
			);
			

		}

	}
	

	/**
	 * populate dropdown select state/province
	 * @param jsonObject
	 * @param defstate
	 * @returns
	 */
	window.EvaluateStateResponse = function EvaluateStateResponse(jsonObject,defstate){
		
	    let statelist = jsonObject;
	    
		if(statelist !== false && statelist !== null && statelist !== undefined && statelist.length!==0){

			// create new select element
			let statelists = document.createElement('select');
			statelists.id = 'state';
			statelists.name = 'U_State';
	        statelists.setAttribute("required", "required");
			let newoption = document.createElement('option');
			newoption.value = '';
			newoption.text = "State";
			newoption.selected = true;
			try{
				statelists.add(newoption,null);
			}
			catch(ex){
				statelists.add(newoption);
			}
			
			let stateChecked=false;
			for(let abbreviation in statelist){
				// create new option element
				let newoption = document.createElement('option');
				newoption.value = abbreviation;
				newoption.text = statelist[abbreviation];
				if(defstate == abbreviation){
					newoption.selected = true;
					stateChecked=true;
				}
				// append option element to select element
				try{
					statelists.add(newoption,null);
				}
				catch(ex){
					statelists.add(newoption);
				}
			}
			$('#state').replaceWith(statelists);
			$('#state').attr('required','required');
			$('#state').addClass('dataInput js-state');

			$('#state').focus();


		} else if (document.getElementById('state').tagName != 'INPUT'){

			// create new input text element
			let statelists = document.createElement('input');
			statelists.type = 'text';
			statelists.id = 'state';
			statelists.name = 'state';
			statelists.value = defstate;
			$('#state').replaceWith(statelists);
			$('#state').removeAttr('required');
			$('#state').addClass('dataInput js-state');
			$('.js-state-error').html('');
			
			$('#state').val('');
			$('#state').blur();
			$("#country").blur();
		} 
		
	}
	
}

