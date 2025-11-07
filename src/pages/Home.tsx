import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Truck } from "lucide-react";

const Home = () => {
  // Get product count per category
  const categoryWithCounts = categories.map((cat) => ({
    ...cat,
    productCount: products.filter((p) => p.category === cat.name).length,
  }));

  // Featured products (first 6)
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of industrial steel and construction supplies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categoryWithCounts.map((category) => (
              <CategoryCard
                key={category.name}
                name={category.name}
                subcategories={category.subcategories}
                productCount={category.productCount}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Our most popular industrial supplies
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose J C Enterprises
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Your trusted partner for quality industrial supplies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-foreground/10">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Quality Assured</h3>
              <p className="text-sm text-secondary-foreground/80">
                All products meet international quality standards and certifications
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-foreground/10">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Timely Delivery</h3>
              <p className="text-sm text-secondary-foreground/80">
                Fast and reliable delivery network across all major cities
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-foreground/10">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Competitive Pricing</h3>
              <p className="text-sm text-secondary-foreground/80">
                Best market rates with transparent pricing and no hidden costs
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-foreground/10">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Expert Support</h3>
              <p className="text-sm text-secondary-foreground/80">
                Dedicated customer service team available to assist you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a quote or to discuss your industrial supply requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/products">Browse Catalogue</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
