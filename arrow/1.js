const thapa ={
    name: 'vinod thapa',
    qualif: 'mcs',
    sum: function(){
        console.log(this);
        console.log(this.name);
        var add = 2+2;
        console.log('sum of thw no. is' + add);
        console.log(this);

        return child =() =>{
            var name = 'thapa';
            console.log('child method name' + name);
            console.log(this);
        }
        child();
    }
}
thapa.sum();




// ouestion 2

class student{

    static count=0; 

    

   constructor(name,ph_no,marks){

       this.name=name;

       this.ph_no=ph_no;

       this.marks=marks;

       student.countStudent();

   }

   static countStudent(){

       

       return(student.count++);     //this is how u access static variable

   }

  setPlacementAge(minPlacementAge){
    console.log(this);
    return (minMarks) =>{
        console.log('inside eligibleForCurrentCompany', this)
        if(this.marks > minMarks && this.age > minPlacementAge){
            console.log(this.name + 'is ready for placements');
        } else {
        console.log(this.name + 'is not ready for placements');
        }
      }

    }

   

}

const Riya=new student('Riya',18,1234,34);

const Hiya=new student('Hiya',15,2345,35);

const Diya=new student('Diya',16,4567,60);

const Siya=new student('Siya',17,7891,70);

const Rooh=new student('Rooh',19,3456,80);

console.log(student.countStudent());

Riya.setPlacementAge(18)(40);

