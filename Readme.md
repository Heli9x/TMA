# Travel Management Application (TMA)

A web-based Travel Registration Management System for organizing and visualizing student travel data for Palić & Zlatibor destinations. Built with **React** and **Vite**, the app provides an overview, schedule, and master data of student excursions, supporting multiple countries and travel types.

---

## Features

- **Dashboard Overview**: Visual summary of registrations, destinations, and nationalities.
- **Travel Schedule**: Month-wise breakdown of travel plans and participants.
- **Master Data Table**: Detailed tabular data of all registrations.
- **Responsive UI**: Modern, mobile-friendly interface.
- **Routing**: Navigation between Overview, Master Data, Schedule, and Countries.
- **Data Visualization**: Carousel and card components for quick facts and highlights.

---

## Project Structure

```
TMA/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   ├── assets/
│   │   ├── data.csv
│   │   ├── data3.json
│   │   ├── data4.json
│   │   └── cardbg/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── card.css
│   │   ├── Carousel.jsx
│   │   ├── Carousel.css
│   │   ├── Header.jsx
│   │   ├── Heading.jsx
│   │   └── Menu.jsx
│   └── pages/
│       ├── Overview.jsx
│       ├── overview.css
│       ├── MasterData.jsx
│       ├── masterdata.css
│       ├── Schedule.jsx
│       └── schedule.css
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## Data Sources

- **CSV and JSON** files in `src/assets/` provide registration and schedule data.
- Example: data4.json contains month-wise travel records.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

```sh
git clone <repository-url>
cd TMA
npm install
```

### Development

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

---

## Main Components

- `App.jsx`: Main entry, layout, and footer.
- `Menu.jsx`: Navigation and routing.
- `Overview.jsx`: Dashboard overview.
- `MasterData.jsx`: Tabular data view.
- `Schedule.jsx`: Monthly travel schedule.
- `Card.jsx`, `Carousel.jsx`: UI widgets for data display.

---

## Customization

- **Data**: Update or replace files in `src/assets/` for new travel records.
- **Styling**: Modify CSS files in `src/` and `src/components/` for custom themes.

---

## License

MIT (add your license here)

---

## Credits

Developed by Heli9 Labs.

---

For more details, see the code in src/ and components/.