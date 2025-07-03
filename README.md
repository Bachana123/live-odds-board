# Live Odds Board

## Description

This project is a high-performance live odds board web application built with **React 19**, **TypeScript** and **Vite**. It displays **10,000+** live matches in a virtualized table that updates odds in real time.

## Features
- ✅ Display 10,000+ live matches
- ✅ Virtual scrolling with react-window
- ✅ Select and highlight odds
- ✅ Persist selected odds and scroll position
- ✅ Real-time updates with mock WebSocket
- ✅ Visual change indicators (green/red highlights)

## Tech Stack and Challenges

### Tech Stack
- **Frontend:** React 19 (with TypeScript)
- **State Management:** Zustand
- **State Management:** Zustand
- **Styling:** CSS Modules / plain CSS
- **UUID:** For generating unique match IDs

### Challenges Faced
- **Virtual Scrolling Performance:** Efficiently rendering thousands of rows without lag.
- **Real-time Updates:** Simulating live odds changes via a mock WebSocket
- **State Persistence** Remembering selected odds and scroll position across reloads
- **Highlighting Changes** Visually indicating increased or decreased odds

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (>=18.x recommended)
- **Yarn** or **npm**

### Installation

```sh
# Clone the repository
git clone https://github.com/Bachana123/live-odds-board.git
cd live-odds-board

# Install dependencies
npm install # or yarn
```

### Start the Development Server

```sh
npm run dev # or yarn dev 
```

## Deployment

```sh
npm run build  # or yarn build
npm run preview  # or yarn preview
```

---
Feel free to contribute or report issues via [GitHub Issues](https://github.com/Bachana123/Scholarship-Winners/issues). 🚀