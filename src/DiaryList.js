import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList}) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h2>{diaryList.length}개의 일기가 있습니다.</h2>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
