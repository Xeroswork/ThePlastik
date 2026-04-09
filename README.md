# My Site

A multi-page React website built with Vite, hosted on GitHub Pages.

---

## 🚀 First-time setup

### 1. Install Node.js
Download and install from: https://nodejs.org (choose the LTS version)

### 2. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/my-site.git
cd my-site
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

---

## ⚙️ Before deploying to GitHub Pages

### Step 1 — Update vite.config.js
Open `vite.config.js` and set `base` to your repository name:
```js
base: '/my-site/',   // ← replace with YOUR repo name
```

### Step 2 — Update package.json homepage
Open `package.json` and add this line (replace with your username and repo name):
```json
"homepage": "https://YOUR_USERNAME.github.io/my-site/"
```

---

## 📦 Deploy to GitHub Pages

### First deploy:
```bash
npm install
npm run deploy
```

### Every time you make changes:
```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch automatically.

### Enable GitHub Pages:
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select branch: `gh-pages`, folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes, then visit: `https://YOUR_USERNAME.github.io/my-site/`

---

## 📁 Project structure

```
my-site/
├── public/               # Static files (favicon, images)
├── src/
│   ├── assets/           # Images, icons used in components
│   ├── components/
│   │   ├── Navbar/       # Navigation bar
│   │   └── Footer/       # Footer
│   ├── pages/
│   │   ├── Home/         # Home page
│   │   ├── About/        # About page
│   │   ├── Services/     # Services page
│   │   ├── Contact/      # Contact page
│   │   └── NotFound.jsx  # 404 page
│   ├── styles/
│   │   └── global.css    # Global styles and CSS variables
│   ├── App.jsx           # Routes
│   └── main.jsx          # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ How to add a new page

1. Create a folder: `src/pages/NewPage/`
2. Create `NewPage.jsx` and `NewPage.module.css` inside it
3. Import and add a route in `App.jsx`:
```jsx
import NewPage from './pages/NewPage/NewPage'
// ...
<Route path="/new-page" element={<NewPage />} />
```
4. Add a link in `Navbar.jsx` and `Footer.jsx`

---

## 🎨 How to change colors

All colors are defined as CSS variables in `src/styles/global.css`:

```css
--accent: #e8ff47;          /* Main accent color */
--bg: #0a0a0a;              /* Background */
--text-primary: #f0f0f0;    /* Main text */
--text-secondary: #888888;  /* Secondary text */
```

Change these values to restyle the entire site at once.

---

## 📬 Contact form

The contact form in `src/pages/Contact/Contact.jsx` currently just logs to the console.
To make it actually send emails, connect one of these free services:

- **Formspree** (easiest): https://formspree.io
- **EmailJS**: https://emailjs.com
- **Web3Forms**: https://web3forms.com
