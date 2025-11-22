import { Code2, Server, Wrench } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-fade-in">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full-Stack Developer with a deep love for creating 
              innovative web applications and IT solutions. My journey in technology 
              has equipped me with expertise in both frontend and backend development, 
              allowing me to build complete, scalable systems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in modern web technologies, system integration, and 
              delivering robust IT solutions that solve real-world problems. 
              My approach combines technical excellence with user-centered design 
              to create applications that are both powerful and intuitive.
            </p>
          </div>
          
          <div className="grid gap-6 animate-slide-in">
            <div className="p-6 bg-blue-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Code2 className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building responsive, modern web applications with cutting-edge technologies
              </p>
            </div>
            
            <div className="p-6 bg-indigo-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Server className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">System Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Seamlessly connecting different systems and services for optimal performance
              </p>
            </div>
            
            <div className="p-6 bg-purple-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Wrench className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">IT Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Delivering comprehensive technical solutions tailored to business needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
