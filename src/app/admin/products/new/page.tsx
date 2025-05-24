import React from 'react'
import Link from 'next/link'

export default function NewProduct() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif text-gray-900">添加新商品</h1>
          <Link
            href="/admin"
            className="text-gray-600 hover:text-gray-900"
          >
            返回管理面板
          </Link>
        </div>

        <form className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            {/* 商品名称 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                商品名称
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                required
              />
            </div>

            {/* 商品描述 */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                商品描述
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="input"
                required
              />
            </div>

            {/* 商品价格 */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                价格
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">¥</span>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="input pl-7"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            {/* 商品分类 */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                分类
              </label>
              <select
                id="category"
                name="category"
                className="input"
                required
              >
                <option value="">选择分类</option>
                <option value="rings">戒指</option>
                <option value="necklaces">项链</option>
                <option value="bracelets">手链</option>
                <option value="earrings">耳饰</option>
              </select>
            </div>

            {/* 商品图片 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                商品图片
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="images"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80"
                    >
                      <span>上传图片</span>
                      <input
                        id="images"
                        name="images"
                        type="file"
                        className="sr-only"
                        multiple
                        accept="image/*"
                      />
                    </label>
                    <p className="pl-1">或拖放图片到此处</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF 最大 10MB</p>
                </div>
              </div>
            </div>

            {/* 提交按钮 */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                取消
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90"
              >
                保存商品
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
} 