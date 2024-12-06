async function loadSeatDiagram() {
    const response = await fetch("seatDiagram.json");
    const data = await response.json();
    const diagram = document.getElementById("seatDiagram");
  
    // Thêm phần màn hình ở đầu sơ đồ
    const screenDiv = document.createElement("div");
    screenDiv.textContent = "Màn Hình";
    screenDiv.classList.add("text-center", "mb-3", "p-2", "bg-dark", "text-white");
    screenDiv.style.width = "100%";
    diagram.appendChild(screenDiv);
  
    // Thêm khoảng trống 2 hàng trước ghế
    for (let gap = 0; gap < 2; gap++) {
        const gapRow = document.createElement("div");
        gapRow.style.height = "40px";
        diagram.appendChild(gapRow);
    }
  
    // Tạo hàng và cột ghế
    data.forEach((rowData) => {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("d-flex", "justify-content-center", "mb-2");
  
        rowData.seats.forEach((seat) => {
            const seatDiv = document.createElement("span");
            seatDiv.textContent = seat.seatNumber;
            seatDiv.classList.add("badge", "m-1", "seat", seat.type);
  
            // Thêm sự kiện click để thay đổi trạng thái ghế
            seatDiv.addEventListener("click", function () {
                if (seat.selected) {
                    seat.selected = false; 
                    seatDiv.classList.remove("selected");
                    // Giảm số lượng ghế đã chọn
                    selectedCounts[seat.type]--;
                } else {
                    // Kiểm tra số lượng ghế đã chọn
                    if ((seat.type === "vip" && selectedCounts.vip >= 2) ||
                        (seat.type === "regular" && selectedCounts.regular >= 2) ||
                        (seat.type === "couple" && selectedCounts.couple >= 2)) {
                        alert("Bạn đã mua đủ ghế loại này!"); // Thông báo
                        return; // Ngưng thực hiện nếu đã đủ số lượng
                    }
                    seat.selected = true; 
                    seatDiv.classList.add("selected");
                    // Tăng số lượng ghế đã chọn
                    selectedCounts[seat.type]++;
                }
            });
  
            // Kiểm tra trạng thái ghế và thêm lớp chọn nếu đã chọn
            if (seat.selected) {
                seatDiv.classList.add("selected");
            }
  
            rowDiv.appendChild(seatDiv);
        });
  
        diagram.appendChild(rowDiv);
    });
  
    // Hiển thị phần ghi chú
    document.getElementById("legend").style.display = "flex"; // Hiện ghi chú
}

let selectedCounts = {
    regular: 0, // Số lượng ghế người lớn đã chọn
    vip: 0,     // Số lượng ghế HSSV đã chọn
    couple: 0,  // Số lượng ghế đôi đã chọn
};

// Hàm này sẽ hiển thị phần lựa chọn ghế
function showSeatSelection() {
    const seatSelectionDiv = document.getElementById("seatSelection");
    seatSelectionDiv.innerHTML = ""; // Clear old content

    // Add title for the ticket selection section
    const title = document.createElement("h3");
    title.textContent = "CHỌN LOẠI VÉ";
    title.className = "text-center mb-4 text-uppercase font-weight-bolder";
    seatSelectionDiv.appendChild(title);

    // Create div for the ticket boxes
    const rowDiv = document.createElement("div");
    rowDiv.className = "d-flex justify-content-around mb-4"; // Flexbox for horizontal layout

    // Define the ticket types and seat types
    const ticketTypes = [
        { name: "NGƯỜI LỚN", id: "regular", price: "45,000 VNĐ", type: "ĐƠN", max: 2 },
        { name: "HSSV-NGUỜI CAO TUỔI", id: "vip", price: "45,000 VNĐ", type: "ĐƠN", max: 2 },
        { name: "GHẾ ĐÔI", id: "couple", price: "95,000 VNĐ", type: "ĐÔI", max: 2 },
    ];

    ticketTypes.forEach((ticket) => {
        // Create a box for each ticket type
        const box = document.createElement("div");
        box.className = "col-4 ticket-box text-light p-3"; // Ticket box styling

        const ticketLabel = document.createElement("h4");
        ticketLabel.textContent = ticket.name;
        ticketLabel.className = "ticket-title mb-2"; // Title styling
        box.appendChild(ticketLabel);

        const ticketType = document.createElement("p");
        ticketType.textContent = ticket.type;
        ticketType.className = "ticket-type mb-2"; // Type label styling
        box.appendChild(ticketType);

        const ticketPrice = document.createElement("p");
        ticketPrice.textContent = ticket.price;
        ticketPrice.className = "ticket-price"; // Price styling
        box.appendChild(ticketPrice);

        // Quantity input section
        const ticketCountWrapper = document.createElement("div");
        ticketCountWrapper.className =
            "ticket-quantity d-flex justify-content-center align-items-center";

        // Decrease button
        const minusButton = document.createElement("button");
        minusButton.textContent = "-";
        minusButton.className = "btn btn-secondary mx-1";
        minusButton.addEventListener("click", function () {
            const currentValue = parseInt(ticketCountInput.value);
            if (currentValue > 0) {
                ticketCountInput.value = currentValue - 1; // Decrease quantity
                selectedCounts[ticket.id]--; // Giảm số lượng đã chọn
            }
        });
        ticketCountWrapper.appendChild(minusButton);

        // Quantity input
        const ticketCountInput = document.createElement("input");
        ticketCountInput.type = "number";
        ticketCountInput.id = `${ticket.id}Count`;
        ticketCountInput.value = "0";
        ticketCountInput.min = "0";
        ticketCountInput.className = "form-control text-center ";
        ticketCountInput.style.width = "50px";
        ticketCountWrapper.appendChild(ticketCountInput);

        // Increase button
        const plusButton = document.createElement("button");
        plusButton.textContent = "+";
        plusButton.className = "btn btn-secondary mx-1";
        plusButton.addEventListener("click", function () {
            const currentValue = parseInt(ticketCountInput.value);
            // Kiểm tra số lượng ghế đã chọn
            if (currentValue < ticket.max) {
                ticketCountInput.value = currentValue + 1; // Increase quantity
                selectedCounts[ticket.id]++; // Tăng số lượng đã chọn
            } else {
                alert("Bạn đã mua đủ ghế loại này!"); // Thông báo nếu đã đủ số lượng
            }
        });
        ticketCountWrapper.appendChild(plusButton);

        box.appendChild(ticketCountWrapper); // Add quantity section to box
        rowDiv.appendChild(box); // Add each box to the row
    });

    seatSelectionDiv.appendChild(rowDiv); // Append row to main div
}

