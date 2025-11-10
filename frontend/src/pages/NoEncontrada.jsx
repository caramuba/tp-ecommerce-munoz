import React from 'react'

const NoEncontrada = () => {
  return (
    <div className="text-center py-8 space-y-3">
        <h2 className="text-4xl font-bold text-gray-800">
            Pagina no encontrada.
        </h2>
        <a href="/" className="inline-block bg-lime-500 rounded-xl p-1 text-blue-500 font-bold hover:bg-lime-400 hover:shadow-md hover:border-2 transition-colors">Volver al inicio</a>
    </div>
  )
}

export default NoEncontrada;