import { CheckCircle, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About J C Enterprises
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Established in 2010, J C Enterprises has been a leading supplier of industrial steel 
              and construction materials across India. We pride ourselves on delivering quality products, 
              competitive pricing, and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Quality First</h3>
              <p className="text-muted-foreground">
                We source only the highest quality materials that meet or exceed industry standards.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Customer Focus</h3>
              <p className="text-muted-foreground">
                Our customers' success is our success. We're committed to understanding and meeting their needs.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="text-muted-foreground">
                We conduct business with honesty and transparency in all our dealings.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                We continuously strive to improve our products, services, and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
              Our Capabilities
            </h2>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Comprehensive Product Range</h3>
                <p className="text-muted-foreground">
                  From pipes and sheets to TMT rods and stainless steel materials, we maintain a vast 
                  inventory of over 5,000 products to serve diverse industrial needs.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Rapid Delivery Network</h3>
                <p className="text-muted-foreground">
                  Our strategically located warehouses and logistics partnerships ensure timely delivery 
                  to construction sites and manufacturing facilities across India.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
                <p className="text-muted-foreground">
                  Our experienced team provides expert guidance on material selection, specifications, 
                  and application to ensure you get the right products for your project.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
                <p className="text-muted-foreground">
                  We offer cutting, fabrication, and custom sizing services to meet specific project 
                  requirements and minimize waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To be the most trusted and reliable supplier of industrial steel and construction materials 
              in India, delivering exceptional value through quality products, competitive pricing, and 
              outstanding customer service. We are committed to supporting India's infrastructure development 
              and industrial growth by providing the materials that build our nation's future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
