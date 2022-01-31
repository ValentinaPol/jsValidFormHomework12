var form = document.forms.addSite;
var inputDeveloper = document.querySelector('#developer-name');
var inputNameSite = document.querySelector('#name-site');
var inputUrlSite = document.querySelector('#url-site');
var inputDayStartSite = document.querySelector('#date-start-site');
var inputVisitorsDay = document.querySelector('#visitors-day');
var inputEmailCommunication = document.querySelector('#email-communication');
var inputSiteDescription = document.querySelector('#site-description');
var sendBtn = document.querySelector('#send-btn');
var radioPlace = form.elements.radioPlace;


function validateDeveloper(){
    if(inputDeveloper.value.trim() !== '' && inputDeveloper.value[0] === inputDeveloper.value[0].toUpperCase()){
        inputDeveloper.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputDeveloper.nextElementSibling.style.display = 'block';
        return false;
    }
}
inputDeveloper.addEventListener('blur', validateDeveloper);
    


function validateNameSite(){
    if(inputNameSite.value.trim() !== '' && inputNameSite.value.length >= 5){
        inputNameSite.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputNameSite.nextElementSibling.style.display = 'block';
        return false;
    }
}

inputNameSite.addEventListener('blur', validateNameSite);
    


function validateUrlSite(){
    if(inputUrlSite.value.trim() !== '' && inputUrlSite.value.indexOf('@') != -1){
        inputUrlSite.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputUrlSite.nextElementSibling.style.display = 'block';
        return false;
    }
}

inputUrlSite.addEventListener('blur', validateUrlSite);
   

function validateDayStartSite(){
    if(inputDayStartSite.value !== ''){
        var inputDate = new Date(inputDayStartSite.value);
        var dateNow = new Date();
        if(inputDate > dateNow && inputDate.getFullYear() - dateNow.getFullYear() < 3){
            inputDayStartSite.nextElementSibling.style.display = 'none';
            return true;
        } else {
            inputDayStartSite.nextElementSibling.style.display = 'block';
            return false;
        }   
    } else {
        inputDayStartSite.nextElementSibling.style.display = 'block';
        return false;
    }
}

inputDayStartSite.addEventListener('blur', validateDayStartSite);
    

function validateVisitorDay(){
    if(inputVisitorsDay.value.trim() !== '' && inputVisitorsDay.value > 0){
        inputVisitorsDay.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputVisitorsDay.nextElementSibling.style.display = 'block';
        return false;
    }
}


inputVisitorsDay.addEventListener('blur', validateVisitorDay);


function validateEmailCommunication(){
    if(inputEmailCommunication.value.trim() !== '' && inputEmailCommunication.value.indexOf('@') != -1){
        inputEmailCommunication.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputEmailCommunication.nextElementSibling.style.display = 'block';
        return false;
    }
}


inputEmailCommunication.addEventListener('blur', validateEmailCommunication); 


function validateSiteDescription(){
    var errorSiteDescription = document.querySelector('#error-site-description');
    if(inputSiteDescription.value.trim() !== ''){
        errorSiteDescription.style.display = 'none';
        return true;
    } else {
        errorSiteDescription.style.display = 'block';
        return false;
    }
}


inputSiteDescription.addEventListener('blur', validateSiteDescription);


function validateRadioPlace(){
    var errorPlaceMessage = document.querySelector('#error-place');
    if((radioPlace[0].checked === true) || (radioPlace[1].checked === true) || (radioPlace[2].checked === true) ){
        errorPlaceMessage.style.display = 'none';
        return true;
    } else {
        errorPlaceMessage.style.display = 'block';
        return false;
    }

}

radioPlace[0].addEventListener('change', validateRadioPlace);
radioPlace[1].addEventListener('change', validateRadioPlace);
radioPlace[2].addEventListener('change', validateRadioPlace);
    

form.addEventListener('submit', function(event){
    var isErrorFound = false;
    if(!validateDeveloper() && !isErrorFound){
        form.elements.developerName.scrollIntoView();
        form.elements.developerName.focus();
        isErrorFound = true;
        event.preventDefault();

    };
    if(!validateNameSite() && !isErrorFound){
        form.elements.nameSite.scrollIntoView();
        form.elements.nameSite.focus();
        isErrorFound = true;
        event.preventDefault();
    };
    if(!validateUrlSite() && !isErrorFound){
        form.elements.urlSite.scrollIntoView();
        form.elements.urlSite.focus();
        isErrorFound = true;
        event.preventDefault();
    };
    if(!validateDayStartSite() && !isErrorFound){
        form.elements.dateStartSite.scrollIntoView();
        form.elements.dateStartSite.focus();
        isErrorFound = true;
        event.preventDefault();
    };
    if(!validateVisitorDay() && !isErrorFound){
        form.elements.visitorsDay.scrollIntoView();
        form.elements.visitorsDay.focus();
        isErrorFound = true;
        event.preventDefault();
    };
    if(!validateEmailCommunication() && !isErrorFound){
        form.elements.emailCommunication.scrollIntoView();
        form.elements.emailCommunication.focus();
        isErrorFound = true;
        event.preventDefault();
    };
    validateRadioPlace();
    if(!validateSiteDescription() && !isErrorFound){
        form.elements.siteDescription.scrollIntoView();
        form.elements.siteDescription.focus();
        isErrorFound = true;
        event.preventDefault();
    };
})

