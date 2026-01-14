# Student Management System - Layered Architecture

## Project Information
- **Student Name:** __________________________
- **Student ID:** 67543210034-4
- **Course:** ENGSE207 - Software Architecture
- **Midterm Practical Exam**

## Description
ระบบบริหารจัดการนักศึกษา พัฒนาด้วย Node.js และ Express  
ออกแบบตามสถาปัตยกรรมแบบ Layered Architecture (3-Tier)  
เพื่อแยกความรับผิดชอบของแต่ละส่วนอย่างชัดเจน และเพิ่มความสามารถในการบำรุงรักษาและขยายระบบในอนาคต

## Architecture Overview
ระบบถูกแบ่งออกเป็น 3 ชั้นหลัก:
1. **Presentation Layer** – จัดการ HTTP Request/Response
2. **Business Layer** – จัดการตรรกะทางธุรกิจและการตรวจสอบข้อมูล
3. **Data Layer** – จัดการการเข้าถึงข้อมูลและฐานข้อมูล

## Project Structure
css
คัดลอกโค้ด
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
How to Run
bash
คัดลอกโค้ด
npm install
npm start
Server จะรันที่:

arduino
คัดลอกโค้ด
http://localhost:3000
API Endpoints
GET /api/students – ดึงข้อมูลนักศึกษาทั้งหมด

GET /api/students/:id – ดึงข้อมูลนักศึกษาตามรหัส

POST /api/students – เพิ่มข้อมูลนักศึกษา

PUT /api/students/:id – แก้ไขข้อมูลนักศึกษา

DELETE /api/students/:id – ลบข้อมูลนักศึกษา

yaml
คัดลอกโค้ด

---

# ✅ ARCHITECTURE.md (เวอร์ชันพร้อมส่ง)

```md
# Architecture Design - Layered Architecture

## Overview
ระบบนี้ถูกออกแบบโดยใช้สถาปัตยกรรมแบบ Layered Architecture (3-Tier)  
เพื่อแก้ปัญหาของระบบแบบ Monolithic ที่โค้ดผูกกันแน่น  
ทำให้ระบบมีความยืดหยุ่น ง่ายต่อการทดสอบ และง่ายต่อการบำรุงรักษา

## Layers Description

### 1. Presentation Layer
ทำหน้าที่รับ HTTP Request และส่ง Response กลับไปยัง Client  
ประกอบด้วย:
- Controllers
- Routes
- Middlewares  

ชั้นนี้ไม่ควรมีตรรกะทางธุรกิจ

### 2. Business Layer
ทำหน้าที่จัดการตรรกะทางธุรกิจและตรวจสอบความถูกต้องของข้อมูล  
ประกอบด้วย:
- Services
- Validators  

ช่วยให้กฎทางธุรกิจไม่ขึ้นกับการแสดงผลหรือฐานข้อมูล

### 3. Data Layer
ทำหน้าที่จัดการการเข้าถึงข้อมูลและการเชื่อมต่อฐานข้อมูล SQLite  
ประกอบด้วย:
- Repositories
- Database connection  

ช่วยแยกการจัดเก็บข้อมูลออกจากตรรกะทางธุรกิจ

## Benefits of Layered Architecture
- แยกความรับผิดชอบของแต่ละส่วนอย่างชัดเจน
- ง่ายต่อการแก้ไขและทดสอบ
- รองรับการขยายระบบในอนาคต
- ลดผลกระทบเมื่อมีการเปลี่ยนแปลงในแต่ละชั้น