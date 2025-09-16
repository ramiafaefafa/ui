export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">
          🤖 Pocket Waiter AI
        </h1>
        
        <p className="text-2xl text-gray-700 mb-8">
          Your Personal AI Restaurant Waiter
        </p>

        <div className="bg-white p-8 rounded-3xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">How it works:</h2>
          <div className="text-left space-y-4 text-lg">
            <p>📱 1. Scan QR code at your table</p>
            <p>💬 2. Chat with our AI waiter</p>
            <p>🍽️ 3. Get personalized food recommendations</p>
            <p>💳 4. Order and pay through the app</p>
          </div>
        </div>

        <div className="space-y-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:bg-blue-700 w-full">
            🚀 Start Ordering Now
          </button>
          
          <button className="bg-green-600 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:bg-green-700 w-full">
            📋 Browse Menu
          </button>
          
          <button className="bg-purple-600 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:bg-purple-700 w-full">
            👨‍💼 Restaurant Admin
          </button>
        </div>

        <div className="mt-12 bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-4">🔥 Demo Restaurant</h3>
          <p className="text-gray-600">The Golden Fork - AI-Powered Dining</p>
          <p className="text-sm text-gray-500 mt-2">
            Table QR codes available • AI Chat enabled • Payments ready
          </p>
        </div>
      </div>
    </div>
  )
}
