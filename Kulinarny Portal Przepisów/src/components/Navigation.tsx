import { ChefHat, Home, BookOpen, Lightbulb, PlusCircle, Calendar, Users, Info, Mail, User } from 'lucide-react';
import { Button } from './ui/button';
import { AccessibilityMenu } from './AccessibilityMenu';
import { useAccessibility } from './AccessibilityContext';
import { colorSchemes } from '../utils/colorSchemes';

export function Navigation() {
  const { colorBlindMode } = useAccessibility();
  const colors = colorSchemes[colorBlindMode];
  
  const menuItems = [
    { icon: Home, label: 'Strona główna', href: '#' },
    { icon: BookOpen, label: 'Przepisy', href: '#przepisy' },
    { icon: Lightbulb, label: 'Inspiracje', href: '#inspiracje' },
    { icon: PlusCircle, label: 'Dodaj przepis', href: '#dodaj' },
    { icon: Calendar, label: 'Planer', href: '#planer' },
    { icon: Users, label: 'Społeczność', href: '#spolecznosc' },
    { icon: Info, label: 'O nas', href: '#o-nas' },
    { icon: Mail, label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b-2 ${colors.primaryBorder}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`bg-gradient-to-br ${colors.primary} p-3 rounded-2xl shadow-lg rotate-3 hover:rotate-0 transition-transform`}>
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className={colors.primaryText}>Gotuj ze Smakiem</h1>
              <p className={`text-xs ${colors.primaryText} opacity-80`}>Twoje kulinarne inspiracje</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:${colors.primaryLight} transition-colors text-gray-700 hover:${colors.primaryText}`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Accessibility Menu & User Profile */}
          <div className="flex items-center gap-2">
            <AccessibilityMenu />
            <Button className={`bg-gradient-to-r ${colors.primary} hover:${colors.primaryHover} shadow-md border-2 border-transparent`}>
              <User className="w-4 h-4 mr-2" />
              Zaloguj się
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden pb-4 flex flex-wrap gap-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white hover:bg-orange-100 transition-colors text-gray-700 hover:text-orange-600 text-xs"
            >
              <item.icon className="w-3 h-3" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
