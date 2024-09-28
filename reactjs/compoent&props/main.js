const data = [
  {
    " title": "HTML CSS Pro",
    description:
      "Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.",
    image_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
    videos_count: 590,
  },
  {
    title: "Ngôn ngữ Sass",
    description:
      "Đây là một khóa học nhỏ được tách ra từ 2 chương học trong khóa HTML CSS Pro. Kiến thức về Sass trong khóa này bạn có thể áp dụng ngay vào các dự án của bạn.",
    image_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png",
    videos_count: 27,
  },
  {
    title: "JavaScript Pro",
    description: "Khóa học JavaScript Pro",
    image_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png",
    videos_count: 101,
  },
];

function Course(props) {
  return (
    <div className="course">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img src={props.image_url} alt={props.title} />
      <p>Số lượng video: {props.videos_count}</p>
    </div>
  );
}

// App.js
function App() {
  return (
    <div>
      {data.map((item) => {
        return (
          <Course
            title={item.title}
            description={item.description}
            image_url={item.image_url}
            videos_count={item.videos_count}
          />
        );
      })}
    </div>
  );
}

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
