var _a, _b, _c, _d, _e, _f, _g;
document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.getElementById('generate');
    var twoElement = document.getElementById('two');
    var scroll = document.getElementById('scroll');
    // Function to show the #two element
    function showTwo() {
        if (twoElement) {
            twoElement.style.display = 'block';
        }
    }
    function showScroll() {
        if (scroll) {
            scroll.style.display = 'block';
        }
    }
    // Add event listeners to the generate button
    if (generateButton) {
        generateButton.addEventListener('click', showTwo);
        generateButton.addEventListener('focus', showTwo);
        generateButton.addEventListener('click', showScroll);
    }
});
// Function to update the Name element
function updateName() {
    var yourName = document.getElementById('YourName').value;
    var nameElement = document.getElementById('Name');
    nameElement.textContent = yourName ? yourName : 'Name';
}
function updateNum() {
    var yourNum = document.getElementById('YourNum').value;
    var numElement = document.getElementById('PhoneNumber');
    numElement.textContent = yourNum ? yourNum : "PhoneNumber";
}
function updateAdd() {
    var yourAdd = document.getElementById('YourAdd').value;
    var addElement = document.getElementById("Address");
    addElement.textContent = yourAdd ? yourAdd : 'Address';
}
function updateFacebookLink() {
    var fbId = document.getElementById('fb').value;
    var fbLinkElement = document.getElementById('Facebook');
    if (fbId) {
        fbLinkElement.href = "https://www.facebook.com/".concat(fbId);
        fbLinkElement.textContent = fbId;
    }
    else {
        fbLinkElement.href = 'https://www.facebook.com/';
        fbLinkElement.textContent = 'Facebook Profile';
    }
}
function updateInstaLink() {
    var instaID = document.getElementById('insta').value;
    var instaLinkElement = document.getElementById('Instagram');
    if (instaID) {
        instaLinkElement.href = "https://www.instagram.com/".concat(instaID);
        instaLinkElement.textContent = instaID;
    }
    else {
        instaLinkElement.href = 'https://www.instagram.com/';
        instaLinkElement.textContent = 'Instagram Profile';
    }
}
function updateGmailLink() {
    var gmailId = document.getElementById('gm').value;
    var gmailLinkElement = document.getElementById('Gmail');
    if (gmailId) {
        gmailLinkElement.href = "".concat(gmailId);
        gmailLinkElement.textContent = gmailId;
    }
    else {
        gmailLinkElement.href = 'http://mail.google.com';
        gmailLinkElement.textContent = 'Gmail';
    }
}
function updateObj() {
    var obj = document.getElementById('obj').value;
    var objElement = document.getElementById('Objective');
    objElement.textContent = obj ? obj : 'Objective';
}
(_a = document.getElementById('YourName')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', updateName);
(_b = document.getElementById('YourNum')) === null || _b === void 0 ? void 0 : _b.addEventListener('input', updateNum);
(_c = document.getElementById('YourAdd')) === null || _c === void 0 ? void 0 : _c.addEventListener('input', updateAdd);
(_d = document.getElementById('fb')) === null || _d === void 0 ? void 0 : _d.addEventListener('input', updateFacebookLink);
(_e = document.getElementById('insta')) === null || _e === void 0 ? void 0 : _e.addEventListener('input', updateInstaLink);
(_f = document.getElementById('gm')) === null || _f === void 0 ? void 0 : _f.addEventListener('input', updateGmailLink);
(_g = document.getElementById('obj')) === null || _g === void 0 ? void 0 : _g.addEventListener('input', updateObj);
document.addEventListener('DOMContentLoaded', function () {
    // Function to add a new Work Experience textarea
    function addWEField() {
        var button = document.getElementById('WEbtn');
        if (!button)
            return;
        button.addEventListener('click', function () {
            var _a;
            var newTextArea = document.createElement('textarea');
            newTextArea.className = 'WEField';
            newTextArea.placeholder = 'Type Here';
            // Insert the new textarea before the button
            (_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(newTextArea, button);
            newTextArea.addEventListener('input', updateWorkExperienceList);
        });
    }
    // Function to add a new Academic Qualification textarea
    function addAQField() {
        var button = document.getElementById('AQbtn');
        if (!button)
            return;
        button.addEventListener('click', function () {
            var _a;
            var newTextArea = document.createElement('textarea');
            newTextArea.className = 'AQField';
            newTextArea.placeholder = 'Type Here';
            // Insert the new textarea before the button
            (_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(newTextArea, button);
            // Add event listener to the new textarea
            newTextArea.addEventListener('input', updateAcademicQualificationList);
        });
    }
    // Function to add a new Skill textarea
    function addSkillField() {
        var button = document.getElementById('skbtn');
        if (!button)
            return;
        button.addEventListener('click', function () {
            var _a;
            var newTextArea = document.createElement('textarea');
            newTextArea.className = 'SKField';
            newTextArea.placeholder = 'Type Here';
            // Insert the new textarea before the button
            (_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(newTextArea, button);
            // Add event listener to the new textarea
            newTextArea.addEventListener('input', updateSkills);
        });
    }
    // Function to update the Work Experience list
    function updateWorkExperienceList() {
        var weList = document.getElementById('WorkExperience');
        if (!weList)
            return;
        // Clear the current list
        weList.innerHTML = '';
        // Get all textareas from the Work Experience container
        var textareas = document.querySelectorAll('#column2 textarea.WEField');
        textareas.forEach(function (textarea) {
            var content = textarea.value.trim();
            if (content) {
                var listItem = document.createElement('li');
                listItem.textContent = content;
                weList.appendChild(listItem);
            }
        });
    }
    // Function to update the Academic Qualification list
    function updateAcademicQualificationList() {
        var aqList = document.getElementById('Education');
        if (!aqList)
            return;
        // Clear the current list
        aqList.innerHTML = '';
        // Get all textareas from the Academic Qualification container
        var textareas = document.querySelectorAll('#column2 textarea.AQField');
        textareas.forEach(function (textarea) {
            var content = textarea.value.trim();
            if (content) {
                var listItem = document.createElement('li');
                listItem.textContent = content;
                aqList.appendChild(listItem);
            }
        });
    }
    // Function to update the Skills list
    function updateSkills() {
        var skList = document.getElementById('Skills');
        if (!skList)
            return;
        // Clear the current list
        skList.innerHTML = '';
        // Get all textareas from the Skills container
        var textareas = document.querySelectorAll('#column2 textarea.SKField');
        textareas.forEach(function (textarea) {
            var content = textarea.value.trim();
            if (content) {
                var listItem = document.createElement('li');
                listItem.textContent = content;
                skList.appendChild(listItem);
            }
        });
    }
    addWEField();
    addAQField();
    addSkillField();
    var weTextareas = document.querySelectorAll('#column2 textarea.WEField');
    weTextareas.forEach(function (textarea) {
        textarea.addEventListener('input', updateWorkExperienceList);
    });
    var skTextareas = document.querySelectorAll('#column2 textarea.SKField');
    skTextareas.forEach(function (textarea) {
        textarea.addEventListener('input', updateSkills);
    });
    var aqTextareas = document.querySelectorAll('#column2 textarea.AQField');
    aqTextareas.forEach(function (textarea) {
        textarea.addEventListener('input', updateAcademicQualificationList);
    });
});
window.addEventListener('DOMContentLoaded', function () {
    var profilePicInput = document.getElementById('profilePic');
    var profileImage = document.getElementById('profileImage');
    profilePicInput.addEventListener('change', function () {
        if (profilePicInput.files && profilePicInput.files.length > 0) {
            var file = profilePicInput.files[0];
            var reader_1 = new FileReader();
            reader_1.onloadend = function () {
                profileImage.src = reader_1.result;
            };
            reader_1.readAsDataURL(file);
        }
        else {
            console.error('No file selected');
        }
    });
});
