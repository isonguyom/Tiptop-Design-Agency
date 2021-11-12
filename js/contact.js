// TOGGLING CONTACT FORM LABEL

let contactInput = document.getElementById('fName');
let placeholderText = contactInput.placeholder.value
contactInput.addEventListener('focus', () => {
  let contactLabel = document.getElementById('fnameLabel');

  contactInput.placeholder = ""
  contactLabel.style.opacity = '1'
})
contactInput.addEventListener('focusout', (e) => {
  let contactLabel = document.getElementById('fnameLabel');
  contactInput.placeholder = placeholderText;
  contactLabel.style.opacity = '0'
})