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

function User(pseudo, ville){
    this.pseudo;
    this.ville;

    this.getCity = function(){
        console.log(this.pseudo + "Habite a " + this.ville);
    }
}

const user1 = new User('frank', 'bafoussam');
const user2 = new User('franko', 'ynde');
console.log(user2);
