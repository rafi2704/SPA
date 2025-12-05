import { Clock, TrendingUp, Star, MessageCircle, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useState } from 'react';
import { useAccessibility } from './AccessibilityContext';
import { colorSchemes } from '../utils/colorSchemes';

interface Recipe {
  id: number;
  title: string;
  image: string;
  category: string;
  time: string;
  difficulty: string;
  rating: number;
  reviews: number;
  tags: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { colorBlindMode, highContrast } = useAccessibility();
  const colors = colorSchemes[colorBlindMode];

  return (
    <Card className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 ${colors.primaryBorder} hover:border-current bg-white ${highContrast ? 'shadow-lg' : ''}`}>
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 bg-white/90 hover:bg-white backdrop-blur-sm transition-all border-2 ${
            isFavorite ? 'text-red-500 border-red-500' : 'text-gray-400 border-gray-300'
          }`}
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={isFavorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>
        {isFavorite && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white border-0">
            ★ Ulubione
          </Badge>
        )}
        <div className="absolute bottom-3 left-3 flex gap-2">
          {recipe.tags.slice(0, 2).map((tag) => (
            <Badge 
              key={tag} 
              className={`bg-white/95 ${colors.primaryText} hover:bg-white backdrop-blur-sm border ${colors.primaryBorder}`}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className={`text-gray-800 mb-3 group-hover:${colors.primaryText} transition-colors`}>
          {recipe.title}
        </h3>

        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <div className={`flex items-center gap-1 px-2 py-1 ${colors.primaryLight} rounded-md`}>
            <Clock className={`w-4 h-4 ${colors.primaryText}`} />
            <span className="sr-only">Czas przygotowania:</span>
            <span>{recipe.time}</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-md">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="sr-only">Poziom trudności:</span>
            <span>{recipe.difficulty}</span>
          </div>
        </div>

        <div className={`flex items-center justify-between pt-3 border-t-2 ${colors.primaryBorder}`}>
          <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 rounded-md">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-gray-700">{recipe.rating}</span>
            <span className="text-gray-400 text-sm">({recipe.reviews})</span>
            <span className="sr-only">gwiazdek na 5</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`${colors.primaryText} hover:${colors.primaryText} hover:${colors.primaryLight} border border-transparent hover:border-current`}
            aria-label={`Komentarze do przepisu: ${recipe.title}`}
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Komentarze
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
