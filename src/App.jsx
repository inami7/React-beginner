//コンポーネント
//コンポーネントファイルは拡張子jsxにする
//ファイル名の先頭は必ず大文字にする(パスカルケースという)
//{}で囲うとjavascriptの認識になる
//キャメルケースで書く
//useState　　コンポーネント内で動的に変わるものに使う
//useEffect　第2引数(配列[]の中)が変化した時だけ実行することができる
//           第２引数を設定しない場合、最初の一回だけ実行される処理になる

/* eslint react-hooks/exhaustive-deps:off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  //カウントアップuseState数値テスト
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  //顔文字useStateテスト
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]); //中で使っている変数全部書かないとエラーが出るが書かなくてもいい(無視)eslintから始まるコメントでoffにできる

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="お元気です" />でも可 */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(*'ω'*)</p>}
    </>
  );
};

export default App; //他のページでも使う宣言
