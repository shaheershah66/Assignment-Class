{
    class Automobile
    {
        constructor(name, model, color)
        {
            this.name = name;
            this.model = model;
            this.color = color;
        }

        open()
        {
            console.log(`${this.name} doors are opened`);
        }

        start()
        {
            console.log(`${this.name} is ready for drive`);
        }
    }
    class Car extends Automobile
    {
        constructor(name, model, color, company)
        {
            super(name, model, color);
            this.company = company;
        }
    }
    class Bus extends Automobile
    {
        constructor(name, model, color, company)
        {
            super(name, model, color);
            this.company = company;
        }
    }
    class Truck extends Automobile
    {
        constructor(name, model, color, company, wheels)
        {
            super(name, model, color);
            this.company = company;
            this.wheels = wheels;
        }
    }

    let car1 = new Car("car", 2009, "white", "Honda");
    console.log(car1);

    let truck1 = new Truck("truck", 2020, "black", "ISUZU", "8 wheels");
    console.log(truck1);
}