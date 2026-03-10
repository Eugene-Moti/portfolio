"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";
import { useState, useEffect } from "react";

const PHONE_NUMBER = "254700019012";

const quickMessages = [
  "Hi! I need a website developed",
  "I'd like to discuss a project",
  "I have a question about your services",
  "I need SEO services for my business"
];

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");
      setMessage("");
    }
  };

  const handleQuickMessage = (msg: string) => {
    const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  };

  const openChat = () => {
    const waUrl = `https://wa.me/${PHONE_NUMBER}`;
    window.open(waUrl, "_blank");
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-80 sm:w-96 glass dark:bg-gray-900/90 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Erick Moti</h3>
                  <p className="text-green-100 text-xs">Online • Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-white hover:bg-green-600 p-1 rounded-lg transition-colors"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Welcome Message */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20">
              <p className="text-gray-800 dark:text-gray-200 text-sm">
                👋 Hello! How can I help you today? Feel free to send a message or use one of the quick options below.
              </p>
            </div>

            {/* Quick Messages */}
            <div className="p-3 border-t border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick message:</p>
              <div className="flex flex-wrap gap-2">
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(msg)}
                    className="px-3 py-1.5 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-3 border-t border-gray-100 dark:border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => {
          if (isOpen && !isMinimized) {
            setIsOpen(false);
          } else {
            setIsMinimized(false);
            setIsOpen(true);
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
        
        {/* Pulse animation */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
        )}
        
        {/* Notification dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
      </motion.button>
    </div>
  );
}

