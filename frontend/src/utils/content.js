const nextLogs = (numbers) => {
    // console.log("nextLog numbers is: ",numbers)
    const logger = numbers.join(",")
    console.log(logger)
}

const content = () => {

    const numbers = [1,2,3,4,5,6,7,8];
    let count = 0;
    let toReduce = true
    setInterval(()=>{
        let newNumbers = numbers.slice(count,numbers.length)
        nextLogs(newNumbers)
        if((count === numbers.length - 1 || !toReduce) && count > 0){
            count -= 1
            toReduce = false;
        }else if(count <= 0 || toReduce){
            count += 1
            toReduce = true
        }
    },2200)

}
content()

// console.log("It works")

// 1 2 3 4 5 6 7 8
// 2 3 4 5 6  7 8
// 3 4 5 6 7 8
// 