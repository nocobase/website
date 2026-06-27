---
title: "Quy trình tối ưu hóa đầu tiên cho API phía máy chủ NocoBase"
description: "Khám phá quy trình tối ưu hóa toàn diện cho API phía máy chủ của NocoBase. Hướng dẫn chi tiết này bao gồm kiểm thử hiệu suất, phân tích mã và các cải tiến chiến lược để nâng cao hiệu quả API. Tìm hiểu về tác động của các middleware và chiến lược bộ nhớ đệm khác nhau đến hiệu suất, đồng thời khám phá những cải tiến đáng kể đạt được. Lý tưởng cho các nhà phát triển muốn tối ưu hóa hiệu suất API trong các tình huống phức tạp."
---

## Bối cảnh

Một người dùng đã báo cáo thông lượng hệ thống không đạt yêu cầu cho NocoBase qua một [issue trên GitHub](https://github.com/nocobase/nocobase/issues/2912). Do sản phẩm của chúng tôi đang trong giai đoạn phát triển nhanh, nhóm hiện đang ưu tiên cải thiện chức năng hệ thống, ít tập trung vào các tối ưu hóa cụ thể cho hiệu suất. Tuy nhiên, khi NocoBase đi vào sản xuất và mở rộng cơ sở người dùng, các vấn đề về hiệu suất đang nổi lên. Điều cần thiết là chúng tôi phải tăng cường tập trung và bắt đầu các nỗ lực tối ưu hóa.

Chắc chắn, đối với một sản phẩm như NocoBase, các kịch bản ứng dụng thực tế thường phức tạp và có sự khác biệt đáng kể trong thói quen sử dụng của người dùng. Tối ưu hóa hiệu suất đòi hỏi các phân tích cụ thể, theo từng giai đoạn cho các kịch bản khác nhau. Không thể giải quyết toàn diện tất cả các vấn đề trong một vòng tối ưu hóa duy nhất.

Vòng tối ưu hóa này tập trung vào việc cung cấp đánh giá ban đầu về hiệu suất API phía máy chủ của hệ thống, sau đó là các cải tiến nền tảng có mục tiêu.

## Kiểm thử hiệu suất

### Giải thích

NocoBase sử dụng framework nền tảng Koa + Sequelize. Chúng tôi đã thiết kế một số kịch bản kiểm thử để sử dụng làm điểm chuẩn cho phân tích so sánh:

* **Koa + Sequelize:** Đây là framework nền tảng, phản ánh mức tối ưu lý thuyết, mặc dù các kịch bản thực tế có thể có một số thỏa hiệp.
* **Koa + @nocobase/database:** @nocobase/database là một lớp trừu tượng dựa trên Sequelize cho các thao tác cơ sở dữ liệu.
* **Koa + @nocobase/resourcer:** @nocobase/resourcer hoạt động như lớp định tuyến và phân phối.
* **Koa + @nocobase/server:** @nocobase/server đóng vai trò là máy chủ NocoBase.
* **Koa + Nocobase:** Đây là chương trình NocoBase hoàn chỉnh, bao gồm các plugin tích hợp sẵn.

Kiểm thử hiệu suất này không phải là mô phỏng môi trường sản xuất để kiểm tra tải căng thẳng toàn diện. Thay vào đó, nó tập trung vào kiểm thử theo lớp để so sánh dữ liệu và xác định các yếu tố chính ảnh hưởng đến hiệu suất API. Các bài kiểm tra chủ yếu được thực hiện trên máy tính cá nhân của tôi với các thông số kỹ thuật sau:

* **Hệ điều hành:** MacOS 14.0
* **CPU:** 10 nhân
* **Bộ nhớ:** 32GB
* **Cơ sở dữ liệu:** PostgreSQL (Docker, phiên bản mới nhất)
* **Thực thi NocoBase:** `yarn start -d`

Điểm cuối API được kiểm tra là `/api/users:list`, tương đương với việc thực thi các câu lệnh `select ... limit 20` và `count` trên bảng `users`. Mã cụ thể có thể được tham khảo [tại đây](https://github.com/nocobase/nocobase/tree/main/benchmark).

Mỗi kịch bản kiểm thử được đánh giá bằng lệnh `wrk -t20 -c20 -d1m`.

### Koa + Sequelize

RPS: 6938.71

```
> $ wrk -t20 -c20 -d1m http://localhost:13020/ 
Running 1m test @ http://localhost:13020/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.91ms    0.88ms  38.10ms   97.01%
    Req/Sec   348.52     30.22   434.00     84.53%
  416831 requests in 1.00m, 141.52MB read
Requests/sec:   6938.71
Transfer/sec:      2.36MB
```

CPU cơ sở dữ liệu > 100%

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   125.63%   196.7MiB / 7.748GiB   2.48%     11.6GB / 15.8GB   76.4MB / 2.81GB   11
```

PostgreSQL thường chỉ sử dụng một lõi CPU, cho thấy nút thắt cổ chai hiệu suất nằm ở cơ sở dữ liệu.

### Koa + @nocobase/database

RPS: 5487.29

```
> $ wrk -t20 -c20 -d1m http://localhost:13010/                   
Running 1m test @ http://localhost:13010/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     3.66ms  795.89us  32.80ms   91.85%
    Req/Sec   275.53     21.87   434.00     82.60%
  329784 requests in 1.00m, 121.71MB read
Requests/sec:   5487.29
Transfer/sec:      2.03MB
```

CPU cơ sở dữ liệu > 100%

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   102.99%   197.7MiB / 7.748GiB   2.49%     12.3GB / 16.6GB   76.5MB / 2.82GB   11
```

Hiệu suất đã giảm phần nào, nhưng vẫn chấp nhận được và cơ sở dữ liệu thường chạy hết công suất.

### Koa + @nocobase/resourcer

RPS: 4787.94

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13040/api/users:list'
Running 1m test @ http://localhost:13040/api/users
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.20ms    0.92ms  30.97ms   88.29%
    Req/Sec   240.48     18.01   333.00     80.79%
  287757 requests in 1.00m, 120.47MB read
Requests/sec:   4787.94
Transfer/sec:      2.00MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O         BLOCK I/O         PIDS
80393e7580c1   postgres   87.72%    197.3MiB / 7.748GiB   2.49%     12.6GB / 17GB   76.5MB / 2.82GB   11
```

Hiệu suất đã giảm hơn nữa và cơ sở dữ liệu chưa đạt đến công suất tối đa. Chúng tôi sẽ phân tích lý do sau.

### Koa + @nocobase/server

RPS: 2285.86

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13030/api/users:list'                                                   
Running 1m test @ http://localhost:13030/api/users:list
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.80ms    2.05ms  93.25ms   97.23%
    Req/Sec   114.80      9.27   300.00     93.35%
  137358 requests in 1.00m, 87.90MB read
Requests/sec:   2285.86
Transfer/sec:      1.46MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   47.82%    197.5MiB / 7.748GiB   2.49%     13.2GB / 17.7GB   76.9MB / 3.15GB   11
```

So sánh dữ liệu kiểm thử với Koa + @nocobase/resourcer, hiệu suất giảm khoảng 50%, cho thấy nút thắt cổ chai hiệu suất chính đã chuyển từ cơ sở dữ liệu sang chương trình.

### Nocobase

RPS: 580.48

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg' 
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    34.44ms    3.85ms  97.95ms   85.18%
    Req/Sec    29.03      3.94    50.00     85.04%
  34886 requests in 1.00m, 26.25MB read
Requests/sec:    580.48
Transfer/sec:    447.27KB
```

Hiệu suất tổng thể của NocoBase đã giảm đáng kể, như dự đoán trước khi kiểm tra. Điều này là do các giao diện đi qua nhiều middleware plugin, liên quan đến xác thực, kiểm tra quyền và truy vấn cơ sở dữ liệu. Đáng chú ý, bộ nhớ đệm chưa được triển khai cho đến thời điểm này, khiến nó trở thành trọng tâm chính để tối ưu hóa trong giai đoạn hiện tại.

## Phân tích mã và tối ưu hóa

### Sequelize -> database -> resourcer

Chuyển đổi từ Sequelize cơ bản sang database, rồi đến resourcer, mặc dù mỗi lớp gây ra một số chi phí hiệu suất, nhưng vẫn có thể chấp nhận được đối với một quy trình đơn lẻ. Điều này chủ yếu là do việc đóng gói thêm logic mã. Vì trọng tâm tối ưu hóa hiện tại không phải là đạt được một giải pháp hoàn chỉnh trong một lần, phần này sẽ được giữ nguyên cho đến khi có thông báo mới và mọi điều chỉnh cần thiết sẽ được giải quyết riêng trong tương lai.

### resourcer -> server

Chuyển đổi từ resourcer sang server, hiệu suất giảm hơn một nửa, cho thấy có vấn đề chắc chắn trong lĩnh vực này. Do đó, hãy bắt đầu phân tích ở đây. Server giới thiệu middleware cấp ứng dụng bổ sung so với resourcer (tham khảo [`helper.ts`](https://github.com/nocobase/nocobase/blob/main/packages/core/server/src/helper.ts)). Sau khi xem xét mã, hầu hết logic có vẻ tương đối đơn giản, không có khu vực rõ ràng nào ảnh hưởng đáng kể đến hiệu suất. Do đó, tôi đã quyết định thu thập dữ liệu liên quan đến thời gian tiêu thụ của middleware để có thêm thông tin chi tiết.

#### perf\_hooks

NodeJS cung cấp các API kiểm thử hiệu suất thông qua [perf\_hooks](https://nodejs.org/api/perf_hooks.html#perf_hooksperformance). Các API này cung cấp một bộ số liệu phong phú hơn ngoài các tính toán thời gian thực thi đơn giản. Trong bối cảnh của chúng tôi, trọng tâm vẫn là xem xét kỹ lưỡng thời gian dành cho mỗi middleware. Bằng cách sử dụng `perf_hooks.createHistogram` để xây dựng biểu đồ, chúng tôi có thể thực hiện các bài kiểm tra tải, ghi lại một cách tỉ mỉ thời gian thực thi của từng middleware. Cách tiếp cận này cho phép chúng tôi rút ra các thống kê chính như thời gian thực thi tối thiểu, tối đa và trung bình trong khoảng thời gian kiểm tra tải. Ví dụ:

```
{
  "i18n": {
    "count": 12455,
    "min": 1875,
    "max": 927231,
    "mean": 4867.227137695704,
    "exceeds": 0,
    "stddev": 10258.399954791737,
    "percentiles": {
      "0": 1875,
      "50": 3250,
      "75": 5372,
      "100": 926720
    }
  }
}
```

Sau khi sắp xếp kết quả, hai thành phần middleware ảnh hưởng đáng kể đến hiệu suất nổi bật: ghi log và `i18n`.

#### Ghi log

Theo mặc định, NocoBase xuất log ra cả tệp và thiết bị đầu cuối cùng một lúc. Tham khảo tài liệu Node.js về [I/O tiến trình](https://nodejs.org/api/process.html#a-note-on-process-io),

> **Cảnh báo**: Ghi đồng bộ chặn vòng lặp sự kiện cho đến khi ghi hoàn tất.

Trong môi trường kiểm thử của tôi, cả hai đầu ra này có khả năng là đồng bộ và vì có ghi log cho mọi yêu cầu và phản hồi, nó chắc chắn có ảnh hưởng đến hiệu suất. Xem xét rằng log giao diện là cần thiết, chúng tôi sẽ duy trì cấu hình hiện tại. Tuy nhiên, trong môi trường sản xuất, thông thường chỉ giữ lại log tệp. Do đó, trong các bài kiểm tra trong tương lai, chúng tôi có thể xem xét việc tắt log thiết bị đầu cuối để giảm bớt một số chi phí hiệu suất. Trong sản xuất, việc điều chỉnh mức log khi cần thiết cũng là một lựa chọn khả thi.

#### i18n

Middleware `i18n`, chịu trách nhiệm quản lý tài nguyên bản địa hóa, cho thấy thời gian tiêu thụ đáng kể, với nút thắt cổ chai chính được xác định trong dòng mã sau:

```
const i18n = ctx.app.i18n.cloneInstance({ initImmediate: false });
```

Cách tiếp cận hiện tại là nhân bản một phiên bản i18n để cách ly tài nguyên ngôn ngữ trong các yêu cầu khác nhau là tốn thời gian. Để tối ưu hóa, có thể triển khai một mẫu singleton dựa trên ngôn ngữ, cho phép sử dụng lại các phiên bản hiện có cho cùng một ngôn ngữ thay vì tải lại chúng cho mỗi yêu cầu.

### server -> NocoBase

Chuyển đổi từ một máy chủ đơn giản sang NocoBase hoàn chỉnh, hiệu suất giảm đáng kể. Như đã đề cập trước đó, NocoBase đầy đủ bao gồm nhiều plugin tích hợp sẵn, giới thiệu nhiều middleware lớp định tuyến, bao gồm xác thực và quyền. Theo các phương pháp đã thảo luận trước đó, chúng tôi đã sử dụng `perf_hooks` để đo thời gian dành cho các middleware này. Kết quả làm nổi bật hai middleware có tác động lớn nhất và logic thực thi chính của chúng:

* `authManager.middleware` - Middleware xác thực người dùng
  1. Kiểm tra xem token người dùng có trong danh sách đen hay không.
  2. Truy xuất phương thức xác thực hiện đang được sử dụng.
  3. Lấy thông tin người dùng dựa trên phương thức xác thực.
* `acl.setCurrentRole` - Middleware thiết lập thông tin vai trò trong mô-đun quyền
  * Truy xuất thông tin vai trò liên quan dựa trên ID người dùng hiện tại và đặt vai trò của người dùng.

Cả hai middleware này đều thực hiện truy vấn cơ sở dữ liệu trong logic chính của chúng cho mỗi yêu cầu. Để giải quyết vấn đề này, chúng tôi đang giới thiệu bộ nhớ đệm.

#### Chiến lược bộ nhớ đệm

##### Lưu trữ

NocoBase hiện sử dụng cả bộ nhớ đệm trong bộ nhớ và Redis. Đối với dữ liệu tương đối tĩnh, như các phương thức xác thực hệ thống, chúng tôi lưu trữ chúng trong bộ nhớ. Dữ liệu liên quan đến thông tin người dùng tuân theo cấu hình lưu trữ mặc định, cho phép người dùng chọn Redis làm phương pháp lưu trữ mặc định.

##### Bộ nhớ đệm theo yêu cầu + Cập nhật Hook

Dữ liệu như phương thức xác thực, thông tin người dùng và vai trò thường thuộc loại đọc nhiều và ghi ít. Chúng tôi triển khai chiến lược bộ nhớ đệm theo yêu cầu, trong đó yêu cầu đầu tiên kích hoạt truy vấn cơ sở dữ liệu và kết quả được lưu vào bộ nhớ đệm. Các yêu cầu tiếp theo sử dụng kết quả đã lưu trong bộ nhớ đệm. Để đảm bảo tính nhất quán của dữ liệu, chúng tôi giới thiệu các hook để lắng nghe mọi thay đổi của cơ sở dữ liệu và đồng bộ hóa chúng với bộ nhớ đệm.

##### Bộ lọc Bloom

Đối với các truy vấn danh sách đen token, nơi chúng tôi cần so sánh token người dùng với token trong danh sách đen, bộ nhớ đệm theo yêu cầu không phù hợp. Thay vào đó, trong quá trình khởi động chương trình, chúng tôi tải trước các token danh sách đen vào bộ nhớ đệm. Để tiết kiệm dung lượng bộ nhớ, chúng tôi sử dụng bộ lọc Bloom để lưu vào bộ nhớ đệm danh sách đen. Bộ lọc Bloom xác định chính xác nếu một giá trị không tồn tại, với xác suất đánh giá sai sự tồn tại của một giá trị. Ban đầu, bộ lọc Bloom kiểm tra xem token người dùng có trong danh sách đen hay không. Nếu bộ lọc Bloom chỉ ra sự tồn tại, chúng tôi thực hiện truy vấn cơ sở dữ liệu thứ cấp để có độ chính xác.

##### LRU

Bộ nhớ đệm trong bộ nhớ của NocoBase mặc định sử dụng chiến lược Ít được sử dụng gần đây nhất (LRU) để loại bỏ bộ nhớ đệm. Người dùng có thể định cấu hình các chính sách bộ nhớ đệm, chẳng hạn như đặt giới hạn trên về dung lượng bộ nhớ đệm. Đối với người dùng Redis, các chiến lược bộ nhớ đệm tùy chỉnh như LRU hoặc LFU có thể được định cấu hình khi cần.

#### Các tối ưu hóa khác

Ngoài các tối ưu hóa middleware được đề cập ở trên, một số middleware, chẳng hạn như db2resource và ACLMiddleware, cũng ảnh hưởng đến hiệu suất. Để phân tích thêm các nút thắt cổ chai hiệu suất tiềm ẩn và vì hiện tại không có nhiệm vụ tối ưu hóa đơn giản, chúng tôi dự định bật trình kiểm tra để kiểm tra hồ sơ CPU của hệ thống trong thời gian chạy.

```
# Bật inspector
NODE_ARGS=--inspect yarn start
```

Bằng cách liên tục gửi yêu cầu đến API bằng wrk và chụp hồ sơ CPU trong Chrome DevTools trong một khoảng thời gian cụ thể, chúng tôi có thể thu được kết quả tương tự như sau.

![Chrome DevTools](https://static-docs.nocobase.com/fdfa998ef9c4067b2b302551f6ab950d.webp)

Khi kiểm tra hồ sơ, chúng tôi xác định rằng một số logic nhất định trong db2resource để phân tích cú pháp tuyến đường, chẳng hạn như việc sử dụng pathToRegexp, có tác động đáng kể đến hiệu suất, giải thích cho sự suy giảm hiệu suất hơn nữa ở lớp định tuyến được quan sát thấy trong các bài kiểm tra trước đó. Trong ACLMiddleware, các hoạt động liên quan đến xử lý quyền, như miniMatch, cũng cho thấy thời gian thực thi dài hơn. Đối với các khía cạnh này, chúng tôi đã thực hiện một số tối ưu hóa sơ bộ, chẳng hạn như lưu vào bộ nhớ đệm các biến cho các tính toán lặp đi lặp lại. Các tối ưu hóa sâu rộng hơn sẽ được giải quyết trong các lần lặp trong tương lai.

## Tổng kết

### Kết quả tối ưu hóa

Trong nỗ lực tối ưu hóa này, chúng tôi tập trung vào:

* Sử dụng các biến để lưu vào bộ nhớ đệm các hoạt động tốn thời gian trong middleware, chẳng hạn như tạo phiên bản `i18n` và kiểm tra quyền.
* Giới thiệu các cơ chế bộ nhớ đệm thích hợp cho các hoạt động middleware liên quan đến truy vấn cơ sở dữ liệu thường xuyên.

Ngoài ra, chúng tôi khuyên bạn nên điều chỉnh mức đầu ra và phương pháp ghi log trong môi trường sản xuất dựa trên yêu cầu để giảm thiểu tác động của việc in log đến hiệu suất API.

Sau khi thực hiện các tối ưu hóa này, việc kiểm tra lại ứng dụng NocoBase hoàn chỉnh cho thấy những cải thiện đáng kể về hiệu suất API.

```
> $ wrk -c20 -t20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0'
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.60ms    2.62ms 103.80ms   96.32%
    Req/Sec   105.44     11.62   393.00     83.66%
  126047 requests in 1.00m, 60.10MB read
  Non-2xx or 3xx responses: 2
Requests/sec:   2097.31
Transfer/sec:      1.00MB
```

### Tối ưu hóa liên tục

Quá trình tối ưu hóa trong vòng này có một số hạn chế nhất định:

Một mặt, chúng tôi chỉ kiểm tra các yêu cầu đơn giản. Trong các kịch bản kinh doanh thực tế, các khía cạnh như lọc, phân tích cú pháp biến, giao dịch phức tạp, v.v., có thể đưa ra các thách thức hiệu suất bổ sung cần được tối ưu hóa thêm.

Mặt khác, chúng tôi tập trung vào việc tối ưu hóa các phần ảnh hưởng đáng kể đến hiệu suất, để lại không gian cải thiện trong các lĩnh vực khác.

Trong tương lai, chúng tôi sẽ tiếp tục tối ưu hóa hiệu suất của NocoBase. Nếu bạn gặp sự cố về hiệu suất trong quá trình sử dụng, vui lòng cung cấp các trường hợp cụ thể để phân tích và tối ưu hóa. Phản hồi của bạn sẽ có giá trị trong việc giải quyết các kịch bản sử dụng thực tế.

## Tài liệu tham khảo

* [Caching Best Practices | Amazon Web Services](https://aws.amazon.com/cn/caching/best-practices/)
* [Bloom filter](https://redis.io/docs/data-types/probabilistic/bloom-filter/)
* [Performance measurement APIs | Node.js v21.4.0 Documentation](https://nodejs.org/api/perf_hooks.html#perf_hookscreatehistogramoptions)
* [Debugging - Getting Started | Node.js](https://nodejs.org/en/guides/debugging-getting-started)
