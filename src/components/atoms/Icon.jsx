import React from 'react';
import { Avatar } from '@material-ui/core';

const Icon = (props) => {
  const { avatar, containerStyle = {}, avatarStyle = {} } = props;
  const IconComp = props.icon;
  return (
    <div className={containerStyle}>
      {!!avatar ? (
        <Avatar className={avatarStyle}>
          <IconComp />
        </Avatar>
      ) : (
        <IconComp />
      )}
    </div>
  );
};

export default Icon;
