// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// create a function - shuffleMe
// parameter - words
// remove wthe first value with shift
// return shuffled array

// a) Create a test with an expect statement using the variable provided.

describe("shuffleMe", () => {
  it("removes the first item from the array and shuffles the remaining content", () => {
    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(shuffleMe(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffleMe(colors2)).toContain("saffron", "aquamarine", "periwinkle", "indigo", "ochre")
    expect(shuffleMe(colors2)).toContainEqual("saffron", "aquamarine", "periwinkle", "indigo", "ochre")
    expect(shuffleMe(colors2).sort()).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"].sort())
  })
})

// b) Create the function that makes the test pass.

// const shuffleMe = (words) => {
//   words.shift()
//   let currentIndex = words.length, i
//   while(0 !== currentIndex){
//     i = Math.floor(Math.random() * currentIndex)
//     currentIndex--
//     [words[currentIndex], words[i]] = [words[i], words[currentIndex]]
//   }
//   return words
// }

const shuffleMe = (array) => {
  return array.slice(1).sort(() => Math.random() - 0.5)
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// create a function - minMax
// parameter - array
// Math.min and Matha.max to get the values
// Assigned them inside the array

describe("minMax", () => {
  it("returns an array of the minimum and maximum numbers in that order", () => {
    var nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    var nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([5, 109])
  })
})

// b) Create the function that makes the test pass.

const minMax = (array) => {
  return [Math.min(...array), Math.max(...array)]
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// create a function - noRepeat
// parameter - two arrays
// combine arrays with concat
// iteration - filter and indexOf

// a) Create a test with an expect statement using the variables provided.

describe("noRepeat", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    expect(noRepeat(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// b) Create the function that makes the test pass.

// const noRepeat = (array1, array2) => {
//   return array1.concat(array2).filter((value, index, array) => {
//     return array.indexOf(value) === index
//   })
// }
//
// const noRepeat = (...arrays) => {
//   let bigArray = [], output = []
//   for(let arr of arrays){
//     bigArray = [...bigArray, ...arr]
//   }
//   for(let i=0; i<bigArray.length; i++){
//     if(output.includes(bigArray[i]) === false){
//       output.push(bigArray[i])
//     }
//   }
//   return output
// }

const noRepeat = (...arrays) => {
  const flattenArray = arrays.reduce((acc, value) => {
    return acc.concat(value)
  }, [])
  return flattenArray.filter((value, index, array) => {
    return array.indexOf(value) === index
  })
}
