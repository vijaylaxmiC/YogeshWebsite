var awardsText =  {
	'awards/a1.jpg':"<h4>A meaningful salutations through dance : Prajavani news paper - Nanjundrao</h4>",
	'awards/a2.jpg':"",
	'awards/a3.jpg':"<h4>A show that enhances your love for Indian culture :</h4>",
	'awards/a4.jpg':"<h4>'Krishnapremi' - a dance fest which opened the doors of experimentations :</h4>",
	'awards/a5.jpg':"",
	'awards/a6.jpg':"",
	'awards/a7.jpg':"<h4>Set the stage on fire through his dynamic bharatanatyam for the theme 'Agni' - Subbu Kriahna</h4>",	
	'awards/a8.jpg':"",
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
		var imgHTML = '<img class= "gallery-img" src="awards/a'+i+'.jpg" onclick="AwardsImageClicked(this)">';
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


