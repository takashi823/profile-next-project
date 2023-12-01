import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src="/profile/profile.jpg"
        alt="プロフィール画像"
        width={200}
        height={200}
      />
      <div>
        <div>T.U</div>
        <div>自己紹介</div>
        <div>
          初めまして。
          <br />
          エンジニアとしては、今年で7年目になります。
          <br />
          主に、Java,Python,Typescriptでの開発経験があります。
          <br />
          よろしくお願い致します。
          <br />
          <div>
            <div>趣味</div>
            <div>お仕事</div>
          </div>
        </div>
      </div>
    </div>
  );
}
