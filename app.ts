document.addEventListener('DOMContentLoaded', () => {

    const generateButton = document.getElementById('generate') as HTMLButtonElement;
    const twoElement = document.getElementById('two') as HTMLDivElement;
    const scroll = document.getElementById('scroll');
    
    // Function to show the #two element
    function showTwo(): void {
      if (twoElement) {
        twoElement.style.display = 'block';
      }
    }
    function showScroll(): void {
      if (scroll) {
        scroll.style.display = 'block';
      }
    }
  
    // Add event listeners to the generate button
    if (generateButton) {
      generateButton.addEventListener('click', showTwo);
      generateButton.addEventListener('focus', showTwo);
      generateButton.addEventListener('click',showScroll)
    }
  });
  // Function to update the Name element
function updateName() {
  const yourName = (document.getElementById('YourName') as HTMLInputElement).value;
  const nameElement = document.getElementById('Name') as HTMLElement;
  nameElement.textContent = yourName ? yourName : 'Name';
}
function updateNum(){
  const yourNum = (document.getElementById('YourNum')as HTMLInputElement).value;
  const numElement = (document.getElementById('PhoneNumber')as HTMLElement);
  numElement.textContent = yourNum? yourNum: "PhoneNumber";
}
function updateAdd(){
  const yourAdd = (document.getElementById('YourAdd')as HTMLInputElement).value;
  const addElement = (document.getElementById("Address") as HTMLElement);
  addElement.textContent=yourAdd? yourAdd : 'Address';
}
function updateFacebookLink() {
  const fbId = (document.getElementById('fb') as HTMLInputElement).value;
  const fbLinkElement = document.getElementById('Facebook') as HTMLAnchorElement;

  if (fbId) {
    fbLinkElement.href = `https://www.facebook.com/${fbId}`;
    fbLinkElement.textContent = fbId;
} else {
    fbLinkElement.href = 'https://www.facebook.com/';
    fbLinkElement.textContent = 'Facebook Profile';
}
}
function updateInstaLink(){
  const instaID= (document.getElementById('insta')as HTMLInputElement).value;
  const instaLinkElement = (document.getElementById('Instagram') as HTMLAnchorElement);

  if (instaID) {
    instaLinkElement.href = `https://www.instagram.com/${instaID}`;
    instaLinkElement.textContent = instaID;
} else {
    instaLinkElement.href = 'https://www.instagram.com/';
    instaLinkElement.textContent = 'Instagram Profile';
}
}
function updateGmailLink() {
  const gmailId = (document.getElementById('gm') as HTMLInputElement).value;
  const gmailLinkElement = document.getElementById('Gmail') as HTMLAnchorElement;

  if (gmailId) {
      gmailLinkElement.href = `${gmailId}`;
      gmailLinkElement.textContent = gmailId;
  } else {
      gmailLinkElement.href = 'http://mail.google.com';
      gmailLinkElement.textContent = 'Gmail';
  }
}
function updateObj(){
  const obj = (document.getElementById('obj') as HTMLTextAreaElement).value;
  const objElement = (document.getElementById('Objective') as HTMLElement);

  objElement.textContent=obj ? obj: 'Objective';
}

document.getElementById('YourName')?.addEventListener('input', updateName);
document.getElementById('YourNum')?.addEventListener('input',updateNum);
document.getElementById('YourAdd')?.addEventListener('input',updateAdd);
document.getElementById('fb')?.addEventListener('input', updateFacebookLink);
document.getElementById('insta')?.addEventListener('input',updateInstaLink);
document.getElementById('gm')?.addEventListener('input',updateGmailLink);
document.getElementById('obj')?.addEventListener('input',updateObj);
  
