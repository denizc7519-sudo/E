const questionPools = {
    easy: [
        {q: "2³?", a: "8", options: ["8","6","4","16"]}, {q: "5²?", a: "25", options: ["25","10","52","125"]},
        {q: "10²?", a: "100", options: ["100","10","1000","20"]}, {q: "3²?", a: "9", options: ["9","6","12","27"]},
        {q: "1¹⁰⁰?", a: "1", options: ["1","100","0","10"]}, {q: "4²?", a: "16", options: ["16","8","32","4"]},
        {q: "2⁴?", a: "16", options: ["16","8","32","64"]}, {q: "0⁵?", a: "0", options: ["0","1","5","0,5"]},
        {q: "10³?", a: "1000", options: ["1000","100","30","10000"]}, {q: "7²?", a: "49", options: ["49","14","21","77"]},
        {q: "6²?", a: "36", options: ["36","12","18","66"]}, {q: "2⁵?", a: "32", options: ["32","16","64","10"]},
        {q: "9¹?", a: "9", options: ["9","1","0","18"]}, {q: "10⁴?", a: "10000", options: ["10000","1000","40","100"]},
        {q: "5³?", a: "125", options: ["125","15","25","53"]}, {q: "3³?", a: "27", options: ["27","9","6","33"]},
        {q: "2⁶?", a: "64", options: ["64","32","128","12"]}, {q: "8²?", a: "64", options: ["64","16","32","88"]},
        {q: "4³?", a: "64", options: ["64","12","16","43"]}, {q: "10⁵?", a: "100000", options: ["100000","10000","50","1000"]}
    ],
    normal: [
        {q: "3⁻²?", a: "1/9", options: ["1/9","9","-9","1/6"]}, {q: "2⁻³?", a: "1/8", options: ["1/8","8","-8","-1/6"]},
        {q: "5⁻¹?", a: "1/5", options: ["1/5","5","-5","0,5"]}, {q: "(-2)²?", a: "4", options: ["4","-4","2","-2"]},
        {q: "(-1)⁵?", a: "-1", options: ["-1","1","5","-5"]}, {q: "10⁻²?", a: "0,01", options: ["0,01","0,1","100","-0,01"]},
        {q: "(-3)²?", a: "9", options: ["9","-9","6","-6"]}, {q: "4⁻²?", a: "1/16", options: ["1/16","16","-16","1/8"]},
        {q: "(-5)⁰?", a: "1", options: ["1","-1","0","5"]}, {q: "2⁻⁴?", a: "1/16", options: ["1/16","16","1/8","8"]},
        {q: "(-2)³?", a: "-8", options: ["-8","8","-6","6"]}, {q: "7⁻¹?", a: "1/7", options: ["1/7","7","-7","1/14"]},
        {q: "10⁻³?", a: "0,001", options: ["0,001","0,01","0,0001","1000"]}, {q: "(-1)⁴?", a: "1", options: ["1","-1","4","-4"]},
        {q: "6⁻²?", a: "1/36", options: ["1/36","36","-36","1/12"]}, {q: "3⁻³?", a: "1/27", options: ["1/27","27","-27","1/9"]},
        {q: "(-10)²?", a: "100", options: ["100","-100","20","-20"]}, {q: "2⁻⁵?", a: "1/32", options: ["1/32","32","1/10","10"]},
        {q: "5⁻²?", a: "1/25", options: ["1/25","25","-25","1/10"]}, {q: "(-4)²?", a: "16", options: ["16","-16","8","-8"]}
    ],
    hard: [
        {q: "(2²)³?", a: "2⁶", options: ["2⁶","2⁵","4²","2⁸"]}, {q: "5² · 5³?", a: "5⁵", options: ["5⁵","5⁶","25⁵","5¹"]},
        {q: "10⁸ / 10⁵?", a: "10³", options: ["10³","10¹³","10²","10⁴"]}, {q: "(3⁻²)³?", a: "3⁻⁶", options: ["3⁻⁶","3⁶","3⁻⁵","3⁻¹"]},
        {q: "2⁵ · 5⁵?", a: "10⁵", options: ["10⁵","7⁵","10¹⁰","10²⁵"]}, {q: "12³ / 4³?", a: "3³", options: ["3³","8³","3¹","12³"]},
        {q: "(-2)⁴?", a: "16", options: ["16","-16","8","-8"]}, {q: "3⁴ · 3⁻²?", a: "9", options: ["9","81","3⁶","3"]},
        {q: "(10²)⁻²?", a: "10⁻⁴", options: ["10⁻⁴","10⁰","10⁴","10⁻²"]}, {q: "8² / 2³?", a: "8", options: ["8","4","16","2"]},
        {q: "5⁻³ · 5⁴?", a: "5", options: ["5","5⁷","5⁻⁷","25"]}, {q: "(-3)³ / 3²?", a: "-3", options: ["-3","3","-1","9"]},
        {q: "2³ + 2³?", a: "2⁴", options: ["2⁴","4³","2⁶","4⁶"]}, {q: "10⁻⁵ · 10³?", a: "10⁻²", options: ["10⁻²","10⁻⁸","10²","10⁸"]},
        {q: "(5²)⁰?", a: "1", options: ["1","25","5","0"]}, {q: "3⁵ / 3⁻²?", a: "3⁷", options: ["3⁷","3³","3¹⁰","3⁻⁷"]},
        {q: "4² · 2³?", a: "2⁷", options: ["2⁷","2⁶","4⁵","8⁵"]}, {q: "(-1)¹⁰ · (-1)¹¹?", a: "-1", options: ["-1","1","0","2"]},
        {q: "100²?", a: "10⁴", options: ["10⁴","10²","10⁶","10³"]}, {q: "9³ / 3⁴?", a: "9", options: ["9","3","27","1"]}
    ],
    extreme: [
        {q: "27³ / 9⁴?", a: "3", options: ["3","9","1/3","27"]}, {q: "16⁻² · 2⁹?", a: "2", options: ["2","4","1/2","8"]},
        {q: "0,25⁻²?", a: "16", options: ["16","4","1/16","8"]}, {q: "(0,5)⁻³?", a: "8", options: ["8","4","1/8","16"]},
        {q: "125² / 5⁴?", a: "25", options: ["25","5","125","1"]}, {q: "81⁻¹ · 3⁵?", a: "3", options: ["3","9","27","1"]},
        {q: "2⁻³ + 2⁻³?", a: "2⁻²", options: ["2⁻²","2⁻⁶","4⁻³","1/4"]}, {q: "(-1/2)⁻⁴?", a: "16", options: ["16","-16","1/16","-1/16"]},
        {q: "10⁻⁴ / 0,001?", a: "0,1", options: ["0,1","10","0,01","1"]}, {q: "(2/3)⁻²?", a: "9/4", options: ["9/4","4/9","-4/9","6/4"]},
        {q: "4⁵ · 0,25³?", a: "16", options: ["16","4","64","1"]}, {q: "(-2)⁵ · (-2)⁻³?", a: "4", options: ["4","-4","16","-16"]},
        {q: "9³ · 3⁻⁴?", a: "9", options: ["9","3","27","81"]}, {q: "1000⁻¹ · 10⁵?", a: "100", options: ["100","10","1000","0,1"]},
        {q: "5⁻² / 25⁻²?", a: "25", options: ["25","5","1/25","625"]}, {q: "2¹⁰ / 4⁴?", a: "4", options: ["4","2","8","16"]},
        {q: "(-1)¹⁰⁰ / (-1)⁹⁹?", a: "-1", options: ["-1","1","0","100"]}, {q: "8² · 4⁻³?", a: "1", options: ["1","2","4","0"]},
        {q: "(0,2)⁻²?", a: "25", options: ["25","5","0,04","10"]}, {q: "3⁻⁵ · 27²?", a: "3", options: ["3","9","1/3","1"]}
    ],
    survival: [
        {q: "2³ · 2⁴ / 2⁵?", a: "4", options: ["4","2","8","16"]}, {q: "10⁻³ · 10⁵ / 10²?", a: "1", options: ["1","10","100","0,1"]},
        {q: "(3²)⁴ / 3⁶?", a: "9", options: ["9","3","27","81"]}, {q: "5¹⁰ / (5² · 5³)?", a: "5⁵", options: ["5⁵","5⁶","5¹","5¹⁵"]},
        {q: "(-2)³ · (-2)²?", a: "-32", options: ["-32","32","-64","64"]}, {q: "100² · 10⁻³?", a: "10", options: ["10","100","1","0,1"]},
        {q: "(2/3)⁻¹ · (3/2)²?", a: "27/8", options: ["27/8","9/4","3/2","1"]}, {q: "8⁴ / 2¹⁰?", a: "4", options: ["4","2","8","16"]},
        {q: "9³ · 27⁻²?", a: "1", options: ["1","3","9","27"]}, {q: "10⁻⁴ / 10⁻⁶?", a: "100", options: ["100","10","1000","0,01"]},
        {q: "5⁻³ · 25²?", a: "5", options: ["5","25","1","125"]}, {q: "4⁻² · 2⁶?", a: "4", options: ["4","2","8","16"]},
        {q: "(-1)¹⁰ · (-1)¹¹?", a: "-1", options: ["-1","1","0","-1"]}, {q: "0,5² · 4²?", a: "4", options: ["4","2","8","1"]},
        {q: "2⁷ + 2⁷?", a: "2⁸", options: ["2⁸","2¹⁴","4⁷","4¹⁴"]}, {q: "10⁵ / 0,1⁻²?", a: "10³", options: ["10³","10⁷","10¹","10⁴"]},
        {q: "3⁻⁴ · 9³?", a: "9", options: ["9","3","27","1"]}, {q: "(5⁻²)⁻³ / 25?", a: "625", options: ["625","125","25","3125"]},
        {q: "2⁻² + 2⁻²?", a: "1/2", options: ["1/2","1/4","1/8","1"]}, {q: "10⁻¹ · 10⁻² · 10³?", a: "1", options: ["1","10","100","0,1"]}
    ]
};

