import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-fade-in">
          Featured Projects
        </h2>
        
        <div className="max-w-4xl mx-auto animate-slide-in">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
            {/* Project Image */}
            <div className="h-64 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <img 
                src="https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Trade+License+System" 
                alt="Online Trade License Management System"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Project Content */}
            <div className="p-8 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Online Trade License Management System
              </h3>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                A comprehensive web-based platform designed to streamline the process of 
                applying for, managing, and renewing trade licenses. This system digitizes 
                the entire workflow, reducing paperwork and processing time significantly.
              </p>
              
              {/* Features */}
              <div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Key Features:</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    'Online application submission',
                    'Document upload and verification',
                    'Real-time application tracking',
                    'Automated payment processing',
                    'Admin dashboard for management',
                    'Email notifications and alerts'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Tailwind CSS'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  <ExternalLink size={20} />
                  Live Demo
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  <Github size={20} />
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
