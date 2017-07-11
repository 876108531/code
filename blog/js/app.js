var tolal = 10;

function showListMax9 (tolal) {
	!tolal && console.log("错误：tolal="+tolal);
	tolal && console.log("总数："+tolal);

	var container = document.querySelector("section");

	var li = "",count = 0;
	tolal>9 ?count=9 :count=tolal;
	for (var i = 0; i < count; i++) {
		li = li + "<li></li>";
	};
	
	container.innerHTML = "<ul>"+li+"</ul>";
}

function clickTag (id) {
	!id && console.log("错误：id="+id);
	id && console.log("id="+id);

	var target = document.querySelector(".main");

	if (typeof id == "string") {
		target.id = id;
	};

}
