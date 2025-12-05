import { Eye, EyeOff, Contrast, Palette } from 'lucide-react';
import { Button } from './ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem
} from './ui/dropdown-menu';
import { useAccessibility } from './AccessibilityContext';

export function AccessibilityMenu() {
  const { colorBlindMode, setColorBlindMode, highContrast, setHighContrast } = useAccessibility();

  const modes = [
    { id: 'normal', label: 'Normalny', description: 'Standardowe kolory' },
    { id: 'protanopia', label: 'Protanopia', description: 'Brak czerwieni' },
    { id: 'deuteranopia', label: 'Deuteranopia', description: 'Brak zieleni' },
    { id: 'tritanopia', label: 'Tritanopia', description: 'Brak błękitu' },
    { id: 'monochrome', label: 'Monochromatyczny', description: 'Tylko odcienie szarości' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="relative border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
          aria-label="Menu dostępności"
        >
          <Eye className="w-5 h-5" />
          {colorBlindMode !== 'normal' && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full border-2 border-white" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Palette className="w-4 h-4" />
          Dostępność wizualna
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <div className="px-2 py-1.5">
          <p className="text-sm text-gray-600 mb-2">Tryb ślepoty barw:</p>
        </div>
        
        {modes.map((mode) => (
          <DropdownMenuItem
            key={mode.id}
            onClick={() => setColorBlindMode(mode.id as any)}
            className={`cursor-pointer ${
              colorBlindMode === mode.id ? 'bg-blue-50 border-l-4 border-blue-600' : ''
            }`}
          >
            <div className="flex items-center gap-2 w-full">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                colorBlindMode === mode.id ? 'border-blue-600' : 'border-gray-300'
              }`}>
                {colorBlindMode === mode.id && (
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                )}
              </div>
              <div className="flex-1">
                <div className="text-sm">{mode.label}</div>
                <div className="text-xs text-gray-500">{mode.description}</div>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuCheckboxItem
          checked={highContrast}
          onCheckedChange={setHighContrast}
          className="cursor-pointer"
        >
          <Contrast className="w-4 h-4 mr-2" />
          Wysoki kontrast
        </DropdownMenuCheckboxItem>

        <DropdownMenuSeparator />
        
        <div className="px-2 py-2">
          <div className="text-xs text-gray-500 leading-relaxed">
            Te ustawienia dostosowują kolory i kontrast portalu dla osób z różnymi rodzajami ślepoty barw.
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
