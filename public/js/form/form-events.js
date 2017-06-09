import $ from 'jquery';

import { currentForm, formKey, formOptionList, formInputList, formInputStatusList } from "./form-data";
import { validateInput, validateInputList } from "./form-validation";

export const formValidationEvents = () => {

  $(currentForm).attr('novalidate', 'novalidate');

  formOptionList.change(function(event) {
    const thisInput =$( event.target );
    validateInput(formKey, thisInput);
  })

  $(formInputList).keyup(function(event) {
    const thisInput =$( event.target );
    validateInput(formKey, thisInput);
  })

	$(currentForm).submit(function( event ) {


		validateInputList(formKey, formInputList);

    if (formInputStatusList().length > 0) {
      event.preventDefault();
    }
    else {
      const submitBtn = $(this).find('.js-submitButton');
      submitBtn.attr('disabled','true');
    }

    // enalbeSubmitBtn(submitBtn);

    // const enalbeSubmitBtn = () => {
    //   console.log("button");
    //   submitBtn.removeAttr('disabled');
    // }

    // setTimeout(enalbeSubmitBtn, 3000);

	});
}



