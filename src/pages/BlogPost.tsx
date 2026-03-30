import React from "react";
import { useParams, Link } from "react-router-dom";
import { AdBanner } from "@/components/AdBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getPostById } from "@/lib/posts";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostById(slug);

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <AdBanner />
      <Navbar />

      <main className="container mx-auto px-6 py-24">
        <article className="prose prose-invert max-w-3xl mx-auto">
          <h1>{post.title}</h1>
          <div className="text-sm text-muted-foreground mb-4">{post.date} • {post.category}</div>
          <p className="lead">{post.excerpt}</p>
          <div className="mt-6" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          {post.tags?.length ? (
            <div className="mt-8 text-sm text-muted-foreground">Tags: {post.tags.join(", ")}</div>
          ) : null}

          <div className="mt-8">
            <Link to="/blog" className="text-primary underline">← Back to blog</Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
