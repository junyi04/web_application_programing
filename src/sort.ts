// undefined => '값'
// [1, undefined], [undefined, 1]
// Object is possibly undefined -> 걸러내든가 아예 안되게 하든가

// order를 제한할 수 있지 않을까? 생각해보기
export function simpleSort(arr: number[], order = "asc"): number[] {
  const sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length - 1; i++) {
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      const a = sortedArr[j]!; // ! 대신 undefined 막을 방법이 있나요?
      const b = sortedArr[j + 1]!;
      const swap = order === "asc" ? a > b : a < b;

      if (swap) {
        [sortedArr[j], sortedArr[j + 1]] = [b, a];
      }
    }
  }
  return sortedArr;
}