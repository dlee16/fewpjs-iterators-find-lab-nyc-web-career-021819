const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let singleRec = record.find(rec => rec.result === "W")
  if (singleRec) {
    return singleRec.year
  } else {
    return undefined
  }
}