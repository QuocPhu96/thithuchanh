class Staff {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email;
    };
    setFullname(fullname) {
        return this.fullname = fullname;
    }
    getFullname() {
        return this.fullname;
    }
    setEmail (email) {
        return this.email = email;
    }
    getEmail() {
        return this.email;
    }
    toString() {
        return `Fullname: ${this.fullname}<br>Email: ${this.email}<br>`;
    }
}
let david = new Staff("David", "david@gmail.com");
david.setFullname("David Do");
console.log(david.getFullname())
david.setEmail("david.do@gmail.com");
console.log(david.getEmail());
david.toString()
let staffs = [
    david,
    new Staff("phu", "phunguyen@gmail.com"),
    new Staff("Khoa", "Khoanguyen@codegym.com"),
];
for(var staff of staffs){   
    console.log( staff.toString() )
}