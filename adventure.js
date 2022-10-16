//save input from user 
let cityOrCountry = prompt("Type city or country");


//test if user chose city
if (cityOrCountry === "city") {
    //user chose city
    //user chooses museum or shopping
  let museumOrShopping = prompt("Type museum or shopping");
  //test if user chose museum
  if (museumOrShopping === "museum") {
    //user chose museum
    //user chooses moma or intrepid
    let momaOrIntrepid = prompt("Type in MoMA or Intrepid");
    //test if user chose Moma
    if (momaOrIntrepid === "MoMa") {
        //user chose Moma
      alert("Enjoy the history and art at the MoMA!");
    } 
    //else if test if user chose Intrepid
  } else if(momaOrIntrepid === "Intrepid") {
    alert("See the cool jets and planes!");
  }
  //end museum choice

  //test if user chose shopping
  else if (museumOrShopping === "shopping") {
    //user chose shopping
    //user chooses outfit or shoes
    let outfitOrShoes = prompt("Type outfit or shoes");
    //test if user chose outfit 
    if (outfitOrShoes === "outfit") {
        //user chose outfit
      alert("Enjoy a night out with your new outfit!");
    } else if (outfitOrShoes === "shoes") {
        alert("New shoes for a fun night out!")
    }
    //else if test if user chose shoes

  } //end shopping choice
} //end city branch

//else user chose country
else if (cityOrCountry === "country") {
 let hikingOrBiking= prompt("Type hiking or biking")
 if (hikingOrBiking === "hiking") {
    let mountainOrCave= prompt("Type in mountain or cave")
    if (mountainOrCave=== "mountain") {
    alert("Have fun hiking in the mountain's")
    }
    else if (mountainOrCave === "cave") {
        alert("Enjoy the lovely hike in the caves!")
    }
 }
 else if (hikingOrBiking === "biking") {
    let trailOrMountain= prompt("Type in trail or mountain")
    if (trailOrMountain === "trail") {
        alert("Have fun biking on the amazing trails!")
    }
    else if (trailOrMountain === "mountain") {
        alert("Enjoy biking in the mountains!")
    }
 }
}