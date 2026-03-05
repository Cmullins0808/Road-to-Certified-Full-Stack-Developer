function mutation(arr) {
  const target = arr[0].toLowerCase();

const test = arr[1].toLowerCase();

for(let char of test) {
  if(!target.includes(char)){
    return false;
  }
}
return true;
}
