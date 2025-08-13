import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >

        {/* Fullstack Hotel Booking System */}
        <a
          href="https://hotel-booking-app-lac.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/hotel-booking.png')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3>Fullstack Hotel Booking System</h3>
            <p>
              A complete fullstack hotel booking platform where users can search, 
              view, and book hotels with real-time availability and secure payments. 
              Built using Next.js for the frontend, Supabase for authentication, 
              database, and storage, and Stripe for payment integration. 
              Integrated Google Places API to fetch hotels near the user’s location.
            </p>
            <div className="project-tech">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Supabase</span>
              <span>Stripe</span>
              <span>Google Places API</span>
            </div>
          </motion.div>
        </a>

        {/* BookHive E-Library Application */}
        <a
          href="https://drive.google.com/file/d/1aqBCBTZ4rz55KkxZ2B82tK1Z_tnOhdK7/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/projects/p1.png')" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3>BookHive E-Library Application</h3>
            <p>
              BookHive is a mobile application developed using Kotlin that provides users with categorized access to a wide variety of books,
              including Magazines, Religious Texts, Literature, Fiction, History, and Engineering. Designed with a clean architecture, the app is
              structured into layers such as data, domain, and presentation, ensuring better scalability and maintainability.
            </p>
            <div className="project-tech">
              <span>Kotlin</span>
              <span>Jetpack-Compose</span>
              <span>Firebase</span>
              <span>Android Studio</span>
            </div>
          </motion.div>
        </a>

        {/* Professional Portfolio Project */}
        <a
          href="https://divyanshportfolio-indol.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/p2.png')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3> Professional Portfolio Project</h3>
            <p>
              Techfolio is a modern, responsive personal portfolio website designed to showcase my skills, projects, experience, and professional background in an interactive and visually appealing way. Built with a focus on performance, aesthetics, and accessibility, Techfolio serves as both an online resume and a demonstration of my technical capabilities.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </motion.div>
        </a>

        {/* SaaS Landing Page */}
        <a
          href="https://landing-page-front-end-alpha.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/1.png')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>SaaS Landing Page</h3>
            <p>
              Coming Soon!
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>TypeScript</span>
              <span>TailwindCSS</span>
            </div>
          </motion.div>
        </a>

      </motion.div>
    </motion.section>
  );
};

