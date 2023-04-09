/*
 (구조) 분해 할당에 대해서 알아본다.
  배열 분해 할당은 배열의 순번을 이용해서 매핑한다.
  객체 분해 할당은 객체의 프로터티 명을 이용해서 매핑한다.
*/
const points = [20, 30, 40];
const x1 = points[0]; // 20
const y1 = points[1]; // 30
const z1 = points[2]; // 40
console.log(x1, y1, z1); // 20, 30, 40

// 배열분해할당
const [x2, y2, z2] = points;
console.log(x2, y2, z2); // 20, 30, 40

// 두번째.  값 무시하기
const [x3, , z3] = points; // [20, 30, 40];
console.log(x3, z3); // 20, 40

// 세번째. 값 무시하기
const [x4, y4] = points;
console.log(x4, y4); // 20 30

/**
 * 객체 분해 할당
 */
const car = {
  type: 't',
  color: 's',
  model: 2023,
};

// ES5 를 사용하여 빼내기
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1);

// ES2015 를 사용하여 빼내기
const { type, color, model, gear } = car;
console.log(type, color, model, gear); // t, s, 2023,

// 함수의 매개변수로 분해할당을 방식을 사용해 본다.
// 함수의 매개변수에 분행할등 적용.
// const { type, color } = car;
const func2 = ({ type, color }) => {
  // ES5
  // const type = car.type;
  // const color = car.color;

  // ES2015, 분해할당
  // const { type, color } = car;

  debugger;
  console.log(type, color); // t, s
};
debugger;
func2(car);
