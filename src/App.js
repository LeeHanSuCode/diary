import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
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

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
