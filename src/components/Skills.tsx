const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Express', 'Spring Boot', 'Java', 'Python', 'SQL', 'MongoDB',
    'Git', 'REST API', 'GraphQL'
  ]

  const getSkillColor = (index: number) => {
    const colors = [
      'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
      'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
      'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
      'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
    ]
    return colors[index % colors.length]
  }

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-fade-in">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-slide-in">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`${getSkillColor(index)} px-6 py-4 rounded-xl font-semibold text-center shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
