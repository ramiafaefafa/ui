'use client'

import { useState } from 'react'
import { MessageCircle, QrCode, Sparkles, ArrowRight, Users, Clock, CreditCard } from 'lucide-react'

export default function Home() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Pocket Waiter AI</h1>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowDemo(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Try Demo
              </button>
              <a href="/chat" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Start Ordering
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-6">
            Your Personal
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              AI Waiter
            </span>
            is Here
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Skip the wait, get personalized recommendations, and enjoy a seamless dining 
            experience powered by advanced AI technology. 🤖🍽️
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/chat" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
              Start Ordering Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/menu" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-gray-400 transition-colors">
              Browse Menu
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <QrCode className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-center">Scan & Start</h3>
            <p className="text-gray-600 text-center">Simply scan the QR code at your table to begin your AI-powered dining experience</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-center">Chat with AI</h3>
            <p className="text-gray-600 text-center">Tell our AI about your preferences, dietary restrictions, and mood</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Sparkles className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-center">Smart Recommendations</h3>
            <p className="text-gray-600 text-center">Get personalized meal suggestions based on your taste and dining style</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <CreditCard className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-center">Seamless Payment</h3>
            <p className="text-gray-600 text-center">Pay securely through the app with cards, Apple Pay, and more</p>
          </div>
        </div>

        {/* Demo Chat */}
        {showDemo && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h4 className="text-2xl font-bold mb-6 text-center">🤖 AI Waiter Demo</h4>
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white p-4 rounded-2xl max-w-sm">
                  "I want something vegetarian and not too spicy for dinner 🌱"
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 p-4 rounded-2xl max-w-sm">
                  "Perfect! I recommend our Mushroom Risotto with truffle oil. It's creamy, flavorful, and one of our most popular vegetarian dishes. Would you like to see some appetizers to start? 🍄✨"
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white p-4 rounded-2xl max-w-sm">
                  "That sounds perfect! Yes, show me appetizers please"
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 p-4 rounded-2xl max-w-sm">
                  "Excellent choice! For appetizers, I suggest our Truffle Arancini ($16) - crispy risotto balls that pair beautifully with your main course. Shall I add both to your order? 🍽️"
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <button 
                onClick={() => setShowDemo(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Close Demo
              </button>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">10k+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">50+</div>
            <div className="text-gray-600">Partner Restaurants</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">2min</div>
            <div className="text-gray-600">Average Order Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">99%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  )
}
