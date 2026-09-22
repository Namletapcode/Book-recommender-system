# 📚 Book Recommender System (BRS)

Hệ thống Gợi ý và Tìm kiếm Sách thông minh tích hợp Web Thương mại điện tử với kho dữ liệu hơn **2.360.000 cuốn sách** được lưu trữ trên **Aiven Cloud PostgreSQL**.

---

## 🚀 Kiến trúc Ứng dụng

- **Frontend**: React 19, Vite, TanStack Router & Start, TailwindCSS v4, Lucide Icons.
- **Backend API**: Python FastAPI, Uvicorn, Psycopg2 kết nối trực tiếp cơ sở dữ liệu đám mây Aiven.
- **Database**: PostgreSQL 16 (Aiven Cloud Managed Service) chứa 2.360.655 cuốn sách, đánh chỉ mục GIN Trigram và B-Tree cho tìm kiếm siêu tốc.

---

## 🐳 Triển khai với Docker & Container Platforms

Repository này cung cấp đầy đủ các manifest:
- `compose.yaml` & `docker-compose.yaml` (Khuyên dùng để chạy đồng thời cả Backend và Frontend)
- `Dockerfile` & `Containerfile` (Chạy Backend API kết nối Aiven)

### Chạy bằng Docker Compose:
```bash
docker compose up -d --build
```
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8000`

---

## ⚙️ Biến Môi Trường (Environment Variables)

| Tên biến | Mô tả | Mặc định |
| :--- | :--- | :--- |
| `AIVEN_DATABASE_URL` / `DATABASE_URL` | Chuỗi kết nối Aiven PostgreSQL | Chuỗi kết nối Aiven của hệ thống |
| `PORT` | Cổng dịch vụ | 8000 (Backend) / 3000 (Frontend) |
| `VITE_API_URL` | URL API cho Frontend | `http://localhost:8000` hoặc `http://backend:8000` |