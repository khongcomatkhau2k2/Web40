// Khai báo biến
// Khai báo function
//...

// $ là một function Object
$(function () {
  //   // chạy sau khi trang tải xong
  //   console.log(document.querySelector("h1"));

  //   // truy vấn DOM với jQuery
  //   // $(selector || node || jqueryObject)
  //   const $h1 = $("h1"); // đây là 1 jqueryObject

  //   // document.querySelector => Node ! null
  //   // document.querySelectorAll => NodeList
  //   console.log($h1);

  //   // Kiểm tra xem có phần tử nào hay không?
  //   if ($h1.length > 0) {
  //     // Do something
  //   }

  //   // truy cập, sửa nội dung, thuộc tính của phần tử
  //   console.log($h1.text()); // textContent | innerText // dòng này là getter
  //   $h1.text("Văn bản này để thay thế dòng h1,"); // dòng này là setter

  //   console.log($h1.attr("title")); // lấy ra thuộc tính title (attr là viết tắt của attribute)
  //   $h1.attr("title", "Hehe"); // thay đổi title thành Hehe

  //   console.log($h1.html()); // Lấy nội dung HTML của phần tử
  //   $h1.html("Xin chào, <button>Hihihi</button>!"); // Đặt nội dung HTML của phần tử

  //   console.log($h1.hasClass("heading")); // Kiểm tra xem phần tử có class "heading" hay không
  //   $h1.addClass("heading heading-2"); // Thêm class "heading" và "heading-2"
  //   $h1.removeClass("heading-2"); // Xóa class "heading-2"
  //   $h1.toggleClass("heading-3"); // Bật/tắt class "heading-3"

  //   console.log($h1.css("color")); // Lấy giá trị thuộc tính CSS "color"

  //   $h1.css({
  //     color: "red",
  //     fontSize: "40px",
  //   }); // Đặt giá trị cho các thuộc tính CSS

  //   console.log($h1.css("color")); // Kiểm tra lại giá trị thuộc tính CSS "color"

  $("h1")
    .text("Hello jQuery!")
    .attr({
      title: "Hello",
      id: "heading",
    })
    .css({
      color: "red",
      fontSize: "40px",
    })
    .click(function () {
      console.log("Aaa ư ư ư");
    })
    .addClass("heading")
        .html("Xin chào, <button>Hihihi</button>");
    
    
    const $text = $("input[name='text']");
    console.log($text.val()); // lấy ra giá trị trong ô input
    $text.val("Hư hư hư")

    $checkbox = $("input[name='checkbox']");
    console.log($checkbox.this.prop("checked"));
    $checkbox.prop("checked", true);

    const $select = $("select");
    console.log($select.val());
    $select.val("2");
});


