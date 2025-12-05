import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { useAccessibility } from './AccessibilityContext';
import { colorSchemes } from '../utils/colorSchemes';

interface SearchSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function SearchSection({ searchQuery, onSearchChange }: SearchSectionProps) {
  const { colorBlindMode } = useAccessibility();
  const colors = colorSchemes[colorBlindMode];
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-gray-800 mb-2">Znajdź przepis idealny dla Ciebie</h2>
          <p className="text-gray-600">Wyszukaj po nazwie, składnikach lub kategorii</p>
        </div>
        <div className="relative">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${colors.primaryText} opacity-60`} />
          <Input
            type="text"
            placeholder="Wpisz np. 'spaghetti carbonara', 'zupa pomidorowa', 'ciasto czekoladowe'..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`pl-12 pr-4 py-6 text-lg border-2 ${colors.primaryBorder} focus:${colors.primaryBorder} focus:ring-2 focus:ring-offset-2 rounded-2xl shadow-lg`}
            aria-label="Wyszukaj przepis"
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          <span className="text-sm text-gray-600">Popularne:</span>
          {['szybki obiad', 'zdrowe śniadanie', 'wegetariańskie', 'ciasto', 'zupa'].map((tag) => (
            <button
              key={tag}
              onClick={() => onSearchChange(tag)}
              className={`px-3 py-1 ${colors.primaryLight} hover:${colors.primaryBg} hover:text-white ${colors.primaryText} rounded-full text-sm transition-colors border border-transparent hover:border-current`}
              aria-label={`Wyszukaj: ${tag}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
