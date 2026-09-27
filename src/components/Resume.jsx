function Resume() {
    return (
      <section className="resume-page">
        <div className="resume-container">
  
          {/* Header */}
          <div className="resume-header">
            <h1>Resume</h1>
  
            <a
              href="/khushimadan/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-download"
            >
              View Full Resume
            </a>
          </div>
  
  
          {/* Contact */}
          <div className="resume-contact">
            <h2>Khushi Madan</h2>
            <p>
              Berkeley, CA 94704 · khushi_madan@berkeley.edu ·
              +1 (925)-487-7245
            </p>
          </div>
  
  
          {/* Education */}
          <section className="resume-section">
            <h2>Education</h2>
  
            <div className="resume-entry">
              <div className="resume-entry-header">
                <h3>University of California, Berkeley</h3>
                <span>Aug 2025 – May 2029</span>
              </div>
  
              <p className="resume-location">Berkeley, CA</p>
  
              <p>
                B.A. in Cognitive Science & Intended B.A. Data Science
              </p>
  
              <p>
                <strong>Relevant Coursework:</strong> Data C8: Foundations of
                Data Science, Cogsci 1: Introduction to Cognitive Science,
                CS 61A: Structure and Interpretation of Computer Programs,
                Psych C61: Brain, Mind, & Behavior, DesInv 15: Design Methodology, CS61B:
                Data Structures, Cogsci 131: Computational Model of Cognition
              </p>
  
              <p>
                <strong>Clubs & Organizations:</strong> UX @ Berkeley –
                UX Designer, Web Development at Berkeley – UX Designer
              </p>
            </div>
  
            <div className="resume-entry">
              <div className="resume-entry-header">
                <h3>California High School</h3>
                <span>June 2025</span>
              </div>
  
              <p className="resume-location">San Ramon, CA</p>
  
              <p><strong>GPA:</strong> 4.0</p>
  
              <p>
                <strong>Relevant Courses:</strong> AP Computer Science A,
                AP Computer Science Principles, AP Psychology, Computer
                Graphic Arts
              </p>
            </div>
          </section>
  
  
          {/* Professional Experience */}
          <section className="resume-section">
            <h2>Professional Experience</h2>
  
            <ResumeEntry
              title="Lawrence Berkeley National Lab"
              role="Experience In Research Intern"
              date="June 2024 – July 2024"
              location="Berkeley, CA"
              bullets={[
                "Designed and prototyped a K-12 educational website supporting ESnet outreach initiatives.",
                "Created wireframes and high-fidelity prototypes in Figma.",
                "Developed responsive webpages using HTML and CSS.",
                "Conducted field and user research.",
                "Improved accessibility for educators and students from underrepresented communities."
              ]}
            />
  
            <ResumeEntry
              title="Atlas Agent"
              role="UX Consultant"
              date="August 2025 – December 2025"
              location="Berkeley, CA"
              bullets={[
                "Conducted user research for an AI-powered real estate platform.",
                "Designed mobile workflows for CMA reports, AI chatbot interactions, team collaboration, and transaction management.",
                "Produced wireframes and interactive prototypes in Figma.",
                "Collaborated with teammates to iterate on user feedback and improve usability."
              ]}
            />
  
            <ResumeEntry
              title="Newrium Foundation"
              role="UX Consultant"
              date="August 2025 – December 2025"
              location="Berkeley, CA"
              bullets={[
                "Designed a modern educational website promoting financial literacy and youth empowerment.",
                "Created low-, mid-, and high-fidelity wireframes and interactive prototypes.",
                "Built a reusable design system for engineering implementation.",
                "Designed engaging interfaces using animation, color, and accessibility best practices."
              ]}
            />
  
            <ResumeEntry
              title="The Coder School"
              role="Code Coach"
              date="August 2024 – October 2024"
              location="San Ramon, CA"
              bullets={[
                "Delivered personalized Scratch and Python lessons to elementary and middle school students.",
                "Designed project-based coding activities tailored to individual learning styles.",
                "Encouraged creativity through game development and interactive programming projects.",
                "Documented student progress and adjusted lesson plans to maximize learning outcomes."
              ]}
            />
  
            <ResumeEntry
              title="Aveti Learning"
              role="Seasonal Digital Design Intern"
              date="September 2023 – June 2024"
              location="Remote"
              bullets={[
                "Designed quarterly and annual newsletters for educators and stakeholders.",
                "Collaborated across teams to organize content, timelines, and publication schedules.",
                "Applied project management practices to coordinate meetings and deliverables."
              ]}
            />
          </section>
  
  
          {/* Projects & Certifications */}
          <section className="resume-section">
            <h2>Projects & Certifications</h2>
  
            <ResumeEntry
              title="Slice Safe – 2nd Place Hackathon"
              date="April 2024"
              bullets={[
                "Designed the user interface for a disguised personal safety application using Figma.",
                "Collaborated with a three-person team to prototype emergency activation, live location sharing, and audio recording features.",
                "Began iOS implementation using Swift and Xcode.",
                "Awarded 2nd Place at the SFHS × Girls Who Code Hackathon."
              ]}
            />
  {/*
            <ResumeEntry
              title="Website/App Designs"
              date="2025–2026"
              bullets={[
                "MatchaMap: Redesigned website navigation and information architecture in Figma, creating wireframes and high-fidelity prototypes to improve usability, visual hierarchy, and user experience.",
                "KMJewels: Designed an end-to-end e-commerce experience in Figma, including branding, product pages, and checkout flow while applying accessibility, typography, and color system principles.",
                "Personal Portfolio Website: Designed and prototyped a personal portfolio website from low-fidelity wireframes to high-fidelity mockups in Figma; currently implementing the responsive design using React and GitHub Pages."
              ]}
            />
  */}
    
  
            <ResumeEntry
              title="Coursera: Introduction to User Experience"
              date="2024"
              bullets={[
                "Completed UX training covering user research, wireframing, prototyping, usability testing, and the end-to-end design process."
              ]}
            />
  
            <ResumeEntry
              title="GirlsWhoCode Summer Immersion Program"
              date="2024"
              bullets={[
                "Completed Web Development training by building responsive websites using HTML, CSS, and JavaScript through hands-on front-end web development projects."
              ]}
            />
          </section>
  
  
          {/* Volunteer Work */}
          <section className="resume-section">
            <h2>Volunteer Work</h2>
  
            <ResumeEntry
              title="Inspirigirl"
              role="Intro to Python Summer Course Instructor"
              date="August 2024"
              location="Remote"
              bullets={[
                "Taught a weekly Introduction to Python course, leading live virtual classes for students across the U.S. and internationally.",
                "Developed the course curriculum by creating lecture slides, coding assignments, quizzes, and hands-on projects covering Python fundamentals.",
                "Supervised teaching assistants and provided personalized code reviews and feedback to support student learning."
              ]}
            />
          </section>
  
  
          {/* Skills */}
          <section className="resume-section">
            <h2>Skills</h2>
  
            <div className="skills-list">
              <span>Figma</span>
              <span>Wireframing</span>
              <span>HTML</span>
              <span>Prototyping</span>
              <span>CSS</span>
              <span>React</span>
              <span>Python</span>
              <span>User Research</span>
              <span>Java</span>
              <span>JavaScript</span>
              <span>SQL</span>
            </div>
          </section>
  
        </div>
      </section>
    );
  }
  
  
  /* Reusable resume entry */
  
  function ResumeEntry({
    title,
    role,
    date,
    location,
    bullets
  }) {
    return (
      <div className="resume-entry">
  
        <div className="resume-entry-header">
          <h3>{title}</h3>
          {date && <span>{date}</span>}
        </div>
  
        {role && <p className="resume-role">{role}</p>}
        {location && <p className="resume-location">{location}</p>}
  
        <ul>
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
  
      </div>
    );
  }
  
  export default Resume;