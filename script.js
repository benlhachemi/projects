var contactName = document.querySelector('#contactNameBox');
var contactPhone = document.querySelector('#conactPhoneBox');
var contactForm = document.querySelector('#contactForm');
var error = document.querySelector('#error');
var table = document.querySelector('table');
var deleteBtn = document.querySelector('.deleteBtn');
var searchBox = document.querySelector('#searchBox');
var contactListe = new Array();
var x = 0;
var hidden = 0;

searchBox.addEventListener('input',searchContact);

function searchContact(){
	if(hidden == contactListe.length){
		error.className='alert alert-danger';
		error.innerHTML='No contact is avaible!';
		setTimeout(deleteError,3000);
	}
	for(var i=0,x=0;i<contactListe.length;i++,x++){
		var text = searchBox.value.toLowerCase();
		if(contactListe[i].startsWith(text)==false){
			document.querySelector('#a'+x).parentElement.parentElement.style.display='none';
			hidden ++;
		}
		else{
			document.querySelector('#a'+x).parentElement.parentElement.style.display='table-row';	
		}
	}
}

contactForm.addEventListener('submit',addContact);

function addContact(e){
	e.preventDefault();
	if(contactName.value =='' || contactPhone.value ==''){
		error.style.display ='block';
		error.className='alert alert-danger';
		error.innerHTML='Please enter all the empty fields.';
		setTimeout(deleteError,3000);
	}
	else if(isNaN(contactPhone.value)){
		error.style.display ='block';
		contactPhone.value='';
		error.className='alert alert-danger';
		error.innerHTML='Please enter a valide phone number.';
		setTimeout(deleteError,3000);
	}
	else{
		var tr = document.createElement('tr');
		table.appendChild(tr);
		contactListe.push(contactName.value);
		tr.innerHTML = '<td class="names">'+contactName.value+'</td><td><button style="width:100%" class="btn deleteBtn btn-primary btn-sm btn-danger align-center" id="a'+x+'">delete</button></td><td>'+contactPhone.value+'</td>';
		contactName.value='';
		contactPhone.value='';
		x++;
		contactName.focus();
		error.className='alert alert-success';
		error.innerHTML='Contact added successfuly !';
		setTimeout(deleteError,3000);
	}
}

function deleteError(e){
	error.style.display ='none';
}

deleteBtn.addEventListener('click',deleteContact);

console.log(contactListe);

function deleteContact(e){
	if(e.target.classList.contains('btn')){
		if(confirm("Are you sure you want to delete this contact ?")){
			var tr = e.target.parentElement.parentElement;
			tr.style.display='none';
			searchBox.value='';
			contactName.focus();
		}
	}
	
}
