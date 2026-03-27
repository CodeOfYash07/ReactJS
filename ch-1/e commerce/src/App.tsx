import { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [page, setPage] = useState<'form' | 'table'>('form')

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Nav */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setPage('form')}
          className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${page === 'form' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50 shadow'}`}
        >
          Order Form
        </button>
        <button
          onClick={() => setPage('table')}
          className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${page === 'table' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50 shadow'}`}
        >
          All Orders
        </button>
      </div>

      <div className="max-w-6xl mx-auto">
        {page === 'form' ? <Form /> : <Table />}
      </div>
    </div>
  )
}

export default App
