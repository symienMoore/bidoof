import Link from 'next/link'
import { MessageSquare, User, FileText, Plus, Home, Star, Clock, Trash2 } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Header section */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Files</h2>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {/* Main navigation */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Access</h3>
            <ul className="space-y-1">
              <li>
                <Link 
                  href="/dashboard" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-sm"
                >
                  <Home size={18} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/messages" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-purple-200 rounded-md transition-colors text-sm"
                >
                  <MessageSquare size={18} />
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/profile" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-sm"
                >
                  <User size={18} />
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Documents section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Documents</h3>
            <ul className="space-y-1">
              <li>
                <Link 
                  href="/dashboard" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-sm"
                >
                  <FileText size={18} />
                  <span>My Documents</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/add-document" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-sm"
                >
                  <Plus size={18} />
                  <span>Add Document</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent and favorites */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Recent</h3>
            <ul className="space-y-1">
              <li>
                <Link 
                  href="/starred" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-sm"
                >
                  <Star size={18} />
                  <span>Starred</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/recent" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-sm"
                >
                  <Clock size={18} />
                  <span>Recent</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Trash */}
          <div>
            <ul className="space-y-1">
              <li>
                <Link 
                  href="/trash" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors text-sm"
                >
                  <Trash2 size={18} />
                  <span>Trash</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar 