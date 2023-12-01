import Link from "next/link";

const Work = () => {
  return (
    <div className="flex flex-col min-h-screen items-center pt-10 bg-red-100 gap-5">
      <div className="text-5xl underline underline-offset-[12px]">My Work</div>
      
      <div className="w-1/2 flex items-center justify-between border-2 border-solid border-red-500 p-3 rounded-lg">
        <div className="flex text-xl">技術スタック</div>
        <div className="text-xl gap-5">
          <div>
            <div className="text-xl">■Java</div>
            <p>新人研修でJavaを学習し、そのまま現場へ</p>
          </div>
          <div>
            <div className="text-xl">■Python</div>
            <p>flaskでのweb開発</p>
          </div>
          <div>
            <div className="text-xl">■Typescript</div>
            <p>Reactを使った開発をメインで行う</p>
          </div>
          <div>
            <div className="text-xl">■Shell Script</div>
            <p>定期的な処理や作業効率化のために勉強</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-between border-2 border-solid border-red-500 p-3 rounded-lg">
        <div className="flex text-xl">プロジェクト</div>
        <div className="text-xl gap-5">
          <div>
            <div className="text-xl">■個人情報保護</div>
            <p>個人情報保護法に関するドキュメント作成</p>
          </div>
          <div>
            <div className="text-xl">■金融プラットフォームのpoc開発</div>
            <p>javaを使ったプラットフォーム開発</p>
          </div>
        </div>
      </div>

      <Link href="/">Homeへ</Link>
    </div>
  );
};

export default Work;
