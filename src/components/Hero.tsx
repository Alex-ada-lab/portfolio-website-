import { Download } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 animate-fade-in">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 animate-slide-in">
            <img 
              src="https://via.placeholder.com/300x300/4F46E5/FFFFFF?text=Alex" 
              alt="Alex"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-slide-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Alex</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light">
              Full-Stack Developer & IT Specialist
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Passionate about creating elegant solutions to complex problems. 
              Specializing in modern web technologies and system integration.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
