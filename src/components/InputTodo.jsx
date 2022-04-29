import React from "react";

/**
 * input-areaをコンポーネント化
 * 頭にexport付ける
 * 親コンポーネントと分離された関数と紐づけするため、
 * propsを使って橋渡しする。
 *
 *   const { todoText, onChange, onClick } = props;
 * 分割代入によってpropsが持つ配列を取り出す。
 * 親コンポーネントのインプット初期値(空文字)をtodoTextで受け取る。
 * 入力したらonChangeが動いて情報を書き換える。
 * 追加ボタンで未完了エリアへ表示するonClickAddが動く。
 * 各関数名はpropsで受け取った時点での名称に書き換え。
 */
export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="ToDoを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
