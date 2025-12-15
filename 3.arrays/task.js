function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) return 0
  
  return users.reduce((acc, curr, index) => {
    if (curr['gender'] == gender) {
      acc['sum'] += curr['age']
      acc['countItem'] ++
    }
    if (index === users.length - 1) return acc['countItem'] ? acc['sum'] / acc['countItem'] : 0 
    return acc
  }, {sum: 0, countItem: 0})  
}
