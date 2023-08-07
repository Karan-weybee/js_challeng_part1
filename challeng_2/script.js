let mark_height =1.88;
let mark_mass=95;
let john_height=1.76;
let john_mass=85;

let mark_bmi=mark_mass/(mark_height * mark_height);
let john_bmi=john_mass/(john_height * john_height);

markHigherJohn = mark_bmi > john_bmi;
if(markHigherJohn){
    console.log(`mark's bmi ${mark_bmi} is higher then john's ${john_bmi}`)
}
else{
    console.log(`john's bmi ${john_bmi} is higher then mark's ${mark_bmi}`)
}