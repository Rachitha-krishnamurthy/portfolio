# Rachitha Immersive Portfolio v3

An immersive Next.js portfolio using:

- Next.js 16
- React 19
- React Three Fiber
- Three.js
- Drei
- Lenis smooth scrolling
- Procedural 3D scene
- Scroll-driven camera movement
- Sticky project storytelling
- Animated project environments
- Responsive/mobile fallback
- Reduced-motion support

## Start

```bash
npm install
npm run dev
```

Then open:

http://localhost:3000

If 3000 is occupied, Next.js will automatically use another port.

## Build

```bash
npm run build
```

## Customize

Edit:

- `app/page.tsx` for portfolio content
- `app/globals.css` for visual styling
- `components/ImmersiveScene.tsx` for the WebGL/3D world

## Adding real 3D models

The current scene is procedural so the project works immediately without external model licensing.

To add GLB/GLTF assets later, place them under `public/models/` and load them through Drei's `useGLTF`.

For external assets, verify the individual asset license before publishing.
