disableFriendlyErrors=!0,document.addEventListener("contextmenu",e=>e.preventDefault());const e={mine:{name:"mine",title:"Emoji Minesweeper",mine:"\uD83D\uDCA3",detonation:"\uD83D\uDCA5",won:"\uD83D\uDE04",lost:"\uD83D\uDE35"},flower:{name:"flower",title:"Emoji Flower Field",mine:"\uD83C\uDF3A",detonation:"\uD83D\uDC1B",won:"\uD83D\uDE0A",lost:"\uD83D\uDE14"},mushroom:{name:"mushroom",title:"Emoji Shroom Picker",mine:"\uD83C\uDF44",detonation:"\uD83E\uDD84",won:"\uD83D\uDE0E",lost:"\uD83D\uDE35‍\uD83D\uDCAB"},bear:{name:"bear",title:"Emoji Bearspotting",mine:"\uD83D\uDC3B",detonation:"\uD83D\uDC3E",won:"\uD83C\uDF33",lost:"\uD83E\uDEB5"},octopus:{name:"octopus",title:"Emoji Seasweeper",mine:"\uD83D\uDC19",detonation:"\uD83C\uDF0A",won:"⛵️",lost:"\uD83E\uDD88"},japan:{name:"japan",title:"絵文字マインスイーパー",mine:"\uD83C\uDFEF",detonation:"\uD83D\uDC7A",won:"\uD83C\uDF38",lost:"\uD83C\uDE32"}};let o=JSON.parse(localStorage.getItem("darkMode"))??!1,n=window.localStorage.getItem("skin")??"mine";window.localStorage.setItem("mainEmoji",e[n].mine),e[n].mine,e[n].detonation,e[n].won,e[n].lost,o&&(["⬜️","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣"][0]=""),window.localStorage.setItem("title",e[n].title);let t={level:{columns:9,rows:9,mines:10},size:{squareSize:32}};switch(localStorage.getItem("level")){case"beginner":t.level={columns:9,rows:9,mines:10};break;case"intermediate":t.level={columns:16,rows:16,mines:40};break;case"expert":t.level={columns:30,rows:16,mines:99};break;case"custom":t.level={columns:null,rows:null,mines:null}}t.size.squareSize,t.level.columns,t.level.rows,t.level.mines;
//# sourceMappingURL=index.51f6c6cc.js.map