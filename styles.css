:root {
    --bg-black: #030708;
    --accent-primary: #00ff9d;
    --accent-secondary: #ff3fab;
    --accent-blue: #00d2ff;
    --accent-yellow: #f1c40f;
    --glass-bg: rgba(15, 20, 25, 0.7);
    --glass-border: rgba(255, 255, 255, 0.1);
    --text-white: #f8fafc;
    --text-dim: #94a3b8;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Outfit', sans-serif;
    background-color: var(--bg-black);
    color: var(--text-white);
    overflow-x: hidden;
    line-height: 1.6;
}

/* Background Particles */
#particleCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
}

/* Navigation Overhaul */
nav {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(20px);
    padding: 10px 30px;
    border-radius: 100px;
    border: 1px solid var(--glass-border);
    z-index: 1000;
    display: flex;
    gap: 30px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.8);
}

nav a {
    color: var(--text-dim);
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

nav a i { font-size: 1.2rem; }
nav a span { letter-spacing: 1px; }

nav a:hover, nav a.active {
    color: var(--accent-primary);
    transform: translateY(-5px);
    text-shadow: 0 0 15px rgba(0, 255, 157, 0.5);
}

/* Sections */
section {
    min-height: 100vh;
    padding: 80px 5% 150px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
}

.section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    text-align: center;
    margin-bottom: 50px;
    background: linear-gradient(180deg, #fff 0%, #444 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Glass Cards */
.glass-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 28px;
    padding: 35px;
    backdrop-filter: blur(15px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    transition: 0.4s;
}

.glass-card:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-8px);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6);
}

/* AQI Circle */
.aqi-circle {
    position: relative;
    width: 320px;
    height: 320px;
    margin: 40px 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    border: 2px solid rgba(255, 63, 171, 0.3);
}

.aqi-inner {
    z-index: 2;
    text-align: center;
}

.aqi-number {
    display: block;
    font-size: 6rem;
    font-weight: 800;
    font-family: 'Space Grotesk';
    line-height: 1;
}

.aqi-glow {
    position: absolute;
    top: -10px; left: -10px; right: -10px; bottom: -10px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, var(--accent-secondary), transparent 70%);
    animation: rotate 4s linear infinite;
    filter: blur(15px);
    opacity: 0.4;
}

@keyframes rotate { 100% { transform: rotate(360deg); } }

/* Grid & Layouts */
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    width: 100%;
    margin-top: 60px;
}

.cause-list { list-style: none; }
.cause-list li {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

.cause-list i {
    font-size: 1.2rem;
    width: 30px;
    color: var(--accent-blue);
}

/* Maps */
.map-frame {
    width: 100%;
    height: 65vh;
    border-radius: 32px;
    border: 1px solid var(--glass-border);
    overflow: hidden;
    filter: grayscale(0.5) contrast(1.2);
}

/* Buttons */
.action-btn {
    background: var(--text-white);
    color: var(--bg-black);
    border: none;
    padding: 14px 32px;
    border-radius: 50px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;
    font-family: 'Space Grotesk';
}

.action-btn:hover {
    background: var(--accent-primary);
    box-shadow: 0 0 20px var(--accent-primary);
    transform: scale(1.05);
}

/* GRAP List */
.grap-list { width: 100%; max-width: 900px; display: flex; flex-direction: column; gap: 20px; }
.grap-item {
    background: rgba(255,255,255,0.03);
    border-radius: 20px;
    padding: 25px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.3s;
}
.grap-item:hover { background: rgba(255,255,255,0.07); border-color: var(--accent-secondary); }
.grap-header { display: flex; justify-content: space-between; font-weight: 600; font-size: 1.2rem; }
.grap-content { display: none; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 20px; }

/* Statuses */
.danger-text { color: var(--accent-secondary); }
.warning-text { color: var(--accent-yellow); }
.status-indicator { letter-spacing: 5px; font-weight: 300; margin-top: 10px; color: var(--accent-secondary); }
