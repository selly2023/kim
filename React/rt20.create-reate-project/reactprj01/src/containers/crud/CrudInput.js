import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  useNavigate,
} from 'react-router-dom';

const StyledCrudInput = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
`;

// const {callbackAdd} = props;
function CrudInput({ callbackAdd }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [변수명, set변수명] = useState('기본값'); // 상태값이 기본타입인 경우

  // ref 만들기.
  const refInputName = useRef();
  const refInputPower = useRef();

  // 이벤트 핸들러 작성.
  const handlerAdd = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);

    // Name 입력 여부 유효성 검사
    //     포커스 주기
    //     이벤트 취소
    const name = refInputName.current.value;
    // !name <===> name === null || name === undefined || name === ''
    if (!name || name.trim() === '') {
      alert('Name 을 입력하세요');
      refInputName.current.focus();

      e.stopPropagation();
      e.preventDefault();

      return false;
    }

    // Power 입력 여부 유효성 검사 && Power의 입력값이 숫자인지 유효성 검사
    //     포커스 주기
    //     이벤트 취소
    let power = refInputPower.current.value;
    // !power <===> power === null || power === undefined || power === ''
    if (!power || power.trim() === '' || isNaN(power)) {
      alert('Powere 를 입력하세요');
      refInputPower.current.focus();

      e.stopPropagation();
      e.preventDefault();

      return false;
    }

    // Power의 입력값을 숫자로 바꾸시오.(문자열를 숫자로)
    power = Number(power);

    // 입력된 값을 이용해서 변경할 객체(newItem)를 만든다
    const newitem = {
      name: name,
      power: power,
    };

    debugger;
    // 부모 메서드 CrudContainer.callbackAdd() 호출
    callbackAdd(newitem);

    // input 태그에 남아있는 입력값 지우기.
    refInputName.current.value = null;
    refInputPower.current.value = null;
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledCrudInput>
      <div>
        <label htmlFor="">Name : </label>
        <input
          type="text"
          name="name"
          placeholder="이름을 입력하세요"
          ref={refInputName}
          defaultValue={''}
        />
      </div>
      <div>
        <label htmlFor="">Power : </label>
        <input
          type="number"
          name="power"
          placeholder="숫자를 입력하세요"
          ref={refInputPower}
          defaultValue={0}
        />
      </div>
      <button type="button" onClick={handlerAdd}>
        Add
      </button>
    </StyledCrudInput>
  );
}

CrudInput.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  callbackAdd: PropTypes.func.isRequired,
};
CrudInput.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  callbackAdd: () => {},
};

export default CrudInput; // React.memo(CrudInput); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
