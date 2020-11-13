import React from 'react';

const hasFailedMapper = {
  1: 'notChecked',
  0: '',
};
const activeMapper = {
  0: 'notActive',
  1: 'active',
};

export default ({id, value, active, hasFailed}) => {
  return (
    <span
      id={id}
      className={`${activeMapper[active]} ${hasFailedMapper[hasFailed]} word`}>
      {value}{' '}
    </span>
  );
};
