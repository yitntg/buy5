import React from 'react'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const categories = [
  { id: 1, name: '戒指' },
  { id: 2, name: '项链' },
  { id: 3, name: '手链' },
  { id: 4, name: '耳饰' },
]

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-serif text-primary">奢华珠宝</span>
            </Link>
          </div>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                分类
                <ChevronDownIcon className="ml-2 h-5 w-5" />
              </Menu.Button>

              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                <div className="py-1">
                  {categories.map((category) => (
                    <Menu.Item key={category.id}>
                      {({ active }) => (
                        <Link
                          href={`/category/${category.id}`}
                          className={`${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          } block px-4 py-2 text-sm`}
                        >
                          {category.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Menu>

            <Link
              href="/cart"
              className="ml-4 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              购物车
            </Link>
            
            <Link
              href="/login"
              className="ml-4 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              登录
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 