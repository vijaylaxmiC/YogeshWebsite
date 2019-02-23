var awardsText =  {
	'awards/a1.jpg':"A meaningful salutations through dance : Prajavani news paper - Nanjundrao",
	'awards/a2.jpg':"'Nauka Charitam' directed by Guru Padmini Ravi",
	'awards/a3.jpg':"A show that enhances your love for Indian culture",
	'awards/a4.jpg':"'Krishnapremi' - a dance fest which opened the doors of experimentations",
	'awards/a5.jpg':"A strong proclamation of 'Guru Shisya parampara'",
	'awards/a6.jpg':"Bharatanatyam exponent Pratibha Prahlad leaves audience and thrall",
	'awards/a7.jpg':"Set the stage on fire through his dynamic bharatanatyam for the theme 'Agni' - Subbu Kriahna",	
	'awards/a8.jpg':"Performed  at Koviayil thiruvaiyaru festival",
}

function createGallery(){
	var parentElement = document.getElementById('gallery_content')
	
	for (var i=1; i<=40; i++) {
		var photoDiv = document.createElement('div')
		photoDiv.className = "gallery_image_div"
		var imgHTML = '<img class= "gallery-img" src="gallery/yogi'+i+'.jpg" onclick="galleryImageClicked(this)">';
		photoDiv.innerHTML = imgHTML;

		parentElement.appendChild(photoDiv)
	}
}
function galleryImageClicked(el){
	var imgSrc = el.getAttribute('src');
	var popovermodal = document.getElementById('popover_modal');
	var popoveModalContent = document.getElementById('popover_image_container');
	var popoverHeading = document.getElementById('popover_heading');
	popoverHeading.innerHTML = ""
	var imgHTML = '<img src = "'+imgSrc+'">'
	popoveModalContent.innerHTML = imgHTML
	
	$('#popover_modal').fadeIn()
}

function close_modal() {
	var popovermodal = document.getElementById('popover_modal')
	$('#popover_modal').fadeOut()
}


function createAwards(){
	var parentElement = document.getElementById('awards_content')
	for (var i=1; i<=8; i++) {
		var photoDiv = document.createElement('div')
		photoDiv.className = "gallery_image_div"
		var imgHeading = 'awards/a'+i+'.jpg'
		var imgHTML = '<p class ="award_heading">'+awardsText[imgHeading]+'</p>'
		imgHTML += '<img class= "gallery-img" src="awards/a'+i+'.jpg" onclick="AwardsImageClicked(this)">';
		photoDiv.innerHTML = imgHTML;
		parentElement.appendChild(photoDiv)
	}
}
function AwardsImageClicked(el){
	var imgSrc = el.getAttribute('src');
	var popovermodal = document.getElementById('popover_modal');
	var popoveModalContent = document.getElementById('popover_image_container');
	var popoverHeading = document.getElementById('popover_heading');
	popoverHeading.innerHTML = awardsText[imgSrc]
	var imgHTML = '<img src = "'+imgSrc+'">'
	popoveModalContent.innerHTML = imgHTML
	$('#popover_modal').fadeIn()	
}

function sendEmail() {

	var content = document.getElementById('contactus_message').value+'<br>My Contact number is: '+document.getElementById('contactus_phone').value+'<br>My email is:'+ document.getElementById("contactus_email").value;

	  var template_params = {
	     "reply_to": document.getElementById('contactus_email'),
	     "from_name": document.getElementById('contactus_name').value,
	     "to_name": "Yogesh Kumar",
	     "message_html": content
	  }

	  var service_id = "default_service";
	  var template_id = "template_C3qAmeiU";
	  emailjs.send(service_id, template_id, template_params);


	  document.getElementById('contactus_message').value = ""
	  document.getElementById('contactus_phone').value = ""
	  document.getElementById('contactus_email').value = ""
	  document.getElementById('contactus_name').value = ""

	  alert("Thank you for reaching out to us!")

}


