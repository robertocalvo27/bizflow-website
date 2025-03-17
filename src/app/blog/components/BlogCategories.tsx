"use client"

import React from 'react'
import Link from 'next/link'
import { Tag } from 'lucide-react'

interface Category {
  id: number
  name: string
  count: number
}

interface BlogCategoriesProps {
  categories: Category[]
}

const BlogCategories = ({ categories }: BlogCategoriesProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="h-5 w-5 text-bizflow-blue-600" />
        <h3 className="text-lg font-semibold text-bizflow-gray-900">
          Categorías
        </h3>
      </div>
      
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link 
              href={`/blog/categoria/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-bizflow-blue-50 transition-colors group"
            >
              <span className="text-bizflow-gray-700 group-hover:text-bizflow-blue-600 transition-colors">
                {category.name}
              </span>
              <span className="bg-bizflow-blue-100 text-bizflow-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogCategories 