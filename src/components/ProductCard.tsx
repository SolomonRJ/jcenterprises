import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { Box } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg border-2">
      <CardHeader className="pb-4">
        <div className="aspect-square bg-muted rounded-md flex items-center justify-center mb-4">
          <Box className="h-16 w-16 text-muted-foreground" strokeWidth={1} />
        </div>
        <Badge variant="secondary" className="w-fit mb-2">
          {product.subcategory}
        </Badge>
        <h3 className="font-semibold text-lg leading-tight">{product.title}</h3>
      </CardHeader>
      
      <CardContent className="flex-grow space-y-2">
        <div className="text-sm text-muted-foreground space-y-1">
          <div className="flex justify-between">
            <span>Material:</span>
            <span className="font-medium text-foreground">{product.material}</span>
          </div>
          <div className="flex justify-between">
            <span>Size:</span>
            <span className="font-medium text-foreground">{product.size}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 pt-2">
          {product.description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-4 border-t flex flex-col gap-2">
        <div className="w-full flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Price:</span>
          <span className="text-lg font-bold">{product.price}</span>
        </div>
        <div className="w-full grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to={`/contact?product=${product.id}`}>Request Quote</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
