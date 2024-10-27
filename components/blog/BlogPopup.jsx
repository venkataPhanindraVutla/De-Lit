import React from 'react'
import { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa';

function BlogPopup({selectedPost, closeModal}) {

    useEffect(() => {
        return () => {
            document.body.style.overflow= 'auto' // Clean up on component unmount
        };
      }, []);
    
  return (
    <div>
      {/* Modal Popup */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex pt- items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-3/4 h-3/4 overflow-y-scroll  flex flex-col shadow-lg relative">
            {/* Close Button */}
            <button
                className="bg-black p-1 md:p-2 absolute top-2 right-1 rounded-full text-mywhite hover:text-white"
                onClick={closeModal}
              >
                <FaTimes size={10 } />
              </button>

            {/* Modal Content */}
            <h2 className="text-2xl pt-3 font-semibold text-gray-800 mb-4">
              {selectedPost.title}
            </h2>
            <div className='bg-gray-200 p-2 rounded-lg'>
            <p className="text-gray-600 mb-4">{selectedPost.description}</p>
            <p className='text-gray-400 text-xs font-bold'>{selectedPost.author} - {selectedPost.date}</p> 
            </div>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogPopup
