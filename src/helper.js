// export function checkHeading(str) {
//     return /^(\*)(\*)(.*)\*$&/.test(str)

// }
// export function replaceHeadingStarts (str) {
//     return str.replace(/^(\*)(\*) | (\*)$/g, '')
// }


export function checkHeading(str) {
    return /^\*\*.+?\*{1,2}$/.test(str.trim());
  }
  
  export function replaceHeadingStarts(str) {
    return str.trim().replace(/^\*\*\s?/, '').replace(/\*{1,2}$/, '').trim();
  }
  