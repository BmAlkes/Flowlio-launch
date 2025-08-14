import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import flowlio from './assets/logowithtext.svg'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown logic com data fixa
  useEffect(() => {
    // Data específica: 15 de setembro de 2024 às 20:00
    const targetDate = new Date('2024-09-15T20:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // Countdown terminou
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    // Atualizar imediatamente
    updateCountdown();

    // Atualizar a cada segundo
    const timer = setInterval(updateCountdown, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Subtle background decorations - Responsivo */}
      <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-5 right-5 sm:top-10 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
      <div className="absolute -bottom-5 left-10 sm:-bottom-8 sm:left-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Logo - Responsivo */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <img 
            src={flowlio} 
            alt="Flowlio Logo" 
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto max-w-full"
          />
        </div>

        {/* Coming Soon Badge - Responsivo */}
        <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-blue-100 rounded-full mb-8 sm:mb-12 animate-pulse">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-2" />
          <span className="text-blue-700 font-medium text-xs sm:text-sm">COMING SOON</span>
        </div>

        {/* Main Hero Text - Responsivo */}
        <div className="text-center mb-12 sm:mb-16 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight px-2">
            Work <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Better</span>, Track
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Faster, Grow Stronger
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-4">
            The revolutionary workflow platform that transforms how teams collaborate, 
            manage projects, and achieve extraordinary results together.
          </p>
        </div>

        {/* Countdown Section - Responsivo */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 mb-8 sm:mb-12 border border-gray-100 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8 text-center">
            🚀 Launching on September 15th at 8PM
          </h2>
          
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-xs md:text-sm text-gray-500 uppercase tracking-wide font-medium">
                    {unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Data específica do lançamento */}
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-sm sm:text-base text-gray-500">
              Mark your calendars! We can't wait to share this journey with you.
            </p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default App