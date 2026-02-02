// Khoi tao bien
let loginCount = 0;
let loginSuccess = false;
//Khoi tao dang nhap tai khoan
while (loginCount < 3) {
  let userName = prompt("Mời bạn nhập tài khoản: ");
  let password = prompt("Mời bạn nhập mật khẩu: ");

  if (userName === "admin" && password === "12345") {
    alert("Đăng nhập thành công!!!!");
    loginSuccess = true;
    break;
  } else {
    loginCount++;
    let remaining = 3 - loginCount;
    if (userName !== "admin" && password !== "12345") {
      alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${remaining} lần thử`);
    } else if (userName !== "admin") {
      alert(`Sai tài khoản! Bạn còn ${remaining} lần thử`);
    } else {
      alert(`Sai mật khẩu! Bạn còn ${remaining} lần thử`);
    }
    if (loginCount === 3) {
      alert("Hệ thống bị khóa! Bạn đã nhập sai quá 3 lần.");
      loginSuccess = false;
    }
  }
}

if (loginSuccess === true) {
  let isRunning = true;
  while (isRunning) {
    let choice = +prompt(`
        === QUẢN TRỊ THƯ VIỆN THÔNG MINH ===
        1. Phân loại mã số sách(chẵn/lẻ)
        2. Thiết kế sơ đồ kho sách(dạng lưới)
        3. Dự toán phí bảo trì sách theo năm
        4. Tìm mã số sách may mắn
        5. Thoát
        Nhập lựa chọn của bạn(1-5):
            `);
    switch (choice) {
      case 1:
        alert(`Nhập các mã số sách (Nhập 0 để dừng lại):`);
        let booId;
        let odd = 0;
        let even = 0;
        let totalId = 0;
        do {
          booId = +prompt(`Nhập mã sách: `);
          if (isNaN(booId)) {
            alert(`Vui lòng nhập số nguyên hợp lệ!`);
            continue;
          }
          if (booId === 0) {
            alert(`Đã phân loại xong! Xem kết quả tại Console(F12)`);
            break;
          }
          if (booId % 2 === 0) {
            even++;
          } else {
            odd++;
          }
          totalId++;
        } while (booId !== 0);
        console.log(`
          -----Kết quả phân loại mã sách------
          -Tổng số lượng mã sách đã nhập: ${totalId}
          -Có bao nhiêu mã số là số chẵn (Sách khoa học): ${even}
          -Có bao nhiêu mã số là số lẻ (Sách nghệ thuật): ${odd}
          `);
        break;
      case 2:
        let rows = +prompt("Nhập số hàng của kho: ");
        let colums = +prompt("Nhập số cột của kho: ");
        if (rows <= 0 || colums <= 0 || isNaN(rows) || isNaN(colums)) {
          alert(`Số hàng và số cột phải là số dương!`);
          break;
        }
        console.log(`--- Bản đồ kho sách (${rows}x${colums}) ---`);
        for (let i = 1; i <= rows; i++) {
          let rowOutput = "";
          for (let j = 1; j <= colums; j++) {
            if (i === j) {
              rowOutput += `[${i}-${j}](Kệ ưu tiên) `;
            } else {
              rowOutput += `[${i}-${j}] `;
            }
          }
          console.log(rowOutput);
        }
        break;
      case 3:
        let quantityBook = +prompt("Nhập vào số lượng sách hiện có: ");
        let priceNow = +prompt("Nhập vào phí bảo trì cho 1 cuốn(VNĐ): ");
        let year = +prompt("Nhập vào số năm dự toán: ");
        if (isNaN(quantityBook) && isNaN(price) && isNaN(year)) {
          alert("Dữ liệu nhập vào phải là số!");
          break;
        }
        console.log("--- Dự toán phí bảo trì sách theo năm ---");
        let totalMoney = quantityBook * priceNow;
        for (let i = 1; i <= year; i++) {
          let unitPrice = Math.round(totalMoney / quantityBook);
          console.log(
            `Năm ${i}: ${totalMoney} (VNĐ) (Đơn giá: ${unitPrice}/cuốn)`,
          );
          totalMoney = Math.trunc(totalMoney * 1.1);
        }
        alert(`Đã hoàn thành bảng dự toán tại màn hình Console`);
        break;
      case 4:
        let totalNumber = +prompt(
          "Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N)",
        );
        if (totalNumber <= 0 || isNaN(totalNumber)) {
          alert(`Vui lòng nhập số N dương!`);
        }
        let luckyNumber = 0;
        let lucky = "";
        console.log(
          `--- Danh sách mã sách may mắn (Bội số của 3, không chia hết cho 5) ---,`,
        );
        for (let i = 1; i <= totalNumber; i++) {
          if (i % 3 === 0 && i % 5 !== 5) {
            alert(
              `Tìm thấy ${luckyNumber} mã may mắn. Xem chi tiết tại Console`,
            );
            lucky += `${i}`;
            luckyNumber++;
          }
        }
        console.log(`${lucky}, `);

        console.log(`=> Tổng cộng có ${luckyNumber} mã may mắn.`);
        break;
      case 5:
        alert("Hẹn gặp lại!");
        isRunning = false; // Đặt cờ thành false để vòng while dừng lại
        break;
      default:
        break;
    }
  }
}
