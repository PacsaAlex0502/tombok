//1
let dobások = [];
for (let i = 0; i < 100; i++) {
    dobások.push(Math.floor(Math.random() * 6) + 1);
}
let statisztika = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};
dobások.forEach(dobás => {
    statisztika[dobás]++;
});
//2
let tömb = [];
for (let i = 0; i < 100; i++) {
    tömb.push(Math.floor(Math.random() * 101) - 50);
}
let max = tömb[0];
let maxIndex = 0;
tömb.forEach((elem, index) => {
    if (elem > max) {
        max = elem;
        maxIndex = index;
    }
});
let összeg = tömb.reduce((acc, elem) => acc + elem, 0);
let párosDarab = tömb.filter(elem => elem % 2 === 0).length;
let páratlanDarab = tömb.filter(elem => elem % 2 !== 0).length;
let van7elOsztható = tömb.some(elem => elem % 7 === 0);
let vanNegatívSzomszéd = tömb.some((elem, index) => {
    if (index === 0 || index === tömb.length - 1) return false;
    return tömb[index - 1] < 0 && tömb[index + 1] < 0;
});
let vanNagyobbMintSzomszéd = tömb.some((elem, index) => {
    if (index === 0 || index === tömb.length - 1) return false;
    return elem > tömb[index - 1] + tömb[index + 1];
});
let utolsó3malOszthatóIndexek = tömb.map((elem, index) => {
    if (elem % 3 === 0 && elem % 5 !== 0) return index;
    return null;
}).filter(index => index !== null);

let van3Egyforma = tömb.some(elem => tömb.filter(e => e === elem).length >= 3);
let vanEgymásMellettiAzonos = tömb.some((elem, index) => {
    if (index === tömb.length - 1) return false;
    return elem === tömb[index + 1];
});
let tízTöbbszöröseIndexek = tömb.map((elem, index) => {


    if (elem % 10 === 0) return index;
    return null;
}).filter(index => index !== null);
let átlag = összeg / tömb.length;
let átlagAlattiDarab = tömb.filter(elem => elem < átlag).length;
console.log("Max érték:", max, "Index:", maxIndex);
console.log("Összeg:", összeg);
console.log("Páros darab:", párosDarab);
console.log("Páratlan darab:", páratlanDarab);
console.log("Van 7-tel osztható elem:", van7elOsztható);
console.log("Van olyan elem, amelynek mindkét szomszédja negatív:", vanNegatívSzomszéd);
console.log("Van olyan elem, amely nagyobb, mint két szomszédjának összege:", vanNagyobbMintSzomszéd);
console.log("Utolsó 3-mal osztható, de 5-tel nem osztható elem indexei:", utolsó3malOszthatóIndexek);
console.log("Van 3 egyforma szám:", van3Egyforma);
console.log("Van egymás melletti azonos érték:", vanEgymásMellettiAzonos);
console.log("10 többszöröseinek indexei:", tízTöbbszöröseIndexek);
console.log("Átlag alatti számok darabszáma:", átlagAlattiDarab);

