const scoreDolphins=(97 +112+80)/3;
const scoreKoalas=(109 + 95 + 50)/3;
console.log(scoreDolphins,scoreKoalas);
if(scoreDolphins > scoreKoalas && scoreDolphins>= 100){
    console.log("dolphine win the trophy")
}
else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("koalas win the trophy");
}
else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas>=100){
    console.log("both win the trophy");
}
else {
    console.log("no one can win the trophy");
}