# Azure B2C Authentication SPA

A React Single Page Application (SPA) demonstrating Azure B2C authentication integration using MSAL (Microsoft Authentication Library).

## Features

- Azure B2C authentication integration
- React with TypeScript
- MSAL (Microsoft Authentication Library) for authentication
- Protected routes
- Modern UI with responsive design
- Environment variable configuration

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

3. Configure environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_AZURE_B2C_CLIENT_ID=your-client-id
   VITE_AZURE_B2C_TENANT_NAME=your-tenant-name
   VITE_AZURE_B2C_USER_FLOW=your-user-flow
   VITE_AZURE_B2C_REDIRECT_URI=http://localhost:5173
   ```

4. Configure Azure B2C:
   - Create an Azure B2C tenant if you don't have one
   - Register a new application in Azure B2C
   - Configure the application as a Single Page Application (SPA)
   - Create a user flow for sign-up and sign-in
   - Update the environment variables with your Azure B2C details

5. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_AZURE_B2C_CLIENT_ID` | Your Azure B2C application client ID | Yes |
| `VITE_AZURE_B2C_TENANT_NAME` | Your Azure B2C tenant name | Yes |
| `VITE_AZURE_B2C_USER_FLOW` | The name of your user flow | Yes |
| `VITE_AZURE_B2C_REDIRECT_URI` | The redirect URI for authentication | No (defaults to http://localhost:5173) |

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
- Never commit your `.env` file to version control

## License

MIT
