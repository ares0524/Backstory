/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // SERVER_API: 'http://localhost:5000',
        SERVER_API: 'http://209.97.136.201:5000',
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: 'pk_test_51O7iZSKKxegAdYfWVGA8bfiXfcpnIt0cHVweX8SgFV28oPHVO8UVtaGKCGtPKpJ0fv1rF0QeP1hb583mbrfO9sde00lg3O3jHK',
    }
}

module.exports = nextConfig
