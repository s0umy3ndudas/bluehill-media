'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
  "Hi this is Som, Welcome to Bluehill Media",
  "How can I help you today?",
  "Are you finding anything?",
  "Ask me anything",
]

export default function VideoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsgIndex((prev) => (prev + 1) % messages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  if (!mounted) return null

  const popupContent = (
    <>
      {isOpen && (
        // Overlay and close on any click (even video)
        <div
          className="fixed inset-0 z-[9998] bg-black/30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Message + Video trigger */}
      <div className="z-[9999] fixed bottom-6 right-6 flex flex-col items-end space-y-2 p-2">
        {/* Rotating cloud message */}
        {!isOpen && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMsgIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-gray-800 text-sm px-4 py-2 rounded-2xl shadow-md relative max-w-xs"
            >
              {messages[currentMsgIndex]}
              <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white rotate-45"></div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Collapsed or Expanded */}
        {!isOpen ? (
          <motion.div
            className="cursor-pointer rounded-full border-4 border-white overflow-hidden shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            <video
              src="https://res.cloudinary.com/dsccaob3y/video/upload/v1747082872/chatbot/w6v6ui8nqicdxjqemx4z.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-24 h-24 object-cover rounded-full"
            />
          </motion.div>
        ) : (
          <div
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] z-[9999] flex items-center justify-center sm:items-end sm:justify-end p-4"
            onClick={() => setIsOpen(false)} // Click anywhere collapses
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full h-full sm:h-auto sm:w-[350px]">
              <video
                src="https://res.cloudinary.com/dsccaob3y/video/upload/v1747082872/chatbot/w6v6ui8nqicdxjqemx4z.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </>
  )

  return createPortal(popupContent, document.body)
}
