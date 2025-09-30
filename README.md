# WeatherApp — Node + Express

A simple weather app with a small **Node/Express** server and a plain **HTML/CSS/JS** UI. Enter a city and view the current temperature. Repo includes `index.html`, `app.js`, a `public/` assets folder, and package files. License: **GPL-3.0**. :contentReference[oaicite:1]{index=1}

---

## ✨ Features
- City search → show degrees/temperature
- Minimal, fast static UI
- Small Node server you can adapt for any weather API

---

## 🧰 Tech Stack
- **Node.js** + **Express** (server)
- **HTML/CSS/JavaScript** (frontend)
- License: **GPL-3.0** :contentReference[oaicite:2]{index=2}

---

## 🚀 Getting Started

### 1) Clone & install
```bash
git clone https://github.com/hakimmurphy/weatherapp.git
cd weatherapp
npm install
```

### 2) Configure environment
```
API_KEY=your_api_key_here
PORT=3000
```

### 3) Run locally
``` # with Node
node app.js

# or, if you add nodemon:
# npx nodemon app.js
```
Open http://localhost:3000.

---

## 🗂️ Project Structure
```
.
├─ public/          # static assets
├─ app.js           # Express server
├─ index.html       # UI entry
├─ package.json     # scripts & deps
└─ LICENSE          # GPL-3.0
```

---

## 🔗 API Notes
- You can wire this app to any weather provider (e.g., OpenWeatherMap).
- Keep your API key outside source code (use .env + .gitignore).

--- 

## 🛣️ Roadmap
- Display conditions (icon, description, humidity, wind)
- Error/empty states and basic input validation
- Geolocation lookup (use browser geolocation to fetch local weather)
- Simple CSS theme and mobile-first layout

---

## 📄 License
GPL-3.0.

---

## 🗣️ Author
Hakim Murphy
