import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover-lift group">
      <div className="text-gray-800 mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-gray-900 transition-colors">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-full h-1 bg-gradient-to-r from-gray-800 to-gray-600 rounded"></div>
      </div>
    </div>
  )
}
