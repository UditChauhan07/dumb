interface TestimonialCardProps {
  quote: string
  author: string
  image?: string
  company?: string
}

export default function TestimonialCard({ quote, author, image, company }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover-lift">
      <div className="mb-4 text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic leading-relaxed">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          {image ? (
            <img src={image || "/placeholder.svg"} alt={author} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-sm font-bold">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <span className="font-medium text-gray-900">{author}</span>
          {company && <p className="text-sm text-gray-600">{company}</p>}
        </div>
      </div>
    </div>
  )
}
