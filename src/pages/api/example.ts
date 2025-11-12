/**
 * Example API endpoint
 * Access at: /api/example
 * 
 * This demonstrates how to create API routes in Webflow Cloud
 * that can handle GET, POST, PUT, DELETE requests
 */

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request, url }) => {
  // Example: Get query parameters
  const name = url.searchParams.get('name') || 'Guest';
  
  return new Response(
    JSON.stringify({
      message: `Hello, ${name}!`,
      method: 'GET',
      timestamp: new Date().toISOString()
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    // Process your data here
    // For example: save to database, call external API, etc.
    
    return new Response(
      JSON.stringify({
        success: true,
        data: body,
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Invalid request body'
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};

