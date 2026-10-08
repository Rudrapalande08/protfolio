import os
from PIL import Image, ImageDraw
import fitz

# Extract clean transparent cutout of Shreehari directly from PDF using alpha smask
pdf_path = '/Users/rudra/Downloads/Shrihari Chougule Portfolio 2024_compressed.pdf'
doc = fitz.open(pdf_path)

# Xref 706 has color channels, Xref 704 is its smask alpha channel
pix_rgb = fitz.Pixmap(doc, 706)
pix_alpha = fitz.Pixmap(doc, 704)
pix = fitz.Pixmap(pix_rgb, pix_alpha)

# Convert to PIL RGBA Image
src = Image.frombytes('RGBA', [pix.width, pix.height], pix.samples)

# Get bounding box of visible pixels
bbox = src.getbbox()
cropped = src.crop(bbox)

os.makedirs('/Users/rudra/Downloads/shreehari protfolio/assets/projects', exist_ok=True)

# 1. Save transparent cutout
cropped.save('/Users/rudra/Downloads/shreehari protfolio/assets/projects/shreehari_cutout.png')

# 2. Generate clean portrait with dark studio gradient (3:4 ratio - 1000x1333)
target_w, target_h = 1000, 1333
bg = Image.new('RGB', (target_w, target_h), (14, 14, 16))
draw = ImageDraw.Draw(bg)

# Subtle radial spotlight behind Shreehari
center_x = target_w // 2
center_y = int(target_h * 0.42)
for r in range(450, 0, -5):
    alpha = int(24 * (1 - r / 450))
    draw.ellipse([center_x - r, center_y - r, center_x + r, center_y + r], 
                 fill=(22 + alpha, 22 + alpha, 26 + alpha))

# Resize Shreehari's photo to fit nicely
scale = (target_h * 0.94) / cropped.height
new_w = int(cropped.width * scale)
new_h = int(cropped.height * scale)
resized = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)

paste_x = (target_w - new_w) // 2
paste_y = target_h - new_h
bg.paste(resized, (paste_x, paste_y), resized)

# Save high-quality portrait JPG
bg.save('/Users/rudra/Downloads/shreehari protfolio/assets/projects/shreehari_portrait.jpg', quality=95)

# 3. Generate perfect square Avatar headshot
head_bbox = (int(cropped.width * 0.12), 0, int(cropped.width * 0.88), int(cropped.height * 0.58))
head_crop = cropped.crop(head_bbox)
avatar_size = 600
avatar_bg = Image.new('RGB', (avatar_size, avatar_size), (18, 18, 20))
avatar_draw = ImageDraw.Draw(avatar_bg)
for r in range(250, 0, -5):
    alpha = int(30 * (1 - r / 250))
    avatar_draw.ellipse([300 - r, 300 - r, 300 + r, 300 + r], fill=(24 + alpha, 24 + alpha, 28 + alpha))

head_scale = (avatar_size * 1.1) / head_crop.height
head_w = int(head_crop.width * head_scale)
head_h = int(head_crop.height * head_scale)
head_resized = head_crop.resize((head_w, head_h), Image.Resampling.LANCZOS)
avatar_bg.paste(head_resized, ((avatar_size - head_w) // 2, avatar_size - head_h), head_resized)
avatar_bg.save('/Users/rudra/Downloads/shreehari protfolio/assets/projects/shreehari_avatar.jpg', quality=95)

print('Successfully generated clean shreehari_portrait.jpg and shreehari_avatar.jpg!')
