
var afterLoginStudent = "#CaNhanHocSinh, #LichHoc, #Diem";
var afterLoginTeacher = "#CaNhanNguoiDung";

$(document).ready(function() {
//  tải trang TrangChu sau khi tất cả tài liệu đã được tải
	loadPageContent("Xin chào", "#TrangChu", "TrangChu.html");

	
//chúng tôi cũng ẩn một số mục yêu cầu đăng nhập
	$(afterLoginStudent + ", " + afterLoginTeacher + ", #DangXuat").hide();	

	

	// * phần 1: chúng tôi tạo các chức năng cho mọi nút trên thanh điều hướng * //
	$("#TrangChu").click(function() {
		loadPageContent("Chào mừng bạn tới với trang web", "#TrangChu", "TrangChu.html");
	});
	
	$("#GioiThieu").click(function() {
		loadPageContent("Giới thiệu về website", "#GioiThieu", "GioiThieu.html");
	});
	
	$("#LienHe").click(function() {
		loadPageContent("Liên hệ", "#LienHe", "LienHe.html");
	});
	
	$("#GopY").click(function() {
		loadPageContent("Góp ý", "#GopY", "GopY.html");
	});
	
	$("#NgonTinh").click(function() {
		loadPageContent(" Truyện ngôn tình", "#NgonTinh", "tlNgonTinh.html");
	});

	$("#TrinhTham").click(function() {
		loadPageContent(" Truyện trinh thám", "#TrinhTham", "tlTruyenTrinhTham.html");
	});


	$("#TieuThuyet").click(function() {
		loadPageContent("Truyện tiểu thuyết", "#TieuThuyet", "tlTuyetThuyet.html");
	});
	
	$("#TimKiem").click(function() {
		loadPageContent("", "#TimKiem", "timkiem.html");
	});
	$("#DocSach").click(function() {
		loadPageContent("", "#DocSach", "meodocsach.html");
	});
	$("#DangNhap").click(function() {
		loadPageContent("Đăng nhập", "#DangNhap", "DangNhap.html");
	});
	
	$("#DangKy").click(function() {
		loadPageContent("Đăng ký", "#DangKy", "DangKy.html");
	});
	
	$("#CaNhanNguoiDung").click(function() {
		loadPageContent("Cá nhân", "#CaNhanNguoiDung", "CaNhanNguoiDung.html");
	});
	// $("#YeuAnh").click(function() {
	// 	loadPageContent("Cá nhân", "#YeuAnh", "sachyeuanh.html");
	// });
	
	$("#DangXuat").click(function() {
		doSignOut();
	});
});
//

// hàm này đặt tiêu đề trên tab, sau đó thêm lớp Active vào các mục trên thanh điều hướng, cộng với một số hiệu ứng mờ dần
function loadPageContent(tabTitle, idNavItemActive, fileName) {
	var allNavButtonID = "#TrangChu, #GioiThieu, #LienHe, #GopY,#TieuThuyet,#TrinhTham,#NgonTinh,#DocSach, #TimKiem" +
	" #DangNhap, #DangKy, #DangXuat, #CaNhanNguoiDung";
	
// đặt tiêu đề cho trang, sau đó là tiêu đề tab, 
//sau đó  thêm lớp Active cho nút đã nhấp và vô hiệu hóa lớp Active cho người khác,
// tiếp theo tải nội dung vào hộp

	$("title").text("[" + tabTitle + "] ");
	$("#PageTitle").text(tabTitle);
	$(allNavButtonID).removeClass("Active");
	$(idNavItemActive).addClass("Active");
	$("#PageContent").slideUp("fast", function() {
		$("#PageContent").load(fileName, function() {
			$("#PageContent").slideDown("slow");
		});
	});
};
// end of loadPageContent

//$(document).ready(function() {

  

	// $(document).ready(function() {
	// 	$("#YeuAnh").click(function() {
	// 		$("article").load("sachyeuanh.html");
	// 	});
	// });