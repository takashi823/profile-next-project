import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image src="/profile/profile.jpg" alt="プロフィール画像" width={200} height={200} />
      <div>Hello</div>
    </div>
  )
}
