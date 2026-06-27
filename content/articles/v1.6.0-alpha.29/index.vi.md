---
title: "NocoBase v1.6.0-alpha.29: hỗ trợ cấu hình quyền cho hành động"
description: "Ghi chú phát hành v1.6.0-alpha.29"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ cấu hình quyền cho action ([#6254](https://github.com/nocobase/nocobase/pull/6254)) bởi @katherinehhh

- **[Block: template]** Thêm plugin `Block: template`, cung cấp hỗ trợ template cho các block dựa trên cơ chế kế thừa. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) bởi @gchust

- **[Workflow: Custom action event]** Trigger workflow action hỗ trợ kiểm soát truy cập bởi @katherinehhh

### 🚀 Cải tiến

- **[client]**
  - Nâng cấp định nghĩa kiểu React ([#6278](https://github.com/nocobase/nocobase/pull/6278)) bởi @gchust

  - Mở rộng và cải thiện trung tâm cá nhân người dùng ([#6213](https://github.com/nocobase/nocobase/pull/6213)) bởi @katherinehhh

- **[File manager]**
  - Tăng độ dài URL lên 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) bởi @mytharcher

  - Thêm mã backend để tạo URL xem trước file ([#6281](https://github.com/nocobase/nocobase/pull/6281)) bởi @jiannx

  - Tên file khi tải lên sẽ thay đổi từ ngẫu nhiên sang tên gốc kèm hậu tố ngẫu nhiên. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) bởi @chenos

  - Thêm mã backend để tạo URL xem trước file ([#6223](https://github.com/nocobase/nocobase/pull/6223)) bởi @jiannx

  - Thay đổi API loại lưu trữ và thêm API plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) bởi @mytharcher

  - Thay đổi API loại lưu trữ và thêm API plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) bởi @mytharcher

- **[Block: Action panel]** Tối ưu hóa giao diện di động ([#6270](https://github.com/nocobase/nocobase/pull/6270)) bởi @zhangzhonghe

- **[Workflow]** Ẩn ID node khỏi thẻ node trong canvas workflow ([#6251](https://github.com/nocobase/nocobase/pull/6251)) bởi @mytharcher

- **[File storage: S3(Pro)]**
  - Điều chỉnh API lưu trữ dựa trên kho chính bởi @mytharcher

  - Hỗ trợ cấu hình tùy chọn thumbnailRule bởi @jiannx

- **[Backup manager]** Cho phép khôi phục bản sao lưu vào ứng dụng ngay cả khi thiếu một số plugin bởi @gchust

### 🐛 Sửa lỗi

- **[devtools]** Đảm bảo header X-Forwarded-For chỉ được đặt nếu req.ip không undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) bởi @sheldon66

- **[client]**
  - Vị trí không chính xác sau khi kéo menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) bởi @zhangzhonghe

  - Lỗi khi tạo block bình luận mà không có collection bình luận ([#6309](https://github.com/nocobase/nocobase/pull/6309)) bởi @katherinehhh

  - Lỗi xảy ra khi nhấp vào node block dạng cây ([#6314](https://github.com/nocobase/nocobase/pull/6314)) bởi @zhangzhonghe

  - Sau khi nhấp vào menu bên trái, trang con bị đóng bất thường ([#6305](https://github.com/nocobase/nocobase/pull/6305)) bởi @zhangzhonghe

  - Không xóa giá trị trường khi giá trị biểu thức trống ([#6300](https://github.com/nocobase/nocobase/pull/6300)) bởi @zhangzhonghe

  - Thành phần trường văn bản rich text không thể xóa hoàn toàn ([#6287](https://github.com/nocobase/nocobase/pull/6287)) bởi @katherinehhh

  - Không thể di chuyển trang vào một nhóm ([#6289](https://github.com/nocobase/nocobase/pull/6289)) bởi @zhangzhonghe

  - Bỏ qua lỗi xác thực cho CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) bởi @sheldon66

  - Sửa lỗi thiếu file đã tải lên khi tải từng file một ([#6260](https://github.com/nocobase/nocobase/pull/6260)) bởi @mytharcher

  - Sửa ký tự thẻ html trong trường nhập cấu hình form kênh mail. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) bởi @sheldon66

  - Sửa lỗi thiếu file sau khi tải lên ([#6247](https://github.com/nocobase/nocobase/pull/6247)) bởi @mytharcher

  - Định dạng picker không khớp trong trường form bộ lọc ([#6234](https://github.com/nocobase/nocobase/pull/6234)) bởi @katherinehhh

  - Hiển thị thành phần `<Variable.TextArea />` chính xác ở chế độ tắt ([#6197](https://github.com/nocobase/nocobase/pull/6197)) bởi @mytharcher

- **[create-nocobase-app]** Lỗi xảy ra trên web client sau khi chạy `create-nocobase-app` và `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) bởi @gchust

- **[auth]** Bỏ qua kiểm tra xác thực người dùng khi token là api key ([#6291](https://github.com/nocobase/nocobase/pull/6291)) bởi @sheldon66

- **[cli]** Cải thiện logic nội bộ của lệnh nâng cấp nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) bởi @chenos

- **[File manager]**
  - Sửa migration cho collection kế thừa ([#6310](https://github.com/nocobase/nocobase/pull/6310)) bởi @mytharcher

  - Sửa migration và thêm test case ([#6288](https://github.com/nocobase/nocobase/pull/6288)) bởi @mytharcher

  - Sửa migration và thêm test case ([#6288](https://github.com/nocobase/nocobase/pull/6288)) bởi @mytharcher

  - Sửa kiểu cột `path` của collection file ([#6294](https://github.com/nocobase/nocobase/pull/6294)) bởi @mytharcher

  - Nâng cấp phiên bản AWS SDK để sửa lỗi tải lên MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) bởi @mytharcher

- **[Block: template]** Yêu cầu đăng nhập khi truy cập form công khai ([#6258](https://github.com/nocobase/nocobase/pull/6258)) bởi @gchust

- **[Access control]** Bản ghi dữ liệu không chính xác khi sử dụng trường nhiều-nhiều làm phạm vi dữ liệu trong quyền collection ([#6304](https://github.com/nocobase/nocobase/pull/6304)) bởi @2013xile

- **[Block: Kanban]** Lọc dữ liệu không chính xác trong block Kanban popup sử dụng biến bản ghi popup ([#6290](https://github.com/nocobase/nocobase/pull/6290)) bởi @katherinehhh

- **[Collection field: Sequence]** Sửa lỗi trường sequence không bị tắt khi ở chế độ chỉ đọc ([#6274](https://github.com/nocobase/nocobase/pull/6274)) bởi @mytharcher

- **[Workflow: test kit]** Sửa test case E2E dựa trên các tính năng mới ([#6296](https://github.com/nocobase/nocobase/pull/6296)) bởi @mytharcher

- **[Public forms]** Bỏ qua kiểm tra xác thực trong form công khai ([#6284](https://github.com/nocobase/nocobase/pull/6284)) bởi @chenos

- **[Authentication]** Xóa wrapper NavigateIfNotSignIn không cần thiết khỏi AdminProvider. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) bởi @sheldon66

- **[Workflow]**
  - Sửa chi tiết kiểu dáng trong canvas workflow ([#6240](https://github.com/nocobase/nocobase/pull/6240)) bởi @mytharcher

  - Hỗ trợ kích hoạt workflow khi thay đổi mật khẩu ([#6248](https://github.com/nocobase/nocobase/pull/6248)) bởi @mytharcher

- **[Workflow: Custom action event]**
  - Sửa lỗi build bởi @mytharcher

  - Sửa test case E2E bởi @mytharcher

  - Sửa trigger workflow initializer bởi @mytharcher

  - Sửa lỗi build bởi @mytharcher

- **[Workflow: Pre-action event]** Sửa lỗi thông báo lỗi từ node phản hồi không hiển thị bởi @mytharcher

- **[Workflow: JavaScript]** Hỗ trợ yêu cầu các module NocoBase bởi @mytharcher

- **[Email manager]** Công khai collection mailmessage và sửa lỗi mất dữ liệu modal bởi @jiannx

- **[File storage: S3(Pro)]**
  - Nâng cấp phiên bản AWS SDK để sửa lỗi tải lên MinIO. bởi @mytharcher

  - Đặt giá trị mặc định của forcePathStyleForAccess thành virtual bởi @jiannx

- **[Block: Multi-step form]** Lỗi sắp xếp mục sau khi kéo bởi @jiannx

- **[Block: Tree]** Lỗi xảy ra khi nhấp vào node block dạng cây bởi @zhangzhonghe

- **[Backup manager]** Biểu tượng xóa của hộp thoại khôi phục từ thao tác local không hoạt động bởi @gchust

- **[Workflow: Approval]**
  - Sửa lỗi migration không chạy do số phiên bản bởi @mytharcher

  - Sửa test case E2E dựa trên các tính năng mới bởi @mytharcher
