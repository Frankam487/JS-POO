const obj = {
    pseudo: "Frank",
    ville: "Bafoussam",
    admin: false, 
 
    direBonjour : function(){
            console.log("Bonjour je suis " + this.pseudo);
    }
    
}

//ajouter un nouvelle objet
obj.age = 23;
//supprimer un nouvel object
delete obj.ville;
//modifier un objet
obj.pseudo = "Frank_Kamgang"
// for(const key in obj){
//     console.log(key + " : "+obj[key]);
// }
// console.log(obj.direBonjour());

//Obtenir les cles

const keys  = Object.keys(obj);
// console.log(keys);

//Obtenir les valeurs

const values = Object.values(obj);
// console.log(values);

const nestArray = Object.entries(obj)
// console.log(nestArray);
  const obj2 = {
    taille: "1m89",
    poids: "75kg",
  }

  //Fusionner deux objets

const fusion = ({...obj, ...obj2});
// console.log(fusion);
const fusion2 = Object.assign({}, obj, obj2);
// console.log(fusion2);

//Empecherr les modifications

// const newObj = Object.freeze(obj);
const newObj = Object.seal(obj);
newObj.pseudo = "Test";
newObj.adresse = "tougang";

// console.log(newObj);

// -------------------
//CONSTRUIRE UN OBJET
// -------------------

//1)->fONSTION CONSTRUCTEUR

function User(pseudo, ville, age, sex){
    this.pseudo = pseudo;
    this.ville = ville;
    this.age = age;
    this.sex = sex;
    this.getCity = function () {
        console.log(`${this.pseudo} Habite a ${this.ville}`);
    }
    this.getGender = function () {
      console.log(`je m'appelle ${this.pseudo}, je suis de sexe ${this.sex} et j'ai ${this.age} ans`);
    }
}
const newObject = Object.apply(obj);
// console.log(newObject);
const user1 = new User('frank', 'bafoussam');
const user3 = new User("Fany", "Douala", 22, "feminin");
console.log(user3.getGender());
// console.log(user1);
const user2 = new User('franko', 'ynde');
// console.log(user2.getCity());
//-------------------------
//Factory functions

function User4(pseudo, ville) {
  return {
    pseudo: pseudo, 
    ville: ville
  }
}
const user5 = User4('frank', 'nice');

// console.log(user5);

//--------------------
//class

class Utilisateur {
  constructor(pseudo, ville){
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayName = function (){
    console.log(`bjr je suis ${this.pseudo}`);
  }
}
const userr = new Utilisateur('Samia', 'Lyon');
// console.log(userr);

// -----------
// heritage

class Animal {
  constructor (name, age){
    this.name = name;
    this.age = age;
  }
  saySomething(text){
    console.log(`${this.name} dit ${text}`);
  }
}
class Dog extends Animal {
  cour(){
    console.log(":e chien cour");
  }
}

const loulou = new Dog("loulou", 5);

console.log(loulou);