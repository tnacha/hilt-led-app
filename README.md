# HILT-LED Practice App

An interactive practice application designed for experienced learning designers to master the art of being "Human in the Loop" when working with AI-generated educational content.

## Overview

HILT-LED (Human in the Loop - Learning Experience Design) provides hands-on simulations that help learning designers practice balancing AI efficiency with human insight. Through interactive challenges, users can test and refine their design judgment in real-world scenarios.

## Features

### Four Core Challenge Paths

1. **Prompting & Refinement** - Master the art of crafting effective prompts and refining AI outputs for optimal learning experiences
2. **Bias & Ethics** - Explore ethical considerations of AI in education and learn to mitigate bias in AI-generated content
3. **Scaffolding & Sequencing** - Design adaptive learning paths and sequence content effectively with AI assistance
4. **Assessment Quality** - Ensure fairness and validity of AI-supported assessments and feedback mechanisms

### Interactive Learning

- **Multiple Challenge Types**: Multiple-choice, multi-select, drag-and-drop ordering, and categorization challenges
- **Progress Tracking**: Track completion across all paths with visual progress indicators
- **Badge System**: Earn badges by completing all challenges in each path
- **Concept Cards**: Build a personal reference library of design principles
- **Persistent Progress**: All progress is saved locally via localStorage

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React DnD** - Drag-and-drop interactions
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/hilt-led-app.git

# Navigate to project directory
cd hilt-led-app

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
hilt-led-app/
├── src/
│   ├── data/
│   │   └── challenges.js      # Challenge data and content
│   ├── HiltMockups.jsx        # Main app component
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── public/
│   └── assets/                # Static assets (logo, images)
├── dist/                      # Production build output
└── package.json
```

## Usage

1. Start on the **Home** page to explore the four challenge paths
2. Click on any path to begin challenges
3. Navigate between **Home**, **Challenges**, and **Progress** using the top navigation
4. Complete challenges to earn badges and track your learning design skills
5. View your progress and earned badges on the **Progress** page

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
