# URGENT: Backend CORS Configuration Required

## Problem

The frontend at the following URLs cannot make requests to `https://api.dumpsack.xyz` because the API is missing CORS headers:

- `http://localhost:3000` (development)
- `https://dumpsack.xyz` (production)
- `https://www.dumpsack.xyz` (production)
- `https://dumpsack-nextjs-g7bobsmvw-theodoros-matrapilias-projects.vercel.app` (Vercel deployment)

**Error:**
```
Access to fetch at 'https://api.dumpsack.xyz/api/newsletter/subscribe' from origin 'https://dumpsack.xyz'
has been blocked by CORS policy: Response to preflight request doesn't pass access control check:
No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

## Solution

The backend needs to add CORS headers to **ALL** API responses.

### For Node.js/Express

```javascript
const cors = require('cors');

// Allow specific origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://dumpsack.xyz',
  'https://www.dumpsack.xyz',
  'https://dumpsack-nextjs-g7bobsmvw-theodoros-matrapilias-projects.vercel.app'
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS not allowed'), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### For Serverless Functions (Vercel/Netlify)

Add these headers to **every** response:

```javascript
export default async function handler(req, res) {
  // Set CORS headers
  const origin = req.headers.origin;
  const allowedOrigins = [
    'http://localhost:3000',
    'https://dumpsack.xyz',
    'https://www.dumpsack.xyz',
    'https://dumpsack-nextjs-g7bobsmvw-theodoros-matrapilias-projects.vercel.app'
  ];
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Your API logic here...
}
```

### For AWS Lambda

```javascript
exports.handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin;
  const allowedOrigins = [
    'http://localhost:3000',
    'https://dumpsack.xyz',
    'https://www.dumpsack.xyz',
    'https://dumpsack-nextjs-g7bobsmvw-theodoros-matrapilias-projects.vercel.app'
  ];
  
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true'
  };
  
  if (allowedOrigins.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  
  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }
  
  // Your API logic here...
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ success: true })
  };
};
```

## Required Headers

Every API response must include:

```
Access-Control-Allow-Origin: http://localhost:3000 (or https://dumpsack.xyz)
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
```

## Testing

After implementing CORS, test with:

```bash
# Test preflight request
curl -X OPTIONS https://api.dumpsack.xyz/api/newsletter/subscribe \
  -H "Origin: http://localhost:3000" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  -v

# Should return 200 with CORS headers
```

## Endpoints That Need CORS

All endpoints need CORS headers:

- `POST /api/newsletter/subscribe`
- `POST /api/waitlist/android`
- `POST /api/support/message`
- `GET /api/admin/analytics`
- `GET /api/admin/subscribers`
- `GET /api/admin/support`

## Priority

🔴 **CRITICAL** - The frontend cannot function without this fix!

Please implement CORS headers ASAP so we can test the integration.

