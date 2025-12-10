# Blog Images Implementation

## Overview
Implemented complete image support for blog posts with featured images and inline content images.

## Database Changes

### Added Column
```sql
ALTER TABLE blog_posts ADD COLUMN featured_image TEXT;
```

### Storage Bucket
- **Bucket Name**: `blog-images`
- **Access**: Public (read), Authenticated (write)
- **File Size Limit**: 5MB
- **Allowed Types**: JPEG, PNG, GIF, WebP, SVG

## Features Implemented

### 1. Featured Image
- **Upload**: Drag & drop or click to upload
- **Preview**: Shows uploaded image with remove button
- **Display**: 
  - Blog listing page: Shows in card layout (left side on desktop)
  - Blog post page: Shows at top of article (full width, 384px height)

### 2. Inline Images
- **Upload**: Click "Insert Image" button in content editor
- **Insertion**: Automatically inserts markdown syntax at cursor position
- **Format**: `![Image](url)`
- **Display**: Renders as full-width images in blog post content

### 3. Image Upload API
- **Endpoint**: `POST /api/admin/upload`
- **Validation**: 
  - File type (JPEG, PNG, GIF, WebP, SVG only)
  - File size (5MB max)
- **Response**: Returns public URL and filename
- **Delete**: `DELETE /api/admin/upload?filename=xxx`

## Files Modified

### Admin Pages
1. **`app/admin/blog/new/page.tsx`**
   - Added featured image upload with preview
   - Added inline image insertion button
   - Added image upload handlers
   - Added markdown support hint

2. **`app/admin/blog/edit/[id]/page.tsx`**
   - Same features as new page
   - Loads existing featured image on edit

### Public Pages
1. **`app/(main)/blog/page.tsx`**
   - Updated card layout to show featured image
   - Grid layout: image on left (1/3), content on right (2/3)
   - Falls back to full-width content if no image

2. **`app/(main)/blog/[slug]/page.tsx`**
   - Shows featured image at top of article
   - Renders inline images from markdown syntax
   - Supports basic markdown formatting (bold, italic, headings)

### API Routes
1. **`app/api/admin/upload/route.ts`** (NEW)
   - Handles image uploads to Supabase Storage
   - Returns public URL
   - Supports deletion

2. **`app/api/admin/blog/route.ts`**
   - Already handles `featured_image` via `...body` spread

3. **`app/api/admin/blog/[id]/route.ts`**
   - Already handles `featured_image` via `...body` spread

## Usage Guide

### Creating a Blog Post with Images

1. **Add Featured Image**:
   - Click the upload area under "Featured Image"
   - Select an image (max 5MB)
   - Preview appears with remove button

2. **Add Inline Images**:
   - Place cursor where you want the image
   - Click "Insert Image" button
   - Select an image
   - Markdown syntax is inserted automatically

3. **Markdown Support**:
   - Images: `![alt text](url)`
   - Bold: `**text**`
   - Italic: `*text*`
   - Headings: `## Heading 2`, `### Heading 3`
   - Lists: `- Item`
   - Dividers: `---`

## Technical Details

### Image Storage
- **Location**: Supabase Storage bucket `blog-images`
- **Naming**: `{timestamp}-{random}.{extension}`
- **Access**: Public URLs for reading

### Image Display
- **Next.js Image Component**: Used for optimization
- **Layout**: `fill` with `object-cover`
- **Lazy Loading**: Automatic (except featured image on post page)

### Security
- File type validation on upload
- File size limit enforcement
- Authenticated uploads only
- Public read access for display

## Next Steps

1. **Test the implementation**:
   - Create a new blog post with featured image
   - Add inline images to content
   - Verify display on blog listing and post pages

2. **Optional Enhancements**:
   - Image alt text editor
   - Image cropping/resizing
   - Image gallery/library
   - Drag & drop for inline images
   - Rich text editor (replace markdown)

## Notes

- All existing blog posts without images will display normally
- Featured image is optional
- Inline images are optional
- Markdown is backward compatible with plain text

