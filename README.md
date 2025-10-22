# Personal Portfolio Website

## Overview
This is a simple, responsive personal portfolio website built with HTML, CSS and JavaScript. It includes Home, About, Projects and Contact sections and a downloadable resume.

## Files
- `index.html` — main page (single-page layout with multiple sections)
- `styles.css` — styling and responsive rules
- `script.js` — interactivity (smooth scroll, contact validation, modal)
- `images/` — put profile and project screenshots here
- `resume.pdf` — your resume PDF

## How to run locally (sequence-wise)
1. Unzip or clone this folder to your machine.
2. Place your images in `/images/` (profile.jpg, project1.jpg, etc.) and add your resume as `resume.pdf`.
3. Open `index.html` in any modern browser (Chrome/Firefox/Edge).
   - Or run a local server:
     - Python 3: `python -m http.server 8000` → open `http://localhost:8000`
     - VS Code: use Live Server extension.
4. Test contact form (validation runs client-side; no real email is sent).
5. To deploy: push this repo to GitHub and enable GitHub Pages, or host on Netlify/Vercel.

## Notes
- Contact form is client-side only. To receive real messages, connect the form to a backend endpoint or use services like Formspree, Netlify Forms, or an email API.
- Replace placeholder text and images with your real content.

