import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  
  // 检查是否是管理员路由
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!token) {
      // 未登录，重定向到登录页
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    // 检查用户角色
    if (token.role !== 'admin') {
      // 非管理员，重定向到首页
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
} 