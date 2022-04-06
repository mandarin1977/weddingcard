// JavaScript Do
function copy_to_clipboard() {
	var copyText = document.getElementById('myInput');
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("Copy");
	alert('복사되었습니다');
}