import { ChefHat, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { useAccessibility } from './AccessibilityContext';
import { colorSchemes } from '../utils/colorSchemes';

export function Footer() {
  const { colorBlindMode } = useAccessibility();
  const colors = colorSchemes[colorBlindMode];
  
  return (
    <footer className={`bg-gradient-to-br ${colors.primary} text-white mt-16`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <ChefHat className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-white">Gotuj ze Smakiem</h3>
              </div>
            </div>
            <p className="text-orange-100 mb-4">
              Odkrywaj, gotuj i dziel się swoimi ulubionymi przepisami z całą społecznością.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Przepisy */}
          <div>
            <h4 className="text-white mb-4">Przepisy</h4>
            <ul className="space-y-2 text-orange-100">
              <li><a href="#" className="hover:text-white transition-colors">Śniadania</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Obiady</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kolacje</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Desery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Przekąski</a></li>
            </ul>
          </div>

          {/* Kategorie */}
          <div>
            <h4 className="text-white mb-4">Kategorie</h4>
            <ul className="space-y-2 text-orange-100">
              <li><a href="#" className="hover:text-white transition-colors">Kuchnia włoska</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kuchnia azjatycka</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wegetariańskie</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Zdrowe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Szybkie dania</a></li>
            </ul>
          </div>

          {/* Informacje */}
          <div>
            <h4 className="text-white mb-4">Informacje</h4>
            <ul className="space-y-2 text-orange-100">
              <li><a href="#" className="hover:text-white transition-colors">O nas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regulamin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Polityka prywatności</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <Mail className="w-8 h-8 mx-auto mb-3" />
            <h4 className="text-white mb-2">Newsletter</h4>
            <p className="text-orange-100 mb-4">
              Zapisz się do newslettera i otrzymuj najnowsze przepisy!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Twój adres e-mail"
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-orange-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-2 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors">
                Zapisz się
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-orange-100 text-sm mt-8 pt-8 border-t border-white/20">
          <p>© 2025 Gotuj ze Smakiem. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
