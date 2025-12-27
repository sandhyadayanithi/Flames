# 🔥 FLAMES Game - Interactive Relationship Calculator

A modern, animated take on the classic FLAMES game that reveals your relationship status with anyone! Watch as the letters dance in a mesmerizing circular animation before revealing whether you're destined to be Friends, Lovers, or something else entirely.

## 💫 What's This All About?

Remember playing FLAMES in school notebooks? This project brings that nostalgic game to life with stunning animations and interactive visuals. Enter two names, and watch the magic unfold as the algorithm eliminates possibilities one by one in a captivating circular display, finally revealing your relationship fate!

**FLAMES stands for:**
- 🤝 **F**riends
- 💖 **L**ove
- 🤗 **A**ffection
- 💍 **M**arriage
- 😈 **E**nemies
- 🐾 **S**iblings

## ✨ Features

**Stunning Visual Animation** - Letters arranged in a perfect circle with smooth elimination animations

**Real-Time Counting Algorithm** - Watch as the game counts through letters with highlighting effects

**Dynamic Speed Control** - Animation speed adjusts based on name complexity for optimal viewing

**Beautiful Gradient Design** - Modern dark theme with vibrant accent colors and glow effects

**Responsive Layout** - Works flawlessly on desktop, tablet, and mobile devices

**Interactive Hover Effects** - Hover over letters to see their full meanings

**Smooth Transitions** - Every state change includes polished animations and effects

**Play Again Feature** - Reset button to try different name combinations instantly

## 🎮 How to Play

1. Enter your name in the first input field
2. Enter your crush's (or anyone's) name in the second field
3. Click the "Calculate" button
4. Watch the mesmerizing animation as letters get eliminated
5. See your relationship fate revealed with emojis!
6. Click "Play Again" to try different combinations

## 🚀 Getting Started

### Prerequisites

Just a modern web browser! No installations needed.

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd flames-game
   ```

2. Open `index.html` in your favorite browser:
   ```bash
   # On Mac
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

3. That's it! Start playing!

### Or Deploy It

You can easily deploy this to:
- **GitHub Pages** - Free hosting for static sites
- **Vercel** - One-click deployment
- **Netlify** - Drag and drop deployment
- **Any web server** - Just upload the files!

## 🛠️ Built With

**Pure Vanilla JavaScript** - No frameworks, no dependencies, just clean JS

**CSS3 Advanced Features** - Custom properties, animations, transforms, and gradients

**HTML5** - Semantic markup for better accessibility

**Modern ES6+ Syntax** - Async/await, arrow functions, template literals

## 📁 Project Structure

```
flames-game/
├── index.html        # Main HTML structure
├── style.css         # All styling and animations
├── logic.js          # Game logic and animation control
└── README.md         # You're reading it!
```

## 🎨 How It Works

### The Algorithm

1. **Name Processing**: Combines both names and removes spaces
2. **Character Counting**: Counts unique characters in the combined string
3. **Elimination Process**: Uses the count to eliminate letters in a circular pattern
4. **Result**: The last remaining letter determines your relationship status!

### Animation Flow

1. **Highlight Phase**: Letters light up as the algorithm counts through them
2. **Elimination Phase**: Letters fade out and shrink when eliminated
3. **Winner Phase**: The final letter pulses with a glowing animation
4. **Result Display**: Shows the relationship status with a big emoji reveal

## 🎯 Technical Highlights

**Circular Positioning** - Letters positioned using trigonometric calculations (rotate-translate-rotate pattern)

**State Management** - Clean state handling with classes (active, eliminated, winner)

**Smooth Animations** - CSS transitions combined with JavaScript timing for buttery-smooth effects

**Responsive Design** - CSS custom properties and media queries for perfect scaling

**Performance Optimized** - Uses CSS transforms for hardware-accelerated animations

## 🌈 Customization Ideas

Want to personalize it? Here are some ideas:

- Change the color scheme (edit CSS variables in `:root`)
- Add sound effects for clicks and eliminations
- Create different themes (light mode, neon, retro)
- Add more relationship types beyond FLAMES
- Include sharing features (screenshot result, social media)
- Add a history of previous results
- Create multiplayer mode with score tracking
- Add particle effects around the winner

## 🎨 Color Palette

```css
--bg-gradient: linear-gradient(135deg, #1a1c2c 0%, #4a192c 100%);
--accent-color: #ff4757;      /* Main red/pink */
--highlight-color: #ffa502;   /* Orange for active state */
```

## 📱 Mobile Optimization

The game automatically adjusts for mobile devices with:
- Smaller circle radius for compact screens
- Stacked input fields for better touch targets
- Adjusted font sizes for readability
- Touch-friendly button sizes
- Optimized animations for mobile performance

## 🐛 Known Quirks

- Names with identical letters might produce faster animations
- Very long names (15+ characters) will have rapid counting
- The algorithm is purely for fun - no actual relationship prediction! 😄

## 🤝 Contributing

Want to make this even better? Feel free to:
- Add new animations
- Improve the algorithm
- Fix bugs
- Suggest features
- Share your customizations!

## 📄 License

This project is open source and available for personal and educational use.

## 🎓 Learning Points

This project demonstrates:
- **DOM Manipulation** - Dynamic element selection and modification
- **Event Handling** - Button clicks and user interactions
- **Async JavaScript** - Using Promises and async/await for timing
- **CSS Animations** - Keyframes, transitions, and transforms
- **Responsive Design** - Mobile-first approach with media queries
- **Algorithm Implementation** - FLAMES elimination logic
- **State Management** - Tracking game states without frameworks

## 💡 Fun Facts

- The FLAMES game has been popular since the 1990s in schools worldwide
- This digital version adds ~20 lines of CSS animation for every state transition
- The circular arrangement uses mathematical rotation: `360° ÷ 6 = 60°` per letter
- Animation speeds are dynamically calculated based on unique character count

---

**Ready to discover your fate? Enter those names and let the FLAMES decide! 🔥**
