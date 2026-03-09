

## Plan: Remove Mascot Background Boxes

The previous AI image editing attempt didn't successfully remove the backgrounds from the mascot images. Since direct image editing tools aren't available in this mode, here's the approach:

### Approach
Use the AI image generation API (`google/gemini-2.5-flash-image`) to re-edit each of the 4 mascot images with a clear instruction to remove the background and make it fully transparent. The images to fix:

1. `src/assets/mascot-1.png` — wallet/money mascot
2. `src/assets/mascot-2.png` — prism/strategy mascot  
3. `src/assets/mascot-3.png` — laptop/team mascot
4. `src/assets/cta-mascot.png` — CTA laptop mascot

For each image, use the edit image flow: pass the current image along with the prompt "Remove the background completely, make it fully transparent PNG, keep only the cartoon character mascot with no background box or rectangle behind it."

If the AI image editing still can't produce clean transparent PNGs, the fallback is to use CSS `mix-blend-mode: multiply` or `mix-blend-mode: screen` on the `<img>` tags in `MascotSection.tsx` and `CtaSection.tsx` to visually hide the dark background against the page's dark background.

### CSS Fallback (if image editing fails)
Add `mix-blend-mode: lighten` to the mascot `<img>` class names in both components, which will make dark backgrounds disappear against the dark page background.

