# ✈️ Travel Management Application (TMA)  
*Your passport to painless student travel organization!*

---

## 🧳 What is TMA?

TMA is a snazzy, modern web app for managing and visualizing student travel registrations. Whether you’re sending a busload of students to Several Destinations, or the Moon (okay, maybe not yet), TMA keeps your data organized, your schedule clear, and your clients smiling.

---

## 🏗️ What’s Under the Hood?

- **React**: For a lightning-fast, component-based UI.
- **Vite**: Because waiting for builds is so 2019.
- **CSS Modules**: For styles that don’t spill everywhere.
- **Remix Icon**: For icons that pop.
- **JSON Data**: For easy, no-fuss data management (or swap in your own API).

---

## 🗂️ Project Structure (A Quick Tour)

```
TMA/
├── public/           # Static files (like your logo)
├── src/
│   ├── assets/       # Data & images (your travel secrets)
│   ├── components/   # Reusable UI bits (cards, carousels, etc.)
│   └── pages/        # Main screens (Overview, Schedule, etc.)
├── index.html        # The portal to your app
├── package.json      # App DNA
├── vite.config.js    # Vite wizardry
└── README.md         # This very guide!
```

---

## 🚀 Getting Started

1. **Clone the repo**  
   `git clone [https://github.com/Heli9x/TMA.git] && cd TMA`

2. **Install dependencies**  
   `npm install`

3. **Start the dev server**  
   `npm run dev`  
   *(Open [http://localhost:5173](http://localhost:5173) and behold!)*

4. **Build for production**  
   `npm run build`

---

## 🎨 Customizing for Clients (Make It Yours!)

### 1. **Change the Data**
- Edit `src/assets/data4.json` and `main.json` to add, remove, or update travelers, destinations, or dates.
- Want live data? Swap out the JSON imports for API calls in the components.

### 2. **Rebrand Like a Pro**
- Swap images in `src/assets/cardbg/` for your own dazzling backgrounds.
- Edit CSS in `src/components/` and `src/pages/` to match your client’s colors and style.
- Change icons by updating the `icon` prop (Remix Icon has you covered).

### 3. **Add New Features**
- Need a new page? Drop a new file in `src/pages/` and add a route in `Menu.jsx`.
- Want more data fields? Update the JSON and extend the relevant components.

### 4. **Internationalize**
- Replace hardcoded text with variables, or plug in `react-i18next` for multilingual magic.

### 5. **Connect to a Backend**
- Replace static JSON with `fetch` or `axios` calls to your backend API.

---

## 🦄 Example: Add a New Destination

1. Add your destination to `data4.json` and `main.json`.
2. Drop a new image in `cardbg/` if you want.
3. Voilà! The new destination appears in the schedule and overview—no code changes needed.

---

## 🤹‍♂️ Why TMA?

- **Fast**: Built with Vite and React for instant feedback.
- **Flexible**: JSON or API, your choice.
- **Fun**: Easy to extend, style, and make your own.
- **Foolproof**: Even your least techy client can use it.

---

## 📝 License

MIT

---

## 👨‍💻 Made by Heli9 Labs
