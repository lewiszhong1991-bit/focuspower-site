"""Resize uploaded factory photos into the site's assets folder.

Output: src/assets/images/gallery/{products,factory,office}/<original-name>.webp
"""
import os
from pathlib import Path
from PIL import Image

BASE = Path(r"C:\Users\admin\Desktop\战神收集资料\战神收集资料")
OUT = Path(r"C:\Users\admin\Doubao\chats\2026-09-23\new-chat-1\website\src\assets\images\gallery")

JOBS = {
    "产品照片": ("products", 1600),
    "生产车间照片": ("factory", 1600),
    "办公室环境照片": ("office", 1600),
}

def resize_one(src: Path, dst: Path, max_w: int):
    img = Image.open(src)
    img = img.convert("RGB")
    w, h = img.size
    if w > max_w:
        nh = int(h * max_w / w)
        img = img.resize((max_w, nh), Image.LANCZOS)
    dst.parent.mkdir(parents=True, exist_ok=True)
    img.save(dst, "WEBP", quality=82, method=6)

count = 0
for folder, (sub, max_w) in JOBS.items():
    src_dir = BASE / folder
    out_dir = OUT / sub
    for f in sorted(src_dir.iterdir()):
        if f.suffix.lower() not in (".jpg", ".jpeg", ".png", ".webp"):
            continue
        dst = out_dir / (f.stem + ".webp")
        resize_one(f, dst, max_w)
        count += 1
        print(f"  {sub}/{f.stem}.webp")

print(f"\nDone: {count} images -> {OUT}")
