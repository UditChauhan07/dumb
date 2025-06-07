export default function TechStackSection() {
  const techCategories = [
    {
      title: "Frontend Development",
      techs: ["React", "Vue.js", "Angular"],
    },
    {
      title: "Backend Development",
      techs: ["Node.js", "Java", "Python", "PHP"],
    },
    {
      title: "Cloud & DevOps",
      techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
    },
    {
      title: "Databases",
      techs: ["MongoDB", "PostgreSQL", "Redis"],
    },
    {
      title: "AI & Machine Learning",
      techs: ["TensorFlow", "PyTorch"],
    },
    {
      title: "Other Technologies",
      techs: ["Blockchain", "GraphQL", "Google Analytics", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Hootsuite"],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="tech-stack">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We work with the most advanced and reliable technologies to deliver solutions that meet the highest
            standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
