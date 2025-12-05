import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useAccessibility } from './AccessibilityContext';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1629360636524-ac84e22911a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwaW5ncmVkaWVudHMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjEzMTI3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Odkryj nowe smaki',
    subtitle: 'Tysiące przepisów czeka na Ciebie',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1722938687754-d77c159da3c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjBmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYxMzEyNzA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Kuchnia włoska',
    subtitle: 'Autentyczne przepisy prosto z Włoch',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1606757819934-d61a9f7279d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwaGVhbHRoeXxlbnwxfHx8fDE3NjEyNDM2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Zdrowe odżywianie',
    subtitle: 'Smaczne i pełne wartości odżywczych',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1609501885647-9cf9deffdb23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtpbmclMjBkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NjEyNjc0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Słodkie chwile',
    subtitle: 'Desery, które zachwycą każdego',
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { colorBlindMode } = useAccessibility();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-black/50`} />
          <Badge 
            className="absolute top-6 left-6 bg-white/95 text-gray-900 text-lg px-4 py-2 border-2 border-gray-900"
          >
            {index + 1} / {slides.length}
          </Badge>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-4xl px-4">
              <h2 className="text-white mb-4 drop-shadow-lg [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">{slide.title}</h2>
              <p className="text-white/95 text-xl mb-8 drop-shadow-md [text-shadow:_1px_1px_4px_rgb(0_0_0_/_60%)]">{slide.subtitle}</p>
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl border-4 border-gray-900"
              >
                Zobacz przepisy
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm text-gray-900 border-2 border-gray-900"
        onClick={prevSlide}
        aria-label="Poprzedni slajd"
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm text-gray-900 border-2 border-gray-900"
        onClick={nextSlide}
        aria-label="Następny slajd"
      >
        <ChevronRight className="w-8 h-8" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Nawigacja slajdów">
        {slides.map((slide, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Przejdź do slajdu ${index + 1}: ${slide.title}`}
            className={`h-3 rounded-full transition-all border-2 border-white ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75 w-3'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
