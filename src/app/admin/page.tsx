import React from 'react'
import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif text-gray-900 mb-8">后台管理</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 商品管理 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">商品管理</h2>
          <div className="space-y-4">
            <Link
              href="/admin/products/new"
              className="block w-full bg-primary text-white text-center py-2 rounded-md hover:bg-primary/90"
            >
              添加新商品
            </Link>
            <Link
              href="/admin/products"
              className="block w-full bg-gray-100 text-gray-700 text-center py-2 rounded-md hover:bg-gray-200"
            >
              管理现有商品
            </Link>
          </div>
        </div>

        {/* 分类管理 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">分类管理</h2>
          <div className="space-y-4">
            <Link
              href="/admin/categories/new"
              className="block w-full bg-primary text-white text-center py-2 rounded-md hover:bg-primary/90"
            >
              添加新分类
            </Link>
            <Link
              href="/admin/categories"
              className="block w-full bg-gray-100 text-gray-700 text-center py-2 rounded-md hover:bg-gray-200"
            >
              管理现有分类
            </Link>
          </div>
        </div>

        {/* 订单管理 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">订单管理</h2>
          <Link
            href="/admin/orders"
            className="block w-full bg-gray-100 text-gray-700 text-center py-2 rounded-md hover:bg-gray-200"
          >
            查看所有订单
          </Link>
        </div>

        {/* 用户管理 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">用户管理</h2>
          <Link
            href="/admin/users"
            className="block w-full bg-gray-100 text-gray-700 text-center py-2 rounded-md hover:bg-gray-200"
          >
            管理用户
          </Link>
        </div>
      </div>
    </div>
  )
} 