import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Sprout, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Shield, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "For Farmers",
      description: "Sell directly to buyers, get fair prices, and access farming guidance",
      color: "text-primary",
    },
    {
      icon: ShoppingCart,
      title: "For Buyers",
      description: "Buy fresh produce and livestock directly from trusted farmers",
      color: "text-accent",
    },
    {
      icon: Smartphone,
      title: "Offline Support",
      description: "Works even without internet. Perfect for rural areas",
      color: "text-secondary",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Protected escrow system ensures safe transactions for all",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Real-time pricing and market trends to maximize profits",
      color: "text-accent",
    },
    {
      icon: CheckCircle,
      title: "Financial Literacy",
      description: "Learn budgeting, savings, and how to access loans",
      color: "text-secondary",
    },
  ];

  const benefits = [
    "Fair trade between farmers and buyers",
    "Escrow payment protection",
    "Weather updates and farming tips",
    "Multiple payment methods",
    "Order tracking and delivery",
    "Works offline in rural areas",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">AgriWise</span>
          </div>
          <Button variant="hero" onClick={() => navigate("/auth")} size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img 
          src={heroImage} 
          alt="Nigerian farmers working in field" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering Nigerian Farmers Through Fair Trade
            </h1>
            <p className="text-xl text-white/95 mb-8 leading-relaxed">
              Connect farmers with buyers. Access farming guidance, market prices, and secure payments. 
              Even works offline in rural areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="warm" 
                size="lg" 
                onClick={() => navigate("/auth")}
                className="text-lg h-14 px-8"
              >
                Join as Farmer
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/auth")}
                className="text-lg h-14 px-8 bg-white hover:bg-white/90 text-primary border-white"
              >
                Join as Buyer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Every User</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a farmer, buyer, or helping in rural areas, AgriWise has you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">
                    <feature.icon className={`h-12 w-12 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose AgriWise?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're building a platform that puts farmers first, ensures fair prices, 
                and makes agricultural trade simple and secure for everyone.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
                <CardDescription className="text-base">
                  Join thousands of farmers and buyers already using AgriWise
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-primary">1000+</p>
                    <p className="text-sm text-muted-foreground">Farmers</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-accent">500+</p>
                    <p className="text-sm text-muted-foreground">Buyers</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-secondary">₦5M+</p>
                    <p className="text-sm text-muted-foreground">Traded</p>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  variant="hero" 
                  size="lg"
                  onClick={() => navigate("/auth")}
                >
                  Create Free Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">AgriWise</span>
          </div>
          <p className="text-muted-foreground">
            Bridging the gap between farmers and buyers in Nigeria
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
