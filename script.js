function menu(){
  document.querySelector('.links').classList.toggle('open');
}

function demo(e){
  e.preventDefault();
  alert('Thank you. This form is ready for connection to email/CRM before the official launch.');
}

function wa(e){
  e.preventDefault();
  window.open('https://wa.me/917028877510','_blank');
}
async function submitCandidateForm(e){
  e.preventDefault();

  const form = e.target;
  const message = document.getElementById('form-message');
  const file = form.querySelector('input[name="resume"]');

  if (!file.files.length) {
    message.textContent = 'ERROR: Please upload your CV in PDF, DOC, or DOCX format. Check your CV before submission.';
    return;
  }

  const allowed = ['pdf', 'doc', 'docx'];
  const extension = file.files[0].name.split('.').pop().toLowerCase();

  if (!allowed.includes(extension)) {
    message.textContent = 'ERROR: Please upload your CV in PDF, DOC, or DOCX format. Check your CV before submission.';
    return;
  }

  message.textContent = 'Submitting...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      message.textContent = 'SUCCESS: Your CV has been submitted successfully.';
      form.reset();
    } else {
      message.textContent = 'ERROR: Your CV could not be submitted. Please check your CV and try again.';
    }
  } catch (error) {
    message.textContent = 'ERROR: Your CV could not be submitted. Please check your CV and try again.';
  }
}
