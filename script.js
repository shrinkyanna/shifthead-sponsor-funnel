'use strict';
// Preview only. Replace the mailto fallback with a securely configured GHL form/endpoint before launch.
const selector=document.getElementById('package');
document.querySelectorAll('[data-plan]').forEach(button=>button.addEventListener('click',()=>{selector.value=button.dataset.plan;document.getElementById('inquire').scrollIntoView({behavior:'smooth'});selector.focus({preventScroll:true});}));
document.getElementById('sponsor-form').addEventListener('submit',event=>{
 event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;
 const data=new FormData(form);const values=Object.fromEntries(data.entries());
 const subject='ShiftHead founding sponsor inquiry — '+values.business;
 const body=['Business: '+values.business,'Contact: '+values.name,'Email: '+values.email,'Interested in: '+values.package,'Message: '+(values.message||'(none)'),'','Consent: I agree to be contacted about this inquiry.'].join('\n');
 document.getElementById('form-notice').textContent='Your email application will open with the inquiry ready to send. No information has been submitted yet.';
 window.location.href='mailto:team@shiftheadapp.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
});
