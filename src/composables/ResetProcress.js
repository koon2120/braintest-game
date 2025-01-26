import NewGameSetUp from "./NewGameSetUp"
import NextProcress from "./NextProcress"

// เมื่อผู้เล่นกดรีเซ็ตหรือต่อไปเมื่อได้รับผลลัพธ์ของคำตอบ
export default function ResetProcress() {
    NewGameSetUp()
    NextProcress()
  }