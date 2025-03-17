This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Bizflow Website

This project is the official Bizflow corporate website, built using Next.js 15 and showcasing industrial software solutions.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/components` - React components organized by feature/section
- `/src/app` - Next.js App Router structure
- `/public` - Static assets including images and icons

## Common Issues and Solutions

### Next.js Hydration Error with Image Components

This project previously encountered a hydration error caused by mismatches between server and client rendering of the `crossorigin` attribute in Next.js Image components.

#### Symptoms:
- Console error: "Hydration failed because the server rendered HTML didn't match the client"
- Warning about `crossorigin="anonymous"` attributes being different on server vs client

#### Solution:
1. Add `crossOrigin="anonymous"` to all `Image` components in the project:

```jsx
<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={100}
  height={100}
  crossOrigin="anonymous"
/>
```

2. The error was fixed in these components:
   - Navbar.tsx
   - Footer.tsx
   - Hero.tsx
   - TrustSection.tsx
   - ServicesSection.tsx
   - CasesSection.tsx

3. When adding new Image components, always include the `crossOrigin="anonymous"` attribute to prevent hydration errors.

**Note:** Avoid trying to set `crossOrigin` globally in `next.config.js` as it's not currently a recognized configuration option in Next.js 15.

### Module Type Warning

Another issue fixed was the warning about Next.js config module type. This was resolved by adding `"type": "module"` to `package.json`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

The site is deployed using Same.dev at https://tulip-clone.same-app.com
