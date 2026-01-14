# Student Management System - Layered Architecture

## 📋 Project Information
- **Student Name:** Nanthawat Saeyang (นันทวัฒน์ แซ่ย่าง)
- **Student ID:** 67543210034-4
- **Course:** ENGSE207 - Software Architecture
- **Midterm Practical Exam**

## 🧩 Description
ระบบบริหารจัดการนักศึกษา พัฒนาด้วย Node.js และ Express  
ออกแบบโดยใช้ **Layered Architecture (3-Tier)** เพื่อแยกความรับผิดชอบของระบบ  
ทำให้โค้ดอ่านง่าย ดูแลรักษาง่าย และขยายระบบในอนาคตได้สะดวก

## 🏗️ Architecture Overview
ระบบแบ่งออกเป็น 3 ชั้น:
1. **Presentation Layer** – จัดการ HTTP Request/Response
2. **Business Layer** – จัดการ Business Logic และ Validation
3. **Data Layer** – จัดการ Database และ SQL Queries

## 📂 Project Structure
```text
src/
├── presentation/
│   ├── controllers/
│   ├── routes/
│   └── middlewares/
├── business/
│   ├── services/
│   └── validators/
└── data/
    ├── repositories/
    └── database/
```

🚀 How to Run
npm install
npm start
