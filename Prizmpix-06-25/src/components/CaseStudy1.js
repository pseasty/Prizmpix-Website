import React from 'react';

const CaseStudy1 = () => (
  <div className="container py-4">
    {/* Section 1 */}
    <img src="/images/case1.1.png" className="img-fluid mb-3" alt="User research visuals" />
    <p>
      Interviews with the client, user research, and competitor analysis informed the design process. The discovery phase helped uncover user goals and frustrations, guiding our UX direction.
    </p>

    {/* Section 2 */}
    <img src="/images/case1.2.jpeg" className="img-fluid mb-3" alt="Low to high fidelity wireframes" />
    <p>
      Low-fidelity wireframes were created to map out structure and flow. These were later refined into high-fidelity designs using Framer, incorporating feedback from usability testing.
    </p>

    {/* Section 3 */}
    <img src="/images/case1.3.png" className="img-fluid mb-3" alt="Interactive prototypes" />
    <p>
      Interactive prototypes allowed real-time testing on different devices. Iterative testing revealed accessibility improvements and performance tweaks before hand-off.
    </p>

    {/* Section 4 */}
    <img src="/images/case1.4.png" className="img-fluid mb-3" alt="Launch analytics dashboard" />
    <p>
      The final site was launched with integrated analytics, tracking engagement and user behavior. Key performance indicators showed significant improvement within weeks.
    </p>

    {/* Conclusion */}
    <hr className="my-4" />
    <h5>Conclusion</h5>
    <p>
      The redesign successfully achieved the client’s goals: a modern, accessible site with better mobile performance and increased user engagement. Stakeholders were thrilled with the outcome.
    </p>

    {/* Links */}
    <div className="mt-4">
      <h6>Explore More:</h6>
      <ul>
        <li>
          <a href="https://special-channel-275950.framer.app" target="_blank" rel="noopener noreferrer">
            Initial prototype
          </a>
        </li>
        <li>
          <a href="https://jolly-evolution-401688.framer.app" target="_blank" rel="noopener noreferrer">
            Iteration based on feedback
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default CaseStudy1;