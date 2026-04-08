# Design Spot

`Design Spot` is a lightweight, modern, and fully responsive single-page portfolio website template for a creative agency. Built with pure HTML, CSS, and vanilla JavaScript, it features a sleek dark theme, smooth user interactions, and a clean layout to showcase creative work effectively.

### Live Demo
**[https://mahmudulhasanzb.github.io/designspot/](https://mahmudulhasanzb.github.io/designspot/)**

## Features

-   **Fully Responsive Design:** Adapts seamlessly to desktop, tablet, and mobile devices.
-   **Interactive Lightbox:** A modal window to display project details and images when a portfolio item is clicked.
-   **Smooth Scroll Navigation:** Clean, animated scrolling for all internal anchor links.
-   **Mobile Navigation:** A collapsible hamburger menu for easy navigation on smaller screens.
-   **Modern UI/UX:** A professional dark-themed design with a consistent color palette and ample white space, built using CSS custom properties for easy theming.
-   **Client-Side Interactivity:** Vanilla JavaScript handles the navigation toggle, lightbox functionality, dynamic copyright year, and a demo contact form submission.

## Technologies Used

-   HTML5
-   CSS3 (Custom Properties)
-   Vanilla JavaScript

## Getting Started

To get a local copy up and running, follow these simple steps.

1.  Clone the repository:
    ```sh
    git clone https://github.com/mahmudulhasanzb/designspot.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd designspot
    ```
3.  Open the `index.html` file in your web browser. That's it!

## File Structure
The project is organized with a clear and simple file structure:
```
.
├── index.html          # Main HTML structure for the entire site
├── assets/             # Contains all images, logos, and graphics
├── css/
│   └── styles.css      # All styling rules for the application
└── js/
    └── script.js       # JavaScript for all interactivity
```

## Customization

This template is designed for easy customization:

-   **Content:** All text, including headers, paragraphs, and project details, can be modified directly within `index.html`.
-   **Portfolio Items:** To add or change portfolio projects, edit the `<article class="card">` elements inside the `#work` section. Update the image source and the `data-title` attribute for the lightbox.
-   **Styling:** The visual theme can be easily changed by modifying the CSS variables defined at the top of `css/styles.css`.
    ```css
    :root {
      /* Palette */
      --bg: #0f1720;
      --surface: #0b1220;
      --muted: #8b95a6;
      --accent: #3dd6ff;
      --accent-2: #6be6c1;
      /* ... and more */
    }
    ```
-   **Contact Form:** The contact form currently features a demo submission handled by JavaScript. To receive messages, you need to connect the form to a backend service (e.g., Formspree, Netlify Forms) or a custom server endpoint.
