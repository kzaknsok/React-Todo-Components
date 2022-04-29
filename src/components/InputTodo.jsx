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
 *
 * todoが5個以上で無効化する機能追加
 * disabledをpropsに追加
 * input、buttonタグにdisabled={disabled}を追記
 * つまりdisabled={disabled}の状態はtrue。
 * 親コンポーネントでtrue,falseの制御させる。
 *
 */
export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
