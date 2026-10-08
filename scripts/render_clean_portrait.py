import fitz
from PIL import Image, ImageOps, ImageDraw
import os

pdf_path = '/Users/rudra/Downloads/Shrihari Chougule Portfolio 2024_compressed.pdf'
doc = fitz.open(pdf_path)
page = doc[0]

# Render the portrait region with Shreehari centered in the frame
# Face and torso center is at x = 192.5 in PDF coordinate space
# Setting x from 0 to 385 places the center at 192.5 (dead center horizontally)
rect = fitz.Rect(0, 765, 385, 1380)
mat = fitz.Matrix(3.0, 3.0)
pix = page.get_pixmap(matrix=mat, clip=rect)

img = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)

out_dir = '/Users/rudra/Downloads/shreehari protfolio/assets/projects'
os.makedirs(out_dir, exist_ok=True)

# Save the centered portrait
img.save(os.path.join(out_dir, 'shreehari_portrait_original.jpg'), quality=96)
img.save(os.path.join(out_dir, 'shreehari_portrait.jpg'), quality=96)

# Generate a centered 1:1 square avatar (centered at x=192.5, y=930)
avatar_rect = fitz.Rect(50, 770, 335, 1055)
avatar_pix = page.get_pixmap(matrix=mat, clip=avatar_rect)
avatar_img = Image.frombytes('RGB', [avatar_pix.width, avatar_pix.height], avatar_pix.samples)
avatar_img.save(os.path.join(out_dir, 'shreehari_avatar.jpg'), quality=96)

print(f'Successfully rendered centered portrait ({img.size}) and avatar ({avatar_img.size})')

