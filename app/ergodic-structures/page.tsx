export default function ErgodicStructuresPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            What the Hell Does This Mean?
          </h1>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-400">
              "Build on structurally non ergodic structures..."
            </h2>
            <p className="text-lg text-gray-300 italic">
              Breaking down the academic jargon into practical Bitcoin SV wisdom
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-gray-900 rounded-lg p-6 border border-orange-500/20">
              <h3 className="text-xl font-bold mb-4 text-orange-400">The Academic Gibberish Translation</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Someone dropped this phrase and yes, it sounds like they swallowed a textbook. But buried in the 
                  academic pretension might be a decent point about building sustainable businesses.
                </p>
                <div className="bg-black/50 rounded-lg p-4 border-l-4 border-orange-500">
                  <p className="text-orange-200">
                    <strong>Ergodic:</strong> In simple terms, a system where past performance predicts future results. 
                    Think slot machines - over time, the house always wins.
                  </p>
                  <p className="text-orange-200 mt-2">
                    <strong>Non-ergodic:</strong> Systems where history doesn't repeat reliably. 
                    Think entrepreneurship - past failures don't guarantee future failures.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gray-900 rounded-lg p-6 border border-orange-500/20">
              <h3 className="text-xl font-bold mb-4 text-orange-400">What This Actually Means for BSV Builders</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  The best approximation: <strong>Build businesses that are robust and can handle real-world payments.</strong>
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-black/50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-300 mb-2">❌ Fragile Structures</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Crypto-only payment rails</li>
                      <li>• Speculation-dependent models</li>
                      <li>• Pure DeFi token games</li>
                      <li>• "Number go up" business plans</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-300 mb-2">✅ Robust Structures</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Credit card + BSV payments</li>
                      <li>• Real utility and value creation</li>
                      <li>• Sustainable revenue models</li>
                      <li>• Traditional business fundamentals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-900 rounded-lg p-6 border border-orange-500/20">
              <h3 className="text-xl font-bold mb-4 text-orange-400">The Two-Dimensional Guy's Point</h3>
              <p className="text-gray-300 mb-4">
                Look, the person who said this might be operating in academic abstract-land, but sometimes 
                even broken clocks are right twice a day.
              </p>
              <div className="bg-black/50 rounded-lg p-4">
                <p className="text-orange-200">
                  <strong>The actual insight:</strong> Don't build your BSV business like it's 2017 crypto. 
                  Build it like it's a real company that needs to make real money from real customers 
                  who pay with real payment methods (including but not limited to BSV).
                </p>
              </div>
            </section>

            <section className="bg-gray-900 rounded-lg p-6 border border-orange-500/20">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Practical Translation for BSV Builders</h3>
              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-300 mb-2">1. Payment Infrastructure</h4>
                  <p className="text-gray-300 text-sm">
                    Accept credit cards, PayPal, AND BSV. Don't force users into BSV-only workflows unless 
                    there's a compelling reason.
                  </p>
                </div>
                
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-300 mb-2">2. Business Model Reality</h4>
                  <p className="text-gray-300 text-sm">
                    Your revenue should come from providing value, not from token appreciation or 
                    complex DeFi mechanisms that only crypto natives understand.
                  </p>
                </div>
                
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-300 mb-2">3. User Experience First</h4>
                  <p className="text-gray-300 text-sm">
                    Build for normal people who don't care about blockchain tech. The BSV benefits 
                    (micropayments, data integrity, etc.) should be invisible infrastructure.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/30">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Bottom Line</h3>
              <p className="text-gray-300">
                Strip away the academic language, and you get solid advice: Build a real business 
                that uses BSV's unique capabilities while remaining accessible to mainstream users 
                and payment systems. Don't get trapped in crypto-native thinking.
              </p>
              <p className="text-orange-200 mt-4 font-semibold">
                Sometimes the most pretentious advice contains the most practical wisdom.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}