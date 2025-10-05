* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            color: #fff;
            overflow-x: hidden;
            outline: none;
            -webkit-tap-highlight-color: transparent;
            -webkit-user-select: none; /* Chrome, Safari */
            -moz-user-select: none;    /* Firefox */
            -ms-user-select: none;     /* IE/Edge cũ */
            user-select: none;         /* Chuẩn */
}
        }

        .stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }

        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            animation: twinkle 3s infinite;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }

        .container {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            text-align: center;
            padding: 40px 20px;
            animation: fadeInDown 1s ease;
        }

        h1 {
            font-size: 3em;
            margin-bottom: 10px;
            background: linear-gradient(45deg, #ff6b9d, #ffd93d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .subtitle {
            font-size: 1.2em;
            color: #ffd93d;
            margin-bottom: 30px;
        }

        .moon-container {
            text-align: center;
            margin: 50px 0;
            position: relative;
            outline: none;
        }

        .moon {
            width: 200px;
            height: 200px;
            background: radial-gradient(circle at 30% 30%, #fff5e1, #ffd700);
            border-radius: 50%;
            margin: 0 auto;
            box-shadow: 0 0 50px rgba(255, 215, 0, 0.6),
                        0 0 100px rgba(255, 215, 0, 0.4),
                        inset -20px -20px 50px rgba(0,0,0,0.1);
            animation: float 6s ease-in-out infinite;
            cursor: pointer;
            transition: transform 0.3s;
            outline: none;
        }

        .moon:hover {
            transform: scale(1.1);
            outline: none;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }

        .section {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            margin: 30px 0;
            border: 1px solid rgba(255, 255, 255, 0.1);
            animation: fadeInUp 1s ease;
        }

        .section h2 {
            color: #ffd93d;
            margin-bottom: 20px;
            font-size: 2em;
            text-align: center;
        }

        .love-message {
            line-height: 1.8;
            font-size: 1.1em;
            text-align: justify;
            margin: 20px 0;
        }

        .dreams-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }

        .dream-card {
            background: linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(255, 217, 61, 0.2));
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
        }

        .dream-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(255, 217, 61, 0.3);
        }

        .dream-icon {
            font-size: 3em;
            margin-bottom: 15px;
        }

        .dream-card h3 {
            color: #ffd93d;
            margin-bottom: 10px;
        }

        .lantern-game {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 30px 0;
            gap: 20px;
        }

.lantern {
    z-index: 1;
    width: 80px;
    height: 100px;
    background: radial-gradient(circle at 50% 30%, #ff9bb0, #ff6b9d 70%);
    border-radius: 50% / 40%; /* tạo dáng bầu như đèn lồng */
    position: relative;
    cursor: pointer;
    animation: swing 2s ease-in-out infinite;
    transition: transform 0.3s;
    border: 3px solid #d94f73; /* viền ngoài */
    box-shadow: 0 0 15px rgba(255, 107, 157, 0.6);
}

.lantern.active {
    z-index: 999; /* nổi lên cao nhất */
}

/* Tua rua dưới */
.lantern::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 20px;
    background: #ff6b9d;
    box-shadow: 0 5px 0 #ff8fab, 0 10px 0 #ff6b9d;
}

@keyframes swing {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
}
 /*       .lantern {
            width: 80px;
            height: 100px;
            background: linear-gradient(to bottom, #ff6b9d, #ff8fab);
            border-radius: 10px 10px 50% 50%; 
            position: relative;
            cursor: pointer;
            animation: swing 2s ease-in-out infinite;
            transition: transform 0.3s;
        } */

        .lantern:nth-child(2) { animation-delay: 0.3s; }
        .lantern:nth-child(3) { animation-delay: 0.6s; }
        .lantern:nth-child(4) { animation-delay: 0.9s; }
        .lantern:nth-child(5) { animation-delay: 1.2s; }

        .lantern:hover {
            transform: scale(1.2);
        }

        @keyframes swing {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
        }

   

        .lantern-message {
            position: absolute;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
            font-size: 0.9em;
            opacity: 0;
            transition: opacity 0.3s;
            color: #ffd93d;
        }

        .lantern:hover .lantern-message {
            opacity: 1;
        }

        .mooncake-section {
            text-align: center;
        }

        .mooncakes {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            margin: 30px 0;
            outline: none;
        }

        .mooncake {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, #d4a574, #c8935f);
            border-radius: 50%;
            position: relative;
            cursor: pointer;
            transition: transform 0.3s;
            border: 5px solid #a67c52;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            outline: none;
            -webkit-tap-highlight-color: transparent;
         }

        .mooncake:hover {
            transform: rotate(360deg) scale(1.2);
        }

        .mooncake::before {
            content: '福';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2em;
            color: #8b4513;
            font-weight: bold;
            outline: none;
        }

        .countdown {
            text-align: center;
            font-size: 1.5em;
            margin: 30px 0;
            padding: 30px;
            background: rgba(255, 107, 157, 0.2);
            border-radius: 15px;
        }

        .countdown-numbers {
            font-size: 2.5em;
            color: #ffd93d;
            margin: 20px 0;
            font-weight: bold;
        }

        .wishes-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .wish-item {
            background: linear-gradient(90deg, rgba(255, 107, 157, 0.3), rgba(255, 217, 61, 0.3));
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #ffd93d;
            animation: slideInRight 1s ease;
        }

        .heart-float {
            position: fixed;
            pointer-events: none;
            animation: floatUp 4s ease-in infinite;
            z-index: 1000;
        }

        @keyframes floatUp {
            0% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) scale(0);
                opacity: 0;
            }
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .interactive-message {
            text-align: center;
            font-style: italic;
            color: #ff6b9d;
            margin: 20px 0;
        }

        button {
            background: linear-gradient(45deg, #ff6b9d, #ffd93d);
            border: none;
            color: white;
            padding: 15px 40px;
            font-size: 1.1em;
            border-radius: 50px;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            margin: 10px;
        }

        button:hover {
            transform: scale(1.1);
            box-shadow: 0 5px 20px rgba(255, 107, 157, 0.5);
        }

        .love-story {
            background: rgba(255, 217, 61, 0.1);
            padding: 30px;
            border-radius: 15px;
            margin: 20px 0;
            line-height: 2;
        }

        @media (max-width: 768px) {
            h1 { font-size: 2em; }
            .moon { width: 150px; height: 150px; }
            .section { padding: 20px; }
        }

/* Section Love Timer */
.count-love {
    text-align: center;
    margin: 30px auto;
    padding: 20px;
    background: rgba(255, 182, 193, 0.15);
    border: 2px solid #ff6b9d;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    max-width: 600px;
}

.count-love p {
    font-size: 1.1em;
    color: #ff6b9d;
    margin-bottom: 15px;
}

.timer-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin: 20px 0;
}

.time-unit {
    background: #fff;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
}

.time-unit:hover {
    transform: scale(1.05);
}

.time-number {
    display: block;
    font-size: 1.8em;
    font-weight: bold;
    color: #ff4d79;
    margin-bottom: 5px;
}

.time-label {
    font-size: 0.9em;
    color: #555;
}

.start-date {
    font-style: italic;
    color: #ff8fab;
    margin-top: 10px;
    font-size: 0.95em;
}