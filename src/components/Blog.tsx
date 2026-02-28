import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { posts } from "@/lib/posts";

// show latest three posts by date
const latestPosts = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

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
            href="/blog"
            className="group flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            View All Posts
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  <a href={`/blog/${post.id}`}>{post.title}</a>
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
