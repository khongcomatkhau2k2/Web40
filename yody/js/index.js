// js phần 3 thanh ngang
// slick
$(document).ready(function () {
  $(".image-slider").slick({
    // de hien 1 cai thi la slidetoshow1, thi de la 2, 3 thi de la 3
    slidesToShow: 1,
    // slidetoscroll la bam 1 lan dich qua may cai
    slidesToScroll: 1,
    // infinite: true cho phép slider hoặc carousel cuộn liên tục
    // từ slide cuối quay về slide đầu, tạo hiệu ứng cuộn vô hạn.
    infinite: true,
    // hien ra mui ten
    arrows: true,
    // tự động chạy
    autoplay: true,
    // số giây tự động chạy
    autoplaySpeed: 2000,
    // draggable cho phép di chuyển slide bằng chuột
    draggable: true,
    // slickslider custom arrow là 2 dòng dưới
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    // dấu chấm là dots
    dots: true,
    responsive: [
      {
        // độ rộng khỉ nhỏ hơn 1025px
        breakpoint: 1025,
        settings: {
          // sẽ ra 3 phần tử
          slidesToShow: 3,
        },
      },
      {
        // khi màn hình nhỏ hơn 480
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          // mất mũi tên
          arrows: false,
          // để biết kéo đến phần tử cuối là k kéo đc nữa ta đề false,có thì true
          infinite: true,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
});
