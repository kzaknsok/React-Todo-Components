import React from "react";

/**
 * incomplete-areaのコンポーネント化
 * 手順はinput-area参照
 * @param {*} props
 */
export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のToDo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key="{todo}" className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
