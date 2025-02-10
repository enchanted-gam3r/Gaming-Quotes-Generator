        // Quotes array
        const quotes = [
            {
                text: "Despite everything, it's still you!",
                author: "Undertale"
            },
            {
                text: "The world is full of monsters with pretty faces.",
                author: "Final Fantasy X"
            },
            {
                text: "You can’t change the past, but you can learn from it.",
                author: "Tales of Symphonia"
            },
            {
                text: "The important thing is not how many times you fall, but that you rise again.",
                author: "The Witcher 3"
            },
            {
                text: "Stand amongst the ashes of a trillion dead souls and ask if honor matters.",
                author: "Mass Effect 3"
            },
            {
                text: "Death is not an escape.",
                author: "Dead by Daylight"
            },
            {
                text: "Nothing is true, everything is permitted.",
                author: "Assassin's Creed"
            },
            {
                text: "A man chooses, a slave obeys.",
                author: "BioShock"
            },
            {
                text: "What you are, is what you choose to be.",
                author: "BioShock Infinite"
            },
            {
                text: "We do not fear the darkness, we fear what it reveals.",
                author: "Dark Souls"
            },
            {
                text: "Courage is not the absence of fear, but the strength to keep going despite it.",
                author: "Dragon Age: Inquisition"
            },
            {
                text: "Don’t stop fighting. If you keep moving forward, you’ll find a way.",
                author: "Persona 5"
            },
            {
                text: "A true hero isn’t measured by the size of his strength, but by the strength of his heart.",
                author: "Hercules (Kingdom Hearts)"
            },
            {
                text: "In the end, it’s not about saving the world, it’s about saving yourself.",
                author: "Nier: Automata"
            },
            {
                text: "To be a hero, you don’t have to be perfect. You just need to keep moving forward.",
                author: "Spider-Man"
            },
            {
                text: "Sometimes you have to get knocked down lower than you’ve ever been to stand back up taller than you ever were.",
                author: "Uncharted 4"
            },
            {
                text: "You will die many times, but you will never be defeated.",
                author: "Sekiro: Shadows Die Twice"
            },
            {
                text: "Even the smallest person can change the course of the future.",
                author: "The Lord of the Rings"
            },
            {
                text: "In the end, the world may not care, but you do. So keep going.",
                author: "The Last of Us"
            },
            {
                text: "It's not the end of the world, but you can make a new one.",
                author: "Life is Strange"
            },
            {
                text: "You are the choices you make.",
                author: "The Walking Dead"
            },
            {
                text: "Even when you fall down, get back up. You’re stronger than you think.",
                author: "Dark Souls"
            },
            {
                text: "There’s no greater gift than a second chance.",
                author: "Tomb Raider"
            },
            {
                text: "You must find your own path.",
                author: "The Legend of Zelda"
            },
            {
                text: "In every darkness, there is a light. You just have to find it.",
                author: "Horizon Zero Dawn"
            },
            {
                text: "Stand firm in your belief, and if you’re wrong, you’ll be right back where you started.",
                author: "The Elden Scrolls V: Skyrim"
            },
            {
                text: "Strength is built through struggle. Keep fighting.",
                author: "God of War"
            },
            {
                text: "We may be few, but we are unstoppable.",
                author: "Halo 3"
            },
            {
                text: "Hope is the one thing that can never be taken from you.",
                author: "The Last of Us"
            },
            {
                text: "The more you try to avoid something, the more it gets closer.",
                author: "Undertale"
            },
            {
                text: "You have to show mercy. You have to show them kindness.",
                author: "Undertale"
            },
            {
                text: "A world of light and dark, but even in the dark, we must rise.",
                author: "Hollow Knight"
            },
            {
                text: "There is a great emptiness within you. The void has eaten away at your heart",
                author: "Hollow knight"
            },
            {
                text: "You are the last, and the first, and the only one who can hold this world together.",
                author: "Hollow Knight"
            },
        ];

        function generateQuote() {
            const quoteText = document.getElementById('quoteText');
            const quoteAuthor = document.getElementById('quoteAuthor');
            const quoteBox = document.querySelector('.quote-box');
            
            // Add animation effect
            quoteBox.style.transform = 'scale(0.98)';
            quoteText.style.opacity = 0;
            quoteAuthor.style.opacity = 0;
            
            setTimeout(() => {
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                quoteText.textContent = randomQuote.text;
                quoteAuthor.textContent = "- " + randomQuote.author;
                
                // Restore elements
                quoteBox.style.transform = 'scale(1)';
                quoteText.style.opacity = 1;
                quoteAuthor.style.opacity = 1;
                quoteText.style.transform = 'translateZ(20px)';
            }, 300);
        }

        // Mouse movement effect
        document.addEventListener('mousemove', (e) => {
            const quoteBox = document.querySelector('.quote-box');
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            quoteBox.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
