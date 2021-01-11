import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoTemplate.scss';

const TodoInsert = () => {
  const [value, setValue] = useState('');

  // useCallback 을 사용하면 리렌더링될 때마다 함수를 새로 만드는 것이 아니라
  // 한번 함수를 만들고 재사용할 수 있도록함

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <div className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </div>
  );
};

export default TodoInsert;