let playerHP = 100, botHP = 100, gameStarted = false, canAnswer = false;
let stats = { correct: 0, wrong: 0, streak: 0, maxStreak: 0, totalDamage: 0, level: 1 };
let botTimeout, selectedMode, currentQuestions, currentQuestion;
let isCooldown = false;

function playSFX(id) {
    const s = document.getElementById(id);
    if(s) { s.currentTime = 0; s.play().catch(()=>{}); }
}

function startGame(mode) {
    playSFX('sfx-click');
    selectedMode = mode; gameStarted = true;
    currentQuestions = [...questionPools[mode]];
    stats = { correct: 0, wrong: 0, streak: 0, maxStreak: 0, totalDamage: 0, level: 1 };
    playerHP = 100; botHP = 100;
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    if(mode === 'survival') {
        document.getElementById('level-container').classList.remove('hidden');
        document.getElementById('level-display').innerText = "SEVİYE 1";
    }

    document.getElementById('bgm-lobby').pause();
    document.getElementById('bgm-game').play().catch(()=>{});
    
    updateUI();
    loadQuestion(); 
    startBotAI();
}

function startBotAI() {
    if (!gameStarted) return;
    let speed = 5000;
    if(selectedMode === 'extreme') speed = 2500;
    else if(selectedMode === 'survival') speed = Math.max(1500, 5000 - (stats.level * 350));

    botTimeout = setTimeout(() => {
        if (gameStarted) {
            playerHP -= 10; stats.totalDamage += 10;
            stats.streak = 0; document.getElementById('streak-count').innerText = 0;
            triggerFX('red'); updateUI(); 
            playSFX('sfx-wrong');
            if (playerHP > 0 && botHP > 0) startBotAI();
        }
    }, speed);
}