document.addEventListener('DOMContentLoaded', () => {
  // Function to add a new Work Experience textarea
  function addWEField(): void {
      const button = document.getElementById('WEbtn') as HTMLButtonElement | null;
      if (!button) return;

      button.addEventListener('click', () => {
          const newTextArea = document.createElement('textarea') as HTMLTextAreaElement;
          newTextArea.className = 'WEField';
          newTextArea.placeholder = 'Type Here'; 
          // Insert the new textarea before the button
          button.parentNode?.insertBefore(newTextArea, button);

          newTextArea.addEventListener('input', updateWorkExperienceList);
      });
  }

  // Function to add a new Academic Qualification textarea
  function addAQField(): void {
      const button = document.getElementById('AQbtn') as HTMLButtonElement | null;
      if (!button) return;

      button.addEventListener('click', () => {
          const newTextArea = document.createElement('textarea') as HTMLTextAreaElement;
          newTextArea.className = 'AQField'; 
          newTextArea.placeholder = 'Type Here';
          // Insert the new textarea before the button
          button.parentNode?.insertBefore(newTextArea, button);

          // Add event listener to the new textarea
          newTextArea.addEventListener('input', updateAcademicQualificationList);
      });
  }

  // Function to add a new Skill textarea
  function addSkillField(): void {
      const button = document.getElementById('skbtn') as HTMLButtonElement | null;
      if (!button) return;

      button.addEventListener('click', () => {
          const newTextArea = document.createElement('textarea') as HTMLTextAreaElement;
          newTextArea.className = 'SKField'; 
          newTextArea.placeholder = 'Type Here'; 
          // Insert the new textarea before the button
          button.parentNode?.insertBefore(newTextArea, button);

          // Add event listener to the new textarea
          newTextArea.addEventListener('input', updateSkills);
      });
  }

  // Function to update the Work Experience list
  function updateWorkExperienceList(): void {
      const weList = document.getElementById('WorkExperience') as HTMLUListElement;
      if (!weList) return;

      // Clear the current list
      weList.innerHTML = '';

      // Get all textareas from the Work Experience container
      const textareas = document.querySelectorAll('#column2 textarea.WEField');
      textareas.forEach(textarea => {
          const content = (textarea as HTMLTextAreaElement).value.trim();
          if (content) {
              const listItem = document.createElement('li');
              listItem.textContent = content;
              weList.appendChild(listItem);
          }
      });
  }

  // Function to update the Academic Qualification list
  function updateAcademicQualificationList(): void {
      const aqList = document.getElementById('Education') as HTMLUListElement;
      if (!aqList) return;

      // Clear the current list
      aqList.innerHTML = '';

      // Get all textareas from the Academic Qualification container
      const textareas = document.querySelectorAll('#column2 textarea.AQField');
      textareas.forEach(textarea => {
          const content = (textarea as HTMLTextAreaElement).value.trim();
          if (content) {
              const listItem = document.createElement('li');
              listItem.textContent = content;
              aqList.appendChild(listItem);
          }
      });
  }

  // Function to update the Skills list
  function updateSkills(): void {
      const skList = document.getElementById('Skills') as HTMLUListElement;
      if (!skList) return;

      // Clear the current list
      skList.innerHTML = '';

      // Get all textareas from the Skills container
      const textareas = document.querySelectorAll('#column2 textarea.SKField');
      textareas.forEach(textarea => {
          const content = (textarea as HTMLTextAreaElement).value.trim();
          if (content) {
              const listItem = document.createElement('li');
              listItem.textContent = content;
              skList.appendChild(listItem);
          }
      });
  }

  addWEField();
  addAQField();
  addSkillField();

  const weTextareas = document.querySelectorAll('#column2 textarea.WEField');
  weTextareas.forEach(textarea => {
      (textarea as HTMLTextAreaElement).addEventListener('input', updateWorkExperienceList);
  });

  const skTextareas = document.querySelectorAll('#column2 textarea.SKField');
  skTextareas.forEach(textarea => {
      (textarea as HTMLTextAreaElement).addEventListener('input', updateSkills);
  });

  const aqTextareas = document.querySelectorAll('#column2 textarea.AQField');
  aqTextareas.forEach(textarea => {
      (textarea as HTMLTextAreaElement).addEventListener('input', updateAcademicQualificationList);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;
  const profileImage = document.getElementById('profileImage') as HTMLImageElement;

  profilePicInput.addEventListener('change', () => {
      if (profilePicInput.files && profilePicInput.files.length > 0) {
          const file = profilePicInput.files[0];
          const reader = new FileReader();

          reader.onloadend = () => {
              profileImage.src = reader.result as string;
          };

          reader.readAsDataURL(file);
      } else {
          console.error('No file selected');
      }
  });
});
