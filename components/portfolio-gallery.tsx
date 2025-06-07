import { ProjectMockups } from "./project-mockups"

export default function PortfolioGallery() {
  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      mockup: "ECommerce",
      description: "Modern e-commerce solution with AI recommendations",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      mockup: "HealthcareApp",
      description: "Patient management and telemedicine app",
    },
    {
      title: "Financial Dashboard",
      category: "Data Analytics",
      mockup: "Dashboard",
      description: "Real-time financial analytics and reporting",
    },
    {
      title: "AI Chatbot System",
      category: "AI/ML",
      mockup: "ECommerce",
      description: "Intelligent customer service automation",
    },
    {
      title: "Cloud Infrastructure",
      category: "DevOps",
      mockup: "Dashboard",
      description: "Scalable cloud architecture and deployment",
    },
    {
      title: "IoT Management Platform",
      category: "IoT",
      mockup: "HealthcareApp",
      description: "Connected device monitoring and control",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            const MockupComponent = ProjectMockups[item.mockup as keyof typeof ProjectMockups]
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover-lift group"
              >
                <div className="relative overflow-hidden h-48 bg-gray-50 p-4">
                  <MockupComponent />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">{item.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gray-900 transition-colors">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
