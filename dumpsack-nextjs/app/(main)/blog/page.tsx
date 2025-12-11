'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  status: string;
  read_time: number;
  featured_image: string | null;
  published_at: string | null;
  created_at: string;
};

const categories = ['All', 'Announcements', 'Features', 'Education', 'Guides', 'Ecosystem'];

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory, blogPosts]);

  const fetchBlogPosts = async () => {
    try {
      const res = await fetch('/api/blog');
      if (!res.ok) throw new Error('Failed to fetch posts');

      const data = await res.json();
      setBlogPosts(data || []);
      setFilteredPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setBlogPosts([]);
      setFilteredPosts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-void">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-custom max-w-5xl text-center">
          <h1 className="mb-4 text-5xl md:text-6xl font-bold">News</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            The latest news, guides, and insights from the DumpSack team.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="container-custom max-w-6xl">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-toxic/10 mb-6">
                <Clock size={32} className="text-toxic animate-spin" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Loading posts...</h3>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-toxic/10 mb-6">
                <Calendar size={32} className="text-toxic" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {selectedCategory === 'All' ? 'No posts yet' : `No ${selectedCategory} posts`}
              </h3>
              <p className="text-muted max-w-md mx-auto">
                {selectedCategory === 'All'
                  ? "We're working on our first blog posts. Check back soon for updates, guides, and insights."
                  : `No posts in the ${selectedCategory} category yet. Try selecting a different category.`
                }
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="h-full bg-elevated border border-glass-border rounded-2xl overflow-hidden hover:border-toxic/40 transition-all duration-300 hover:shadow-lg hover:shadow-toxic/5">
                    {/* Featured Image */}
                    {post.featured_image && (
                      <div className="relative h-48 overflow-hidden bg-glass">
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="inline-block px-3 py-1 rounded-full bg-toxic/10 mb-4">
                        <span className="text-xs font-semibold text-toxic uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 group-hover:text-toxic transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-muted">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          <span>
                            {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} />
                          <span>{post.read_time} min read</span>
                        </div>
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-toxic font-medium text-sm mt-4 group-hover:gap-3 transition-all">
                        Read more
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 border-t border-glass-border">
        <div className="container-custom max-w-6xl">
          <h3 className="text-center text-xl font-bold mb-8">Browse by category</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  category === selectedCategory
                    ? 'bg-toxic text-void hover:bg-toxic/90'
                    : 'bg-elevated border border-glass-border hover:border-toxic/40 hover:bg-glass'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

