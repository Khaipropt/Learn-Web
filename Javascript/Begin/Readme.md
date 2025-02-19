# JavaScript
## Content
### Scripts
#### common tasks for client-side scripts
### JavaScript
#### data types & expressions
#### control statement
#### functions & libraries
#### date, document, string, array, user-defined, classes
## Client-Side programming
### HTML rất tốt để phát triển static pages
#### có thể chỉ định  text/image layout, presentation, links, …
#### Web page trông giống nhau mỗi khi truy cập
### Client-side programming
#### các chương trình được viết bằng một ngôn ngữ lập trình (hoặc kịch bản) riêng biệt, ví dụ: JavaScript,
#### các chương trình được nhúng vào HTML của một trang Web, với các thẻ (HTML) để xác định thành phần chương trình
#### trình duyệt thực thi chương trình khi nó tải trang, tích hợp đầu ra động của chương trình với nội dung tĩnh của HTML
#### cũng có thể cho phép người dùng (client) nhập thông tin và xử lý nó, có thể được sử dụng để xác thực đầu vào trước khi nó được gửi đến máy chủ từ xa
## Common Scripting Tasks
### thêm các tính năng động vào các trang Web
#### Xác thực dữ liệu biểu mẫu
####  image rollovers
#### time-sensitive or random page elements
#### handling cookies
### định nghĩa chương trình với giao diện Web
#### sử dụng buttons, text boxes, clickable images, prompts, etc
### Hạn chế của client-side scripting
#### Vì mã tập lệnh được nhúng vào trang nên nó có thể xem được trên toàn thế giới
#### Vì lý do bảo mật, các tập lệnh bị hạn chế về những gì chúng có thể làm
## JavaScript/ ECMAScript
### ECMA International
####  European Computer Manufacturers Association
#### Tổ chức phi lợi nhuận phát triển các tiêu chuẩn về phần cứng máy tính, truyền thông và ngôn ngữ lập trình.
### JavaScript: Một ngôn ngữ kịch bản mục đích chung phù hợp với đặc tả ECMAScript
#### 1997: ECMAScript 1
#### 2023: ECMAScript 14
## JavaScript
### JavaScript chủ yếu được diễn giải, nhưng các công cụ JavaScript hiện đại, như V8 trong Google Chrome, sử dụng biên dịch JIT (Just-In Time) để tăng hiệu suất.
#### Interpreter: Trình thông dịch chạy các instructions trực tiếp từ ngôn ngữ lập trình mà không thay đổi chúng thành mã máy trước.(một chương trình đọc và thực thi mã nguồn từng dòng một. Nó không chuyển đổi toàn bộ mã nguồn thành mã máy trước khi thực thi.)
#### Compiler: Trình biên dịch thay đổi toàn bộ chương trình thành mã đối tượng (hoặc mã nhị phân) trước khi chạy. Mã này sau đó có thể được chạy bởi máy.
#### JIT Compiler: A JIT compiler chuyển đổi mã thành mã byte trước. Sau đó, trong thời gian chạy, nó thay đổi mã byte thành mã có thể đọc được bằng máy, giúp chương trình chạy nhanh hơn
### Nhiều môi trường không phải trình duyệt sử dụng nó như Node.js, Apache CouchDB, Adobe Acrobat
### Client-side: JS có thể chạy trên các trình duyệt như một ngôn ngữ kịch bản cho phép bạn tạo nội dung cập nhật động, điều khiển đa phương tiện, tạo hoạt ảnh động,…
### Server-side: JS có thể chạy ở phía máy chủ với sự xuất hiện của NodeJS – một môi trường thời gian chạy Javascript.
### Sử dụng ```<script>``` thẻ để thêm mã Javascript vào trang
### document.write
#### Hiển thị văn bản trong trang
#### văn bản có thể bao gồm HTML tags
## JavaScript Data Types & Variables
### JavaScript có 8 kiểu dữ liệu
#### String 
#### Number
#### Bigint 
#### Boolean 
#### Undefined: undefined
#### Null: null
#### Symbol
#### Object
### Tên biến chứa các chữ cái, chữ số, dấu gạch dưới bắt đầu bằng chữ cái hoặc dấu gạch dưới, phân biệt chữ hoa chữ thường
### Cùng một biến có thể được sử dụng để chứa các loại dữ liệu khác nhau
## JavaScript Declaration
### var: phạm vi chức năng hoặc phạm vi toàn cầu
### let: phạm vi khối
### const: giống như let, ngoại trừ người dùng không thể cập nhật nó
## JavaScript Operators & Control Statements
### Toán tử & câu lệnh điều khiển:
#### +, -, *, /, %, ++, --, … ==, !=, <, >, <=, >= &&, ||, !,===,!==
#### if , if-else, switch while, for, do-while, …
## User-Defined Functions
### các định nghĩa hàm tương tự như C++/Java, ngoại trừ:
#### Không có kiểu trả về cho hàm (vì các biến được gõ lỏng lẻo)
#### không có kiểu biến cho các tham số (vì các biến được gõ lỏng lẻo)
#### chỉ truyền tham số theo giá trị (tham số nhận bản sao của đối số)
## JavaScript Libraries
### Tốt hơn : nếu bạn xác định các hàm có thể hữu ích cho nhiều trang, hãy lưu trữ trong một tệp thư viện riêng biệt và tải thư viện khi cần tải thư viện bằng thuộc tính src trong thẻ script (không đặt gì giữa thẻ bắt đầu và kết thúc)
## Library Example
## Callback Function
### Chúng ta có thể truyền các hàm dưới dạng tham số cho các hàm khác và gọi chúng bên trong hàm bên ngoài
## Objects
### Objects được sử dụng để lưu trữ các bộ sưu tập khóa của các dữ liệu khác nhau và các thực thể phức tạp hơn. Một đối tượng chứa danh sách các thuộc tính. Thuộc tính là một cặp "key:value", trong đó khóa là một chuỗi và giá trị có thể là bất cứ thứ gì.
## Garbage collection
## String Object
### String object gói gọn một chuỗi ký tự, được đặt trong dấu ngoặc kép. Các thuộc tính bao gồm
#### length : lưu trữ số ký tự trong các phương thức chuỗi bao gồm
#### charAt(index): returns the character stored at the given index
#### substring(start, end): returns the part of the string between the start (inclusive) and end (exclusive) indices
#### toUpperCase(): returns copy of string with letters uppercase
#### toLowerCase(): returns copy of string with letters lowercase
### Để tạo một chuỗi, hãy gán bằng cách sử dụng new hoặc (trong trường hợp này) chỉ cần thực hiện một nhiệm vụ trực tiếp (new là ngầm) : *word = new String("foo"); từ = "foo";*
### thuộc tính/phương thức được gọi chính xác như trong C++/Java: *word.length , word.charAt(0)*
## String example: Palindromes
## Math Object
### Tích hợp sẵn Math object contains functions and constants
#### Math.sqrt
#### Math.pow
#### Math.abs
#### Math.max
#### Math.min
#### Math.floor
#### Math.ceil
#### Math.round
#### Math.PI
#### Math.E
### Math.random hàm trả về một số thực trong ```[0..1)```
![](https://www.notion.so/JavaScript-16053e6f47d080e18e62d2f6bc23a607?pvs=4#16153e6f47d080468a54e3e5de6209a0)
## Arrays 
### Arrays lưu trữ một chuỗi  items, accessible via an index
#### vì JavaScript được gõ lỏng lẻo, các phần tử không nhất thiết phải là cùng một kiểu
#### Để tạo một mảng, hãy phân bổ không gian bằng cách sử dụng new (hoặc có thể gán trực tiếp)
#### để truy cập một phần tử mảng, hãy sử dụng [] (như trong C++/Java)
#### thuộc tính Length lưu trữ số lượng mục trong mảng
##  Array Example
## Arrays (cont.)
### Arrays có các phương thức được xác định trước cho phép chúng được sử dụng làm ngăn xếp, hàng đợi hoặc các cấu trúc dữ liệu lập trình phổ biến khác.
## Date Object
### Date Object có thể được sử dụng để truy cập ngày và giờ
#### để tạo đối tượng Date, hãy sử dụng new & supply year/month/day/…
#### methods include:
## Date Example
## Another Example
## Document Object
- document.write(…) : để hiển thị văn bản trong trang
- document.URL: cung cấp vị trí của HTML document
- document.lastModified: cung cấp ngày và giờ mà HTML document được thay đổi lần cuối
## User-Defined Objects
- User có thể tạo một lớp bằng cách sử dụng từ khóa  “class”
![](https://www.notion.so/JavaScript-16053e6f47d080e18e62d2f6bc23a607?pvs=4#16153e6f47d0801ea21aff4d0aa2e39f)