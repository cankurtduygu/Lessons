// class Car {
//     isRunning = false;

//     constructor ( brand, model, year){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     runEngine(){
//         this.isRunning = true
//         console.log('Engine started bran bran...');
//         return this.isRunning
//     }
// }

// const Ford = new Car("Ford", "Mustang", 1967);
// console.log(Ford);
// // Ford.isRunning = true;
// // console.log(Ford);

// Ford.runEngine()
// console.log(Ford);

// const Opel = new Car("Opel", "Astra", 2020);
// console.log(Ford);

/*----------------------------------------------------*/
// * INHERTANCE - Miras alma. Baska bir class'in tum ozelliklerini/methodlarini devralma. (parent-child ilisikisi kurulur)
// * SUPER - PARENT Class - THIS: Child Class

// class Vehicle {
//     vehicleIsActive = false

//     constructor(vehicleType){
//         this.vehicleType = vehicleType
//     }
// }

// class Car extends Vehicle{
//      isRunning = false;

//     constructor ( brand, model, year, vehicleType = 'Car'){
//         super(vehicleType) //? super() parametresi ne tepede olmali. Once parent constructori beslemek gerekiyor
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     runEngine(){
//         this.isRunning = true
//         console.log('Engine started bran bran...');
//         return this.isRunning
//     }
// }

// const Ford = new Car("Ford", "Mustang", 1967);
// console.log(Ford);

// class Accessory extends Car{
//     constructor(accessoryName){
//         this.accessoryName = accessoryName
//     }
// }

// class Accessory extends Car{
//     constructor(accessoryName, brand, model, year, vehicleType){
//         super(brand, model, year, vehicleType)
//         this.accessoryName = accessoryName
//     }
// }

// const FordClimate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1967, 'Car')
// console.log(FordClimate);

// * POLYMORHISM : Miras aldigimiz sinifin özellik/methodlarini yeniden yazabilme
// Override: ust methodla ayni isim ve ve yapida yeni bir method yazme (ezme/iptaletme/override etmek)
// Overload: ust methodla ayni isimde ama farkli yapida

// class Vehicle {
//      vehicleIsActive = false

//    constructor(vehicleType){
//         this.vehicleType = vehicleType
//     }

//     getDetails(){
//         console.log('vehicle.getDetails started..');
//         return this.vehicleType;
//     }
//  }

//  class Car extends Vehicle{
//      isRunning = false;

//     constructor ( brand, model, year, vehicleType = 'Car'){
//         super(vehicleType) //? super() parametresi ne tepede olmali. Once parent constructori beslemek gerekiyor
//         this.brand = brand;
//          this.model = model;
//          this.year = year;
//     }

//     runEngine(){
//          this.isRunning = true
//         console.log('Engine started bran bran...');
//         return this.isRunning
//     }

//      getDetails(){
//         console.log('vehicle.getDetails override edildi..');
//         return this.isRunning;
//     }
//  }

//  const Ford = new Car("Ford", "Mustang", 1967);
//  console.log(Ford.getDetails());

//* Access Modifiers:
//Public: Genele erisme acik.(parent:yes, child:yes, instance:yes)
//Protected: Sadece tanimli oldugu class ve inherit edilen child class erisebilir.(parent:yes, child:yes, instance:no)
//Private: sadece tanimli oldugu class icinde erisim vardir.(parent:yes, child:no, instance:no)

// * Access Modifiers:
// Public: Genele erisme acik. (parent: yes, child: yes, instance: yes)
// Procted: Sadece tanimli oldugu class ve inherit edilen child class erisebilir. (parent: yes, child: yes, instance: no) (js desteklemez)
// Private: sadece tanimli oldugu class icinde erisim varidr. (parent: yes, child: no, instance: no)

// class Vehicle {
//   vehicleIsActive = false;

//   _protectedProperty = 'protected-value';

//   _protectedMethod(){
//     return this;
//   }

//   #privateProperty = 'private-value';

//   #privateMethod(){
//     return this;
//   }

//   constructor(vehicleType) {
//     this.vehicleType = vehicleType;
//   }

//   getDetails() {
//     console.log("vehicle.getDetails started..");
//     return this.vehicleType;
//   }
// }

// class Car extends Vehicle {
//   isRunning = false;

//   constructor(brand, model, year, vehicleType = "Car") {
//     super(vehicleType);
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   runEngine() {
//     this.isRunning = true;
//     console.log("Engine started bran bran...");
//     return this.isRunning;
//   }

//   // ? Override
//   getDetails() { //? usteki method ismi ile ayni oldugundan parent classtaki method ezildi.
//     console.log("car.getDetails started..");
//     return this.isRunning;
//   }
// }

// const Ford = new Car("Ford", "Mustang", 1967);
// console.log(Ford);

// * GETTER & SETTER METHOD: Gorevi veri getirme (getter) ver veri guncelleme (setter) olan methodlardir.

class Car {
  isRunning = false;

  #price = 4000;

  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  runEngine() {
    this.isRunning = true;
    console.log('Engine started bran bran...');
    return this.isRunning;
  }

  get getPrice() {
    console.log('fiyat goruntulendi');
    return this.#price;
  }

  set setPrice(newPrice) {
    console.log('fiyat guncellendi.');
    this.#price = newPrice;
  }
}

const Ford = new Car('Ford', 'Mustang', 1967);
console.log(Ford);
// getter ve setter methodlari bir propery gibi kullanilir.
console.log(Ford.getPrice);
// Ford.setPrice(5000) // setter method normal method gibi cagrilmaz.
Ford.setPrice = 5000;
console.log(Ford.getPrice);

class Accessory extends Car {
  static staticProp = 'static-value';
  constructor(accessoryName, brand, model, year) {
    super(brand, model, year);
    this.accessoryName = accessoryName;
  }

  getPriceFromChild() {
    return this.getPrice;
  }
}

const FordClimate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1967);
console.log(FordClimate);
// console.log(FordClimate.getPriceFromChild());
console.log(FordClimate.getPrice);
