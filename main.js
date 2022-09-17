var mainArr = new Array;
function addMainArr () {
    var workName = document.querySelectorAll(".input-group")[0];
    var mainArrValue = workName.querySelectorAll("input")[0].value;
    var showResult = workName.querySelector(".showMainArr");
    if (isNaN(mainArrValue)) {
        alert("Chỉ được nhập số");
    }
    else if(mainArrValue == "") {
        alert("Không được để trống");
    }
    else {
        mainArr.push(mainArrValue);
        workName.querySelectorAll("input")[0].value = "";
        for (var i = 0; i < mainArr.length; i++) {
            var mainBadge = document.createElement("span");
            mainBadge.className = "badge badge-info ml-1";
            mainBadge.innerText = mainArr[i];
        }
        showResult.append(mainBadge);
    }
}

function checkMangRong (arr) {
    var result = false;
    if (arr.length === 0) {
        result = true;
    }
    return result;
}

function timSoDuong () {
    var workName = document.querySelectorAll(".input-group")[0];
    var showResult = workName.querySelector(".result");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        alert("Nhập số vào mảng đã!");
    }
    else {
        for (var i = 0; i < mainArr.length; i++) {
            if(mainArr[i] > 0) {
                var soDuongBadge = document.createElement("span");
                soDuongBadge.className = "badge badge-info ml-1";
                soDuongBadge.innerText = mainArr[i];
            }
            showResult.append(soDuongBadge);
        }
    }
}

function demSoDuong () {
    var workName = document.querySelectorAll(".input-group")[0];
    var showResult = workName.querySelector(".result");
    if(checkMangRong(mainArr)) {
        alert("Nhập số vào mảng đã!");
    }
    else {
        showResult.innerHTML = "";
        var soDuong = 0;
        for (var i = 0; i < mainArr.length; i++) {
            if(mainArr[i] > 0) {
                soDuong++;
            }
        }
        var demBadge = document.createElement("span");
        demBadge.className = "badge badge-info";
        demBadge.innerText = "Có " + soDuong + " số dương trong mảng.";
        showResult.append(demBadge);
    }
}

function timSoNhoNhat () {
    var workName = document.querySelectorAll(".input-group")[0];
    var showResult = workName.querySelector(".result");
    if(checkMangRong(mainArr)) {
        alert("Nhập số vào mảng đã!");
    }
    else {
        showResult.innerHTML = "";
        var minNumber = mainArr[0];
        for (var i = 0; i < mainArr.length; i++) {
        if(mainArr[i] < minNumber) {
            minNumber = mainArr[i];
        }
    }
    var preBadge = document.createElement("span");
    preBadge.className = "badge badge-success mr-2";
    preBadge.innerText = "Số nhỏ nhất trong mảng là: "
    var minNumberBadge = document.createElement("span");
    minNumberBadge.className = "badge badge-info";
    minNumberBadge.innerText = + minNumber;
    showResult.append(preBadge);
    showResult.append(minNumberBadge);
    }
}

function timSoDuongNhoNhat () {
    var workName = document.querySelectorAll(".input-group")[0];
    var showResult = workName.querySelector(".result");
    if(checkMangRong(mainArr)) {
        alert("Nhập số vào mảng đã!");
    }
    else {
        showResult.innerHTML = "";
        var minNumber = mainArr[0];
        for (var i = 0; i < mainArr.length; i++) {
        if(mainArr[i] < minNumber && mainArr[i] >= 0) {
            minNumber = mainArr[i];
        }
    }
    var preBadge = document.createElement("span");
    preBadge.className = "badge badge-success mr-2";
    preBadge.innerText = "Số dương nhỏ nhất trong mảng là: "
    var minNumberBadge = document.createElement("span");
    minNumberBadge.className = "badge badge-info";
    minNumberBadge.innerText = minNumber;
    showResult.append(preBadge);
    showResult.append(minNumberBadge);
    }
}

function soChanCuoiCung () {
    var workName = document.querySelectorAll(".input-group")[0];
    var showResult = workName.querySelector(".result");
    showResult.innerHTML = "";
    if (checkMangRong(mainArr)) {
        alert("Nhập số vào mảng đã!");
    }
    else {
        var soChanArr = new Array;
        for (var i = 0; i < mainArr.length; i++) {
            if(mainArr[i]%2 === 0) {
                soChanArr.push(mainArr[i]);
            }
        }
        var preBadge = document.createElement("span");
        preBadge.className = "badge badge-success mr-2";
        preBadge.innerText = "Số chẵn cuối cùng trong mảng là: "
        var soChanBadge = document.createElement("span");
        soChanBadge.className = "badge badge-info";
        if(soChanArr.length > 0) {
            soChanBadge.innerText = soChanArr[soChanArr.length - 1];
        }
        else {
            soChanBadge.innerText = "-1";
        }
        showResult.append(preBadge);
        showResult.append(soChanBadge);
    }
}


