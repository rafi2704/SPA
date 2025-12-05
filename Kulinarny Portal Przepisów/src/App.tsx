import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSlider } from './components/HeroSlider';
import { CategoryBar } from './components/CategoryBar';
import { SearchSection } from './components/SearchSection';
import { RecipeGrid } from './components/RecipeGrid';
import { Footer } from './components/Footer';
import { AccessibilityProvider, useAccessibility } from './components/AccessibilityContext';
import { colorSchemes } from './utils/colorSchemes';

function AppContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { colorBlindMode, highContrast } = useAccessibility();
  
  const colors = colorSchemes[colorBlindMode];

  return (
    <div className={`min-h-screen bg-gradient-to-b ${colors.gradient} ${highContrast ? 'contrast-125' : ''}`}>
      <Navigation />
      <HeroSlider />
      <CategoryBar 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      <SearchSection 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery} 
      />
      <RecipeGrid 
        selectedCategory={selectedCategory} 
        searchQuery={searchQuery} 
      />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AccessibilityProvider>
      <AppContent />
    </AccessibilityProvider>
  );
}
