import { UtensilsCrossed, Globe, Sparkles, Heart, TrendingUp, Leaf, Flame, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useAccessibility } from './AccessibilityContext';
import { colorSchemes, categoryColors } from '../utils/colorSchemes';

interface CategoryBarProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const categories = [
  { id: 'all', icon: Star, label: 'Wszystkie', pattern: '⭐' },
  { id: 'meals', icon: UtensilsCrossed, label: 'Rodzaj dania', pattern: '🍽️' },
  { id: 'world', icon: Globe, label: 'Kuchnie świata', pattern: '🌍' },
  { id: 'occasion', icon: Sparkles, label: 'Okazje', pattern: '✨' },
  { id: 'diet', icon: Heart, label: 'Dieta', pattern: '❤️' },
  { id: 'difficulty', icon: TrendingUp, label: 'Poziom trudności', pattern: '📊' },
  { id: 'seasonal', icon: Leaf, label: 'Sezonowe', pattern: '🍂' },
  { id: 'quick', icon: Flame, label: 'Szybkie', pattern: '⚡' },
];

export function CategoryBar({ selectedCategory, onSelectCategory }: CategoryBarProps) {
  const { colorBlindMode } = useAccessibility();
  const colors = colorSchemes[colorBlindMode];
  const catColors = categoryColors[colorBlindMode];

  return (
    <div className={`bg-white border-y-2 ${colors.primaryBorder} shadow-sm sticky top-20 z-40`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id || (selectedCategory === null && category.id === 'all');
            const Icon = category.icon;
            const catColor = catColors[category.id as keyof typeof catColors];
            
            return (
              <Button
                key={category.id}
                variant={isSelected ? 'default' : 'outline'}
                className={`flex-shrink-0 gap-2 relative border-2 ${
                  isSelected 
                    ? `${catColor.bg} hover:opacity-90 text-white border-transparent shadow-md` 
                    : `hover:${catColor.light} border-gray-300`
                }`}
                onClick={() => onSelectCategory(category.id === 'all' ? null : category.id)}
              >
                <Icon className="w-4 h-4" />
                {category.label}
                {isSelected && (
                  <Badge 
                    variant="secondary" 
                    className="ml-1 bg-white/20 text-white border-0 text-xs px-1.5 py-0"
                  >
                    ✓
                  </Badge>
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
