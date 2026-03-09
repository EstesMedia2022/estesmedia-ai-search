

## Plan: Replace Logo with Uploaded Image

### Changes

1. **Copy uploaded logo** to `src/assets/estes-media-logo.png` (overwrite existing)

2. **Update `src/components/Navbar.tsx`**: Replace the "EM" text box + "Estes Media" text with an `<img>` tag using the imported logo, height ~40px

3. **Update `src/components/Footer.tsx`**: Import the logo and replace the "EM" text box + "Estes Media" text with an `<img>` tag, height ~32px

