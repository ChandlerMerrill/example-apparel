// app/api/products/[accountSlug]/route.js
import { NextResponse } from 'next/server';
import { getProducts } from '@/lib/products/get-products.server';
import { verifyAuthToken } from '@/lib/auth/verifyAuthToken';

export async function GET(request, { params }) {
  try {
    // 1. Verify user authentication from Authorization header
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const token = authHeader.split(' ')[1];
    const user = await verifyAuthToken(token);
    if (!user) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    // 2. Extract params & query
    const { accountSlug } = params;
    const url = new URL(request.url);
    const portalSlug = url.searchParams.get('portalSlug'); // optional

    // 3. Optional: check if user is authorized for this account
    // (depends on your business logic — for example, check if user.account === accountSlug)

    // 4. Fetch products with helper
    const products = await getProducts(accountSlug, portalSlug);

    // 5. Return products
    return NextResponse.json({ products });

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
