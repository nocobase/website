---
title: "NocoBase v2.0.41: hỗ trợ trường tùy chỉnh cho thuộc tính ánh xạ"
description: "Ghi chú phát hành v2.0.41"
---

### 🎉 Tính năng mới

- **[Auth: OIDC]** Hỗ trợ thuộc tính ánh xạ cho trường tùy chỉnh bởi @chenzhizdt

- **[DingTalk]** DingTalk: thông báo, tự động đăng nhập trong DingTalk và đồng bộ người dùng. bởi @chenzhizdt

### 🚀 Cải tiến

- **[ai]** Nhân viên AI và cơ sở tri thức hiện hỗ trợ thêm các loại tệp để tải lên (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) bởi @cgyrock

- **[undefined]** Thêm bản dịch tiếng Ả Rập cho phần hướng dẫn và điều hướng ([#9141](https://github.com/nocobase/nocobase/pull/9141)) bởi @saraTabbane

### 🐛 Sửa lỗi

- **[data-source-manager]** Sửa lỗi trường phần trăm bị đặt lại thành số khi đồng bộ lại nguồn dữ liệu bên ngoài ([#9178](https://github.com/nocobase/nocobase/pull/9178)) bởi @jiannx

- **[client]**
  - Sửa lỗi giá trị mặc định không có hiệu lực sau khi tạo bản ghi. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) bởi @gchust

  - Sửa lỗi nút Thêm tab quá sát mép phải ([#9177](https://github.com/nocobase/nocobase/pull/9177)) bởi @zhangzhonghe

- **[Departments]** Sửa lỗi đồng bộ phòng ban lặp lại không thể cập nhật thứ tự sắp xếp phòng ban ([#9173](https://github.com/nocobase/nocobase/pull/9173)) bởi @2013xile

- **[Data source: Main]** Sửa lỗi đồng bộ trường từ cơ sở dữ liệu cho các view được kết nối khi tên collection khác với tên view trong cơ sở dữ liệu ([#9155](https://github.com/nocobase/nocobase/pull/9155)) bởi @2013xile

- **[Workflow: JavaScript]** Sửa lỗi bảo mật khi thực thi script ở chế độ `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) bởi @mytharcher

- **[AI: Knowledge base]** Sửa lỗi cơ sở dữ liệu vector không được đồng bộ khi xóa tài liệu cơ sở tri thức. bởi @cgyrock

- **[WeCom]** Sửa lỗi thiếu thứ tự phòng ban khi đồng bộ phòng ban từ WeCom bởi @2013xile
