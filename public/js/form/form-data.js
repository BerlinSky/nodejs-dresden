import $ from 'jquery';

export const currentForm = $(`form.js-FormValidation`);
export const formKey = $(currentForm).attr('id');
export const formInputList = $(currentForm).find(`input[type=text], input[type=number], input[type=email], input[type=password], select, input[type=checkbox], textarea`);
export const formOptionList = $(currentForm).find(`select, input[type=checkbox]`);
export const formInputStatusList = () => $(currentForm).find(`input[valid-input="false"], textarea[valid-input="false"], select[valid-input="false"]`);

// donot add js- to the non-required fields.. 

export const formDataMap = [
	{ formKey: "sampleForm",
	  inputList: [
	  {
	    elemKey: "js-firstName",
	    messages: { "isRequired": "Please enter a valid first name" }
	  },
	  {
	    elemKey: "js-lastName",
	    messages: { "isRequired": "Please enter a valid last name" }
	  },
	  {
	    elemKey: "js-subject",
	    messages: { "isRequired": "Please enter a required value country" }
	  },
	  {
	    elemKey: "js-description",
	    messages: { "isRequired": "Please enter some required text here" }
	  },
	  {
	    elemKey: "js-agreement",
	    messages: { "isRequired": "Checkbox is required" }
	  },
	  {
	    elemKey: "js-email",
	    messages: {
	      "isRequired": "Please enter a valid email address",
	      "email": "Only valid email address is allowed."
	    }
	  },
	  {
	    elemKey: "js-favNumber",
	    formatPattern: "[0-9]{5}",
	    messages: {
	      "isRequired": "Please enter a valid email address",
	      "pattern": "Please enter a numeric and 5 digits long.",
	      "email": "Only valid email address is allowed."
	    }
	  },
	  {
	    elemKey: "js-password",
	    messages: {
	      "isRequired": "Please enter a secure password"
	    }
	  },
	  {
	    elemKey: "js-passwordVerify",
	    partner: "js-password",
	    messages: {
	      "isRequired": "Please enter a secure password",
	      "partner": "Password values need to match."
	    }
	  }]
	},
  { 
	  formKey: "contactForm",
	  inputList: [
		  {
			  elemKey: "js-firstName",
			  messages: { "isRequired": "Please enter a valid first name." }
		  },
		  {
			  elemKey: "js-lastName",
			  messages: { "isRequired": "Please enter a valid last name." }
		  },
		  {
			  elemKey: "js-subject",
			  messages: { "isRequired": "Please select a topic." }
      },
		  {
			  elemKey: "js-email",
			  messages: {
				  "isRequired": "Please enter a valid email address.",
				  "email": "Only valid email address is allowed."
				}
		  },
		  {
			  elemKey: "js-desc",
			  messages: { "isRequired": "Please enter some required text here." }
		  }
	  ]
  },
  
  {  
	  formKey: "newsLetterForm",
	  inputList: [
		  {
			  elemKey: "js-country",
			  messages: { "isRequired": "Please select a country." }
		  },
		  {
			  elemKey: "js-zipcode",
			  messages: { "isRequired": "Please enter a valid zipcode." }
		  },
		  {
			  elemKey: "js-email",
			  messages: {
				  "isRequired": "Please enter a valid email address.",
				  "email": "Only valid email address is allowed."
			  }
		  }, 
	      {
			  elemKey: "js-agreement",
			  messages: { "isRequired": "Checkbox is required" }
	      },
		  {
			  elemKey: "js-tos",
			  messages: { "isRequired": "Please agree to the Terms and Conditions." }
		  },
      ]
  },
  
  { 
	  formKey: "loginForm",
	  inputList: [
		  {
			  elemKey: "js-password",
			  messages: { "isRequired": "Please enter your password." }
		  },
		  {
			  elemKey: "js-email",
			  messages: {
				  "isRequired": "Please enter a valid email address.",
				  "email": "Only valid email address is allowed."
			  }
		  },

	  ]
  },  

  { 
	  formKey: "resetPasswordForm",
	  inputList: [
		  {
		  	    elemKey: "js-email",
		  		messages: {
		  			"isRequired": "Please enter a valid email address.",
		  			"email": "Only valid email address is allowed."
		  		}
		  }
	  ]
  }, 
  
  { 
	  formKey: "updatePasswordForm",
	  inputList: [
		  {
			  elemKey: "js-email",
			  messages: {
				  "isRequired": "Please enter a valid email address.",
				  "email": "Only valid email address is allowed."
			  }
		  },
		  {
			  elemKey: "js-password",
			  formatPattern: "[^.$]{6,}", 
			  messages: { 
				   "isRequired": "Please enter a valid password.",
				   "pattern": "The password you entered is too short. It must be at least 6 characters in length.",
			  }
		  },
		  {
			  elemKey: "js-passwordVerify",
			  formatPattern: "[^.$]{6,}", 
			  messages: { 
				   "isRequired": "Please re-enter your password.",
				   "pattern": "The password you entered is too short. It must be at least 6 characters in length.",
			  }
		  },
		  {
			  elemKey: "js-userName",
			  messages: { "isRequired": "Please enter your user name." }
		  },
	  ]
  },
  { 
	  formKey: "changePasswordForm",
	  inputList: [
		  {
			  elemKey: "js-credential",
			  messages: { "isRequired": "Please enter a valid password." }
		  },
		  {
			  elemKey: "js-newCredential",
			  formatPattern: "[^.$]{6,}", 
			  messages: { 
				   "isRequired": "Please enter a valid password." ,
				   "pattern": "The password you entered is too short. It must be at least 6 characters in length.",
			  }
		  },
		  {
			  elemKey: "js-newCredentialVerify",
			  formatPattern: "[^.$]{6,}", 
			  partner: "js-newCredential",
			  messages: {
			      "partner": "Password values need to match.",
			      "pattern": "The password you entered is too short. It must be at least 6 characters in length.",
			  }

		  },
	  ]
  },
  
  { 
	  formKey: "subscribeStep1Form",
	  inputList: [	
		  {
			  elemKey: "js-email",
			  messages: {
				  "isRequired": "Please enter a valid email address.",
				  "email": "Only valid email address is allowed."
			  }
		  },
		  {
			  elemKey: "js-password",
			  formatPattern: "[^.$]{6,}", 
			  messages: { 
				   "isRequired": "Please enter a valid password." ,
				   "pattern": "The password you entered is too short. It must be at least 6 characters in length.",
			  }
		  },
		  {
			  elemKey: "js-passwordVerify",
			  formatPattern: "[^.$]{6,}", 
			  messages: { 
				   "isRequired": "Please enter a valid password." ,
				   "pattern": "The password you entered is too short. It must be at least 6 characters in length.",
			  }
		  },
		  {
			  elemKey: "js-userName",
			  formatPattern: "[a-z0-9\_]{3,}", 
			  messages: { 
				    "isRequired": "Please enter your user name." ,
				    "pattern": "Your User Name must be at least 3 characters and contain only lowercase letters, numbers, and/or _",	
			  }
		  },
		  {
			  elemKey: "js-country",
			  messages: { "isRequired": "Please select a country." }
		  },
		  {
			  elemKey: "js-zipcode",
			  messages: { "isRequired": "Please enter a valid zipcode." }
		  },	      
		  {
			  elemKey: "js-birthDay",
			  messages: { "isRequired": "Please enter your birthday.",
				          "birthday" : "Invalid Birthday Format.",
			 }
		  },
		  {
			  elemKey: "js-tos",
			  messages: { "isRequired": "Please agree to the Terms and Conditions." }
		  },
	  ]
    },
    
    { 
  	  formKey: "subscribeStep2Form",
  	  inputList: [
  		  {
  			  elemKey: "js-firstName",
  			  messages: { "isRequired": "Please enter a valid first name." }
  		  },
  		  {
  			  elemKey: "js-lastName",
  			  messages: { "isRequired": "Please enter a valid last name." }
  		  },
  		  {
  			  elemKey: "js-gender",
  			  messages: { "isRequired": "Please select a gender." }
  	      },	
  		  {
  			  elemKey: "js-country",
  			  messages: { "isRequired": "Please select a country." }
  		  },
  		  {
  			  elemKey: "js-zipcode",
  			  messages: { "isRequired": "Please enter a valid zipcode." }
  		  },	      
  		  {
  			  elemKey: "js-city",
  			  messages: { "isRequired": "Please enter a city." }
  		  },	      
  		  {
  			  elemKey: "js-address",
  			  messages: { "isRequired": "Please enter your address." }
  		  },
  		  {
  			  elemKey: "js-state",
  			  messages: { "isRequired": "Please select a state." }
  		  }

  	  ]
    },
    
    { 
  	  formKey: "upgradeForm",
  	  inputList: [
  		  {
  			  elemKey: "js-firstName",
  			  messages: { "isRequired": "Please enter a valid first name." }
  		  },
  		  { 
  			  elemKey: "js-lastName",
  			  messages: { "isRequired": "Please enter a valid last name." }
  		  },
  		  {
  			  elemKey: "js-email",
  			  messages: {
  				  "isRequired": "Please enter a valid email address.",
  				  "email": "Only valid email address is allowed."
  			  }
  		  },	
  		  {
  			  elemKey: "js-country",
  			  messages: { "isRequired": "Please select a country." }
  		  },
  		  {
  			  elemKey: "js-zipcode",
  			  messages: { "isRequired": "Please enter a valid zipcode." }
  		  },	      
  		  {
  			  elemKey: "js-city",
  			  messages: { "isRequired": "Please enter a city." }
  		  },	      
  		  {
  			  elemKey: "js-address",
  			  messages: { "isRequired": "Please enter your address." }
  		  },
  		  {
  			  elemKey: "js-state",
  			  messages: { "isRequired": "Please select a state." }
  		  },
  		  {
  		    elemKey: "js-tos",
  		    messages: { "isRequired": "Checkbox is required" }
  		  },
  	  ]
    },
    
    { 
    	  formKey: "profileForm",
    	  inputList: [
    		  {
    			  elemKey: "js-firstName",
    			  messages: { "isRequired": "Please enter a valid first name." }
    		  },
    		  { 
    			  elemKey: "js-lastName",
    			  messages: { "isRequired": "Please enter a valid last name." }
    		  },
    		  {
    			  elemKey: "js-email",
    			  messages: {
    				  "isRequired": "Please enter a valid email address.",
    				  "email": "Only valid email address is allowed."
    			  }
    		  },	
    		  {
    			  elemKey: "js-country",
    			  messages: { "isRequired": "Please select a country." }
    		  },
    		  {
    			  elemKey: "js-zipcode",
    			  messages: { "isRequired": "Please enter a valid zipcode." }
    		  },	      
    		  {
    			  elemKey: "js-city",
    			  messages: { "isRequired": "Please enter a city." }
    		  },	      
    		  {
    			  elemKey: "js-address",
    			  messages: { "isRequired": "Please enter your address." }
    		  },
    		  {
    			  elemKey: "js-state",
    			  messages: { "isRequired": "Please select a state." }
    		  }
    	  ]
      }

    
];

