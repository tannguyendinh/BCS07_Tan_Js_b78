console.log("nop git truoc, cảm ơn mentor");

var arr = [];

function resetThemSo() {
  document.getElementById("soN").value = "";
}

function themSo() {
  var soN = document.getElementById("soN").value * 1;
  arr.push(soN);
  document.querySelector(".ketQuaSoN").innerHTML = arr;

  resetThemSo("");
}

//! Câu 1
/**Input: ô kết quả người dùng nhập tổng số N
 *
 *Xử lý: arr[] > 0, + số trong mảng

 * Output: xuất ra tổng số dương
 */

function tongSoDuong() {
  var tong = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      tong += arr[i];
    }
  }
  document.querySelector(".kqCau1").innerHTML = "Tổng số dương: " + tong;
}

//! câu 2
/**Input: ô kết quả người dùng nhập tổng số N
 *
 *Xử lý: arr[] > 0, + số dương trong mảng

 * Output: xuất ra số dương 
 */

function demSoDuong() {
  var dem = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      dem++;
    }
  }
  document.querySelector(".kqCau2").innerHTML = "Số dương: " + dem;
}

//!   câu 3 tìm số nhỏ nhất

/**Input: ô kết quả người dùng nhập tổng số N
 *
 *Xử lý: mảng arr .sort để sắp xếp thứ tự tăng dần, lấy vị trí index 0.

 * Output: xuất ra số trong mảng vị trí index 0 
 */

function timSoNhoNhat() {
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr[0]);
  document.querySelector(".kqCau3").innerHTML = "Số nhỏ nhất: " + arr[0];
}

//!  Câu 4: Tìm số dương nhỏ nhất
/**Input: ô kết quả người dùng nhập tổng số N
 *
 *Xử lý: mảng arr .sort để sắp xếp thứ tự tăng dần, đặt điều kiện mảng phải lớn hơn bằng 0  

 * Output: xuất ra số dương bé nhất trong mảng 
 */
function timSoDuongNhoNhat() {
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr[0]);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      break;
    }
  }
  document.querySelector(".kqCau4").innerHTML = "Số dương nhỏ nhất: " + arr[i];
}

// ! câu 5
/**Input: ô kết quả người dùng nhập tổng số N
 *
 *Xử lý: bn i-- . mang %2 ==0

 * Output: xuất ra số dương bé nhất trong mảng 
 */

function timSoChanCuoiCung() {
  var soChanCuoi = 0;
  for (var i = arr.length; i >= 0; i--) {
    if (arr[i] % 2 == 0) {
      soChanCuoi = arr[i];
      break;
    }
  }

  document.querySelector(".kqCau5").innerHTML =
    "Số chẵn cuối cùng: " + soChanCuoi;
}

//! Câu 6

/**Input: ô kết quả người dùng nhập tổng số N, nhập ví trí 1 và 2
 *
*Xử lý: vị trí = mảng index1,  mảng index1 = mảng index2 , mảng index2 = vị tri

 * Output: xuất ra mảng ng dùng đã đổi vị trí 
 */

// function doi(index, item){
//   var x = arr[index];
//   arr[index] = arr[item],
//   arr[item] = x
// }

function doiChoViTri() {
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;

  var index = arr[viTri1];
  arr[viTri1] = arr[viTri2];
  arr[viTri2] = index;

  document.querySelector(".kqCau6").innerHTML = "Mảng sau khi đổi chỗ: " + arr;
}

//! câu 7
/**Input: ô kết quả người dùng nhập tổng số N
 *
 *Xử lý: mảng arr.sort()

 * Output: xuất ra mảng tăng dần
 */

function sapXepTangDan() {
  //  tangDan = arr.sort(function (a, b) {
  //   return a - b;
  // });

  // document.querySelector(".kqCau7").innerHTML =
  // "Mảng sau khi xếp: " + tangDan;
  document.querySelector(".kqCau7").innerHTML =
    "Mảng sau khi xếp: " + arr.sort((a, b) => (a > b ? 1 : -1));
}

// !câu 8
/**Input: ô kết quả người dùng nhập tổng số N
 *
 *Xử lý: ktra so nguyen tố , 

 * Output: xuất ra so nguyên tố đầu tiên cho người dùng 
 */

function ktrSoNguyenTo(item) {
  var soNguyenTo = true;
  if (item < 2) {
    soNguyenTo = false;
    return soNguyenTo;
  } else {
    for (var i = 2; i <= Math.sqrt(item); i++) {
      if (item % 2 == 0) {
        soNguyenTo = false;
        break;
      }
    }
  }
  return soNguyenTo;
}

function soNguyenToDauTien() {
  var soNguyenToDauTien;
  for (var i = 0; i < arr.length; i++) {
    if (ktrSoNguyenTo(arr[i]) == true) {
      soNguyenToDauTien = arr[i];
      console.log(soNguyenToDauTien);
      break;
    } else {
      soNguyenToDauTien = -1;
      console.log(soNguyenToDauTien);
    }
  }

  document.querySelector(".kqCau8").innerHTML =
    "Số nguyên tố đầu tiên trong mảng: " + soNguyenToDauTien;
}

// !Câu 9
/**Input: Người dùng thêm số N bất kì 
 *
 *Xử lý: tạo ra mảng rỗng.  sử dụng phương thức Number.isInteger()

 * Output: xuất ra kết quả có bao nhiêu số nguyên mà người dùng đã nhập 
 */

var arrCau9 = [];

function themSoCau9() {
  var soThuc = document.getElementById("soCau9").value * 1;
  arrCau9.push(soThuc);
  document.querySelector(".kqCau9Mot").innerHTML = arrCau9;
}
// function demSoNguyen(){
//   var dem = 0;
//   for (var i = 0; i < arrCau9.length; i++) {
//     if (arrCau9[i]) {
//       dem++;
//     }
//   }
//   document.querySelector(".kqCau9").innerHTML = "Số dương: " + dem;
// }

function demSoNguyen() {
  var dem = 0;
  for (var i = 0; i < arrCau9.length; i++) {
    if (Number.isInteger(arrCau9[i])) {
      dem++;
    }
  }
  document.querySelector(".kqCau9").innerHTML = "Số nguyên: " + dem;
}

//! câu 10

/**Input: ô kết quả người dùng nhập tổng số N
 *
 *Xử lý:  b1: đk nếu mảng >=0 thì là soDuog neu mang <0 thì so am 
 b2. so sánh nếu số duong > so am thì chạy lệnh soDUong > soAm, neu so duong be hơn số âm thì SoDuong < soAM, so DƯơng = soAm.

 * Output: xuất ra Số Âm số Dương là bao nhiêu
 */

function soSanhAmDuong() {
  var soAm = 0,
    soDuong = 0,
    soAmDuong;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      soDuong++;
    } else if (arr[i] < 0) {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    soAmDuong = "Số Dương > Số Âm";
  } else if (soDuong < soAm) {
    soAmDuong = "Số Âm > Số Dương";
  } else {
    soAmDuong = "Số Dương = Số Âm";
  }
  document.querySelector(".kqCau10").innerHTML = soAmDuong;
}
