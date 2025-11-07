import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Circle } from "lucide-react";

interface CategoryCardProps {
  name: string;
  subcategories: string[];
  productCount: number;
}

export const CategoryCard = ({ name, subcategories, productCount }: CategoryCardProps) => {
  return (
    <Link to={`/products?category=${encodeURIComponent(name)}`}>
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <Circle className="h-8 w-8 text-foreground" strokeWidth={1.5} />
            <span className="text-xs font-medium text-muted-foreground">
              {productCount} Products
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl mb-3">{name}</CardTitle>
          <div className="space-y-1 mb-4">
            {subcategories.slice(0, 3).map((sub) => (
              <div key={sub} className="text-sm text-muted-foreground flex items-center">
                <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2" />
                {sub}
              </div>
            ))}
            {subcategories.length > 3 && (
              <div className="text-sm text-muted-foreground">
                +{subcategories.length - 3} more
              </div>
            )}
          </div>
          <div className="flex items-center text-sm font-medium group-hover:text-primary transition-colors">
            View Details
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
