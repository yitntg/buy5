import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const featuredProducts = [
  {
    id: 1,
    name: '钻石皇冠戒指',
    price: 9999,
    image: '/images/ring1.jpg',
    category: '戒指'
  },
  {
    id: 2,
    name: '蓝宝石项链',
    price: 8888,
    image: '/images/necklace1.jpg',
    category: '项链'
  },
  {
    id: 3,
    name: '珍珠手链',
    price: 6666,
    image: '/images/bracelet1.jpg',
    category: '手链'
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 英雄区域 */}
      <div className="relative h-[500px] rounded-lg overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4">奢华珠宝，尽显品味</h1>
            <p className="text-xl mb-8">每一件都是独特的艺术品</p>
            <Link
              href="/products"
              className="bg-accent text-primary px-8 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              立即探索
            </Link>
          </div>
        </div>
      </div>

      {/* 精选商品 */}
      <section className="mb-12">
        <h2 className="text-3xl font-serif text-gray-900 mb-6">精选商品</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium text-primary">
                    ¥{product.price.toLocaleString()}
                  </span>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-secondary hover:text-secondary/80"
                  >
                    查看详情
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-serif text-gray-900 mb-4">品牌故事</h2>
        <p className="text-gray-600 leading-relaxed">
          我们致力于为您提供最优质的珠宝首饰，每一件作品都凝聚着匠人的心血与艺术的灵感。
          从选材到制作，我们始终坚持最高标准，只为让您拥有独一无二的珍品。
        </p>
      </section>
    </div>
  )
} 