/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let width = 0;
  let stan = 0;
  let sum = 0;
  let num = 0;
  let loc = 0;
  while (num < height.length) {
    let tf = false;
    let temp = 0;
    if (height[num] !== 0) {
      stan = height[num];
      for (let i = num + 1; i < height.length; i++) {
        if (height[i] >= stan) {
          stan = height[i];
          loc = i;
          tf = true;
          break;
        } else {
          temp = temp + height[i];
        }
      }
    }
    if (tf == true) {
      console.log(stan, loc, num, temp);
      sum = sum + (loc - num - 1) * height[num] - temp;
      num = loc;
    } else {
      num++;
    }
  }
  return sum;
};

var trap2 = function (height) {
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  let step = 0;

  while (left < right) {
    console.log(`\n--- step ${step} ---`);
    console.log(
      `left=${left} (h=${height[left]}), right=${right} (h=${height[right]})`,
    );
    console.log(`leftMax=${leftMax}, rightMax=${rightMax}, water=${water}`);

    if (height[left] <= height[right]) {
      console.log("→ Move LEFT");

      if (height[left] >= leftMax) {
        leftMax = height[left];
        console.log(`Update leftMax → ${leftMax}`);
      } else {
        const added = leftMax - height[left];
        water += added;
        console.log(`Add water at left: ${added}`);
      }

      left++;
    } else {
      console.log("→ Move RIGHT");

      if (height[right] >= rightMax) {
        rightMax = height[right];
        console.log(`Update rightMax → ${rightMax}`);
      } else {
        const added = rightMax - height[right];
        water += added;
        console.log(`Add water at right: ${added}`);
      }

      right--;
    }

    step++;
  }

  console.log(`\nTotal Water = ${water}`);
  return water;
};
console.log(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