function loadQuestion() {
    if (currentQuestions.length === 0) currentQuestions = [...questionPools[selectedMode]];
    const idx = Math.floor(Math.random() * currentQuestions.length);
    currentQuestion = currentQuestions[idx];
    
    document.getElementById('question-text').innerText = currentQuestion.q;
    const grid = document.getElementById('options-grid');
    grid.innerHTML = ""; 
    currentQuestion.ts = Date.now();
    
    currentQuestion.options.sort(() => Math.random() - 0.5).forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "mc-btn math-text"; btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, btn);
        grid.appendChild(btn);
    });
    canAnswer = true;
}

function checkAnswer(choice, btn) {
    if (!gameStarted || !canAnswer || isCooldown || btn.classList.contains('disabled-btn')) return;
    
    isCooldown = true;
    setTimeout(() => isCooldown = false, 350);

    canAnswer = false; clearTimeout(botTimeout); 

    if (choice === currentQuestion.a) {
        let crit = (Date.now() - currentQuestion.ts < 2500);
        
        if (crit) {
            showCrit(); // Plays critical-hit.mp3
        } else {
            playSFX('sfx-correct');
        }
        
        stats.correct++; stats.streak++;
        if (stats.streak > stats.maxStreak) stats.maxStreak = stats.streak;
        
        botHP -= crit ? 35 : 20;

        if (selectedMode === 'survival' && botHP <= 0) {
            stats.level++;
            document.getElementById('level-display').innerText = "SEVİYE " + stats.level;
            playerHP = 100;
            botHP = 100;
        }
        
        triggerFX('green');
        document.getElementById('streak-count').innerText = stats.streak;
        updateUI();
        if (playerHP > 0 && botHP > 0) setTimeout(loadQuestion, 600);
        if (playerHP > 0 && botHP > 0) startBotAI();
    } else {
        playSFX('sfx-wrong');
        btn.classList.add('disabled-btn'); // Turns the button gray and unclickable
        
        stats.wrong++; stats.streak = 0;
        playerHP -= 15; stats.totalDamage += 15;
        triggerFX('red');
        document.getElementById('streak-count').innerText = stats.streak;
        updateUI();
        if (playerHP > 0 && botHP > 0) setTimeout(() => { canAnswer = true; startBotAI(); }, 600); 
    }
}

