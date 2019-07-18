var database = [
    ["Yêu anh hơn cả tử thần", "sachyeuanh.html"], 
    ["Yêu một người xứng đáng là đàn ông", "sachhayyeumotnguoidanong.html"],
    ["Anh chính là thanh xuân em ", "sachAnhChinhLaThanhXuanCuaem.html"],
    ["Ngủ ngon hẹn mai nhé", "sachNguNgonHenMaiNhe.html"],
    ["cổ tích của người điên", "sachCotichCuaNguoiDien.html"],
    ["ánh sáng vô hình", "sachCotichCuaNguoiDien.html"],
    ["kẻ nhìn trộm", "sachKeNhinTrom.html"],
    ["mười người da đen đỏ", "sachmuoitendaden.html"],
    ["bắt trẻ đồng xanh", "sachBAtTreDongXanh.html"],
    ["Dù sao chúng ta cũng là tuổi 20", "sachDuSAoChungTa.html"],
    ["lời chia tay đẹp nhất thế gian", "sachLoichiaTAyDep.html"],
    ["một lít nước mắt", "sachMotLitNuocMat.html"]
];

$(document).ready(function() {
    $("#btnTimKiem").click(function() {
        var value = $("#txtTimKiem").val();
        var trang = "";

        // tim trong mang database du lieu duoc nhap
        for (var i = 0; i <= database.length; i++) {
            if (value == database[i][0]) {
                trang = database[i][1];
                break;
            }
        }   
        if (trang != "") {
            $("#iframe").attr("src", trang);
        }
    });
});