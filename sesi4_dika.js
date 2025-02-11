
function kalkulator(operator,angka1, angka2){
    switch(operator){
    case "+" :
        penjumlahan = angka1 + angka2;
        console.log(`angka pertama = ${angka1}`)
        console.log(`angka kedua = ${angka2}`)
        console.log(`hasil pemjumlahan dari ${angka1} + ${angka2} = ${penjumlahan} `)
    break

    case "-" : 
        pengurangan = angka1 - angka2;
        console.log(`angka pertama = ${angka1}`)
        console.log(`angka kedua = ${angka2}`)
        console.log(`hasil pengurangan dari ${angka1} - ${angka2} = ${pengurangan} `)
    break
    
    default:
        console.log('operator tidak diketahui')
    }
}
kalkulator("+", 30, 12)