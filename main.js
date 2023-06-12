const first = 2
const last = 99
let numbers = Array()

for (let i = first; i <= last; i++)
    numbers.push(i)

let startIndex = 0;
for (let testItem of numbers){
    for (let i = startIndex; numbers[i] <= last; i++) {
        if (numbers[i] != testItem && numbers[i]%testItem == 0){
            numbers.splice( i, 1 )
        }
    }
    startIndex++
}

for (let item of numbers)
console.log(`${item} `)