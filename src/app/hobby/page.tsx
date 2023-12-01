import Link from "next/link";

const Hobby = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-yellow-100 gap-5">
      <div className="text-5xl underline underline-offset-[12px]">My Hobby</div>
      <div className="flex gap-5">
        <div className="w-52 rounded overflow-hidden shadow-lg bg-yellow-300">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">漫画&アニメ</div>
            <div className="text-gray-700 text-base">
              <li>進撃の巨人</li>
              <li>キングダム</li>
              <li>呪術廻戦</li>
            </div>
          </div>
        </div>
        <div className="w-52 rounded overflow-hidden shadow-lg bg-yellow-300">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">運動</div>
            <div className="text-gray-700 text-base">
              <li>筋トレ</li>
              <li>フットサル</li>
              <li>ランニング</li>
            </div>
          </div>
        </div>
        <div className="w-52 rounded overflow-hidden shadow-lg bg-yellow-300">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">ゲーム</div>
            <div className="text-gray-700 text-base">
              <li>ピクミン</li>
              <li>マリオカート</li>
              <li>ゼルダの伝説</li>
            </div>
          </div>
        </div>
      </div>
      <Link href="/">Homeへ</Link>
    </div>
  );
};

export default Hobby;
