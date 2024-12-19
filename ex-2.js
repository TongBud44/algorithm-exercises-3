function findBookIndex(books, searchBook) {
  // Start coding here
  let left = 0;
  let right = books.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (books[mid].title === searchBook) {
      return mid;
    } else if (books[mid].title < searchBook) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

/*
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
      Answer: binary search
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
      Answer: เพราะ Array ที่ให้มาเรียงลำดับข้อมูลตามตัวอักษร
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
      Answer: O(log n) เพราะ ทุกครั้งที่ลูปขอบเขตการหาจะลดลงครึ่งหนึ่ง
*/

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

console.log(findBookIndex(books, "Catch-22")); // 2
console.log(findBookIndex(books, "The Master Mind")); // -1
