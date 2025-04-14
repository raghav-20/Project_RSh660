

let i = 0;

window.addEventListener('load', () => {
    showDynamicContent();
    setInterval(() => {
        showDynamicContent()
    }, 3000);
});

function showDynamicContent() {
    if (document.getElementById("dynamicSuggestions") != null) {
        let facts = [
            "Canada has two official languages: English and French.",
            "You can apply for a library card with just your address.",
            "Public healthcare does not cover dental services.",
            "Most students go to Ontario, British Columbia, and Quebec",
            "Students can work up to 24 hours per week during studies and full-time during breaks ",
            "Canada has more lakes than any other country – over 2 million!",
            "Poutine (fries, cheese curds, and gravy) is a beloved Canadian dish.",
            "Canadians are known for being polite – “sorry” is practically a reflex word."
        ];
        document.getElementById("dynamicSuggestions").textContent = facts[i];
        i = (i + 1) % facts.length;
    }
}
if (document.getElementById("dynamicSuggestions") != null) {

    setInterval(() => {

    }, 2000);

}
function openMachine(elementId) {

    document.querySelectorAll('.essentialMachines').forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById(elementId).style.display = 'flex';
}
//tried using the page through onclick event instead of <a> tag
function navigateToContact() {
    window.open("./page3_RSh660.html", "_blank");
}

function generateChecklist() {
    let type = document.getElementById("immiCheckType").value;
    let items = [];

    if (type === "Student") {
        items = ["Study Permit", "Health Insurance", "Open a bank account", "SIN Number"];
    }
    else if (type === "Worker") {
        items = ["Work Permit", "Open a Bank Account", "Sin Number", "Find a Job", "Get a driver's license"];
    }
    else if (type === "PR") {
        items = ["PR Card", "Find permanent housing", "Apply for Health Card", "Get a driver's license"];
    }

    document.getElementById("generatedChecklist").innerHTML = "<ul>" + items.map(i => `<li>${i}</li>`).join("") + "</ul>";
}

let guides = {
    Student: [
        "Apply for a Social Insurance Number (SIN)",
        "Register for provincial health insurance (if applicable)",
        "Open a Canadian bank account",
        "Get a mobile phone plan",
    ],
    PR: [
        "Apply for a Permanent Resident (PR) Card",
        "Find permanent accommodation",
        "Enroll children in school (if applicable)",
    ],
    Worker: [
        "Apply for a SIN",
        "Attend orientation by your employer",
        "Find temporary or permanent housing",
        "Review your employment rights",
    ]
};

function updateGuide() {
    let type = document.getElementById("entryType").value;
    let items = guides[type] || [];
    document.getElementById("guideOutput").innerHTML =
        "<ul>" + items.map(i => `<li>${i}</li>`).join("") + "</ul>";
}

function calculateCost() {
    let city = document.getElementById("city").value;
    // I used Number to convert string into integer this logic i learned in C#(Course- 1175)
    let people = Number(document.getElementById("people").value);
    let baseCosts = { Toronto: 1800, Calgary: 1400, Halifax: 1300, Vancouver: 2000, Edmonton: 1200, Montreal: 1500 };
    let base = baseCosts[city] || 0;
    let total = base + people * 400;

    document.getElementById("costOutput").textContent = `Estimated cost: $${total}/month\n(Note: this is only the Estimation)`;
}



function animateCount(el, target, duration = 2000) {
    let start = 0;
    let startTime = performance.now();

    function update(currentTime) {
        let elapsed = currentTime - startTime;
        let progress = Math.min(elapsed / duration, 1);
        let currentCount = Math.floor(progress * target);
        el.textContent = currentCount;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target + "+";
        }
    }

    requestAnimationFrame(update);
}

let counterElement = document.getElementById('counter');
let counterElement1 = document.getElementById('watch_time');
let hasAnimated = false;
// 
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            animateCount(counterElement, 100);
            animateCount(counterElement1, 50);
            hasAnimated = true;
        }
    });
}, { threshold: 0.6 }); // 60% of section in view

