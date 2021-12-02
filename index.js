const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

function superbowlWin(array) {
    const result = array.find(item => item.result === "W")
    if (result) {
        return result.year
    } else {
        return undefined
    }
}

// console.log(superbowlWin(record))