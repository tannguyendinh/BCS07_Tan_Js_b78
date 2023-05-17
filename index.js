console.log("nop git truoc, cảm ơn mentor");

var arr = [];
// var soThucArr = [];

// function xepSo(mang){
//     for (var i= 0; i< mang.length; i++){
//         for (var j = 1; j < mang.length; j++ ){
//             if ( mang[i] > mang[j]) {
//                 var temp = mang[i];
//                 mang[i] = mang[j];
//                 mang[j] = temp;
//             }
//         }

//     }
//     return mang;
// }
function themSo() {
  var soN = document.getElementById("soN").value * 1;
  arr.push(soN);
  document.querySelector(".ketQuaSoN").innerHTML = arr;
  return arr;
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
        dem ++;
      }
    }
    document.querySelector(".kqCau2").innerHTML = "Số dương: " + dem;
  }


//!   câu 3 tìm số nhỏ nhất

/**Input: ô kết quả người dùng nhập tổng số N
 *
 *Xử lý: arr .sort để sắp xếp thứ tự a-b, 

 * Output: xuất ra số trong mảng vị trí index 0 
 */

 function timSoNhoNhat(){
    arr.sort( function (a, b){
        return a - b;

    });
    console.log(arr[0])
    document.querySelector(".kqCau3").innerHTML = "Số nhỏ nhất: " + arr[0];
 }


//!  Câu 4: Tìm số dương nhỏ nhất
/**Input: ô kết quả người dùng nhập tổng số N
 *
 *Xử lý: arr .sort để sắp xếp thứ tự a-b, đặt điều kiện mảng phải lớn hơn bằng 0  

 * Output: xuất ra số dương bé nhất trong mảng 
 */
 function timSoDuongNhoNhat(){
    arr.sort( function (a, b){
        return a - b;

    });
    console.log(arr[0])
    for (var i = 0; i< arr.length ; i++){
        if (arr[i] >= 0) {
            break;
        }
    }
    document.querySelector(".kqCau4").innerHTML = "Số dương nhỏ nhất: " + arr[i];
 }
