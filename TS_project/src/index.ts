const name:string|number="subham"

console.log("hello",name)


class User{
    email:string;
    name:string|number;
    readonly city:string="Bhubaneswar";
    private wife:string="none"

    constructor(email:string,name:string|number,public id:number){

       this.email = email;
       this.name= name;

    }
}


const subham= new User("email" ,7,70)
// subham.city="Bhubaneswar" // redline
// subham.wife;//gives red line
console.log(subham)