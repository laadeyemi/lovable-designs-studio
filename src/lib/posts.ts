export type Post = {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
};

export const posts: Post[] = [
  {
    id: "swiftpay-launch",
    title: "How Swiftpay increased conversions by 48%",
    category: "Performance",
    date: "2026-01-10",
    excerpt: "A short case study on the Swiftpay paid acquisition campaign and conversion lift.",
    content:
      "We redesigned creatives and rewrote landing copy, ran an A/B test and scaled the winning variation. The result: 48% uplift in conversions and 3.4x ROAS over three months.",
    tags: ["case-study", "ads"],
  },
  {
    id: "creative-patterns",
    title: "Creative patterns that actually convert in 2026",
    category: "Design",
    date: "2025-11-02",
    excerpt: "Design patterns and compositional decisions that help ads cut through the feed.",
    content:
      "Use bold headlines, strong contrast, single-CTA messaging and deliberate motion to increase attention and CTR.",
    tags: ["design", "ux"],
  },
  {
    id: "performance-stack",
    title: "Building a performance stack for fast growth",
    category: "Performance",
    date: "2025-08-19",
    excerpt: "The tools and analytics we rely on for scalable performance marketing.",
    content:
      "From proper UTM tagging to conversion API and cohort-based attribution — a practical checklist for performance teams.",
    tags: ["analytics", "growth"],
  },
];

export function getPostById(id?: string | undefined) {
  if (!id) return undefined;
  return posts.find((p) => p.id === id);
}
