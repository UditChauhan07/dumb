import { TechIcons } from "./tech-icons"

export default function TechShowcase() {
  const techItems = [
    {
      title: "Web Development",
      icon: "Web",
      description: "Modern web applications",
    },
    {
      title: "Mobile Apps",
      icon: "Mobile",
      description: "iOS & Android solutions",
    },
    {
      title: "Cloud Solutions",
      icon: "Cloud",
      description: "Scalable infrastructure",
    },
    {
      title: "AI & Machine Learning",
      icon: "AI",
      description: "Intelligent automation",
    },
    {
      title: "Data Analytics",
      icon: "Analytics",
      description: "Business insights",
    },
    {
      title: "Database Solutions",
      icon: "Database",
      description: "Data management",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Technology Expertise</h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techItems.map((tech, index) => {
            const IconComponent = TechIcons[tech.icon as keyof typeof TechIcons]
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-full h-32 mb-3">
                  <IconComponent />
                </div>
                <h3 className="text-sm font-semibold text-center text-gray-800 mb-1">{tech.title}</h3>
                <p className="text-xs text-gray-600 text-center">{tech.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
