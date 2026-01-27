import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "The Psychology of Color in Brand Design",
    excerpt: "Discover how color choices impact brand perception and customer behavior in this deep dive into color psychology.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
    category: "Design Tips",
    readTime: "5 min read",
    date: "Jan 24, 2026",
  },
  {
    title: "2026 Design Trends That Will Dominate",
    excerpt: "From AI-powered design tools to neo-brutalism, explore the trends shaping the future of visual design.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
    category: "Trends",
    readTime: "8 min read",
    date: "Jan 20, 2026",
  },
  {
    title: "Building a Cohesive Brand Identity",
    excerpt: "Learn the essential steps to create a brand identity that resonates with your audience and stands the test of time.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    category: "Branding",
    readTime: "6 min read",
    date: "Jan 15, 2026",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24">
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
              Insights
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Latest from <span className="text-gradient">Blog</span>
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            View All Posts
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Image */}
              <a href="#" className="block overflow-hidden rounded-xl mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                <a href="#">{post.title}</a>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
