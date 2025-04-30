# Azure B2C Authentication SPA

A React Single Page Application (SPA) demonstrating Azure B2C authentication integration using MSAL (Microsoft Authentication Library).

## Features

- Azure B2C authentication integration
- React with TypeScript
- MSAL (Microsoft Authentication Library) for authentication
- Protected routes
- Modern UI with responsive design

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Azure B2C tenant
- Azure B2C application registration

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/spa-az-b2c.git
   cd spa-az-b2c
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Azure B2C:
   - Create an Azure B2C tenant if you don't have one
   - Register a new application in Azure B2C
   - Configure the application as a Single Page Application (SPA)
   - Create a user flow for sign-up and sign-in
   - Update the configuration in `src/config/authConfig.ts` with your Azure B2C details:
     - `clientId`
     - `authority`
     - `knownAuthorities`

4. Start the development server:
   ```bash
   npm run dev
   ```

## Configuration

Update the following in `src/config/authConfig.ts`:

```typescript
export const msalConfig: Configuration = {
    auth: {
        clientId: "your-client-id",
        authority: "https://your-tenant.b2clogin.com/your-tenant.onmicrosoft.com/your-user-flow",
        knownAuthorities: ["your-tenant.b2clogin.com"],
        redirectUri: "http://localhost:5173",
        postLogoutRedirectUri: "http://localhost:5173"
    },
    // ... other configuration
};
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/     # React components
├── config/        # Configuration files
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## Security Considerations

- Never commit sensitive information like client secrets
- Use environment variables for configuration
- Keep dependencies updated
- Follow Azure B2C security best practices

## License

MIT
