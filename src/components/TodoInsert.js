import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoTemplate.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  // useCallback 을 사용하면 리렌더링될 때마다 함수를 새로 만드는 것이 아니라
  // 한번 함수를 만들고 재사용할 수 있도록함

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onSubmit를 사용하면 form안 input에서 enter를 쳐도 실행됨.
  // onClick을 사용하면 onPressKey를 사용해야함.
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onInsert(value);
      setValue(''); //value값 초기화.

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
