import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function uploadImage(file: File): Promise<string> {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // 生成唯一的文件名
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  const filename = file.name.replace(/\.[^/.]+$/, "") + '-' + uniqueSuffix + '.jpg'
  
  // 保存到 public/uploads 目录
  const path = join(process.cwd(), 'public/uploads', filename)
  await writeFile(path, buffer)
  
  // 返回可访问的 URL
  return `/uploads/${filename}`
} 