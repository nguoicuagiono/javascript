
function sendComment() {
			
	var id = $("#SDT").val();
	var fullName = $("#HoTen").val();
	var contentComment = $("#NoiDungGopY").val();
	var idPattern = new RegExp("^[0-9]{9,11}$");
	
	if (fullName == "") {
		alert("Tên không được trống");
		$("#HoTen").focus();
        return;
	}
	
	if (idPattern.test(id) == false) {
		alert("số điện thoại không hợp lệ");
		$("#SDT").focus();
        return;
	}
	
	if (contentComment == "") {
		alert("Nội dung góp ý không được trống");
		$("#NoiDungGopY").focus();
        return;
	}
	
	alert("Gửi góp ý thành công");
};