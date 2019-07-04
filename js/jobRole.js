/******************************************************************
                            JOB ROLE SECTION
********************************************************************/

//variables used for this section
const $inputName = $('#name');
const $jobRole = $('#other-title');
const $email = $('#mail');
const $emailLabel = $email.prev();
const $emailWarning = $('<span class="tooltip"><b> Email must be in the format: name@provider.com</b></span>');
const $emailWarning2 = $('<span>')

//append email warning but hide it initially
$emailLabel.append($emailWarning);
$emailWarning.hide();

//function to validate correct email format
function emailValidate(email) {
  return /[^@]+@[a-z]+\.[a-z]+/i.test(email);
}

/*********************
EMAIL VALIDATION
*********************/

//event listener for change in email input
$email.on("change keyup" , function () {

      //assign a variable to credit card input field value
      const $emailValue = $email.val();

      //calling 1st validation function
      validateInput(emailValidate, $emailWarning, $emailWarning2, $emailValue, $email);

});

//hide other job Role input field
$jobRole.hide();


//auto focus on name field upon page load
$inputName.focus();

const $jobTitle = $('#title');

//event listener to add text box if "other" is selected in dropdown menu
$jobTitle.on('change' , function(){

          //set a variable to the value of option selected in from dropdown
          const $selected = $('#title option:selected').val();

          //if "other" is selected then show hidden field
          if ($selected === 'other') {

          $jobRole.show();

         //if any other option is selected hide the extra text field
      }  else {
          $jobRole.hide();
      }

});
