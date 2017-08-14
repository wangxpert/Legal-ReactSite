export const getExemptionListIndexArray = (list) => {
  const exemptions = list[0];
  var indexArray = new Array(exemptions.length).fill(0).map((e, i) => i);

  for (let i = 1; i < exemptions.length; i++) {
    for (let j = i + 1; j < exemptions.length; j++) {
      if (exemptions[indexArray[i]] > exemptions[indexArray[j]]) {
        [indexArray[i], indexArray[j]] = [indexArray[j], indexArray[i]];
      }
    }
  }

  return indexArray;
}
