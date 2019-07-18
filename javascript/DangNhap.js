function doSignIn() {
	var kindOfAccount = "";

	if ($("#TenTaiKhoan").val() === "trunglvps08925" && $("#MatKhau").val() === "123") {
		actionLogin("Bạn đã đăng nhập thành công", afterLoginTeacher);
		$("#CaNhanNguoiDung").click();
		return;
	}
	
	alert("Đăng nhập thất bại");
	return;
};

function actionLogin(kindOfAccount, afterLoginItems) {
	alert(kindOfAccount + " ");
	$("#DangNhap, #DangKy").hide();
	$(afterLoginItems + ", #DangXuat").show();
}