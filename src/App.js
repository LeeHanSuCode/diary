import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useState, useRef} from "react";
/*const dummyList = [
  {
    id: 1,
    author: "이한수",
    content: "하이 5",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "차정민",
    content: "하이 4",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "송경호",
    content: "하이 3",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "채희원",
    content: "하이 2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "김재원",
    content: "하이 1",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];
*/
function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    alert(`${targetId}번째 일기가 삭제되었습니다.`);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
