import { RecipeCard } from './RecipeCard';

interface RecipeGridProps {
  selectedCategory: string | null;
  searchQuery: string;
}

const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1722938687754-d77c159da3c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjBmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYxMzEyNzA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'world',
    time: '30 min',
    difficulty: 'Łatwy',
    rating: 4.8,
    reviews: 245,
    tags: ['Włoska', 'Makaron', 'Szybkie']
  },
  {
    id: 2,
    title: 'Świeża sałatka grecka',
    image: 'https://images.unsplash.com/photo-1606757819934-d61a9f7279d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwaGVhbHRoeXxlbnwxfHx8fDE3NjEyNDM2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'diet',
    time: '15 min',
    difficulty: 'Bardzo łatwy',
    rating: 4.6,
    reviews: 189,
    tags: ['Wegetariańska', 'Zdrowa', 'Szybkie']
  },
  {
    id: 3,
    title: 'Czekoladowe brownie',
    image: 'https://images.unsplash.com/photo-1609501885647-9cf9deffdb23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtpbmclMjBkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NjEyNjc0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'meals',
    time: '45 min',
    difficulty: 'Średni',
    rating: 4.9,
    reviews: 432,
    tags: ['Deser', 'Pieczenie', 'Czekolada']
  },
  {
    id: 4,
    title: 'Klasyczne naleśniki',
    image: 'https://images.unsplash.com/photo-1513104610352-6a2f4d7525c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBmb29kJTIwc3Vubnl8ZW58MXx8fHwxNzYxMzEyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'meals',
    time: '25 min',
    difficulty: 'Łatwy',
    rating: 4.7,
    reviews: 356,
    tags: ['Śniadanie', 'Tradycyjne', 'Proste']
  },
  {
    id: 5,
    title: 'Rozgrzewająca zupa krem',
    image: 'https://images.unsplash.com/photo-1730900979914-7e34981744b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VwJTIwYm93bCUyMHdhcm18ZW58MXx8fHwxNzYxMzEyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'seasonal',
    time: '40 min',
    difficulty: 'Łatwy',
    rating: 4.5,
    reviews: 178,
    tags: ['Zupa', 'Sezonowe', 'Comfort food']
  },
  {
    id: 6,
    title: 'Sałatka z quinoa i awokado',
    image: 'https://images.unsplash.com/photo-1606757819934-d61a9f7279d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwaGVhbHRoeXxlbnwxfHx8fDE3NjEyNDM2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'diet',
    time: '20 min',
    difficulty: 'Bardzo łatwy',
    rating: 4.7,
    reviews: 289,
    tags: ['Wegańska', 'Fit', 'Superfoods']
  },
  {
    id: 7,
    title: 'Lasagne bolognese',
    image: 'https://images.unsplash.com/photo-1722938687754-d77c159da3c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjBmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYxMzEyNzA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'world',
    time: '90 min',
    difficulty: 'Trudny',
    rating: 4.9,
    reviews: 512,
    tags: ['Włoska', 'Rodzinne', 'Klasyka']
  },
  {
    id: 8,
    title: 'Tiramisu domowe',
    image: 'https://images.unsplash.com/photo-1609501885647-9cf9deffdb23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtpbmclMjBkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NjEyNjc0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'occasion',
    time: '30 min + chłodzenie',
    difficulty: 'Średni',
    rating: 4.8,
    reviews: 398,
    tags: ['Deser', 'Włoska', 'Okazje']
  }
];

export function RecipeGrid({ selectedCategory, searchQuery }: RecipeGridProps) {
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = !selectedCategory || recipe.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 pb-16">
      <div className="mb-8">
        <h2 className="text-gray-800 mb-2">
          {selectedCategory ? 'Wybrane przepisy' : 'Wszystkie przepisy'}
        </h2>
        <p className="text-gray-600">
          {filteredRecipes.length} {filteredRecipes.length === 1 ? 'przepis' : 'przepisów'}
        </p>
      </div>

      {filteredRecipes.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            Nie znaleziono przepisów spełniających kryteria wyszukiwania
          </p>
          <p className="text-gray-400 mt-2">
            Spróbuj zmienić filtry lub wyszukaj czegoś innego
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
