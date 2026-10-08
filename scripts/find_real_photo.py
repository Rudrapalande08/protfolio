import os
import fitz
from PIL import Image
import io

doc = fitz.open('/Users/rudra/Downloads/Shrihari Chougule Portfolio 2024_compressed.pdf')
os.makedirs('/tmp/all_images', exist_ok=True)

images = doc[0].get_images()
print(f'Total images: {len(images)}')

for idx, img_info in enumerate(images):
    xref = img_info[0]
    smask_xref = img_info[1]
    try:
        base_img = doc.extract_image(xref)
        img_bytes = base_img['image']
        im = Image.open(io.BytesIO(img_bytes))
        extrema = im.getextrema()
        # Check if non-black (e.g. max value > 50)
        max_val = 0
        if isinstance(extrema[0], tuple): # RGB
            max_val = max(e[1] for e in extrema)
        else:
            max_val = extrema[1]
        
        if im.width > 200 and im.height > 200 and max_val > 50:
            filename = f'/tmp/all_images/img_{idx:03d}_xref_{xref}_{im.width}x{im.height}.jpg'
            # If there's an smask, also try to apply it
            if smask_xref > 0:
                try:
                    p1 = fitz.Pixmap(doc, xref)
                    p2 = fitz.Pixmap(doc, smask_xref)
                    p_comb = fitz.Pixmap(p1, p2)
                    im_comb = Image.frombytes('RGBA', [p_comb.width, p_comb.height], p_comb.samples)
                    im_comb.save(f'/tmp/all_images/img_{idx:03d}_xref_{xref}_masked.png')
                except Exception as e:
                    pass
            im.convert('RGB').save(filename)
            print(f'Saved candidate {filename} max_val={max_val}')
    except Exception as e:
        print(f'Error on idx {idx} xref {xref}: {e}')
