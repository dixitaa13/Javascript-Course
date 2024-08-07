//Stack (Primtive), Heap(Non-Primitive)
// In stack a copy is made for variable
// But in heap memory actual reference of the object is given

let name = "dixita"

let anothername = name
anothername = "riya"
console.log(anothername);
console.log(name);

let user1 = {
    email: "user@gmail.com",
    upi: "upi@gpay",
};

let user2 = user1;
user2.email="google@gmail.com"

console.log(user1.email);
console.log(user2.email);

