import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Phone, MapPin } from 'lucide-react';
import { motion } from "framer-motion";

// Define page-level variants to animate the whole page
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75 }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.75 }
  }
};

// Define section-level variants for the hero, about, and contact sections.
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } }
};

function App() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Lalit Sharma</h1>
          <p className="text-xl md:text-2xl mb-8">Data Analyst</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/lalittsharma" target='_blank' className="hover:text-indigo-200 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/lalit-sharma-723193350/" target='_blank' className="hover:text-indigo-200 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sharmalalit15407@gmail.com" className="hover:text-indigo-200 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} />
          </a>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQF_gWQ0WXh2GA/profile-displayphoto-shrink_800_800/B4DZTk.ee2HkAg-/0/1739008371462?e=1744848000&v=beta&t=Pl4K_794Rv2tUIDHRtF0bawnBo0rsWnNz9EEJ8NkZnM"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a detail-oriented Data Analyst with a strong background in data visualization, statistical analysis, and business intelligence, I thrive on transforming complex datasets into actionable insights. Proficient in tools like SQL, Excel, and data visualization platforms such as Power BI and Power Query. I specialize in uncovering trends and driving data-informed decision-making. With a passion for problem-solving and a knack for translating data into strategic recommendations, I aim to support organizations in optimizing performance and achieving their goals.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Code2 className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              'MS-Excel', 'Power Query', 'Data Cleaning',
              'Tally Prime', 'PowerBi', 'SQl',
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-lg">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Advanced Excel Trainer',
                company: 'Minder Institute of Professional Studies',
                duration: 'Jan 2024 - Feb 2025',
                description: 'Worked on data visualization, statistical analysis, and generating actionable insights to support business growth.'
              }
            ].map((job, index) => (
              <motion.div
                key={job.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-indigo-600 font-medium">{job.company} &middot; {job.duration}</p>
                <p className="mt-4 text-gray-600">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Academic-Result-Dashboard',
                description: 'An interactive academic dashboard showcasing student performance, grades, and trends with real-time visualizations.',
                image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80',
                link: 'https://github.com/lalittsharma/Academic_Result_Dashboard'
              },
              {
                title: 'Call-Center-Analytics-Dashboard',
                description: 'A Power BI based dashboard that delivers in-depth call center analytics, tracking key performance metrics and optimizing operations.',
                image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
                link: 'https://github.com/lalittsharma/Call-Center-Analytics-Dashboard-using-Power-BI-main'
              },
              {
                title: 'Global-Super-Store-DashBoard',
                description: 'A comprehensive dashboard for global retail, monitoring sales, inventory, and customer insights across multiple super stores.',
                image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80',
                link: 'https://github.com/lalittsharma/Global-Super-Store-DashBoard'
              },
              {
                title: 'Ola-Dashbord',
                description: 'A dynamic ride-sharing dashboard offering real-time data on trip statistics, driver performance, and operational insights.',
                image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80',
                link: 'https://github.com/lalittsharma/Ola-Dashbord'
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    className="inline-flex items-center gap-2 text-white hover:text-indigo-200 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-100"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12 justify-center">
            <Mail className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Mail className="text-indigo-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href="mailto:sharmalalit15407@gmail.com" className="text-lg font-medium hover:text-indigo-600 transition-colors">
                    sharmalalit15407@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Phone className="text-indigo-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a href="tel:+9897857435" className="text-lg font-medium hover:text-indigo-600 transition-colors">
                    +91-9897857435
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <MapPin className="text-indigo-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-lg font-medium">Tundla, Uttar Pradesh</p>
                </div>
              </div>
              <div className="pt-8 border-t">
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/lalittsharma" target='_blank' className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition-colors">
                    <Github className="text-gray-600 hover:text-indigo-600" size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/lalit-sharma-723193350/" target='_blank' className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition-colors">
                    <Linkedin className="text-gray-600 hover:text-indigo-600" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600">
        <p>© 2025 Lalit Sharma. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

export default App;