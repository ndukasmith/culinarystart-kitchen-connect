
import KitchenCard from "@/components/KitchenCard";
import { Kitchen } from "@/data/kitchenData";

interface KitchenGridProps {
  kitchens: Kitchen[];
  searchTerm: string;
}

const KitchenGrid = ({ kitchens, searchTerm }: KitchenGridProps) => {
  const filteredKitchens = kitchens.filter(kitchen =>
    kitchen.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kitchen.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Kitchen Grid - 2x2 layout for first 4, then 1 below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
          {filteredKitchens.slice(0, 4).map((kitchen) => (
            <KitchenCard key={kitchen.id} kitchen={kitchen} />
          ))}
        </div>
        
        {/* Fifth kitchen card centered below */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 lg:w-1/2">
            {filteredKitchens.slice(4, 5).map((kitchen) => (
              <KitchenCard key={kitchen.id} kitchen={kitchen} />
            ))}
          </div>
        </div>

        {filteredKitchens.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No kitchens found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default KitchenGrid;
