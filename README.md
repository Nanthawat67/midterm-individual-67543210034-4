# Student Management System - Layered Architecture

## 📋 Project Information
- **Student Name:** Nanthawat Saeyang (นันทวัฒน์ แซ่ย่าง)
- **Student ID:** 67543210034-4
- **Course:** ENGSE207 - Software Architecture
- **Midterm Practical Exam (Individual)**

## 🧩 Description
ระบบบริหารจัดการนักศึกษา พัฒนาด้วย Node.js และ Express  
ออกแบบตามสถาปัตยกรรมแบบ **Layered Architecture (3-Tier)**  
เพื่อแยกความรับผิดชอบของแต่ละส่วนอย่างชัดเจน  
ช่วยให้ระบบดูแลรักษาง่าย แก้ไขง่าย และรองรับการขยายในอนาคต

## 🏗️ Architecture Style
**Layered Architecture (3-Tier)**
- Presentation Layer
- Business Logic Layer
- Data Access Layer

## 📂 Project Structure
```text
midterm-individual-67543210034-4/
├── src/
│   ├── presentation/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── middlewares/
│   ├── business/
│   │   ├── services/
│   │   └── validators/
│   └── data/
│       ├── repositories/
│       └── database/
├── server.js
├── package.json
├── students.db
├── README.md
└── ARCHITECTURE.md
