import React from 'react';

const CaseStudy3 = () => (
  <div className="container py-4">
    {/* Section 1 */}
    <img src="/images/case3.1.jpg" className="img-fluid mb-3" alt="User research visuals" />
    <p>
      In the initial stages of designing this web app, I created wireframes to visualize the layout and user flow. This helped me to identify potential issues and make informed design decisions. The wireframes were created using Figma, and they played a crucial role in shaping the final design of the app.
    </p>

    {/* Section 2 */}
    <img src="/images/case3.2.png" className="img-fluid mb-3" alt="Low to high fidelity wireframes" />
    <p>
      As I built the web app using React.js, I focused on writing clean and modular code. This snapshot shows the implementation of the CaseStudy component, which is a key part of the app. The component uses React's state and props to display case study data and handle user interactions.
    </p>

    {/* Section 3 */}
    <img src="/images/case3.3.png" className="img-fluid mb-3" alt="Interactive prototypes" />
    <p>
      The final design of the CaseStudy component features a modal window implementation for displaying images and descriptions. This allows users to view detailed information about each case study in a clean and intuitive way. The modal window is implemented using React's state and props, and it's designed to be responsive and accessible. One challenge I faced was a layout issue with a global style and component style conflict. I resolved this by inspecting the component in developer tools in Chrome and found the conflicting style.
    </p>

    {/* Section 4 */}
    <img src="/images/case3.4.png" className="img-fluid mb-3" alt="Launch analytics dashboard" />
    <p>
      As part of the design process, I have been working to ensure that the web app is responsive and works well on different devices and screen sizes, however, it is a work in progress. This image shows the app's layout on a mobile device, demonstrating how the design adapts to smaller screens. The responsive design is achieved using CSS media queries and flexible layouts.
    </p>

    {/* Conclusion */}
    <hr className="my-4" />
    <h5>Conclusion</h5>
    <p>
      Through building this React.js web app, I've gained hands-on experience in front-end development and UX design, refining my skills in crafting intuitive interfaces and writing efficient code. The app showcases my capabilities in design and implementation, and I'm eager to continue iterating on the project, exploring new ways to enhance its functionality and user experience. As an ongoing work in progress, I plan to apply my learnings to further develop my portfolio web app, fine-tuning its style, animations, and content.
    </p>

    {/* Links */}
    <div className="mt-4">
      <h6>Explore More:</h6>
      <ul>
        <li>
          <a href="https://github.com/pseasty/Prizmpix-Website" target="_blank" rel="noopener noreferrer">
            Check my Github Projects!
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default CaseStudy3;