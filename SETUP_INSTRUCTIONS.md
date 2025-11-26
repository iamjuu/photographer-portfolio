# Setup Instructions for Razik Portfolio React

## 1. Install Dependencies

First, navigate to the project directory and install all dependencies:

```bash
cd "d:\desktop\freelance\Razik portfolio\razik-react"
npm install
```

## 2. Copy Assets

You need to manually copy the following folders from the original project to the React project:

### Copy Images (pic folder)
Copy all files from:
```
d:\desktop\freelance\Razik portfolio\Razik\pic\
```
To:
```
d:\desktop\freelance\Razik portfolio\razik-react\public\pic\
```

Required images:
- anu.jpg
- cat.jpg
- faju.jpg
- friends.jpg
- juu.jpg
- razik.jpg
- shahama.jpg
- thameem.jpg
- WhatsApp Image 2024-07-07 at 15.29.33_1239d279.jpg
- WhatsApp Image 2024-07-07 at 15.28.40_27377a5c.jpg

### Copy Favicons
Copy all files from:
```
d:\desktop\freelance\Razik portfolio\Razik\assets\favicons\
```
To:
```
d:\desktop\freelance\Razik portfolio\razik-react\public\favicons\
```

Required favicon files:
- android-chrome-192x192.png
- android-chrome-512x512.png
- apple-touch-icon.png
- browserconfig.xml
- favicon-16x16.png
- favicon-32x32.png
- favicon.ico
- mstile-150x150.png
- safari-pinned-tab.svg
- site.webmanifest

### Copy Additional Images (if needed)
Copy from:
```
d:\desktop\freelance\Razik portfolio\Razik\assets\img\
```
To:
```
d:\desktop\freelance\Razik portfolio\razik-react\public\images\
```

Required images:
- testimonial3.png (for the third testimonial)

## 3. Run the Development Server

After copying all assets, start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 4. Build for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` folder.

## 5. Preview Production Build

To preview the production build:

```bash
npm run preview
```

## Features Implemented

✅ Exact design from original HTML
✅ All CSS preserved
✅ Dark/Light theme toggle with localStorage
✅ Smooth scroll animations with ScrollReveal
✅ Active navigation link highlighting
✅ Service modals
✅ Portfolio filtering with MixItUp
✅ Testimonials carousel with Swiper
✅ Contact form
✅ Fully responsive design
✅ All original functionality preserved

## Project Structure

```
razik-react/
├── public/
│   ├── favicons/         # (Copy from original)
│   ├── images/           # (Copy from original)
│   └── pic/              # (Copy from original)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Services.jsx
│   │   ├── Work.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   ├── useScrollHeader.js
│   │   ├── useScrollActive.js
│   │   ├── useTheme.js
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   ├── styles.css
│   │   └── swiper-bundle.min.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Notes

- All original CSS has been preserved exactly as it was
- The design is pixel-perfect to the original
- All animations and interactions work the same way
- Theme preference is saved in localStorage
- The portfolio uses modern React best practices with hooks
- No functionality has been omitted

