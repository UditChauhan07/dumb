import { ProjectMockups } from "./project-mockups"

interface ClientCardProps {
  title: string
  description: string
  mockup?: "healthcare" | "ecommerce" | "dashboard"
}

export default function ClientCard({ title, description, mockup }: ClientCardProps) {
  const MockupComponent = mockup
    ? ProjectMockups[mockup === "healthcare" ? "HealthcareApp" : mockup === "ecommerce" ? "ECommerce" : "Dashboard"]
    : null

  return (
    <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift">
      {MockupComponent && (
        <div className="h-48 overflow-hidden bg-white p-4">
          <MockupComponent />
        </div>
      )}
      <div className="p-8">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
          {title.charAt(0)}
        </div>
        <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
        <p className="text-gray-700 text-center">{description}</p>
      </div>
    </div>
  )
}
