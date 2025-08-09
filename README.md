Frontend Mentor - Space tourism website solution
This is a solution to the Space tourism website challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Table of contents
Overview

The challenge

Screenshot

Links

My process

Built with

What I learned

Continued development

Useful resources

Author

Acknowledgments

Overview
The challenge
Users should be able to:

View the optimal layout for each of the website's pages depending on their device's screen size

See hover states for all interactive elements on the page

View each page and toggle between tabs to see new information dynamically loaded from data files

Screenshot
![alt text](image.png)

Links
Solution URL: Add solution URL here

Live Site URL: Add live site URL here

My process
Built with
Semantic HTML5 markup

CSS custom properties

Flexbox

CSS Grid

Mobile-first workflow

React – JS library

Vite – Development build tool

Custom Hooks (for fetching data and handling responsive layouts)

What I learned
While building this project, I improved my skills in:

Creating reusable React components for navigation, content tabs, and dynamic images.

Managing responsive layouts using a custom useWindowSize hook.

Loading structured JSON data and mapping it to UI components for different pages.

Using conditional rendering for images based on screen width:

jsx
Copy
Edit
{width > 768
? <img src={tech.images.portrait} alt={tech.name} />
: <img src={tech.images.landscape} alt={tech.name} />
}
Continued development
I plan to:

Implement animations for smoother transitions between tabs.

Add accessibility improvements (ARIA labels, keyboard navigation).

Enhance image optimization for faster loading times.

Useful resources
React Docs – Excellent resource for understanding hooks and component structure.

MDN Web Docs – Helpful for CSS Grid and Flexbox layouts.

Vite Documentation – Helped me optimize the build process for faster development.

Author
Website – Nifemi Soneye

Frontend Mentor – @NifemiSoneye

Twitter – @AFCNIFEMI

Acknowledgments
Thanks to the Frontend Mentor community for sharing ideas and solutions that helped inspire parts of this project. Special thanks to those who posted tips on dynamic data loading in React.
