'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Edit, Trash2, Eye, Calendar, AlertCircle } from 'lucide-react';
import { BlogPost } from '@/lib/supabase';

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/admin/blog');
      if (!res.ok) throw new Error('Failed to fetch posts');

      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/blog?id=${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete post');

      setPosts(posts.filter(p => p.id !== id));
    } catch (err) {
      console.error('Error deleting post:', err);
      alert('Failed to delete post');
    }
  };

  return (
    <div className="min-h-screen bg-void">
      {/* Header */}
      <header className="border-b border-glass-border bg-elevated/50 backdrop-blur-lg sticky top-0 z-10">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard" className="text-toxic hover:underline">
                <ArrowLeft size={20} />
              </Link>
              <div>
                <h1 className="text-xl font-bold">Blog Posts</h1>
                <p className="text-sm text-muted">Manage your blog content</p>
              </div>
            </div>

            <Link href="/admin/blog/new" className="btn-primary text-sm px-4 py-2">
              <Plus size={16} />
              New Post
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-12">
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-orange/10 border border-orange/20 flex items-start gap-3">
            <AlertCircle size={20} className="text-orange flex-shrink-0 mt-0.5" />
            <p className="text-sm text-orange">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="card p-12 text-center">
            <div className="relative z-10">
              <p className="text-muted">Loading blog posts...</p>
            </div>
          </div>
        ) : posts.length > 0 ? (
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-glass-border">
                    <th className="text-left p-4 text-sm font-medium text-muted">Title</th>
                    <th className="text-left p-4 text-sm font-medium text-muted">Category</th>
                    <th className="text-left p-4 text-sm font-medium text-muted">Status</th>
                    <th className="text-left p-4 text-sm font-medium text-muted">Date</th>
                    <th className="text-left p-4 text-sm font-medium text-muted">Views</th>
                    <th className="text-right p-4 text-sm font-medium text-muted">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id} className="border-b border-glass-border last:border-0 hover:bg-glass/30">
                      <td className="p-4">
                        <div>
                          <div className="font-medium mb-1">{post.title}</div>
                          <div className="text-xs text-muted">/{post.slug}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm px-2 py-1 rounded bg-toxic/10 text-toxic">
                          {post.category}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`text-sm px-2 py-1 rounded ${
                          post.status === 'published'
                            ? 'bg-green-500/10 text-green-500'
                            : 'bg-orange/10 text-orange'
                        }`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <Calendar size={14} />
                          {new Date(post.published_at || post.created_at).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <Eye size={14} />
                          {post.views.toLocaleString()}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            className="p-2 rounded-lg hover:bg-glass border border-glass-border transition-colors"
                            title="View"
                          >
                            <Eye size={16} />
                          </Link>
                          <Link
                            href={`/admin/blog/edit/${post.id}`}
                            className="p-2 rounded-lg hover:bg-glass border border-glass-border transition-colors"
                            title="Edit"
                          >
                            <Edit size={16} />
                          </Link>
                          <button
                            onClick={() => handleDelete(post.id, post.title)}
                            className="p-2 rounded-lg hover:bg-orange/10 border border-glass-border hover:border-orange transition-colors text-orange"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="card p-12 text-center">
            <div className="relative z-10">
              <Plus size={48} className="text-muted mx-auto mb-4" />
              <h3 className="mb-3">No blog posts yet</h3>
              <p className="text-muted mb-6">
                Create your first blog post to get started.
              </p>
              <Link href="/admin/blog/new" className="btn-primary">
                <Plus size={16} />
                Create Post
              </Link>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

