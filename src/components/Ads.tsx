import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Target,
    title: "Targeted Reach",
    description: "Reach your ideal audience with precision targeting across multiple platforms.",
  },
  {
    icon: Zap,
    title: "High-Impact Creatives",
    description: "Stunning ad creatives designed to capture attention and drive conversions.",
  },
  {
    icon: TrendingUp,
    title: "Performance Focused",
    description: "Data-driven strategies that maximize your ROI and campaign performance.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Comprehensive reporting and insights to track your campaign success.",
  },
];

export function Ads() {
  return (
    <section id="ads" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Advertising Services
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Run <span className="text-gradient">Powerful Ads</span> That Convert
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Amplify your brand's reach with our comprehensive advertising services. 
              From social media ads to display campaigns, we create compelling visuals 
              and strategies that drive real results.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/Quote"> Start Advertising </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/ads">View Ad Packages</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl bg-card border border-border shadow-card">
              {/* Glow Effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-primary opacity-10 blur-xl" />
              
              <div className="relative">
                <h3 className="font-display text-2xl font-bold text-foreground mb-8">
                  Campaign Performance
                </h3>

                {/* Stats */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Click-through Rate</span>
                      <span className="font-display font-bold text-primary">4.8%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Conversion Rate</span>
                      <span className="font-display font-bold text-primary">12.3%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "72%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Brand Awareness</span>
                      <span className="font-display font-bold text-primary">+156%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Avg. ROI</div>
                      <div className="font-display text-3xl font-bold text-gradient">340%</div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
