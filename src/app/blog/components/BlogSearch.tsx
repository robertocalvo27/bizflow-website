"use client"

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const BlogSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para buscar artículos
    console.log('Buscando:', searchTerm)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <h3 className="text-lg font-semibold text-bizflow-gray-900 mb-4">
        Buscar Artículos
      </h3>
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder="Buscar por palabra clave..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit" size="icon" className="bg-bizflow-blue-600 hover:bg-bizflow-blue-700">
          <Search className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}

export default BlogSearch 