function showSeatDiagram() {
  const seatDiagramDiv = document.getElementById("seatDiagram");
  seatDiagramDiv.innerHTML = "";
  const layoutTitle = document.createElement("h3");
  layoutTitle.textContent = "Sơ Đồ Rạp";
  layoutTitle.className = "text-center mb-3";
  seatDiagramDiv.appendChild(layoutTitle);
  const rows = 10;
  const cols = 15; 
  const regularCount =
    parseInt(document.getElementById("regularCount").value) || 0;
  const vipCount = parseInt(document.getElementById("vipCount").value) || 0;
  const coupleCount =
    parseInt(document.getElementById("coupleCount").value) || 0;

  generateSeatDiagram(rows, cols, regularCount, vipCount, coupleCount); // Call the function to create the seat layout
}
function showTimes(day) {
  let showtimesDiv = document.getElementById("showtimes");
  showtimesDiv.innerHTML = ""; // Xóa nội dung cũ trước khi hiển thị mới

  // Suất chiếu của từng ngày
  const times = {
    1: ["10:00 AM", "13:00 PM", "16:00 PM", "19:00 PM"],
    2: ["09:00 AM", "12:00 PM", "15:00 PM", "18:00 PM"],
    3: ["11:00 AM", "14:00 PM", "17:00 PM", "20:00 PM"],
    4: ["08:00 AM", "11:00 AM", "14:00 PM", "17:00 PM"],
  };        

  // Thêm sơ đồ ghế cho từng suất chiếu
  const layoutIds = [1, 2]; // Thêm ID cho từng sơ đồ ghế (1 và 2 ở đây)

  // Lấy suất chiếu theo ngày và tạo nút cho mỗi suất chiếu
  if (times[day]) {
    times[day].forEach((time, index) => {
      let btn = document.createElement("button");
      btn.className = "btn btn-outline-warning mx-2";
      btn.innerText = `${time}`; // Tạo tên nút cho từng sơ đồ

      // Thêm sự kiện click cho nút suất chiếu
      btn.addEventListener("click", function () {
        showSeatSelection();
        loadSeatDiagram();

      });

      showtimesDiv.appendChild(btn); // Thêm nút vào div hiển thị
    });
  }
}

const poster = document.getElementById("poster");
const overlay = document.getElementById("videoOverlay");
const closeBtn = document.querySelector(".close");
const youtubeVideo = document.getElementById("youtubeVideo");

// YouTube link for the trailer
const youtubeLink = "https://www.youtube.com/embed/YOUR_VIDEO_ID";

// When the poster is clicked, show the overlay with the YouTube video
poster.addEventListener("click", () => {
  overlay.style.display = "block";
  youtubeVideo.src = youtubeLink;
});

// When the close button is clicked, hide the overlay
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  youtubeVideo.src = ""; // Stop the video
});

// Hide overlay when clicked outside the video
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
    youtubeVideo.src = ""; // Stop the video
  }
});

document.getElementById("myBtn").addEventListener("click", function () {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Xem thêm";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Thu gọn";
    moreText.style.display = "inline";
  }
});
let countdownTime = 300; // 5 minutes in seconds

        function startCountdown() {
          const countdownElement = document.getElementById('countdown');
          const interval = setInterval(() => {
            const minutes = Math.floor(countdownTime / 60);
            const seconds = countdownTime % 60;
            countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            if (countdownTime <= 0) {
              clearInterval(interval);
              // You may want to add functionality here when the countdown ends
            }
            countdownTime--;
          }, 1000);
        }

        // Call startCountdown on page load
        window.onload = () => {
          startCountdown();
          updateSelectedQuantities();
        };