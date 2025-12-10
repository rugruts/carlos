'use client';

import { useState, useEffect, use, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Save, AlertCircle, Upload, X, Image as ImageIcon } from 'lucide-react';
import { BlogPost } from '@/lib/supabase';

export default function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [featuredImagePreview, setFeaturedImagePreview] = useState('');
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Announcement',
    status: 'draft' as 'draft' | 'published',
    read_time: 5,
    featured_image: '',
  });

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/admin/blog/${id}`);
      if (!res.ok) throw new Error('Failed to fetch post');

      const data = await res.json();
      setFormData({
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt || '',
        content: data.content,
        category: data.category,
        status: data.status,
        read_time: data.read_time,
        featured_image: data.featured_image || '',
      });
      setFeaturedImagePreview(data.featured_image || '');
    } catch (err) {
      console.error('Error fetching post:', err);
      setError('Failed to load post');
    } finally {
      setFetching(false);
    }
  };

  const handleImageUpload = async (file: File, isFeatured: boolean = false) => {
    setUploadingImage(true);
    setError('');

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to upload image');
      }

      const data = await res.json();

      if (isFeatured) {
        setFormData(prev => ({ ...prev, featured_image: data.url }));
        setFeaturedImagePreview(data.url);
      } else {
        // Insert image markdown at cursor position in content
        const textarea = contentTextareaRef.current;
        if (textarea) {
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;

          setFormData(prev => {
            const text = prev.content;
            const before = text.substring(0, start);
            const after = text.substring(end);
            const imageMarkdown = `\n![Image](${data.url})\n`;

            return {
              ...prev,
              content: before + imageMarkdown + after
            };
          });

          // Set cursor position after inserted image
          setTimeout(() => {
            textarea.focus();
            const imageMarkdown = `\n![Image](${data.url})\n`;
            const newPosition = start + imageMarkdown.length;
            textarea.setSelectionRange(newPosition, newPosition);
          }, 0);
        }
      }
    } catch (err) {
      console.error('Error uploading image:', err);
      setError(err instanceof Error ? err.message : 'Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleFeaturedImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file, true);
    }
  };

  const handleContentImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file, false);
    }
  };

  const removeFeaturedImage = () => {
    setFormData(prev => ({ ...prev, featured_image: '' }));
    setFeaturedImagePreview('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to update post');

      router.push('/admin/blog');
    } catch (err: unknown) {
      console.error('Error updating post:', err);
      setError(err instanceof Error ? err.message : 'Failed to update post');
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center">
        <p className="text-muted">Loading post...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void">
      <header className="border-b border-glass-border bg-elevated/50 backdrop-blur-lg sticky top-0 z-10">
        <div className="container-custom py-4">
          <div className="flex items-center gap-4">
            <Link href="/admin/blog" className="text-toxic hover:underline">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-xl font-bold">Edit Blog Post</h1>
              <p className="text-sm text-muted">Update your blog post</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-orange/10 border border-orange/20 flex items-start gap-3">
              <AlertCircle size={20} className="text-orange flex-shrink-0 mt-0.5" />
              <p className="text-sm text-orange">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="card p-8 space-y-6">
            <div className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white placeholder-muted focus:outline-none focus:border-toxic transition-colors"
                    placeholder="Post title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Slug *</label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white placeholder-muted focus:outline-none focus:border-toxic transition-colors"
                    placeholder="post-slug"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Excerpt</label>
                <textarea
                  rows={2}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white placeholder-muted focus:outline-none focus:border-toxic transition-colors resize-none"
                  placeholder="Short description for the blog listing"
                />
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-medium mb-2">Featured Image</label>
                {featuredImagePreview ? (
                  <div className="relative group">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden border border-glass-border">
                      <Image
                        src={featuredImagePreview}
                        alt="Featured"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={removeFeaturedImage}
                      className="absolute top-2 right-2 p-2 rounded-lg bg-void/80 backdrop-blur-sm border border-glass-border hover:border-orange transition-colors"
                    >
                      <X size={16} className="text-orange" />
                    </button>
                  </div>
                ) : (
                  <label className="block w-full h-64 rounded-lg border-2 border-dashed border-glass-border hover:border-toxic transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFeaturedImageChange}
                      className="hidden"
                      disabled={uploadingImage}
                    />
                    <div className="h-full flex flex-col items-center justify-center gap-3 text-muted">
                      <Upload size={32} />
                      <div className="text-center">
                        <p className="font-medium">
                          {uploadingImage ? 'Uploading...' : 'Click to upload featured image'}
                        </p>
                        <p className="text-sm">PNG, JPG, GIF, WebP up to 5MB</p>
                      </div>
                    </div>
                  </label>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium">Content *</label>
                  <label className="btn-ghost text-sm px-3 py-1.5 cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleContentImageChange}
                      className="hidden"
                      disabled={uploadingImage}
                    />
                    <ImageIcon size={16} />
                    {uploadingImage ? 'Uploading...' : 'Insert Image'}
                  </label>
                </div>
                <textarea
                  ref={contentTextareaRef}
                  rows={15}
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white placeholder-muted focus:outline-none focus:border-toxic transition-colors resize-none font-mono text-sm"
                  placeholder="Write your blog post content here... Use markdown for formatting. Click 'Insert Image' to add images inline."
                />
                <p className="text-xs text-muted mt-2">
                  Supports Markdown. Use ![alt](url) for images, **bold**, *italic*, # headings, etc.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white focus:outline-none focus:border-toxic transition-colors"
                  >
                    <option>Announcement</option>
                    <option>Features</option>
                    <option>Education</option>
                    <option>Guides</option>
                    <option>Ecosystem</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Status *</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
                    className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white focus:outline-none focus:border-toxic transition-colors"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Read Time (min)</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.read_time}
                    onChange={(e) => setFormData({ ...formData, read_time: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white focus:outline-none focus:border-toxic transition-colors"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save size={16} />
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
                <Link href="/admin/blog" className="btn-outline">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

