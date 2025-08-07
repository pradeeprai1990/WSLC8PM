import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-white border-t border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto py-4">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Flowbite. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
