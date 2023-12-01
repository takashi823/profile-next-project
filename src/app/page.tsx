import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Image
        className="rounded-full"
        src="/profile/profile.jpg"
        alt="プロフィール画像"
        width={200}
        height={200}
      />
      <div className="flex flex-col gap-3 ml-10">
        <div className="text-center text-5xl">T.U</div>
        <div className="text-left">自己紹介</div>
        <div className="leading-lg">
          初めまして。
          <br />
          エンジニアとしては、今年で7年目になります。
          <br />
          主に、Java,Python,Typescriptでの開発経験があります。
          <br />
          よろしくお願い致します。
          <br />
        </div>
        <div className="flex gap-5">
          <Link href="/hobby">
              <div className="flex justify-center items-center text-center box-border h-20 w-20 rounded-full shadow-xl bg-yellow-300 hover:bg-yellow-200">
                趣味
              </div>
          </Link>
          <div className="flex justify-center items-center text-center box-border h-20 w-20 rounded-full shadow-xl bg-red-300 hover:bg-red-200">お仕事</div>
        </div>
      </div>
    </div>
  );
}