function daoViTri () {
    var workName = document.querySelectorAll(".input-group")[1];
    var newArr = new Array;
    var checkHopLe = true;
    var vitri__1 = workName.querySelectorAll("input")[0].value;
    var vitri__2 = workName.querySelectorAll("input")[1].value;
    var value__1 = mainArr[vitri__1 - 1];
    var value__2 = mainArr[vitri__2 - 1];
    for(var i = 0; i < mainArr.length; i++) {
        newArr[i] = mainArr[i];
    }
    newArr[vitri__1 - 1] = value__2;
    newArr[vitri__2 - 1] = value__1;
    for (var j = 0; j < newArr.length; j++) {
        if(newArr[j] === undefined) {
            alert("Nhập vị trí cho hợp lý!");
            newArr[i] = mainArr[i];
            checkHopLe = false;
            break;
        }
    }
    
    if(checkHopLe) {
        mainArr = newArr;
        var showResult = document.querySelectorAll(".input-group")[0].querySelector(".showMainArr");
        showResult.innerHTML = "";
        for (var a = 0; a < mainArr.length; a++) {
            var mainBadge = document.createElement("span");
            mainBadge.className = "badge badge-info ml-1";
            mainBadge.innerText = mainArr[a];
            showResult.append(mainBadge);
        }
    }
}

function sapXep () {
    var workName = document.querySelectorAll(".input-group")[0];
    var showResult = workName.querySelector(".showMainArr");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        alert("Nhập số vào mảng đã!");
    }
    else {
        for (var i = 0; i < mainArr.length - 1; i++) {
            for (j = i+1; j < mainArr.length; j++) {
                if(mainArr[i] > mainArr[j]) {
                    var hold = mainArr[i];
                    mainArr[i] = mainArr[j];
                    mainArr[j] = hold;
                }
            }
        }
        for (var a = 0; a < mainArr.length; a++) {
            var mainBadge = document.createElement("span");
            mainBadge.className = "badge badge-info ml-1";
            mainBadge.innerText = mainArr[a];
            showResult.append(mainBadge);
        }
    }
}

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
    var workName = document.querySelectorAll(".input-group")[0];
    var showResult = workName.querySelector(".result");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        alert("Nhập số vào mảng đã!");
    }
    else {
        var soNT = [];
        for (var i = 0; i < mainArr.length; i++) {
            if(checkSNT(mainArr[i])) {
                soNT.push(mainArr[i]);
            }
        }
        var preBadge = document.createElement("span");
        preBadge.className = "badge badge-success mr-2";
        preBadge.innerText = "Số nguyên tố đầu tiên là: ";
        var sntBadge = document.createElement("span");
        sntBadge.className = "badge badge-info";
        if(soNT.length < 0) {
            sntBadge.innerText = "-1";
        }
        else {
            sntBadge.innerText = soNT[0];
        }
        showResult.append(preBadge);
        showResult.append(sntBadge);
    }
}

function timSoNguyen () {
    var workName = document.querySelectorAll(".input-group")[2];
    var showResult = workName.querySelector(".result");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        alert("Nhập số vào mảng đã!");
    }
    else {
        var soNguyen = [];
        for (var i = 0; i < mainArr.length; i++) {
            if(Number.isInteger(Number(mainArr[i]))) {
                soNguyen.push(mainArr[i]);
            }
        }
        var preBadge = document.createElement("span");
        preBadge.className = "badge badge-success mr-2";
        preBadge.innerText = "Số nguyên: ";
        var soNguyenBadge = document.createElement("span");
        soNguyenBadge.className = "badge badge-info mr-1";
        soNguyenBadge.innerText = soNguyen.length;
        showResult.append(preBadge);
        showResult.append(soNguyenBadge);
    }
}


function soSanhAmDuong () {
    var workName = document.querySelectorAll(".input-group")[0];
    var showResult = workName.querySelector(".result");
    showResult.innerHTML = "";
    if(checkMangRong(mainArr)) {
        alert("Nhập số vào mảng đã!");
    }
    else {
        var soAm = 0;
        var soDuong = 0;
        mainArr.forEach(function(item, index) {
            if(item > 0) {
                soDuong++;
            }
            else if (item < 0) {
                soAm++;
            }
        });
        
        var soSanhBadge = document.createElement("span");
        soSanhBadge.className = "badge badge-info";
        if(soAm > soDuong) {
            soSanhBadge.innerText = "Số âm lớn hơn";
        }
        else if (soDuong > soAm) {
            soSanhBadge.innerText = "Số dương lớn hơn";
        }
        else {
            soSanhBadge.innerText = "Số âm số dương bằng nhau";
        }
        showResult.append(soSanhBadge);
    }
}