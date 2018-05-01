function afficher(id){
	$("#"+"h2"+id).css("display", "none");
	$("#"+"p"+id).css("display", "");
	console.log("afficher");
}

function cacher(id){
	$("#"+"h2"+id).css("display", "");
	$("#"+"p"+id).css("display", "none");
	console.log("cacher");
}

function deployerArticle(idarticle){
	$("#"+idarticle+"Extended").css("display", "");
	document.getElementById("Btn"+idarticle).firstChild.innerHTML = "close";
	document.getElementById("Btn"+idarticle).setAttribute("onclick", "replierArticle("+"\'"+idarticle+"\'"+")");
}

function replierArticle(idarticle){
	$("#"+idarticle+"Extended").css("display", "none");
	document.getElementById("Btn"+idarticle).firstChild.innerHTML = "import_contacts";
	document.getElementById("Btn"+idarticle).setAttribute("onclick", "deployerArticle("+"\'"+idarticle+"\'"+")");
}