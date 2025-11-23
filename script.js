// Welcome page functionality
document.addEventListener('DOMContentLoaded', function() {
    const welcomePage = document.getElementById('welcomePage');
    const mainWebsite = document.getElementById('mainWebsite');
    const apologyAudio = document.getElementById('apologyAudio');
    const enterButton = document.getElementById('enterButton');
    const flowerContainer = document.getElementById('flowerContainer');
    const fireworksContainer = document.getElementById('fireworksContainer');
    
    // Try to autoplay audio (most browsers block this now, so we'll show a button)
    if (apologyAudio) {
        apologyAudio.volume = 0.7;
    }
    
    // Show enter button immediately
    if (enterButton) {
        enterButton.style.display = 'inline-block';
        const welcomeText = document.querySelector('.welcome-text');
        if (welcomeText) {
            welcomeText.textContent = 'My heartfelt apology is ready for you';
        }
    }
    
    // Enter button click event
    if (enterButton) {
        enterButton.addEventListener('click', function() {
            // Hide welcome page and show main website
            if (welcomePage) welcomePage.style.display = 'none';
            if (mainWebsite) mainWebsite.style.display = 'block';
            
            // Initialize the rest of the website
            initializeWebsite();
        });
    }
    
    // Function to initialize the main website features
    function initializeWebsite() {
        // Create more floating hearts dynamically
        const heartsContainer = document.querySelector('.hearts-container');
        
        if (heartsContainer) {
            // Clear existing hearts
            heartsContainer.innerHTML = '';
            
            // Create initial hearts
            const initialHearts = ['❤️', '💖', '💗', '💓'];
            initialHearts.forEach((heart, index) => {
                const heartElement = document.createElement('div');
                heartElement.classList.add('heart');
                heartElement.textContent = heart;
                heartElement.style.left = `${10 + index * 25}%`;
                heartElement.style.animationDelay = `${index * 2}s`;
                heartElement.style.fontSize = `${20 + index * 5}px`;
                heartsContainer.appendChild(heartElement);
            });
            
            // Create additional hearts
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                
                // Random heart emoji
                const hearts = ['❤️', '💖', '💗', '💓', '💞', '💕', '💘', '💙', '💚', '💛'];
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                
                // Random size
                const size = Math.random() * 30 + 15;
                heart.style.fontSize = `${size}px`;
                
                // Random position
                heart.style.left = `${Math.random() * 100}%`;
                
                // Random animation delay and duration
                heart.style.animationDelay = `${Math.random() * 5}s`;
                heart.style.animationDuration = `${Math.random() * 3 + 5}s`;
                
                heartsContainer.appendChild(heart);
            }
        }
        
        // Button interactions
        const forgiveBtn = document.getElementById('forgiveBtn');
        
        if (forgiveBtn) {
            forgiveBtn.addEventListener('click', function() {
                // Create fireworks celebration
                createFireworksCelebration();
                
                // Show celebration message
                showCelebrationMessage();
            });
        }
    }
    
    // Create fireworks celebration
    function createFireworksCelebration() {
        if (!fireworksContainer) return;
        
        // Clear any existing fireworks
        fireworksContainer.innerHTML = '';
        
        // Create multiple fireworks bursts
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.classList.add('firework');
                
                // Random emoji for fireworks
                const emojis = ['✨', '🎉', '🎊', '💥', '🌟', '⭐', '💫', '🎆'];
                firework.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                
                // Random position
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                firework.style.left = `${posX}%`;
                firework.style.top = `${posY}%`;
                
                // Random size
                const size = Math.random() * 2 + 1;
                firework.style.fontSize = `${size}rem`;
                
                // Random color
                const colors = ['#ff6b6b', '#ff8e8e', '#ff9a9e', '#fad0c4', '#ffafbd', '#ffc3a0'];
                firework.style.color = colors[Math.floor(Math.random() * colors.length)];
                
                // Animation
                firework.style.animation = `firework-burst 1s ease-out forwards`;
                
                fireworksContainer.appendChild(firework);
                
                // Remove firework after animation
                setTimeout(() => {
                    if (fireworksContainer.contains(firework)) {
                        firework.style.animation = 'firework-fade 0.5s ease-out forwards';
                        setTimeout(() => {
                            if (fireworksContainer.contains(firework)) {
                                fireworksContainer.removeChild(firework);
                            }
                        }, 500);
                    }
                }, 1000);
            }, i * 100); // Stagger the fireworks
        }
    }
    
    // Show celebration message
    function showCelebrationMessage() {
        const message = document.createElement('div');
        message.id = 'celebrationMessage';
        message.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                color: white;
                font-size: 2rem;
                text-align: center;
                padding: 20px;
            ">
                <div>
                    <h2 style="font-size: 4rem; margin-bottom: 30px; color: #ff6b6b;">Congratulations Mr Bright! 🎉</h2>
                    <p style="margin-bottom: 30px; font-size: 2rem;">Thank you for forgiving me!</p>
                    <p style="margin-bottom: 30px; font-size: 1.5rem;">You've made me the happiest person alive!</p>
                    <div style="margin-top: 30px;">
                        <button id="continueJourneyBtn" style="
                            padding: 15px 30px;
                            font-size: 1.2rem;
                            background: linear-gradient(to right, #ff6b6b, #ff8e8e);
                            color: white;
                            border: none;
                            border-radius: 50px;
                            cursor: pointer;
                            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                            transition: all 0.3s ease;
                            margin: 0 10px;
                        " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 20px rgba(0, 0, 0, 0.3)';"
                           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(0, 0, 0, 0.3)';">
                            Continue Our Journey
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(message);
        
        // Add event listener to the button
        document.getElementById('continueJourneyBtn').addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default behavior
            playAudioAndNavigate();
        });
    }
    
    // Play audio and navigate function
    function playAudioAndNavigate() {
        // Remove the celebration message first
        const message = document.getElementById('celebrationMessage');
        if (message) {
            document.body.removeChild(message);
        }
        
        // Create a visible but minimal audio player
        const audioPlayer = document.createElement('div');
        audioPlayer.id = 'specialAudioPlayer';
        audioPlayer.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 255, 255, 0.95);
                padding: 30px;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                text-align: center;
                z-index: 3000;
                max-width: 90%;
                width: 400px;
            ">
                <h3 style="color: #d81b60; margin-bottom: 20px; font-family: 'Great Vibes', cursive; font-size: 2.5rem;">A Special Message For You</h3>
                <div style="margin-bottom: 20px;">
                    <audio id="specialAudio" controls style="width: 100%;">
                        <source src="audio/Peculiar%20T.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <p style="margin-bottom: 20px; color: #5a3e36; font-size: 1.1rem;">Playing a special message... Please listen.</p>
                <div style="display: flex; justify-content: center;">
                    <button id="skipAudioBtn" style="
                        padding: 10px 20px;
                        background: #6b6b6b;
                        color: white;
                        border: none;
                        border-radius: 50px;
                        cursor: pointer;
                        font-size: 1rem;
                    ">Continue to Gallery</button>
                </div>
            </div>
        `;
        document.body.appendChild(audioPlayer);
        
        // Get the audio element and buttons
        const audio = document.getElementById('specialAudio');
        const skipBtn = document.getElementById('skipAudioBtn');
        
        if (audio) {
            audio.volume = 0.7;
            
            // Set up navigation after audio ends
            audio.addEventListener('ended', function() {
                // Remove audio player and navigate
                setTimeout(function() {
                    const player = document.getElementById('specialAudioPlayer');
                    if (player && document.body.contains(player)) {
                        document.body.removeChild(player);
                    }
                    window.location.href = 'gallery.html';
                }, 1000);
            });
            
            // Set up skip button
            if (skipBtn) {
                skipBtn.addEventListener('click', function() {
                    // Stop audio and navigate
                    audio.pause();
                    const player = document.getElementById('specialAudioPlayer');
                    if (player && document.body.contains(player)) {
                        document.body.removeChild(player);
                    }
                    window.location.href = 'gallery.html';
                });
            }
        } else {
            // If no audio support, navigate immediately
            const player = document.getElementById('specialAudioPlayer');
            if (player && document.body.contains(player)) {
                document.body.removeChild(player);
            }
            window.location.href = 'gallery.html';
        }
    }
    
    // Initialize website immediately if welcome page is not shown
    if (!welcomePage || welcomePage.style.display === 'none') {
        initializeWebsite();
    }
});