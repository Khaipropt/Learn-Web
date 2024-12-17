# Mục tiêu
## Mô tả các tiêu chuẩn hypertext và HTML
## Hiểu đối tượng *HTML* và *tag* đánh đấu
## Tạo cấu trúc đơn giản của một file HTML
## Học *HTML5 tags*
# HTML cơ bản
## Hypertext & HTML
### HyperText Markup Language (HTML) là ngôn ngữ để chỉ định nội dung *static* của các trang Web (dựa trên SGML,  the Standard Generalized Markup Language , *Ngôn ngữ đánh dấu tổng quát tiêu chuẩn* )
### **hypertext**
#### Đề cập đến thực tế là các trang web không chỉ là văn bản
#### có thể chứa đa phương tiện, cung cấp các liên kết để truy cập trong cùng một tài liệu và đến các tài liệu khác
### **markup** đề cập đến thực tế là nó hoạt động bằng cách tăng cường văn bản với các ký hiệu đặc biệt (tags) xác định cấu trúc tài liệu và loại nội dung
## Hypertext & HTML (History)
### HTML 1 (Berners-Lee, 1989): tích hợp đa phương tiện rất cơ bản, hạn chế vào năm 1993, Mosaic đã thêm nhiều tính năng mới (ví dụ: hình ảnh tích hợp)
### HTML 2.0 (IETF, 1995): đã cố gắng tiêu chuẩn hóa các tính năng này và các tính năng khác, nhưng cuối năm 1994-1996, Netscape và IE đã thêm nhiều tính năng mới, khác nhau
### HTML 3.2 (W3C, 1997): cố gắng thống nhất thành một tiêu chuẩn duy nhất nhưng không giải quyết các công nghệ mới hơn như Java applet và video trực tuyến
### HTML 4.0 (W3C, 1997): cố gắng vạch ra các hướng đi trong tương lai cho HTML, không chỉ phản ứng với *vendors* (các nhà cung cấp)
### HTML 5 (W3C, 2014): thêm *tag*(thẻ) và *atributes*(thuộc tính mới)
##  HTML Document Structure
### Một HTML document có hai yếu tố cấu trúc chính:
#### HEAD chứa thông tin thiết lập cho trình duyệt và Web pages
#### BODY chứa nội dung thực tế sẽ được hiển thị trong Web pages
## <head> and <body> elements
### <head> element
#### Title
#### *Cascading Style sheet information* (Thông tin bảng kiểu xếp tầng)
#### *Metadata, such as who **authored** the page, keywords* (Siêu dữ liệu, chẳng hạn như ai là tác giả của trang, từ khóa)
#### JavaScript code
### The <body> element
#### Paragraphs
#### Tables and lists
#### Images
#### JavaScript code
#### PHP code
## Tags and Elements
### HTML chỉ định một tập hợp *tags* (thẻ) xác định cấu trúc của tài liệu và loại nội dung
#### tags được đặt trong < > : ```<img src="image.gif" />``` chỉ định một hình ảnh
#### Hầu hết *tag* (thẻ) đều có theo **cặp**, đánh dấu phần bắt đầu và kết thúc: ```<title> và </title>``` đính kèm tiêu đề của một trang
### Một HTML *element* là một đối tượng được bao bọc bởi một cặp (trong hầu hết các trường hợp) các *tag* (thẻ): ```<tagname>Nội dung</tagname>```
#### <title>Trang chủ của tôi</title> là một phần tử **TITLE**(TIÊU ĐỀ)
#### ```<b>Văn bản này xuất hiện in đậm</b>``` là một phần tử **BOLD** (in đậm)
#### ```<p>Một phần của văn bản in <b>đậm</b> này</p>``` là một phần tử PARAGRAPH có chứa một phần tử BOLD
## Text Layout
### ```<p>```: định nghĩa một đoạn văn. Một đoạn văn luôn bắt đầu trên một dòng mới và các trình duyệt tự động thêm một số khoảng trắng (lề) trước và sau một đoạn văn
### ```<p>``` Định nghĩa một đoạn văn
### ```<hr>``` Xác định một thay đổi theo chủ đề trong nội dung
### ```<br>``` Chèn một ngắt dòng duy nhất
### ```<pre>``` Xác định văn bản được định dạng sẵn
### ```<h1>...</h1>```: một tiêu đề lớn, in đậm
### ```<h2>...</h2>```: tiêu đề nhỏ hơn một chút
### ...
### ```<h6>…</h6>```: a tiny heading
## The Basic Web page – A Worked Example
## Text Appearance
### ```<b>… </b>``` specify bold
### ```<i>… </i>``` specify italics
### ```<big>… </big>``` increase size
### ```<small>… </small>``` decrease size
### ```<em>…</em>``` put emphasis (in nghiêng)
### ```<strong>…</strong>``` put emphasis (in đậm)
### ```<sub>… </sub>``` a subscript
### ```<sup>… </sup>``` a superscript
## List
### Có 3 loại khác nhau
### ```<ol>...</ol>```: một danh sách có thứ tự
#### ```<li>``` xác định từng mục danh sách
### ```<ul>...</ul>``` Danh sách không theo thứ tự
#### ```<li>``` xác định từng mục danh sách
### ```<dl>...</dl>``` Danh sách định nghĩa
#### ```<dt>``` Xác định từng thuật ngữ
#### ```<dd>``` xác định định nghĩa của nó
##  Hyperlinks
### ```<a href="https://www.w3.org/">W3C</a><br>```
## Images
###  ```<img src="URL (or filename)" height="n" width="n"alt="text" title= "text" />```
### **src** xác định tên file (và có thể bao gồm URL)
### **width** and/or **height** dimensions in pixel
### **title Hiển thị khi chuột được "di chuột" trên hình ảnh
### **alt** văn bản được hiển thị khi hình ảnh bị thiếu, không thể tải được
## Tables
### ```<table>...</table>```: một phần tử bảng
### ```<th>...</th>```: ô tiêu đề
### ```<tr>...:</tr>```: một hàng trong bảng
### ```<td>...</td>```: một ô
# HTML
##  HTML5 New Tags
### HTML 5 chỉ định DOCTYPE như sau: ```<!DOCTYPE html>```
### chỉ định Mã hóa ký tự như sau: ```<meta charset="UTF 8">```
### Các *tag* (thẻ) mới được giới thiệu trong HTML5 để có cấu trúc tốt hơn
#### header - Thẻ này đại diện cho tiêu đề của một phần.
#### footer − Thẻ này đại diện cho chân trang của một phần và có thể chứa thông tin về tác giả, thông tin bản quyền, v.v
#### nav − Thẻ này đại diện cho một phần của tài liệu dành cho điều hướng
#### dialog − Thẻ này có thể được sử dụng để đánh dấu một cuộc trò chuyện.
#### figure - Thẻ này có thể được sử dụng để liên kết chú thích với một số nội dung được nhúng, chẳng hạn như đồ họa hoặc video.
## HTML5 New Tags
### section − Thẻ này đại diện cho một tài liệu chung hoặc phần ứng dụng. Nó có thể được sử dụng cùng với h1-h6 để chỉ ra cấu trúc tài liệu.
### article − Thẻ này đại diện cho một phần nội dung độc lập của tài liệu, chẳng hạn như mục blog hoặc bài báo.
### aside - Thẻ này đại diện cho một phần nội dung chỉ liên quan một chút đến phần còn lại của trang
### HTML5 cung cấp các yếu tố mới cho nội dung phương tiện
#### ```<audio>``` xác định nội dung âm thanh
#### ```<video>``` xác định video hoặc movie
#### ```<source>``` xác định *multiple media resources* cho ```<video>``` và ```<audio>```
#### ```<embed>``` xác định vùng chứa cho ứng dụng bên ngoài hoặc nội dung tương tác (trình cắm thêm)
#### ```<track>``` xác định các bản nhạc văn bản cho ```<video>``` và ```<audio>```
#### ```<canvas>``` thường dùng để vẽ graphics nhanh chóng, thông qua scrting( thường javaScript)
## New input elements
### button
### checkbox
### color
### date 
### datetime 
### datetime-local 
### email 
### file
### hidden
### image
### month 
### number 
### password
### radio
### range 
### reset
### search
### submit
### tel
### text
### time 
### url
### week