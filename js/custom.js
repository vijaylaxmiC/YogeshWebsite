var awardsText =  {
	'awards/a1.jpg':"<b>A meaningful salutations through dance : Prajavani news paper - Nanjundrao</b>",
	'awards/a2.jpg':"<b>A strong proclamation of 'Guru Shisya parampara'</b>",
	'awards/a3.jpg':"<b>A show that enhances your love for Indian culture</b>",
	'awards/a4.jpg':"<b>'Krishnapremi' - a dance fest which opened the doors of experimentations</b>",
	'awards/a5.jpg':"<b>'Nauka Charitam' directed by Guru Padmini Ravi</b>",
	'awards/a6.jpg':"<b>Bharatanatyam exponent Pratibha Prahlad leaves audience and thrall</b>",
	'awards/a7.jpg':"<b>Set the stage on fire through his dynamic bharatanatyam for the theme 'Agni' - Subbu Kriahna</b>",	
	'awards/a8.jpg':"<b>Performed  at Koviayil thiruvaiyaru festival</b>",
}

var device = 'desktop'
var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
if(width > 1024){
	device = 'desktop'
} else {
	device = 'mobile'
}  

function createGallery(){
	var parentElement = document.getElementById('gallery_content')
	
	for (var i=1; i<=3; i++) {
		var photoDiv = document.createElement('div')
		photoDiv.className = "gallery_image_div"
		var imgHTML = '<img class= "gallery-img" src="gallery/yogi'+i+'.jpg" onclick="galleryImageClicked(this)">';
		photoDiv.innerHTML = imgHTML;

		parentElement.appendChild(photoDiv)
	}
}
function createMoreGallery(){
	var parentElement = document.getElementById('gallery_content_more')
	
	for (var i=4; i<=40; i++) {
		var photoDiv = document.createElement('div')
		photoDiv.className = "gallery_image_div"
		var imgHTML = '<img class= "gallery-img" src="gallery/yogi'+i+'.jpg" onclick="galleryImageClicked(this)">';
		photoDiv.innerHTML = imgHTML;

		parentElement.appendChild(photoDiv)
	}
}
function galleryImageClicked(el){
	if (device == 'desktop') {
		var imgSrc = el.getAttribute('src');
		var popovermodal = document.getElementById('popover_modal');
		var popoveModalContent = document.getElementById('popover_image_container');
		var popoverHeading = document.getElementById('popover_heading');
		popoverHeading.innerHTML = ""
		var imgHTML = '<img src = "'+imgSrc+'">'
		popoveModalContent.innerHTML = imgHTML
		
		$('#popover_modal').fadeIn()
	}
}

function close_modal() {
	var popovermodal = document.getElementById('popover_modal')
	$('#popover_modal').fadeOut()
}


function createAwards(){
	var parentElement = document.getElementById('awards_content')
	for (var i=1; i<=3; i++) {
		var photoDiv = document.createElement('div')
		photoDiv.className = "gallery_image_div"
		var imgHeading = 'awards/a'+i+'.jpg'
		var imgHTML = '<p class ="award_heading">'+awardsText[imgHeading]+'</p>'
		imgHTML += '<img class= "gallery-img" src="awards/a'+i+'.jpg" onclick="AwardsImageClicked(this)">';
		photoDiv.innerHTML = imgHTML;
		parentElement.appendChild(photoDiv)
	}
}
function createMoreAwards(){
	var parentElement = document.getElementById('awards_content_more')
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
	if (device == 'desktop') {
		var imgSrc = el.getAttribute('src');
		var popovermodal = document.getElementById('popover_modal');
		var popoveModalContent = document.getElementById('popover_image_container');
		var popoverHeading = document.getElementById('popover_heading');
		popoverHeading.innerHTML = awardsText[imgSrc]
		var imgHTML = '<img src = "'+imgSrc+'">'
		popoveModalContent.innerHTML = imgHTML
		$('#popover_modal').fadeIn()	
	}
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