function updateUI() {
    document.getElementById('player-hp').style.width = Math.max(0, playerHP) + "%";
    document.getElementById('bot-hp').style.width = Math.max(0, botHP) + "%";
    if (playerHP <= 0) endGame(false); else if (botHP <= 0 && selectedMode !== 'survival') endGame(true);
}

function triggerFX(type) {
    const o = document.getElementById(type === 'red' ? 'damage-overlay' : 'correct-overlay');
    o.classList.add('flash-active');
    if(type === 'red') document.getElementById('shake-container').classList.add('shake-active');
    setTimeout(() => {
        o.classList.remove('flash-active');
        document.getElementById('shake-container').classList.remove('shake-active');
    }, 200);
}

function showCrit() {
    playSFX('sfx-crit');
    const n = document.getElementById('crit-notification');
    n.classList.remove('hidden'); setTimeout(() => n.classList.add('hidden'), 500);
}

function endGame(win) {
    gameStarted = false; clearTimeout(botTimeout);
    
    // Müziği durdur
    const bgm = document.getElementById('bgm-game');
    bgm.pause();
    bgm.currentTime = 0;
    
    const isWin = win || (selectedMode === 'survival' && stats.correct >= 10);
    
    // Oyun sonu sesini çal
    if (isWin) {
        playSFX('sfx-win');
    } else {
        playSFX('sfx-lose');
    }

    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    
    if (win) {
        document.getElementById('end-trophy-left').classList.remove('hidden');
        document.getElementById('end-trophy-right').classList.remove('hidden');
    }
    
    let totalQuestions = stats.correct + stats.wrong;
    let score = 100 + Math.round((stats.correct / (totalQuestions || 1)) * 380);
    if(selectedMode === 'survival') score += (stats.level * 20);

    document.getElementById('stat-lgs-score').innerText = score + "!";
    document.getElementById('stat-accuracy').innerText = `${stats.correct}/${totalQuestions}`;
    document.getElementById('stat-damage').innerText = stats.totalDamage;
    document.getElementById('stat-streak').innerText = stats.maxStreak;
    document.getElementById('stat-total-q').innerText = totalQuestions;
    
    const title = document.getElementById('end-title');
    title.innerText = isWin ? "TEBRİKLER!" : "YENİLDİN!";
    title.className = isWin ? "mc-title-green" : "mc-title-red";
}