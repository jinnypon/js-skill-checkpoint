// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

//1. ให้แก้ไขจำนวนสินค้า Apple จาก 100 เป็น 200
inventory.apple.quantity = 200;

//2. เพิ่มสินค้าใหม่ที่ชื่อ "orange" ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
inventory.orange = { price: 20, quantity: 300 };
//console.log(inventory)
//3. คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกด้วย Loop
function calTotalValue(inventory) {
  let accumulator = 0;
  for (let key in inventory) {
    accumulator = accumulator + inventory[key].price * inventory[key].quantity;
  }
  return accumulator;
}

let totalValue = calTotalValue(inventory);

//4.สุดท้าย ให้ Log มูลค่ารวมของจำนวนสินค้าทั้งหมด
console.log(`Total inventory value: ${totalValue} baht`);