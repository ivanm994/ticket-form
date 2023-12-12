$(function () {
  $("#zammad-feedback-form").ZammadForm({
    messageTitle: "Tehnička podrška",
    messageSubmit: "Pošalji zahtev",
    messageThankYou:
      "Thank you for your inquiry (#%s)! We'll contact you as soon as possible.",
    attachmentSupport: true,
  });
});

function changeText() {
  // input text
  let inputElementName = document.getElementById("zammad-form-name-inline");
  inputElementName.placeholder = "Vaše Ime";
  let inputElementEmail = document.getElementById("zammad-form-email-inline");
  inputElementEmail.placeholder = "Vaš email";
  let inputElementMessage = document.getElementById("zammad-form-body-inline");
  inputElementMessage.placeholder = "Vaša poruka";

  // label text
  let labelName = document.querySelector('label[for="zammad-form-name-inline"]');
  labelName.innerText = 'Ime';
  let labelEmail = document.querySelector('label[for="zammad-form-email-inline"]');
  labelEmail.innerText = 'Email';
  let labelBody = document.querySelector('label[for="zammad-form-body-inline"]');
  labelBody.innerText = 'Poruka';
  let labelAttachment = document.querySelector('label[for="undefined-inline"]');
  labelAttachment.innerText = 'Prilog';

}

window.onload=changeText;


// function hidden(){
//   let hide = document.querySelector(".text").style.display = "none";
// };
