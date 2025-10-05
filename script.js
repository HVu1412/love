 // Tạo sao trong bầu trời
        function createStars() {
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Tạo trái tim bay lên
        function createHeart(event) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.className = 'heart-float';
            heart.style.left = event.clientX + 'px';
            heart.style.top = event.clientY + 'px';
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }

        // Chia sẻ bánh trung thu
        function shareMooncake(num) {
    const messages = [
        "🥮 Em vừa chia cho anh một miếng bánh! Anh cảm thấy ngọt ngào lắm! 💕",
        "🥮 Cảm ơn em! Bánh ngon hơn khi được chia sẻ cùng người mình yêu! 💝",
        "🥮 Em biết không? Bánh ngọt thế nào cũng không ngọt bằng em! 😊",
        "🥮 Anh mong sao có thể ăn bánh trung thu thật sự cùng em! 🌙"
    ];

    // Lấy random trong mảng messages
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];

    // Tìm chỗ để hiện chữ
    const textBox = document.getElementById("mooncakeMessage");

    // Ghi chữ ra (mỗi lần click đều hiện lại ngẫu nhiên)
    textBox.textContent = randomMsg;
}



        // Gửi yêu thương
        function sendLove() {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.innerHTML = '💖';
                    heart.className = 'heart-float';
                    heart.style.left = Math.random() * window.innerWidth + 'px';
                    heart.style.top = window.innerHeight + 'px';
                    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
                    document.body.appendChild(heart);
                    
                    setTimeout(() => heart.remove(), 4000);
                }, i * 100);
            }
         //   alert('💌 Yêu thương của anh đã được gửi đến em! Em có cảm nhận được không? 💕');
        }


        // Khởi tạo
        createStars();
        

        // Hiệu ứng trái tim tự động
        setInterval(() => {
            if (Math.random() > 1) {
                const heart = document.createElement('div');
                heart.innerHTML = '💝';
                heart.className = 'heart-float';
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.top = window.innerHeight + 'px';
                heart.style.fontSize = '25px';
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 4000);
            }
        }, 500);
        
        // Xử lý click vào đèn lồng
document.querySelectorAll('.lantern').forEach(lantern => {
    lantern.addEventListener('click', () => {
        // Xóa "active" ở các đèn khác
        document.querySelectorAll('.lantern').forEach(l => l.classList.remove('active'));
        // Gán "active" cho cái được click
        lantern.classList.add('active');
    });
});

function updateLoveTime() {
    const startDate = new Date(2025, 6, 30, 20, 0, 0); // 30/07/2025 20:00:00
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Điều chỉnh khi giá trị âm
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Lấy số ngày trong tháng trước
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    // Gắn kết quả lên giao diện
    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Gọi ngay khi mở trang
updateLoveTime();

// Sau đó cập nhật mỗi giây
setInterval(updateLoveTime, 1000);