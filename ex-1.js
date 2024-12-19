function findStudentIndex(students, searchStudent) {
  // Start coding here
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      return i;
    }
  }
  return -1;
}

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
      Answer: linear search
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
      Answer: เพราะ Array ที่ให้มาไม่ได้เรียงลำดับข้อมูล
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
      Answer: O(n) เพราะ จำนวนครั้งการลูปขึ้นอยู่กับขนาดของข้อมูล อย่างข้อนี้ต้องลูป 8 ครั้งถึงจะเจอ John
*/

const students = [
  "George",
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1
