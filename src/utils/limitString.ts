export function limitString(string: string, length: number) {
  // const str = string.split(' ');
  // let newStr = '';

  // for(let i = 0; i < str.length; i++){
  //   if(newStr.length < length){
  //     newStr += str[i] + ' ';
  //   }
  // }

  // return newStr;
  return string.slice(0, length) + '...'
}
