console.log(1111)
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 16, // 换算的基数(设计图750的根字体为75)
      propList: ["*"],
      unitPrecision: 5
    }
  }
};