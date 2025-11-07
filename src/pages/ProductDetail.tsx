import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Box, Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Product Not Found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleDownloadDatasheet = () => {
    toast({
      title: "Datasheet Download",
      description: "Product datasheet will be available soon. Please contact us for detailed specifications.",
    });
  };

  // Related products (same category, different product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left: Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <Box className="h-32 w-32 text-muted-foreground" strokeWidth={1} />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted rounded-md flex items-center justify-center cursor-pointer hover:ring-2 ring-primary transition-all"
                >
                  <Box className="h-8 w-8 text-muted-foreground" strokeWidth={1} />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                {product.subcategory}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.title}</h1>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">{product.price}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 py-4 border-y border-border">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Category</div>
                <div className="font-medium">{product.category}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Material</div>
                <div className="font-medium">{product.material}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Size</div>
                <div className="font-medium">{product.size}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Availability</div>
                <div className="font-medium text-green-600">In Stock</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="flex-1">
                <Link to={`/contact?product=${product.id}`}>Request Quote</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadDatasheet}
                className="flex-1"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Datasheet
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="text-sm text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/products/${p.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="aspect-square bg-muted rounded-md flex items-center justify-center mb-4">
                        <Box className="h-16 w-16 text-muted-foreground" strokeWidth={1} />
                      </div>
                      <Badge variant="secondary" className="w-fit mb-2">
                        {p.subcategory}
                      </Badge>
                      <CardTitle className="text-lg">{p.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
