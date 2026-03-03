import React, { useMemo, useState } from "react";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { posts } from "@/lib/posts";

const Blog = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  
  const categories = useMemo(() => {
    return Array.from(new Set(posts.map((p) => p.category)));
  }, []);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory = category ? p.category === category : true;
      const matchesQuery = query
        ? [p.title, p.excerpt, (p.tags || []).join(" ")].join(" ").toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="min-h-screen bg-background">
      <AdBanner />
      <Navbar />

      <main className="container mx-auto px-6 py-24">
        <header className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="font-display text-4xl font-bold mb-2">News and Tips</h1>
          <p className="text-muted-foreground">Educational news, tips and other articles</p>
        </header>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between">
            <div className="flex items-center gap-3 w-full md:w-1/2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts..."
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setCategory(null)}
                className={`px-3 py-2 rounded-md text-sm ${category === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/5"}`}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-2 rounded-md text-sm ${category === c ? "bg-primary text-primary-foreground" : "bg-muted-foreground/5"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <section className="grid md:grid-cols-2 gap-6">
            {filtered.map((post) => (
              <article key={post.id} className="rounded-2xl border border-border p-6 bg-card">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold mb-2">
                      <Link to={`/blog/${post.id}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <div className="text-xs text-muted-foreground mb-3">{post.date} • {post.category}</div>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="text-sm text-muted-foreground">{(post.tags || []).join(", ")}</div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground">No posts match your search.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
