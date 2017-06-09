import $ from 'jquery';

export function initFancyInputBox() {

	const fancyInputList = $('input.dataInput');
    let contextValue='';
    
	if (fancyInputList.length > 0) {
		console.log('length= ', fancyInputList.length);

		fancyInputList.each(function(index, element) {
			const input = $(element);
			const textVal = input.val().trim();
            
			// Workaround to handle the autofill
			if (textVal.length === 0) {
				input.val('');
				input.change(function(event) {
					event.preventDefault();
					contextValue = input.context.value;

			    input.addClass('js-userData');
			    $('body').trigger('click');
				});
			}

			if(textVal.length === 0) {
		    $(input).removeClass('js-userData');
			}
			else {
				input.addClass('js-userData');
			}

			$('.dataInput').focusout((event) => {
				const input = $(event.target);
				const textVal = input.val();
					if(textVal === "") {
						input.removeClass('js-userData');
					} else {
						input.addClass('js-userData');
					}
			});

		});
	}
}

