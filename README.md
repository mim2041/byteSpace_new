# ByteSpace

> A modern learning marketplace for discovering practical skills, learning from expert creators, and building a career through knowledge.

[![Live application](https://img.shields.io/badge/Live%20application-byte--space--new--neon.vercel.app-073fe0?style=flat-square)](https://byte-space-new-neon.vercel.app/)
[![Framework](https://img.shields.io/badge/Next.js-16.1.4-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Language](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Overview

ByteSpace is a responsive education-platform experience designed for learners and course creators. The public experience guides visitors from course discovery to category exploration, while the authenticated experience provides account entry and a private dashboard.

The interface is implemented from the supplied product design with a focus on responsive composition, reusable React components, accessible form states, optimized media, and a clear separation between public, authentication, and private application areas.

*Live application:* [byte-space-new-neon.vercel.app](https://byte-space-new-neon.vercel.app/)

## Product Surface

### For learners

- Browse featured courses with pricing, ratings, creator attribution, lesson counts, duration, and discussion counts.
- Explore learning paths across design, development, IT, business, marketing, photography, finance, and related categories.
- Understand the platform through learner outcomes, community testimonials, and partner references.
- Access sign-in, registration, and cart entry points from responsive navigation.

### For creators

- Discover the creator proposition through dedicated platform messaging.
- Understand the publishing and monetization workflow through creator-focused content.
- Access the creator call to action from the landing experience.

### Account experience

- Register with name, email, and password validation.
- Sign in with field validation and loading feedback.
- Persist authenticated sessions using access and refresh token cookies.
- Protect the dashboard behind an authentication guard.
- View the authenticated user’s name, email, role, and account status.

## Engineering Highlights

- *App Router architecture:* Public, auth, and private route groups keep layout and access concerns isolated.
- *Server-side authentication:* Credentials are submitted through server actions; tokens are written to HTTP-only cookies rather than browser storage.
- *Responsive UI system:* Shared components and utility classes support desktop and mobile navigation, forms, cards, and content sections.
- *Media optimization:* Local artwork is imported and rendered through Next.js Image for optimized delivery.
- *Localization boundary:* next-intl provides locale-aware routing with English as the current default locale.
- *Typed API boundary:* Centralized endpoint definitions, request helpers, and TypeScript domain types keep backend integration consistent.
- *Production conventions:* Strict TypeScript, React strict mode, linting, environment-based API configuration, and Vercel deployment support are included.

## Technology Stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16.1.4 with App Router |
| UI | React 19.2.3 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 and CSS Modules |
| Routing and i18n | next-intl |
| Icons | lucide-react |
| Notifications | sonner |
| Hosting | Vercel |

## Local Development

### Requirements

- Node.js 18.17 or newer
- npm
- A compatible ByteSpace authentication API for login, signup, and dashboard data

### Installation

bash
git clone <repository-url>
cd byteSpace_new
npm install


Create a local environment file at .env.local:

env
# Preferred variable
BASE_URL=https://your-api.example.com

# Alternative supported variable
# NEXT_PUBLIC_API_URL=https://your-api.example.com


BASE_URL takes precedence when both variables are present. Do not commit .env.local or production credentials.

### Commands

| Command | Description |
| --- | --- |
| npm run dev | Start the development server |
| npm run dev:turbo | Start development with Turbopack |
| npm run build | Create a production build |
| npm run start | Serve the production build |
| npm run lint | Run ESLint |
| npm run clean | Remove the .next build directory |

Run the application at [http://localhost:3000](http://localhost:3000). English is the configured locale, and the default locale prefix is omitted, so both / and /en resolve to the public experience.

## Application Routes

| Route | Purpose | Access |
| --- | --- | --- |
| / | Landing page and course discovery | Public |
| /login | Sign-in flow | Public |
| /signup | Account registration flow | Public |
| /dashboard | Account overview | Authenticated |
| /api/auth/clear | Clear session cookies and redirect to login | Internal |

The navigation also exposes product destinations such as courses, creators, categories, cart, and creator onboarding as part of the product experience. Route availability for those destinations depends on the connected application surface and backend integration.

## Backend Contract

The frontend uses BASE_URL as the API origin and expects these endpoints:

| Method | Endpoint | Responsibility |
| --- | --- | --- |
| POST | /auth/signup | Create a user account and return auth tokens |
| POST | /auth/login | Authenticate a user and return auth tokens |
| GET | /auth/refresh | Refresh an expired access token |
| POST | /auth/logout | Invalidate the current session |
| GET | /user/me | Return the current user profile |

The API response types are defined in src/types/auth.ts. Authenticated requests forward the access token using the request helpers under src/utils/api/.

### Session handling

- Access and refresh tokens are stored in httpOnly cookies.
- Cookies use secure mode in production and sameSite=lax.
- The private layout uses AuthGuard before rendering dashboard content.
- Logout clears local auth cookies even when the remote logout request fails.

## Repository Structure

text
src/
├── app/[locale]/
│   ├── (public)/              # Landing page
│   ├── (auth)/                # Login and signup pages/actions
│   └── (private)/             # Authenticated layout and dashboard
├── components/
│   ├── auth/                  # Authentication shell
│   ├── guards/                # Route protection
│   ├── siteSettings/          # Hero, navigation, discovery, footer, testimonials
│   └── ui/                    # Shared form and button primitives
├── contexts/                  # Application context
├── i18n/                      # Locale routing and message configuration
├── services/                  # Server-side auth services
├── types/                     # Shared domain types
└── utils/
	├── api/                   # Request, response, and auth-aware API helpers
	├── endpoints/             # Backend endpoint definitions
	└── helpers/               # Formatting and date utilities
public/                        # Public static files


## Deployment

The production deployment is hosted on Vercel at [byte-space-new-neon.vercel.app](https://byte-space-new-neon.vercel.app/).

To deploy another environment:

1. Import the repository into Vercel as a Next.js project.
2. Keep the default install, build, and output settings.
3. Configure BASE_URL or NEXT_PUBLIC_API_URL for the target environment.
4. Deploy and verify the public landing page first.
5. Verify signup, login, logout, token refresh, and dashboard access against the target API.

For production, configure environment variables separately for Preview and Production environments and ensure the API allows the deployed origin where required.

## Design Reference

The implementation follows the assessment design file:

[ByteSpace New Check website in Figma](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)

## Assessment Context

This project was completed for the Doin Tech Limited Jr. Software Engineer (Frontend) assessment. The required deliverable was the ByteSpace landing page; authentication and dashboard flows were included as additional product surface.
Next.js-based marketing website with project listings, investment insights, and lead capture system.