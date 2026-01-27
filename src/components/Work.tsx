import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neon Nights Brand",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
  },
  {
    title: "TechFlow Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Bloom Beauty Campaign",
    category: "Marketing Design",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
  },
  {
    title: "Urban Fusion Magazine",
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-primary text-sm font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
