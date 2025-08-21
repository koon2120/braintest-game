import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  fallbackLocale: 'th',
  messages: {
    en: {
      message: {
        title: '🧠 Brain Test Game',
        description: 'A number guessing game for casual play and brain training',
        plasesignin: 'Please log in to save game data',
        signinwith: 'Sign In With',
        numbers: '{number} Numbers',
        easy: 'For easy, casual, and relaxing play',
        medium: 'For moderate challenge',
        high: 'For high-level challenge',
        currentLevel: 'Current level',
        resetLevel: 'reset',
        signOut: 'Sign Out',
        confirmTitle: 'Confirmation',
        confirmDescription: 'Are you sure you want to reset the level?',
        agree: 'agree',
        cancel: 'cancel',
        number: 'No.{number}',
        question: 'Question',
        questionDetail: 'What is the number at No.{number}?',
        howToPlay1: 'The gameplay is very simple. Just memorize the numbers on the screen and press',
        howToPlay2: 'to get the next number displayed. You need to keep memorizing these numbers until you have all {number} numbers. Once complete, you will get a question like "What is the number at No.{number}?" You must answer correctly. If correct, your level will increase, and the difficulty will rise as well.',
        howToPlay3: 'Additionally, you can restart if you forget the numbers by pressing',
        howToPlay4: ', or return to the main page by pressing',
        howToPlay5: '.',
        correct: 'Correct!',
        incorrect: 'Incorrect!',
        lastMessage: 'If you encounter any bugs or issues, please report them to ',
      }
    },
    th: {
      message: {
        title: '🧠 เกมทายตัวเลข',
        description: 'เกมทายตัวเลขสำหรับเล่นเพลินๆ ฝึกการใช้สมอง',
        plasesignin: 'โปรดเข้าสู่ระบบเพื่อเก็บข้อมูลเกม',
        signinwith: 'เข้าสู่ระบบด้วย',
        numbers: '{number} หมายเลข',
        easy: 'สำหรับเล่นง่ายๆ เพลินๆ สบายๆ',
        medium: 'สำหรับความท้าทายปานกลาง',
        high: 'สำหรับความท้าทายที่สูง',
        currentLevel: 'เลเวลปัจจุบัน',
        resetLevel: 'รีเซ็ต',
        signOut: 'ออกจากระบบ',
        confirmTitle: 'ยืนยันการทำรายการ',
        confirmDescription: 'คุณแน่ใจไหมว่าต้องการรีเซ็ตเลเวล?',
        agree: 'ยืนยัน',
        cancel: 'ยกเลิก',
        number: 'หมายเลขที่ {number}',
        question: 'คำถาม',
        questionDetail: 'หมายเลขที่ {number} คือเลขอะไร?',
        howToPlay1: 'สำหรับวิธีการเล่นนั้นง่ายมากๆ เพียงแค่คุณจำตัวเลขบนหน้าจอแล้วกด',
        howToPlay2: 'เพื่อรับเลขถัดไปมาแสดงผล คุณจะต้องจำตัวเลขเหล่านี้ไปเรื่อยจนกว่าจะครบ {number} ตัวเลขเมื่อครบแล้วคุณจะได้รับคำถามอย่างเช่น "หมายเลขที่ {number} คือเลขอะไร?" คุณจะต้องตอบให้ถูกต้อง หากตอบถูกเลเวลก็จะเพิ่มขึ้นและระดับความยากก็จะเพิ่มขึ้นไปด้วย',
        howToPlay3: 'นอกจากนี้คุณยังสามารถเริ่มใหม่ได้หากจำตัวเลขไม่ได้แล้วต้องการเริ่มใหม่ โดยการกด',
        howToPlay4: 'หรือต้องการกลับหน้าแรกให้กด',
        howToPlay5: 'เพื่อกลับไปยังหน้าแรก',
        correct: 'ถูกต้อง!',
        incorrect: 'ตอบผิด!',
        lastMessage: 'พบบัค หรือปัญหาใดๆ โปรดแจ้งที่ ',
      }
    }
  }
})

i18n.global.locale