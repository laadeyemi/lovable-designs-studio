import { motion } from "framer-motion";
import { Palette, Monitor, Megaphone, Camera, PenTool, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Create a memorable brand identity with custom logos, color palettes, and visual guidelines.",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description: "Design intuitive and beautiful interfaces that delight users and drive engagement.",
  },
  {
    icon: Megaphone,
    title: "Marketing Design",
    description: "Eye-catching marketing materials that amplify your message and boost conversions.",
  },
  {
    icon: Camera,
    title: "Photo & Video",
    description: "Professional photography and video editing to showcase your brand in its best light.",
  },
  {
    icon: PenTool,
    title: "Illustration",
    description: "Custom illustrations and graphics that bring your ideas to life with unique artistry.",
  },
  {
    icon: Layers,
    title: "Print Design",
    description: "From business cards to billboards, stunning print designs that leave an impression.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of design services to help your brand 
            stand out in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
