/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // SERVER_API: 'http://localhost:5000',
        SERVER_API: 'https://api.backstory.ink',
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: 'pk_test_51O7iZSKKxegAdYfWVGA8bfiXfcpnIt0cHVweX8SgFV28oPHVO8UVtaGKCGtPKpJ0fv1rF0QeP1hb583mbrfO9sde00lg3O3jHK',
        // MAIN_DOMAIN: 'http://localhost:3000',
        // SUB_DOMAIN: 'http://localhost:3001',
        MAIN_DOMAIN: 'https://backstory-eta.vercel.app',
        SUB_DOMAIN: 'https://backstory-subdomain.vercel.app',
    }
}

module.exports = nextConfig
