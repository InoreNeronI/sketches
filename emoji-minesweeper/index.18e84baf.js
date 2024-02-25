/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 * main.js contains the rest of the UI of the game,
 * anything that happens outside of the board. It
 * also handles the storage and the display of
 * the saved stats.
 */ // import favicon from "./utils/favicon.js";
/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 */ function $6a4fe3f45184d480$export$2e2bcd8739ae039(title) {
    const header = document.createElement("div");
    header.className = `header`;
    if (JSON.parse(localStorage.getItem("japanese")) === true) header.classList.add("japanese");
    let titleCharacters = title.split("");
    for(let i = 0; i < titleCharacters.length; i++){
        if (titleCharacters[i] === " ") titleCharacters[i] = "&nbsp;";
        header.innerHTML += `<span style="--i:${i}">${titleCharacters[i]}</span>`;
    }
    return header;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 */ function $926fc19182659610$export$2e2bcd8739ae039() {
    const board = document.createElement("div");
    board.setAttribute("id", "board");
    switch(level){
        case "beginner":
            board.style.height = "317px"; // canvas size - 0.6px
            break;
        case "intermediate":
            board.style.height = "541px";
            break;
        case "expert":
            board.style.height = "541px";
            break;
    }
    return board;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 */ function $5933c4a9fcd301a1$export$2e2bcd8739ae039() {
    const footer = document.createElement("footer");
    footer.innerHTML += `
    <p>\xa9 2024 Michael Kolesidis. Licensed under the 
      <a 
        href="https://www.gnu.org/licenses/agpl-3.0.html" 
        target="_blank">
          GNU AGPL
      </a>
       | 
      <a 
        href="https://github.com/michaelkolesidis/emoji-minesweeper" 
        target="_blank">
          GitHub
      </a>
    </p>`;
    return footer;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 */ function $bcc8128b2e3a7168$var$formatTime(time) {
    let formattedTime, hours, minutes, seconds;
    hours = Math.floor(time / 3600);
    minutes = Math.floor((time - hours * 3600) / 60);
    seconds = time - hours * 3600 - minutes * 60;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
}
function $bcc8128b2e3a7168$export$2e2bcd8739ae039() {
    // Level: beginner || intermediate || expert
    let gameLevel = window.localStorage.getItem("level");
    if (gameLevel === null) {
        gameLevel = "beginner";
        window.localStorage.setItem("level", "beginner");
    }
    // Games Played
    let beginnerPlayed = window.localStorage.getItem("beginnerPlayed");
    if (beginnerPlayed === null) window.localStorage.setItem("beginnerPlayed", "0");
    let intermediatePlayed = window.localStorage.getItem("intermediatePlayed");
    if (intermediatePlayed === null) window.localStorage.setItem("intermediatePlayed", "0");
    let expertPlayed = window.localStorage.getItem("expertPlayed");
    if (expertPlayed === null) window.localStorage.setItem("expertPlayed", "0");
    // Games Won
    let beginnerWon = window.localStorage.getItem("beginnerWon");
    if (beginnerWon === null) window.localStorage.setItem("beginnerWon", "0");
    let intermediateWon = window.localStorage.getItem("intermediateWon");
    if (intermediateWon === null) window.localStorage.setItem("intermediateWon", "0");
    let expertWon = window.localStorage.getItem("expertWon");
    if (expertWon === null) window.localStorage.setItem("expertWon", "0");
    // Win Percentage
    let beginnerWinPercentage = window.localStorage.getItem("beginnerWinPercentage");
    if (beginnerWinPercentage === null) window.localStorage.setItem("beginnerWinPercentage", "");
    let intermediateWinPercentage = window.localStorage.getItem("intermediateWinPercentage");
    if (intermediateWinPercentage === null) window.localStorage.setItem("intermediateWinPercentage", "");
    let expertWinPercentage = window.localStorage.getItem("expertWinPercentage");
    if (expertWinPercentage === null) window.localStorage.setItem("expertWinPercentage", "");
    // Best Time
    let beginnerBestTime = window.localStorage.getItem("beginnerBestTime");
    if (beginnerBestTime === null) window.localStorage.setItem("beginnerBestTime", "");
    let intermediateBestTime = window.localStorage.getItem("intermediateBestTime");
    if (intermediateBestTime === null) window.localStorage.setItem("intermediateBestTime", "");
    let expertBestTime = window.localStorage.getItem("expertBestTime");
    if (expertBestTime === null) window.localStorage.setItem("expertBestTime", "");
    // Best Moves
    let beginnerBestMoves = window.localStorage.getItem("beginnerBestMoves");
    if (beginnerBestMoves === null) window.localStorage.setItem("beginnerBestMoves", "");
    let intermediateBestMoves = window.localStorage.getItem("intermediateBestMoves");
    if (intermediateBestMoves === null) window.localStorage.setItem("intermediateBestMoves", "");
    let expertBestMoves = window.localStorage.getItem("expertBestMoves");
    if (expertBestMoves === null) window.localStorage.setItem("expertBestMoves", "");
    // Total Time
    let beginnerTotalTime = window.localStorage.getItem("beginnerTotalTime");
    if (beginnerTotalTime === null) window.localStorage.setItem("beginnerTotalTime", "0");
    let intermediateTotalTime = window.localStorage.getItem("intermediateTotalTime");
    if (intermediateTotalTime === null) window.localStorage.setItem("intermediateTotalTime", "0");
    let expertTotalTime = window.localStorage.getItem("expertTotalTime");
    if (expertTotalTime === null) window.localStorage.setItem("expertTotalTime", "0");
    // Total Moves
    let beginnerTotalMoves = window.localStorage.getItem("beginnerTotalMoves");
    if (beginnerTotalMoves === null) window.localStorage.setItem("beginnerTotalMoves", "0");
    let intermediateTotalMoves = window.localStorage.getItem("intermediateTotalMoves");
    if (intermediateTotalMoves === null) window.localStorage.setItem("intermediateTotalMoves", "0");
    let expertTotalMoves = window.localStorage.getItem("expertTotalMoves");
    if (expertTotalMoves === null) window.localStorage.setItem("expertTotalMoves", "0");
    let won, played, winPercentage, bestTime, bestMoves, totalTime, totalMoves;
    switch(gameLevel){
        case "beginner":
            played = beginnerPlayed;
            won = beginnerWon;
            winPercentage = beginnerWinPercentage;
            bestTime = beginnerBestTime;
            bestMoves = beginnerBestMoves;
            totalTime = beginnerTotalTime;
            totalMoves = beginnerTotalMoves;
            break;
        case "intermediate":
            played = intermediatePlayed;
            won = intermediateWon;
            winPercentage = intermediateWinPercentage;
            bestTime = intermediateBestTime;
            bestMoves = intermediateBestMoves;
            totalTime = intermediateTotalTime;
            totalMoves = intermediateTotalMoves;
            break;
        case "expert":
            played = expertPlayed;
            won = expertWon;
            winPercentage = expertWinPercentage;
            bestTime = expertBestTime;
            bestMoves = expertBestMoves;
            totalTime = expertTotalTime;
            totalMoves = expertTotalMoves;
            break;
    }
    // Modal
    const statsModal = document.createElement("div");
    statsModal.classList.add("modal");
    statsModal.setAttribute("id", "stats-modal");
    // Stats: Level
    statsModal.innerHTML += `<p class="level">${gameLevel.charAt(0).toUpperCase() + gameLevel.slice(1)}</p>`;
    const statsTable = document.createElement("div");
    statsTable.setAttribute("id", "stats-table");
    // Stats: Played
    statsTable.innerHTML += `<p class="label">Played</p>`;
    if (played) statsTable.innerHTML += `<p class="value">${played}</p>`;
    else statsTable.innerHTML += `<p class="value">0</p>`;
    // Stats: Won
    statsTable.innerHTML += `<p class="label">Won</p>`;
    if (won) statsTable.innerHTML += `<p class="value">${won}</p>`;
    else statsTable.innerHTML += `<p class="value">0</p>`;
    // Stats: Win percentage
    statsTable.innerHTML += `<p class="label">Win %</p>`;
    if (winPercentage) statsTable.innerHTML += `<p class="value">${(winPercentage * 100).toFixed(2)}</p>`;
    else statsTable.innerHTML += `<p class="value">N/A</p>`;
    // Stats: Best Time
    statsTable.innerHTML += `<p class="label">Best Time</p>`;
    if (bestTime) statsTable.innerHTML += `<p class="value">${bestTime}</p>`;
    else statsTable.innerHTML += `<p class="value">N/A</p>`;
    // Stats: Best Moves
    statsTable.innerHTML += `<p class="label">Best Moves</p>`;
    if (bestMoves) statsTable.innerHTML += `<p class="value">${bestMoves}</p>`;
    else statsTable.innerHTML += `<p class="value">N/A</p>`;
    statsTable.innerHTML += `<hr><hr>`;
    // Stats: Total Time
    statsTable.innerHTML += `<p class="label">Total Time</p>`;
    if (totalTime) statsTable.innerHTML += `<p class="value">${$bcc8128b2e3a7168$var$formatTime(totalTime)}</p>`;
    else statsTable.innerHTML += `<p class="value">00:00:00</p>`;
    // Stats: Total Moves
    statsTable.innerHTML += `<p class="label">Total Moves</p>`;
    if (totalMoves) statsTable.innerHTML += `<p class="value">${totalMoves}</p>`;
    else statsTable.innerHTML += `<p class="value">0</p>`;
    statsModal.appendChild(statsTable);
    // Stats: Clear Data Button
    const clearDataButton = document.createElement("button");
    clearDataButton.innerHTML = `Clear Data`;
    statsModal.appendChild(clearDataButton);
    // Clear Data Button Functionality
    clearDataButton.addEventListener("click", ()=>{
        window.localStorage.clear();
        window.location.reload();
    });
    // Stats modal in debug mode
    if (window.location.hash === "#debug" || window.location.hash === "#debug-simple") statsModal.innerHTML = `<h3>Debug Mode<h3>`;
    return statsModal;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 */ function $5ef823f331552cd8$export$2e2bcd8739ae039() {
    const helpModal = document.createElement("div");
    helpModal.classList.add("modal");
    helpModal.setAttribute("id", "help-modal");
    helpModal.innerHTML += `
<div>
  \u{1F5B1}\u{FE0F} Left-click to <span style="font-weight:600;">open</span> a square, right-click to <span style="font-weight:600;">flag</span> a square
  <hr>
  1\u{FE0F}\u{20E3}2\u{FE0F}\u{20E3}3\u{FE0F}\u{20E3} Switch between <span style="font-weight:600;">levels</span>, beginner, intermediate, expert (or use \u{2328}\u{FE0F} keys 1, 2, 3)
  <hr>
  \u{1F4A3}/\u{1F33A}/\u{1F344}/\u{1F43B}/\u{1F419}/\u{1F3EF} Switch between <span style="font-weight:600;">themes</span> (or use \u{2328}\u{FE0F} left/right arrows)
  <hr>
  \u{2754} Toggle <span style="font-weight:600;">help</span> (or use \u{2328}\u{FE0F} the H key)
  <hr>
  \u{1F6A9} Toggle <span style="font-weight:600;">flag mode</span>: flag with touch / right-click (or use \u{2328}\u{FE0F} the F key)
  <hr>
  \u{1F31E}/\u{1F31B} Toggle <span style="font-weight:600;">dark mode</span> (or use \u{2328}\u{FE0F} the D key)
</div>
`;
    return helpModal;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 */ function $5f57c4663390935d$export$2e2bcd8739ae039() {
    // Button
    const newGameButton = document.createElement("button");
    newGameButton.setAttribute("id", "new-game-button");
    newGameButton.innerHTML = `New Game`;
    // Functionality
    newGameButton.addEventListener("click", ()=>{
        window.location.reload();
    });
    return newGameButton;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 */ function $171d6a99653ae95f$export$2e2bcd8739ae039() {
    // Button
    const statsButton = document.createElement("button");
    statsButton.setAttribute("id", "stats-button");
    statsButton.innerHTML = `Stats`;
    // As emoji button
    // const statsButton = document.createElement("div");
    // statsButton.className = `emoji-button`;
    // statsButton.innerHTML = `🥇`;
    // Functionality
    // In main.js
    return statsButton;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 */ function $81bfa572f77e29d8$export$2e2bcd8739ae039() {
    // Button
    const beginnerButton = document.createElement("div");
    beginnerButton.title = `Beginner level`;
    beginnerButton.className = `emoji-button`;
    beginnerButton.innerHTML = `1\u{FE0F}\u{20E3}`;
    if (level === "beginner") beginnerButton.classList.add("emoji-button-clicked");
    // Functionality
    beginnerButton.addEventListener("click", ()=>{
        if (level !== "beginner") {
            localStorage.setItem("level", "beginner");
            window.location.reload();
        }
    });
    return beginnerButton;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 */ function $ef3e6adcc22fc1ae$export$2e2bcd8739ae039() {
    // Button
    const intermediateButton = document.createElement("div");
    intermediateButton.title = `Intermediate level`;
    intermediateButton.className = `emoji-button`;
    intermediateButton.innerHTML = `2\u{FE0F}\u{20E3}`;
    if (level === "intermediate") intermediateButton.classList.add("emoji-button-clicked");
    // Functionality
    intermediateButton.addEventListener("click", ()=>{
        if (level !== "intermediate") {
            localStorage.setItem("level", "intermediate");
            window.location.reload();
        }
    });
    return intermediateButton;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 */ function $de685dd62456447f$export$2e2bcd8739ae039() {
    // Button
    const expertButton = document.createElement("div");
    expertButton.title = `Expert level`;
    expertButton.className = `emoji-button`;
    expertButton.innerHTML = `3\u{FE0F}\u{20E3}`;
    if (level === "expert") expertButton.classList.add("emoji-button-clicked");
    // Functionality
    expertButton.addEventListener("click", ()=>{
        if (level !== "expert") {
            localStorage.setItem("level", "expert");
            window.location.reload();
        }
    });
    return expertButton;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 * themeButton.js contains all the theme
 * button functionality, the button,
 * the utility functions and the keyboard
 * event handling.
 */ function $5a43c3a0db900870$export$2e2bcd8739ae039(mainEmoji, header) {
    // Button
    const themeButton = document.createElement("div");
    themeButton.title = `Change theme`;
    themeButton.className = `emoji-button`;
    themeButton.innerHTML = mainEmoji;
    // Theme Button Functionality
    themeButton.addEventListener("click", ()=>{
        themeSwitcher();
    });
    // Utility Functions
    function themeSwitcher() {
        if (theme === "mine") {
            theme = "flower";
            localStorage.setItem("skin", theme);
        } else if (theme === "flower") {
            theme = "mushroom";
            localStorage.setItem("skin", theme);
        } else if (theme === "mushroom") {
            theme = "bear";
            localStorage.setItem("skin", theme);
        } else if (theme === "bear") {
            theme = "octopus";
            localStorage.setItem("skin", theme);
        } else if (theme === "octopus") {
            header.classList.add("japanese");
            localStorage.setItem("japanese", "true");
            theme = "japan";
            localStorage.setItem("skin", theme);
        } else if (theme === "japan") {
            header.classList.remove("japanese");
            localStorage.setItem("japanese", "false");
            theme = "mine";
            localStorage.setItem("skin", theme);
        }
        if (!gameFinished) switchTheme();
        else window.location.reload();
    }
    function reverseThemeSwitcher() {
        if (theme === "mine") {
            header.classList.add("japanese");
            localStorage.setItem("japanese", "true");
            theme = "japan";
            localStorage.setItem("skin", theme);
        } else if (theme === "japan") {
            header.classList.remove("japanese");
            localStorage.setItem("japanese", "false");
            theme = "octopus";
            localStorage.setItem("skin", theme);
        } else if (theme === "octopus") {
            theme = "bear";
            localStorage.setItem("skin", theme);
        } else if (theme === "bear") {
            theme = "mushroom";
            localStorage.setItem("skin", theme);
        } else if (theme === "mushroom") {
            theme = "flower";
            localStorage.setItem("skin", theme);
        } else if (theme === "flower") {
            theme = "mine";
            localStorage.setItem("skin", theme);
        }
        if (!gameFinished) switchTheme();
        else window.location.reload();
    }
    function switchTheme() {
        MINE = themes[theme]["mine"];
        DETONATION = themes[theme]["detonation"];
        WON = themes[theme]["won"];
        LOST = themes[theme]["lost"];
        window.localStorage.setItem("title", themes[theme]["title"]);
        let title = window.localStorage.getItem("title");
        document.title = title;
        window.localStorage.setItem("mainEmoji", themes[theme]["mine"]);
        // favicon(themes[theme]["mine"]);
        header.innerHTML = themes[theme]["title"];
        themeButton.innerHTML = themes[theme]["mine"];
    }
    // Keyboard Action Handling
    document.addEventListener("keydown", (event)=>{
        // Switch Themes
        if (event.code === "ArrowRight") themeSwitcher();
        if (event.code === "ArrowLeft") reverseThemeSwitcher();
    });
    return themeButton;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 */ function $3c0f5ad5e3b0a3cb$export$2e2bcd8739ae039() {
    // Button
    const helpButton = document.createElement("div");
    helpButton.title = `Toggle help modal`;
    helpButton.className = `emoji-button`;
    helpButton.innerHTML = `\u{2754}`;
    // Functionality
    // In main.js
    return helpButton;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 * flagButton.js contains all the flag
 * button functionality, the button,
 * the utility functions and the keyboard
 * event handling.
 */ function $3a0b452d09b25631$export$2e2bcd8739ae039(board) {
    // Button
    const flagButton = document.createElement("div");
    flagButton.title = `Toggle flag mode`;
    flagButton.className = `emoji-button`;
    flagButton.innerHTML = `\u{1F6A9}`;
    // Flag Button Functionality
    let flagMode = false;
    flagButton.addEventListener("click", ()=>{
        toggleFlagMode();
    });
    // Utility Function
    function toggleFlagMode() {
        if (flagMode) {
            localStorage.setItem("flagMode", "false");
            flagButton.classList.remove("emoji-button-clicked");
            board.classList.remove("flag-mode");
            flagMode = false;
        } else {
            localStorage.setItem("flagMode", "true");
            flagButton.classList.add("emoji-button-clicked");
            board.classList.add("flag-mode");
            flagMode = true;
        }
    }
    // Keyboard Action Handling
    document.addEventListener("keydown", (e)=>{
        if (e.code === "KeyF") toggleFlagMode();
    });
    return flagButton;
}


/*
 *  Emoji Minesweeper
 *  Copyright (c) 2024 Michael Kolesidis
 *  GNU Affero General Public License v3.0
 *
 * themeButton.js contains all the theme
 * button functionality, the button,
 * the utility functions and the keyboard
 * event handling.
 */ function $a00e494c42b05ee0$export$2e2bcd8739ae039(darkMode) {
    // Button
    const darkModeButton = document.createElement("div");
    darkModeButton.title = `Toggle dark mode`;
    darkModeButton.className = `emoji-button`;
    darkModeButton.innerHTML = darkMode ? "\uD83C\uDF1B" : "\uD83C\uDF1E";
    // Theme Button Functionality
    darkModeButton.addEventListener("click", ()=>{
        toggleDarkMode();
    });
    function toggleDarkMode() {
        if (darkMode) window.localStorage.setItem("darkMode", "false");
        else window.localStorage.setItem("darkMode", "true");
        window.location.reload();
    }
    // Keyboard Action Handling
    document.addEventListener("keydown", (event)=>{
        if (event.code === "KeyD") toggleDarkMode();
    });
    return darkModeButton;
}


/**
 * Basics
 */ // Theme
let $cacb3039c90c5415$var$theme = window.localStorage.getItem("skin");
if ($cacb3039c90c5415$var$theme === null) window.localStorage.setItem("skin", "mine");
// Dark Mode
let $cacb3039c90c5415$var$darkMode = JSON.parse(localStorage.getItem("darkMode"));
if ($cacb3039c90c5415$var$darkMode === null) window.localStorage.setItem("darkMode", "false");
if ($cacb3039c90c5415$var$darkMode) document.body.classList.add("dark-mode");
// Emoji
let $cacb3039c90c5415$var$mainEmoji = window.localStorage.getItem("mainEmoji");
if ($cacb3039c90c5415$var$mainEmoji === null) $cacb3039c90c5415$var$mainEmoji = "\uD83D\uDCA3";
// Modal
window.localStorage.setItem("modalOpen", "false");
// Menu
// window.localStorage.setItem("menuOpen", "false");
// Flag mode
window.localStorage.setItem("flagMode", "false");
// Title
let $cacb3039c90c5415$var$title = window.localStorage.getItem("title") ?? "Emoji Minesweeper";
document.title = $cacb3039c90c5415$var$title;
// Favicon
// favicon(mainEmoji);
/**
 * Elements
 */ // Game container (used for footer at the bottom functionality)
const $cacb3039c90c5415$var$gameContainer = document.createElement("div");
$cacb3039c90c5415$var$gameContainer.setAttribute("id", "game-container");
document.body.appendChild($cacb3039c90c5415$var$gameContainer);
// Header
let $cacb3039c90c5415$var$header = (0, $6a4fe3f45184d480$export$2e2bcd8739ae039)($cacb3039c90c5415$var$title);
$cacb3039c90c5415$var$gameContainer.appendChild($cacb3039c90c5415$var$header);
// Board
const $cacb3039c90c5415$var$board = (0, $926fc19182659610$export$2e2bcd8739ae039)();
$cacb3039c90c5415$var$gameContainer.appendChild($cacb3039c90c5415$var$board);
// Buttons and Modals Container
const $cacb3039c90c5415$var$container = document.createElement("div");
$cacb3039c90c5415$var$container.setAttribute("id", "container");
$cacb3039c90c5415$var$gameContainer.appendChild($cacb3039c90c5415$var$container);
// New Game Button
const $cacb3039c90c5415$var$newGameButton = (0, $5f57c4663390935d$export$2e2bcd8739ae039)();
$cacb3039c90c5415$var$container.appendChild($cacb3039c90c5415$var$newGameButton);
// Stats Button
const $cacb3039c90c5415$var$statsButton = (0, $171d6a99653ae95f$export$2e2bcd8739ae039)();
$cacb3039c90c5415$var$container.appendChild($cacb3039c90c5415$var$statsButton);
// statsModal
const $cacb3039c90c5415$var$statsModal = (0, $bcc8128b2e3a7168$export$2e2bcd8739ae039)();
$cacb3039c90c5415$var$container.appendChild($cacb3039c90c5415$var$statsModal);
// Help Modal
const $cacb3039c90c5415$var$helpModal = (0, $5ef823f331552cd8$export$2e2bcd8739ae039)();
$cacb3039c90c5415$var$container.appendChild($cacb3039c90c5415$var$helpModal);
// Emoji Buttons Container
const $cacb3039c90c5415$var$emojiButtonsContainer = document.createElement("div");
$cacb3039c90c5415$var$emojiButtonsContainer.setAttribute("id", "emoji-buttons-container");
$cacb3039c90c5415$var$gameContainer.appendChild($cacb3039c90c5415$var$emojiButtonsContainer);
// Beginner Button
const $cacb3039c90c5415$var$beginnerButton = (0, $81bfa572f77e29d8$export$2e2bcd8739ae039)();
$cacb3039c90c5415$var$emojiButtonsContainer.appendChild($cacb3039c90c5415$var$beginnerButton);
// Intermediate Button
const $cacb3039c90c5415$var$intermediateButton = (0, $ef3e6adcc22fc1ae$export$2e2bcd8739ae039)();
$cacb3039c90c5415$var$emojiButtonsContainer.appendChild($cacb3039c90c5415$var$intermediateButton);
// Expert Button
const $cacb3039c90c5415$var$expertButton = (0, $de685dd62456447f$export$2e2bcd8739ae039)();
$cacb3039c90c5415$var$emojiButtonsContainer.appendChild($cacb3039c90c5415$var$expertButton);
// Theme Button
const $cacb3039c90c5415$var$themeButton = (0, $5a43c3a0db900870$export$2e2bcd8739ae039)($cacb3039c90c5415$var$mainEmoji, $cacb3039c90c5415$var$header);
$cacb3039c90c5415$var$emojiButtonsContainer.appendChild($cacb3039c90c5415$var$themeButton);
// Help Button
const $cacb3039c90c5415$var$helpButton = (0, $3c0f5ad5e3b0a3cb$export$2e2bcd8739ae039)();
$cacb3039c90c5415$var$emojiButtonsContainer.appendChild($cacb3039c90c5415$var$helpButton);
// Flag Button
const $cacb3039c90c5415$var$flagButton = (0, $3a0b452d09b25631$export$2e2bcd8739ae039)($cacb3039c90c5415$var$board);
// if (/Android|iPhone/i.test(navigator.userAgent)) {
$cacb3039c90c5415$var$emojiButtonsContainer.appendChild($cacb3039c90c5415$var$flagButton);
// }
// Dark Mode Button
const $cacb3039c90c5415$var$darkModeButton = (0, $a00e494c42b05ee0$export$2e2bcd8739ae039)($cacb3039c90c5415$var$darkMode);
$cacb3039c90c5415$var$emojiButtonsContainer.appendChild($cacb3039c90c5415$var$darkModeButton);
// Content Wrap (used for footer at the bottom functionality)
const $cacb3039c90c5415$var$contentWrap = document.createElement("div");
$cacb3039c90c5415$var$contentWrap.setAttribute("id", "content-wrap");
$cacb3039c90c5415$var$gameContainer.appendChild($cacb3039c90c5415$var$contentWrap);
// Footer
const $cacb3039c90c5415$var$footer = (0, $5933c4a9fcd301a1$export$2e2bcd8739ae039)();
$cacb3039c90c5415$var$contentWrap.appendChild($cacb3039c90c5415$var$footer);
/**
 * Stats Modal
 */ let $cacb3039c90c5415$var$statsModalOpen = false;
// Utility Function
function $cacb3039c90c5415$var$toggleStatsModal() {
    if ($cacb3039c90c5415$var$statsModalOpen) {
        // Close stats modal
        setTimeout(()=>{
            $cacb3039c90c5415$var$statsModal.style.zIndex = "-1";
        }, 500);
        $cacb3039c90c5415$var$statsModal.style.opacity = "0";
        $cacb3039c90c5415$var$statsModalOpen = false;
        window.localStorage.setItem("modalOpen", "false");
    } else if (!$cacb3039c90c5415$var$statsModalOpen) {
        // Close help modal
        $cacb3039c90c5415$var$helpModal.style.opacity = "0";
        $cacb3039c90c5415$var$helpModalOpen = false;
        window.localStorage.setItem("modalOpen", "false");
        $cacb3039c90c5415$var$helpButton.style.opacity = "1";
        // Open stats modal
        $cacb3039c90c5415$var$statsModal.style.zIndex = "2";
        $cacb3039c90c5415$var$statsModal.style.opacity = "1";
        $cacb3039c90c5415$var$statsModalOpen = true;
        window.localStorage.setItem("modalOpen", "true");
    }
}
// Stats Button Functionality
$cacb3039c90c5415$var$statsButton.addEventListener("click", ()=>{
    $cacb3039c90c5415$var$toggleStatsModal();
});
// Keyboard Action Handling
document.addEventListener("keydown", (e)=>{
    if (e.code === "KeyS") $cacb3039c90c5415$var$toggleStatsModal();
});
/**
 * Help Modal
 */ let $cacb3039c90c5415$var$helpModalOpen = false;
// Utility Function
function $cacb3039c90c5415$var$toggleHelpModal() {
    if ($cacb3039c90c5415$var$helpModalOpen) {
        // Close help modal
        setTimeout(()=>{
            $cacb3039c90c5415$var$helpModal.style.zIndex = "-1";
        }, 500);
        $cacb3039c90c5415$var$helpModal.style.opacity = "0";
        $cacb3039c90c5415$var$helpModalOpen = false;
        window.localStorage.setItem("modalOpen", "false");
        $cacb3039c90c5415$var$helpButton.classList.remove("emoji-button-clicked");
    } else if (!$cacb3039c90c5415$var$helpModalOpen) {
        // Close stats modal
        if ($cacb3039c90c5415$var$statsModalOpen) {
            setTimeout(()=>{
                $cacb3039c90c5415$var$statsModal.style.zIndex = "-1";
            }, 500);
            $cacb3039c90c5415$var$statsModal.style.opacity = "0";
            $cacb3039c90c5415$var$statsModalOpen = false;
            window.localStorage.setItem("modalOpen", "false");
        }
        // Open help modal
        $cacb3039c90c5415$var$helpModal.style.zIndex = "2";
        $cacb3039c90c5415$var$helpModal.style.opacity = "1";
        $cacb3039c90c5415$var$helpModalOpen = true;
        window.localStorage.setItem("modalOpen", "true");
        $cacb3039c90c5415$var$helpButton.classList.add("emoji-button-clicked");
    }
}
// Help Button Functionality
$cacb3039c90c5415$var$helpButton.addEventListener("click", ()=>{
    $cacb3039c90c5415$var$toggleHelpModal();
});
// Keyboard Action Handling
document.addEventListener("keydown", (e)=>{
    if (e.code === "KeyH") $cacb3039c90c5415$var$toggleHelpModal();
}); /**
 * Menu
 */  // const menuContainer = MenuContainer();
 // document.body.appendChild(menuContainer);


//# sourceMappingURL=index.18e84baf.js.map
