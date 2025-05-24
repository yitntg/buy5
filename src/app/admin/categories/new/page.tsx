import React from 'react'
import Link from 'next/link'

export default function NewCategory() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif text-gray-900">添加新分类</h1>
          <Link
            href="/admin/categories"
            className="text-gray-600 hover:text-gray-900"
          >
            返回分类列表
          </Link>
        </div>

        <form className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            {/* 分类名称 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                分类名称
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                placeholder="输入分类名称"
                required
              />
            </div>

            {/* 分类描述 */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                分类描述
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="input"
                placeholder="输入分类描述（可选）"
              />
            </div>

            {/* 分类图标 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                分类图标
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
                      htmlFor="icon"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80"
                    >
                      <span>上传图标</span>
                      <input
                        id="icon"
                        name="icon"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                      />
                    </label>
                    <p className="pl-1">或拖放图片到此处</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF 最大 2MB</p>
                </div>
              </div>
            </div>

            {/* 提交按钮 */}
            <div className="flex justify-end space-x-4">
              <Link
                href="/admin/categories"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                取消
              </Link>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90"
              >
                保存分类
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
} 