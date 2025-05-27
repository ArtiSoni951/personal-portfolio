function openModal(project) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-description');
    const link = document.getElementById('modal-link');

    const projects = {
        todo: {
            name: "to do list app",
            description: " A simple to-do list app to manage daily tasks  – made using HTML, CSS & JavaScript.",
            repo: "to do list app"
        },
        watch: {
            name: "stopwatch-web-app",
            description: " A simple stopwatch-web-app using HTML, CSS, and JS.",
            repo: "stopwatch-web-app"
        },
        travel  : {
            name: "travel",
            description: " A responsive travel website landing page made with HTML and CSS. Fully mobile friendly.",
            repo: "travel"
        },
        tic: {
            name: "Tic Tac Toe Game",
            description: "A classic Tic Tac Toe game using JavaScript.",
            repo: "tic-tac-game"
        },
        weather: {
            name: "weather-app",
            description: " Displays real-time weather information 🌈by fetching data from a public API.",
            repo: "weather-app"
        },

                                                         
        page : {
            name: " Responsive Landing Page",
            description: " A responsive  landing page made with HTML and CSS , Fully mobile friendly.",
            repo: "Responsive Landing Page"
        }
    };

    const current = projects[project];
    if (current) {
        title.innerText = current.name;
        desc.innerText = current.description;
        link.href = `https://github.com/ArtiSoni951/${current.repo}`;
        modal.style.display = "flex";
    }
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
function toggleMode() {
    document.body.classList.toggle('dark');
    const toggleBtn = document.getElementById('mode-toggle');

    // Update button icon
    if (document.body.classList.contains('dark')) {
        toggleBtn.textContent = '🌤️'; // Light mode
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.textContent = '🌙'; // Dark mode
        localStorage.setItem('theme', 'light');
    }
}
window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    const toggleBtn = document.getElementById('mode-toggle');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        toggleBtn.textContent = '🌤️';
    } else {
        document.body.classList.remove('dark');
        toggleBtn.textContent = '🌙';
    }
}
// let currentUtterance = null;

// function speakAboutMe() {
//   if (speechSynthesis.speaking) {
//     speechSynthesis.cancel(); // stop previous speech before starting
//   }

//   const text = "Hi! I'm Irfan Khan, a passionate front-end developer and creative UI UX designer with experience in HTML, CSS, JavaScript, and product development. I enjoy building elegant and functional web experiences!";
//   const utterance = new SpeechSynthesisUtterance(text);
//   utterance.lang = 'en-US';
//   utterance.rate = 1;

//   currentUtterance = utterance;
//   speechSynthesis.speak(utterance);
// }

// function stopSpeaking() {
//   if (speechSynthesis.speaking || speechSynthesis.paused) {
//     speechSynthesis.cancel(); // Stop the current speech
//   }
// }