if (document.getElementById("stats") != null) {
    observer.observe(document.getElementById('stats'));
}
function startEffect(element, color) {
    let div1 = document.getElementById(element.id);
    div1.style.backgroundColor = color;
    div1.style.cursor = "pointer";
}
function endEffect(element, color) {
    let div1 = document.getElementById(element.id);
    div1.style.backgroundColor = color;
    // div1.style.cursor = "pointer";
}
function validations(form) {
    let isgivenNameValid = givenName(form);
    let isLastNameValid = lastName(form);
    let iscountryRight = countryName(form);
    let isDataRight = validDate(form);
    let isAppointDate = validDate1(form);
    let immiStatus = immigrationStatus(form);
    let enquiries = purposeInquiry(form);
   

    let valid = isgivenNameValid && isLastNameValid && iscountryRight && isDataRight && isAppointDate && immiStatus && enquiries;
    return valid;
}
function givenName(form) {

    let gname = form.elements["gname"];

  
    if (gname.validity.valueMissing) {
        gname.setCustomValidity("Please enter your First name");
        return false;
    }
    else {
       
        gname.setCustomValidity("");
        return true;
    }

}
function lastName(form) {

    let lname = form.elements["lname"];

  
    if (lname.validity.valueMissing) {
        lname.setCustomValidity("Please enter your Last name");
        return false;
    }
    else {
       
        lname.setCustomValidity("");
        return true;
    }

}
function countryName(){
    let country = document.getElementById('countryName');
    if (country.validity.valueMissing) {
        country.setCustomValidity("Please enter your Country name - eg: India");
        return false;
    }
    else {
       
        country.setCustomValidity("");
        return true;
    }

}
// function submitFormAction(form,e){
//     e.preventDefault()
//     processData(form);
// }
function validDate() {
    let date1 = document.getElementById('date');
    console.log(date1.value);
    let selectedDate = new Date(date1.value);
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (date1.validity.valueMissing) {
        date1.setCustomValidity("Please select a date.");
        return false;
    } else if (selectedDate >= today) {
        date1.setCustomValidity("Please select a past date.");
        return false;
    } else {
        date1.setCustomValidity("");
        return true;
    }
}
function validDate1() {
    let date2 = document.getElementById('date2');
    let selectedDate = new Date(date2.value);
    let today = new Date();

    // Normalize both dates to midnight
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (date2.validity.valueMissing) {
        date2.setCustomValidity("Please select a date.");
        return false;
    } else if (selectedDate <= today) {
        date2.setCustomValidity("Please select a future date.");
        return false;
    } else {
        date2.setCustomValidity("");
        return true;
    }
}




function immigrationStatus() {
    let status = document.getElementById("status1");
    if(status.value == "noOption"){
        status.setCustomValidity("Please choose one of the these");
        return false;
    }
    else{
        status.setCustomValidity("");
        return true;
    }


}
function purposeInquiry(form) {
    let enquiry = form.elements["media"];
    
    if(enquiry.value == "noSelect"){
        enquiry.setCustomValidity("Please choose one of the these");
        return false;
    }
    else{
        enquiry.setCustomValidity("");
        return true;
    }


}


    


function processData(form) {
    if (validations(form)) {  
       
    event.preventDefault();
    // Get all the form input values
    let target = document.getElementById("display_info");
    let first_Name = document.getElementById("gname").value;
    let last_Name = document.getElementById("lname").value;
    let country_n = document.getElementById("countryName").value;
    let date_ = document.getElementById("date").value;
    let dateOfAppointment = document.getElementById("date2").value;
    let immigration = document.getElementById('status1').value;
    let purpose__ = document.getElementById('media').value;
    let email_phn_input = document.querySelector('input[name="howToContact"]:checked').value;
    let email="";
    let phone="";
    if(document.getElementById('email_id')!=null && document.getElementById('email_id').value!=null){
        email=document.getElementById('email_id').value;

    }else if(document.getElementById('phone_num')!=null && document.getElementById('phone').value!=null){
        phone=document.getElementById('phone_num').value;
    }



    let textBox = document.getElementById("comments").value;


    
    let display = "<h1>Submitted Data<br></h1><hr id='submittedDataHr'>" +
        "First Name: " + first_Name + "<br>" + "Last Name: "+last_Name+ "<br>"+
        "Country: " + country_n + "<br>" +
        "Date: " + date_ + "<br>" + 
        "Date of Appointment: " +dateOfAppointment+"<br>"+
        "Immigration Status: " + immigration + "<br>" +
        "Student Purpose of Enquiry: " + purpose__ + "<br>" +
        "Any Comments: " + textBox + "<br>" +
        
        ((email!="")?"Prefered Mode of Contact: Email <br>"+"Email: "+email +"<br>" : "Prefered Mode of Contact: Email <br>"+ "Phone No.: "+phone +"<br>")+ "<h2> Is this Your Correct Info</h2> <br><input type='submit' value='YES'><input type='reset' value='NO' onclick='location.reload()'> ";
        
    
        target.style.textAlign='center';
        target.style.width="100%";
        target.style.padding="4px";
        target.style.color = 'white'
        target.innerHTML = display;

        
        return false;

}
}
function radioValueChange(element,inputId){
    //while, for-loop, do while loop but in js we have one more known as foreach loop
    document.querySelectorAll('.formDynamicContent').forEach(e => {
        e.style.display = 'none';
    });
    document.querySelectorAll('.emailPhoneInput').forEach(e => {
        e.removeAttribute("required")
    });

    document.getElementById(element).style.display='flex';
    document.getElementById(inputId).required = true;


}