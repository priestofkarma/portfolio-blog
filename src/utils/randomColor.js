// const rndColors = {
//   colors: ["azure-light", "indigo-light", "pink-light", "green-light"],
//   tags: ["Layout", "Wordpress", "Jekyll", "Bootstrap"],
//   getRndColor: function (tagName) {
//     let clr;
//     this.tags.map((tag, index) => {
//       if (tag == tagName) {
//         clr = this.colors[index]
//       }
//     })
//     return clr
//   }
// }

const rndColors = {
  colors: ["azure-light", "indigo-light", "pink-light", "green-light"],
  getRndColor: function () {
    return this.colors[Math.floor(Math.random() * this.colors.length)]
  }
}



export default rndColors