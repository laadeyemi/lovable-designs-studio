import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type WorkProps = {
  /** optionally filter projects by category */
  category?: string;
  /** custom heading text (overrides default) */
  heading?: string;
  /** whether to show the "View All Projects" link */
  showAllLink?: boolean;
};

const projects = [
   {
    title: "Customized Jotter",
    category: "Print Design",
    image: "/public/jotter.jpg",
  },
  {
    title: "Goods Packaging",
    category: "Print Design",
    image: "/public/pg.jpg",
  },
  {
    title: "Customized Book",
    category: "Print Design",
    image: "/public/book.jpg",
  },
  {
    title: "Customized Nylon",
    category: "Print Design",
    image: "/public/nylon.jpg",
  },
  {
    title: "Customized mailing Nylon",
    category: "Print Design",
    image: "/public/mailing.jpg",
  },
   {
    title: "T-Shirt and Cap branding",
    category: "Print Design",
    image: "/public/tp.jpg",
  },
   {
    title: "Cooperate Gift",
    category: "Print Design",
    image: "/public/gift.jpg",
  },
  {
    title: "Business Card",
    category: "Print Design",
    image: "/public/bc.jpg",
  },
  {
    title: "Awards",
    category: "Print Design",
    image: "/public/awards.jpg",
  },
  {
    title: "Souvenirs",
    category: "Print Design",
    image: "/public/sou.jpg",
  },
   {
    title: "Frame (8by12in, 12by16in)",
    category: "Print Design",
    image: "/public/frame.jpg",
  },
   {
    title: "Banner (Large format printing)",
    category: "Print Design",
    image: "/public/banner.jpg",
  },
   {
    title: "Church social banner",
    category: "Marketing Design",
    image: "/public/overcomer.png",
  },
   {
    title: "Branding for Zubah",
    category: "Brand Identity",
    image: "/public/zubah.png",
  },
  {
    title: "Branding for De' struct-view",
    category: "Brand Identity",
    image: "/public/dsv.jpg",
  },
  {
    title: "Birthday graphics",
    category: "Marketing Design",
    image: "/public/birthday.png",
  },
  {
    title: "EG foods Campaign",
    category: "Marketing Design",
    image: "/public/mk4.png",
  },
  {
    title: "Yummy Kitchen Flyer",
    category: "Marketing Design",
    image: "/public/rb.png",
  },
  {
    title: "E-Shop Setup",
    category: "Online Service",
    image: "https://images.unsplash.com/photo-1590608897129-79d74590c0f2?w=800&h=600&fit=crop",
  },
  {
    title: "Festival Promo Video",
    category: "Photo & Video",
    image: "https://images.unsplash.com/photo-1515165562835-c1890aa78a61?w=800&h=600&fit=crop",
  },
];

export function Work({ category, heading, showAllLink = true }: WorkProps) {
  const filtered = category
    ? projects.filter((p) => p.category === category)
    : projects;

  if (filtered.length === 0) return null;

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
              {heading ?? (
                <>
                  Featured <span className="text-gradient">Work</span>
                </>
              )}
            </h2>
          </div>
          {showAllLink && (
            <a
              href="#"
              className="group flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            >
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, index) => (
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
