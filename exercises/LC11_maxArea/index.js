function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxAreaBetweenTwoHeights = 0;

  while (left < right) {
    maxAreaBetweenTwoHeights = Math.max(
      maxAreaBetweenTwoHeights,
      Math.min(height[right], height[left]) * (right - left)
    );
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxAreaBetweenTwoHeights;
}

module.exports = maxArea;
