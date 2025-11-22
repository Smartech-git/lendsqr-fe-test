# Lendsqr Frontend Test

> A modern loan management software dashboard built with Next.js 16, TypeScript, and SCSS.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Development](#development)
  - [Available Scripts](#available-scripts)
  - [Code Quality](#code-quality)
- [Architecture](#architecture)
  - [Directory Structure](#directory-structure)
  - [Key Components](#key-components)
- [Authentication](#authentication)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Type Safety](#type-safety)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project is a comprehensive loan management software dashboard designed for Lendsqr. It provides a robust interface for managing users, viewing metrics, and handling authentication with a focus on performance, type safety, and user experience.

## ✨ Features

- 🔐 **Secure Authentication** - Form-based login with validation using React Hook Form and Zod
- 👥 **User Management** - Comprehensive user dashboard with metrics and table views
- 📊 **Analytics Dashboard** - Visual metrics and key performance indicators
- 🎨 **Responsive Design** - Mobile-first approach with SCSS modules
- 🚀 **Performance Optimized** - Image optimization, font optimization, and code splitting
- 🔄 **API Retry Logic** - Robust error handling with automatic retries for failed requests
- 🍪 **Cookie Management** - Secure cookie handling for authentication tokens
- 📱 **Progressive UI** - Radix UI components for accessible and performant interactions
- 🎭 **SVG Sprite System** - Optimized icon management
- 📄 **Pagination** - User-friendly data pagination with react-paginate
- 💾 **IndexedDB Caching** - Client-side user details caching for improved performance
- 🔄 **SWR Integration** - Data fetching with stale-while-revalidate pattern
- ⭐ **Star Ratings** - Visual user ratings with react-awesome-stars-rating

## 🛠 Tech Stack

### Core
- **Framework**: [Next.js 16.0.1](https://nextjs.org/) with App Router
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Node**: 20+

### UI & Styling
- **SCSS**: Custom styling with modular architecture
- **Radix UI**: Accessible component primitives
  - Dialog, Dropdown Menu, Select
- **React Aria**: Advanced accessibility patterns
- **Custom Fonts**: Avenir Next (local) + Work Sans (Google Fonts)

### Forms & Validation
- **React Hook Form**: 7.66.0 - Performant form management
- **Zod**: 4.1.12 - Schema validation
- **@hookform/resolvers**: Integration layer

### Data Fetching
- **SWR**: 2.3.6 - React Hooks for data fetching with caching
- **Axios**: 1.13.2 - HTTP client with retry logic
- **Native Fetch API**: Server-side requests with timeout handling

### Utilities
- **date-fns**: Date manipulation and formatting
- **currency-symbol-map**: Currency display
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class names
- **jose**: JWT token handling
- **react-awesome-stars-rating**: Star rating component
- **react-stately**: State management for UI components

### Development Tools
- **ESLint**: Code linting with Next.js config
- **TypeScript ESLint**: Type-aware linting
- **Import Resolver**: TypeScript path resolution

## 📁 Project Structure

```
├── public/
│   ├── assets/
│   │   ├── images/          # Optimized images (WebP + fallbacks)
│   │   └── logos/           # Brand assets
│   └── fonts/               # Avenir Next font files
├── src/
│   ├── actions/             # Server actions
│   │   ├── sign-in.ts       # Authentication action
│   │   └── utils/           # Action utilities and types
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/          # Authentication routes
│   │   ├── app/             # Protected app routes
│   │   │   └── users/       # User management pages
│   │   │       └── [id]/    # Dynamic user detail pages
│   │   │           └── documents/ # User documents page
│   │   ├── styles/          # Global and component styles
│   │   │   ├── base/        # Base styles (colors, typography, animations)
│   │   │   ├── components/  # Component-specific styles
│   │   │   ├── layout/      # Layout styles
│   │   │   ├── pages/       # Page-specific styles
│   │   │   ├── utils/       # Utility classes and mixins
│   │   │   └── globals.scss # Global stylesheet entry
│   │   ├── layout.tsx       # Root layout with fonts and metadata
│   │   └── icon.svg         # App icon
│   ├── components/
│   │   ├── common/          # Reusable components (Logo, PageTitle, etc.)
│   │   ├── content/         # Feature-specific components
│   │   │   ├── auth/        # Authentication forms
│   │   │   └── users/       # User management components
│   │   ├── icons/           # SVG sprite system
│   │   ├── layouts/         # Layout wrapper components
│   │   ├── nav/             # Navigation components
│   │   └── ui/              # Base UI components (Table, Dialog, Rating, etc.)
│   ├── constants/           # Application constants
│   │   ├── side-nav.ts      # Navigation configuration
│   │   └── user-details-nav.ts
│   ├── hooks/               # Custom React hooks
│   │   ├── use-hooks-form.ts
│   │   └── use-infinite-API.ts # SWR infinite loading hook
│   ├── indexedDB/           # Client-side database management
│   │   ├── user-details-cache.ts # User details caching logic
│   │   └── utils.ts         # IndexedDB utilities
│   ├── lib/
│   │   ├── api/             # API utilities
│   │   │   ├── request.ts   # Fetch and Axios wrappers with retry
│   │   │   └── utils.ts     # API helpers
│   │   ├── cookies/         # Cookie management
│   │   └── utils/           # General utilities
│   ├── requests/            # API request functions
│   │   ├── get-users.ts     # Fetch users list
│   │   ├── get-user.ts      # Fetch user details
│   │   └── types.ts         # Request/response types
│   └── validations/         # Zod schemas
│       └── sign-in.ts       # Sign-in validation
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs        # ESLint configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js**: 20.x or higher
- **Package Manager**: npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chukwu-smart-chukwuemeka-lendsqr-ft-test
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory and configure the following variables:
```env
NEXT_PUBLIC_API_URL=<your-api-url>
NEXT_PUBLIC_AUTH_API_URL=<your-auth-api-url>
```

### Running the Application

#### Development Mode
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

#### Production Build
```bash
npm run build
npm start
```

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint checks
- `npm run lint:fix` - Fix ESLint issues automatically

### Code Quality

#### Linting
The project uses ESLint with Next.js and TypeScript configurations:
```bash
npm run lint
```

#### Type Checking
TypeScript is configured with strict mode enabled. Type check with:
```bash
tsc --noEmit
```

## 🏗 Architecture

### Directory Structure

The project follows Next.js 16 App Router conventions with clear separation of concerns:

#### `/src/app`
- Uses route groups `(auth)` for authentication routes
- Nested `/app` folder for protected application routes
- Co-located styles in `styles/` directory

#### `/src/components`
- **common**: Shared UI components
- **content**: Feature-specific components
- **ui**: Base design system components
- **nav**: Navigation components
- **icons**: SVG sprite management

#### `/src/lib`
Core utilities and helpers:
- **api**: Request handling with retry logic
- **cookies**: Secure cookie operations
- **utils**: General utility functions

#### `/src/actions`
Next.js Server Actions for server-side operations:
- Authentication flows
- Data mutations

#### `/src/requests`
API request functions and types:
- Dedicated functions for fetching users and user details
- Type-safe request/response interfaces

#### `/src/indexedDB`
Client-side caching with IndexedDB:
- User details cache management
- Offline-first data strategies
- Performance optimization through local storage

#### `/src/hooks`
Custom React hooks:
- Form management hooks
- SWR infinite loading patterns

### Key Components

#### Authentication
- `SignInForm` - React Hook Form with Zod validation
- Server-side validation and cookie management
- JWT token handling with jose

#### User Management
- `UsersTable` - Paginated user list with actions
- `Metrics` - Dashboard analytics
- User detail views with navigation and documents
- Star rating component for user reviews
- IndexedDB caching for user details

#### Layout
- Responsive navigation with `SideNav`
- `TopNav` with user profile dropdown
- Breadcrumb navigation

## 🔐 Authentication

The application uses a cookie-based authentication system:

1. User submits credentials via `SignInForm`
2. Server action validates and processes login
3. JWT token stored in secure HTTP-only cookie
4. Token automatically attached to API requests
5. Protected routes check authentication status

### Cookie Configuration
- Key: `Lendsqr-key`
- HTTP-only: Yes
- Secure: Production only
- Token library: jose

## 🌐 API Integration

### Data Fetching Strategies

The application uses multiple data fetching approaches:

#### SWR with Infinite Loading
```typescript
import { useInfiniteAPI } from '@/hooks/use-infinite-API';

const { data, error, isLoading, size, setSize } = useInfiniteAPI<UserType>({
  endpoint: '/api/users',
  fetcherOptions: { useAuth: true },
});
```

#### `request()` - Native Fetch
```typescript
const data = await request<ResponseType>('/endpoint', {
  method: 'POST',
  data: { key: 'value' },
  useAuth: true,
  retry: 3,
  delay: 3000
});
```

#### `axiosRequest()` - Axios Client
```typescript
const data = await axiosRequest<ResponseType>('/endpoint', {
  method: 'GET',
  useAuth: true,
  axiosConfig: { timeout: 5000 }
});
```

### Features
- ✅ SWR caching and revalidation
- ✅ Infinite scroll/pagination support
- ✅ Automatic retry with exponential backoff
- ✅ Network error detection
- ✅ Request timeout (10s default)
- ✅ Token injection from cookies
- ✅ Configurable base URLs
- ✅ IndexedDB client-side caching

## 🎨 Styling

### SCSS Architecture

The project uses a modular SCSS architecture:

```scss
styles/
├── base/
│   ├── _variables.scss    # Design tokens
│   ├── colors.scss        # Color palette
│   ├── typography.scss    # Font styles
│   ├── animations.scss    # Keyframes and transitions
│   └── size.scss          # Spacing and sizing
├── components/            # Component styles
├── layout/                # Layout-specific styles
├── pages/                 # Page-specific styles
├── utils/                 # Mixins and functions
└── globals.scss           # Global imports
```

### Fonts
- **Primary**: Avenir Next (local, WOFF2)
  - Weights: 400, 500, 600, 700
- **Secondary**: Work Sans (Google Fonts)
  - Weights: 400, 500, 600, 700

### CSS Variables
Design tokens are defined in `/base` and used throughout the application for consistent theming.

## 🔒 Type Safety

### TypeScript Configuration
- **Strict Mode**: Enabled
- **Target**: ES2017
- **JSX**: react-jsx (React 19)
- **Path Aliases**: `@/*` → `./src/*`

### Validation Schemas
Zod schemas in `/src/validations` ensure runtime type safety:
```typescript
export const signInSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().trim().min(1, "Password is required"),
}).strict();
```

## 🚢 Deployment

### Vercel (Recommended)

The easiest deployment method:

1. Push code to GitHub/GitLab/Bitbucket
2. Import project to [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Variables
Ensure all required environment variables are set in your deployment platform:
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_AUTH_API_URL`
- Any additional secrets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- Follow ESLint configuration (enforces absolute imports with `@/`)
- Maintain proper import ordering (builtin → external → internal → parent → sibling → index)
- Write meaningful commit messages
- Ensure TypeScript types are correct
- Test thoroughly before submitting

## 📄 License

This project is private and proprietary to Lendsqr.

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Radix UI](https://www.radix-ui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)

---

**Built with ❤️ by Chukwu Smart Chukwuemeka for Lendsqr**
