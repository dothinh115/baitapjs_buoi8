var mainArr = new Array;

//DOM ĐẾN CLASS CẦN TÌM
function timViTri (index, className, index_2) {
    var workName = document.querySelectorAll(".input-group")[index];
    var result;
    if(index_2 == null) {
        result = workName.querySelector(className);
    }
    else {
        result = workName.querySelectorAll(className)[index_2];
    }
    return result;
}

//SORT TỪ NHỎ ĐẾN LỚN
function numSort (a, b) {
    return a - b;
}

//CHECK MẢNG RỖNG
function checkMangRong (arr) {
    var result = false;
    if (arr.length === 0) {
        result = true;
    }
    if(result) {
        alert("Nhập số vào mảng đã");
    }
    return result;
}

//XÓA PHẦN TỬ
function xoaPhanTu () {
    var find = timViTri(0, ".showMainArr");
    var newArr = find.querySelectorAll("span");
    mainArr = [];
    newArr.forEach(function(item) {
        mainArr.push(Number(item.textContent));
    });
}

//HÀM TẠO BADGE
function createBadge (badgeName, badgeContent, removeOption = false) {
    var badge = document.createElement("span");
    badge.className = "badge badge-" + badgeName + " mr-2";
    badge.innerText = badgeContent;
    if(removeOption) {
        badge.setAttribute("onclick","this.remove();xoaPhanTu();")
    }
    return badge;
}

//THÊM SỐ VÀO MẢNG
function addMainArr () {
    var mainArrValue = timViTri(0, "input", 0).value;
    var showResult = timViTri(0, ".showMainArr");
    if (isNaN(mainArrValue)) {
        alert("Chỉ được nhập số");
    }
    else if(mainArrValue == "") {
        alert("Không được để trống");
    }
    else {
        mainArr.push(Number(mainArrValue));
        timViTri(0, "input", 0).value = "";
        showResult.append(createBadge("info", mainArrValue, true));
    }
}

//TÌM SỐ DƯƠNG
function timSoDuong () {
    var showResult = timViTri(0, ".result");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        return;
    }
    mainArr.forEach(function(item) {
        if(item > 0) {
            showResult.append(createBadge("info", item));
        }
    });
}

//ĐẾM SỐ DƯƠNG
function demSoDuong () {
    var showResult = timViTri(0, ".result");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        return;
    }
    var soDuong = 0;
    mainArr.forEach(function(item) {
        if(item > 0) {
            soDuong++;
        }
    });
    showResult.append(createBadge("info", "Có " + soDuong + " số dương trong mảng"));
}

//TÌM SỐ NHỎ NHẤT TRONG MẢNG
function timSoNhoNhat () {
    var showResult = timViTri(0, ".result");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        return;
    }
    var minNumber = mainArr.sort(numSort)[0];
    showResult.append(createBadge("success", "Số nhỏ nhất trong mảng là: "));
    showResult.append(createBadge("info", minNumber));
}

//TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
function timSoDuongNhoNhat () {
    var showResult = timViTri(0, ".result");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        return;
    }
    var soDuong = []
    mainArr.forEach(function(item) {
        if (item > 0) {
            soDuong.push(item);
        }
    });
    showResult.append(createBadge("success", "Số dương nhỏ nhất trong mảng là: "));
    showResult.append(createBadge("info", soDuong.sort(numSort)[0]));
}

//SỐ CHẴN CUỐI CÙNG TRONG MẢNG
function soChanCuoiCung () {
    var showResult = timViTri(0, ".result");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        return;
    }
   
    var soChanArr = new Array;
    mainArr.forEach(function(item) {
        if(item%2 === 0) {
            soChanArr.push(item);
        }
    });
    showResult.append(createBadge("success", "Số chẵn cuối cùng trong mảng là: "));
    showResult.append(createBadge("info", soChanArr.length > 0 ? soChanArr[soChanArr.length - 1] : "-1"));
}

//ĐẢO VỊ TRÍ
function daoViTri () {
    var showResult = timViTri(0, ".showMainArr");
    var viTri__1 = timViTri(1, "input", 0).value;
    var viTri__2 = timViTri(1, "input", 1).value;
    if(checkMangRong(mainArr)) {
        return;
    }
    
    if (mainArr[viTri__1 - 1] == undefined || mainArr[viTri__2 - 1] == undefined) {
        alert("Nhập vị trí cho hợp lý");
    }
    else {
        showResult.innerHTML = "";
        var hold = mainArr[viTri__1 - 1];
        mainArr[viTri__1 - 1] = mainArr[viTri__2 - 1];
        mainArr[viTri__2 - 1] = hold;
        mainArr.forEach(function(item) {
            showResult.append(createBadge("info", item, true));
        });
    }
}

//SẮP XẾP MẢNG TỪ NHỎ ĐẾN LỚN
function sapXep () {
    var showResult = timViTri(0, ".showMainArr");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        return;
    }
    mainArr.sort(numSort);
    mainArr.forEach(function(item) {
        showResult.append(createBadge("info", item, true));
    });
}

//SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG
function checkSNT (number) {
    result = true;
    if(number < 2 ) {
        result = false;
    }
    else {
        for (var i = 2; i < number - 1; i++) {
            if(number%i === 0) {
                result = false;
                break;
            }
        }
    }
    return result;
}

function sntDauTien () {
    var showResult = timViTri(0, ".result");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        return;
    }
    var soNT = [];
    mainArr.forEach(function(item) {
        if(checkSNT(item) && Number.isInteger(item)) {
            soNT.push(item);
        }
    });
    showResult.append(createBadge("success", "Số nguyên tố đầu tiên trong mảng là: "));
    showResult.append(createBadge("info", soNT.length > 0 ? soNT[0] : "-1"));
}

//ĐẾM SỐ NGUYÊN TRONG MẢNG
function timSoNguyen () {
    var showResult = timViTri(2, ".result");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        return;
    }
    var soNguyen = [];
    mainArr.forEach(function(item) {
        if(Number.isInteger(item)) {
            soNguyen.push(item);
        }
    });
    showResult.append(createBadge("info", "Có " + soNguyen.length + " số nguyên trong mảng."));
}


function soSanhAmDuong () {
    var showResult = timViTri(0, ".result");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        return;
    }
    var soAm = 0;
    var soDuong = 0;
    mainArr.forEach(function(item) {
        item > 0 ? soDuong++ : soAm++;
    });
    
    if(soAm > soDuong) {
        showResult.append(createBadge("info", "Mảng có nhiều số âm hơn."))
    }
    else if (soDuong > soAm) {
        showResult.append(createBadge("success", "Mảng có nhiều số dương hơn."))
    }
    else {
        showResult.append(createBadge("warning", "Số âm và số dương bằng nhau."))
    }
}