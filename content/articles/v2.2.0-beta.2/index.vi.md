---
title: "NocoBase v2.2.0-beta.2: Thêm biểu mẫu cấu hình kho vector bên ngoài cho cơ sở tri thức AI"
description: "Ghi chú phát hành phiên bản v2.2.0-beta.2"
---

### 🎉 Tính năng mới

- **[Nhân viên AI]** Đã thêm biểu mẫu cấu hình kho vector bên ngoài cho cơ sở kiến thức AI. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) bởi @cgyrock
- **[AI: Cơ sở kiến thức]** Đã thêm biểu mẫu cấu hình kho vector bên ngoài cho cơ sở kiến thức AI. bởi @cgyrock
- **[Trình quản lý Email]** Đã chuyển client của Trình quản lý Email lên v2. bởi @jiannx

### 🚀 Cải tiến

- **[cli]**

  - Tối ưu hóa kiểm tra tương thích cho các định dạng số phiên bản khác nhau. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) bởi @chenos
  - Đã thêm hỗ trợ cập nhật kỹ năng lên một phiên bản cụ thể. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) bởi @chenos
  - Cải thiện cách diễn đạt của các lời nhắc thiết lập khởi tạo. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) bởi @chenos
- **[undefined]**

  - Đã thêm kịch bản hội thoại kiểm soát phiên bản vào trang tổng quan AI Builder. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) bởi @Molunerfinn
    Tham khảo: [Hướng dẫn nhanh AI Builder](https://docs.nocobase.com/en/ai-builder)
  - Cải thiện tài liệu kiểm soát phiên bản với ghi chú về tính năng tự động lưu phiên bản trong AI Builder. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) bởi @cgyrock
    Tham khảo: [Kiểm soát phiên bản](docs/docs/en/ops-management/version-control/index.md)
- **[Workflow]** Cải thiện trải nghiệm chỉnh sửa metadata workflow bằng cách hỗ trợ chỉnh sửa mô tả trong popup chi tiết và tự động điền metadata workflow nguồn khi sao chép workflow. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) bởi @mytharcher
- **[Hành động: Nhập bản ghi]** Cải thiện hộp thoại chi tiết lỗi nhập và tác vụ bất đồng bộ để các thông báo lỗi dài có thể được xem đầy đủ mà không làm hỏng bố cục. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) bởi @katherinehhh
- **[Công cụ kiểm thử dịch thuật]** Đã thêm trang cài đặt client-v2 cho công cụ kiểm thử dịch thuật. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) bởi @jiannx
- **[Hành động: Nhập bản ghi Pro]** Cải thiện hộp thoại nhập để các thông báo lỗi dài có thể được xem đầy đủ và chế độ xử lý có thể được chọn trực tiếp từ menu cài đặt v2. bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi các trường trong subform ngang quá hẹp để hiển thị dữ liệu. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) bởi @zhangzhonghe
- **[client-v2]** Đã sửa lỗi các trang v2 có thể tiếp tục tải sau khi đăng nhập. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) bởi @zhangzhonghe
- **[cli]** Đã thêm phát hiện phiên bản Node.js cho môi trường runtime nb. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) bởi @chenos
- **[Hành động: Nhập bản ghi]** Đã thay đổi các tệp nhập đã tải lên thành lưu trữ đĩa để giảm áp lực bộ nhớ trong quá trình nhập dữ liệu lớn. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) bởi @mytharcher
- **[Trình quản lý tác vụ bất đồng bộ]** Đã sửa lỗi ID yêu cầu không chính xác trong nhật ký worker tác vụ bất đồng bộ. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) bởi @2013xile
- **[Workflow]**

  - Đã sửa lỗi xử lý timeout workflow để các lần thực thi bị hủy bỏ và các tác vụ đang chờ của chúng có thể được cập nhật một cách nguyên tử. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) bởi @mytharcher
  - Đã sửa lỗi trường "cập nhật lần cuối bởi" của workflow không được cập nhật sau khi thay đổi node workflow. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]**

  - Đã sửa lỗi drawer chỉnh sửa trường trống do render lại nhiều lần trên trang Cấu hình trường của nguồn dữ liệu bên ngoài v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) bởi @katherinehhh
  - Đã sửa lỗi xóa danh mục bộ sưu tập hiện tại trong trình quản lý nguồn dữ liệu v1 có thể khiến tab Tất cả bộ sưu tập trống. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) bởi @katherinehhh
- **[Trình quản lý sao lưu]** Đã sửa lỗi bảo mật khi tên schema PostgreSQL không an toàn có thể được chấp nhận trong quá trình khôi phục sao lưu. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) bởi @2013xile
- **[Workflow: Node SQL]** Đã sửa lỗi di chuyển biến mẫu workflow SQL cũ bị bỏ qua đối với một số người dùng phiên bản beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) bởi @mytharcher
- **[Khối: Kanban]** Đã sửa lỗi hỗ trợ URL cho Lịch và các popup khác. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) bởi @jiannx
- **[Nhân viên AI]**

  - Đã sửa lỗi không thể xóa tệp đính kèm được dán vào hộp thoại nhân viên AI. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) bởi @cgyrock
  - Đã sửa lỗi mất cấu hình tin nhắn trong node LLM workflow. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) bởi @cgyrock
- **[Trình quản lý tệp]** Đã sửa lỗi thiếu văn bản phông chữ Trung Quốc/CID trong một số bản xem trước PDF sau khi chuyển sang pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) bởi @mytharcher
- **[Tài liệu API]** Đã sửa lỗi xây dựng tệp khai báo plugin tài liệu API bị lỗi. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi Pro]** Tránh phân tích các tệp lớn trong node yêu cầu trước khi nhập Pro tạo tác vụ bất đồng bộ. bởi @mytharcher
- **[Kiểm soát phiên bản]** Điều chỉnh vị trí của mục nhập lối tắt kiểm soát phiên bản trên cùng để nó xuất hiện bên cạnh trình chỉnh sửa UI trong cả bố cục quản trị cũ và v2. bởi @cgyrock
- **[Workflow: Phê duyệt]** Đã sửa lỗi dữ liệu liên quan không được hiển thị trong biểu mẫu phê duyệt v2. bởi @zhangzhonghe
