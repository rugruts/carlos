# Blog Images Testing Guide

## Prerequisites
- Dev server running: `npm run dev`
- Admin access: http://localhost:3000/admin
- Backend CORS fixed (or test in production)

## Test 1: Create New Blog Post with Featured Image

1. **Navigate to Admin**:
   - Go to http://localhost:3000/admin
   - Click "View Posts" or go to http://localhost:3000/admin/blog

2. **Create New Post**:
   - Click "Create Post" button
   - Fill in basic info:
     - Title: "Test Post with Images"
     - Slug: Auto-generated
     - Excerpt: "Testing the new image upload feature"
     - Category: "Announcement"

3. **Upload Featured Image**:
   - Scroll to "Featured Image" section
   - Click the upload area
   - Select an image (PNG, JPG, GIF, WebP, or SVG)
   - Wait for upload (should see preview)
   - Verify preview shows correctly
   - Test remove button (X icon)
   - Re-upload if removed

4. **Add Content with Inline Images**:
   - In the Content field, type some text:
     ```
     ## Welcome to our test post
     
     This is a paragraph before the image.
     
     [CURSOR HERE - Click "Insert Image"]
     
     This is a paragraph after the image.
     
     ### More content
     
     Another paragraph with **bold** and *italic* text.
     ```
   - Place cursor where you want the image
   - Click "Insert Image" button
   - Select an image
   - Verify markdown syntax is inserted: `![Image](url)`

5. **Save and Publish**:
   - Set Status to "Published"
   - Click "Save Post"
   - Should redirect to blog list

## Test 2: View Blog Post

1. **Check Blog Listing**:
   - Go to http://localhost:3000/blog
   - Verify your post appears
   - Verify featured image shows on the left side (desktop)
   - Verify layout is responsive (mobile)

2. **View Full Post**:
   - Click "Read more" on your post
   - Verify featured image shows at top (full width)
   - Verify inline images render correctly
   - Verify markdown formatting works (headings, bold, italic)

## Test 3: Edit Existing Post

1. **Edit Post**:
   - Go to http://localhost:3000/admin/blog
   - Click "Edit" on your test post
   - Verify featured image loads in preview
   - Try removing and re-uploading featured image
   - Try adding more inline images
   - Save changes

2. **Verify Changes**:
   - View the post on the public blog
   - Verify all changes saved correctly

## Test 4: Post Without Images

1. **Create Post Without Images**:
   - Create a new post
   - Don't upload any featured image
   - Don't add any inline images
   - Publish

2. **Verify Display**:
   - Blog listing should show full-width content (no image)
   - Post page should work normally without featured image

## Expected Results

### Featured Image
- ✅ Upload works smoothly
- ✅ Preview shows immediately after upload
- ✅ Remove button works
- ✅ Image displays on blog listing (left side, 1/3 width)
- ✅ Image displays on post page (top, full width, 384px height)

### Inline Images
- ✅ "Insert Image" button works
- ✅ Image uploads successfully
- ✅ Markdown syntax inserted at cursor position
- ✅ Images render in blog post content
- ✅ Images are full-width with proper spacing

### Validation
- ✅ Only image files accepted
- ✅ Files over 5MB rejected
- ✅ Error messages display clearly

### Backward Compatibility
- ✅ Old posts without images display normally
- ✅ Posts without featured image work fine
- ✅ Plain text content still works

## Troubleshooting

### Upload Fails
- Check browser console for errors
- Verify Supabase Storage bucket exists
- Check file size (must be < 5MB)
- Check file type (must be image)

### Images Don't Display
- Check browser console for 404 errors
- Verify Supabase Storage bucket is public
- Check image URLs in database

### CORS Errors
- If testing locally, backend CORS must allow localhost:3000
- Or test in production environment

## Production Checklist

Before deploying to production:
- [ ] Verify Supabase Storage bucket `blog-images` exists
- [ ] Verify bucket is public for reading
- [ ] Test image uploads in production
- [ ] Test image display on public pages
- [ ] Verify image URLs are accessible
- [ ] Test on mobile devices
- [ ] Test with different image formats
- [ ] Test with large images (near 5MB limit)

