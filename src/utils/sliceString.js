export default function sliceString(string, number)  {
  let sliced = string.slice(0, number);

  if (sliced.length < string.length) {
    sliced += '...';
  }
  return sliced
}
