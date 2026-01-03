export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-900">
            YourBrand
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">
              About
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="/signin" className="text-gray-600 hover:text-gray-900 transition">
              Log in
            </a>
            <a
              href="/signup"
              className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build something amazing today
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            The simplest way to transform your ideas into reality. Start building in minutes, not hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup"
              className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-lg font-medium"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-lg hover:border-gray-300 transition text-lg font-medium"
            >
              Watch Demo
            </a>
          </div>

          {/* Simple visual element */}
          <div className="mt-20 relative">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-400 text-lg">Product Preview</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Everything you need
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">Built for speed and performance from the ground up.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h3>
              <p className="text-gray-600">Intuitive interface that anyone can master in minutes.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600">Your data is encrypted and protected at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who are already building amazing things.
          </p>
          <a
            href="/signup"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-lg font-medium"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600">
            © 2024 YourBrand. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Terms</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
