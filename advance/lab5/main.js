//ve nha lam cho hiển thị danh sách bài nhạc, và bấm vào bài nào sẽ chuyển ra bài ý
// Danh sách các bài hát
const songs = [
  {
    id: 1, // ID của bài hát
    title: "Like That", // Tên bài hát
    artist: "BABYMONSTER", // Tên nghệ sĩ
    src: "songs/cophong.mp3", // Đường dẫn tới file âm thanh
    cover:
      "https://avatar-ex-swe.nixcdn.com/song/2024/04/17/6/0/4/6/1713308876918_640.jpg", // Đường dẫn tới hình ảnh bìa
  },
  {
    id: 2,
    title: "Bài hát thứ 2",
    artist: "Đéo biết ai hát",
    src: "songs/OnTheGround.mp3",
    cover:
      "https://www.anhshop.com/wp-content/uploads/2018/12/straw-e1529640243518-600x600.jpg",
  },
  {
    id: 3,
    title: "Roi ta se ngam phao hoa",
    artist: "Ng Việt hát",
    src: "songs/RTSNPHCN.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png",
  },
];

const audio = document.querySelector("#audio");
let currentSongIndex = 0;
let isPlaying = false;
// Hàm khởi tạo bài hát đầu tiên
function initSong() {
  const song = songs[currentSongIndex]; // Lấy bài hát đầu tiên trong danh sách
  audio.src = song.src; // Đặt đường dẫn file âm thanh cho phần tử audio

  const cover = document.querySelector(".cover");
  cover.src = song.cover;
  const title = document.querySelector(".title");
  title.textContent = song.title;
  const artist = document.querySelector(".artist");
  artist.textContent = song.artist;

  if (isPlaying) {
    audio.play();
  }
}

// Hàm kiểm tra xem âm thanh đang dừng hay không
function isPause() {
  return audio.paused; // Trả về true nếu âm thanh đang dừng, false nếu đang phát
}

function onTimeUpdate() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progress = (currentTime / duration) * 100;
  const currentTimeEl = document.querySelector(".current-time");
  const progressBarEl = document.querySelector(".progress-bar");
  currentTimeEl.textContent = formatTimeStr(currentTime);
  progressBarEl.value = progress || 0;
}

function handleClickPrev() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  initSong();
}
function handleClickNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  initSong();
}
// play() là một phương thức của đối tượng HTMLAudioElement.

// Hàm xử lý khi bấm nút play
function handleClickPlay() {
  // Xử lý logic khi bấm nút play
  if (isPause()) {
    // Nếu âm thanh đang dừng
    audio.play(); // Bắt đầu phát
  } else {
    // Nếu âm thanh đang phát
    audio.pause(); // Tạm dừng
  }
}

function onPlay() {
  isPlaying = true;
  const play = document.querySelector(".play");
  play.textContent = "Pause";
}

function onPause() {
  isPlaying = false;
  const play = document.querySelector(".play");
  play.textContent = "Play";
}

// Luồng chính
function setUpPlayer() {
  initSong(); // Khởi tạo bài hát đầu tiên

  const prev = document.querySelector(".prev"); // Lấy nút Prev
  const play = document.querySelector(".play"); // Lấy nút Play
  const next = document.querySelector(".next"); // Lấy nút Next

  prev.addEventListener("click", handleClickPrev); // Thêm sự kiện click cho nút Prev
  play.addEventListener("click", handleClickPlay); // Thêm sự kiện click cho nút Play
  next.addEventListener("click", handleClickNext); // Thêm sự kiện click cho nút Next

  audio.addEventListener("click", onPlay);
  audio.addEventListener("click", onPause);
}

// Gọi hàm setUpPlayer để khởi tạo
setUpPlayer();
