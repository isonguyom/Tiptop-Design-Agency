// TOGGLING CONTACT FORM LABEL VISIBILITY

// reveal label
let revealLabel = function(input, label) {
  let contactLabel = document.getElementById(label);
  let contactInput = document.getElementById(input);

  contactInput.classList.add('hide-placeholder');
  contactLabel.style.opacity = '1'
}

// hide label
let hideLabel = function(input, label) {
  let contactLabel = document.getElementById(label);
  let contactInput = document.getElementById(input);

  contactInput.classList.remove('hide-placeholder');
  contactLabel.style.opacity = '0'
}