var reverse = function (x) {
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  const sign = x < 0 ? -1 : 1;
  const reversed = Number(
    Math.abs(x).toString().split("").reverse("").join(""),
  );
  if (reversed > max || reversed < min) return 0;
  return reversed * sign;

  //   if (x < 0) {
  //     const reversed = (-x).toString().split("").reverse().join("");
  //     return -Number(reversed);
  //   }
  //   const reversed = x.toString().split("").reverse().join("");
  //   return Number(reversed);
};

console.log(reverse(-120));
console.log(reverse(120));
