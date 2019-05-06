import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { ItemWrap, Icon, Title, Size, Type, Modified } from './Table.style';
import FileIcon from '../../../assets/note.png';

const TableBodyItem = ({ title, size, type, modified, id }) => {
  return (
    <Link
      style={{ textDecoration: 'none', color: '#000' }}
      to={{
        pathname: 'blog/' + id,
      }}
    >
      <ItemWrap>
        <Title>
          <Icon src={FileIcon} />
          {title}
        </Title>
        <Size>{size}</Size>
        <Type>{type}</Type>
        <Modified>{modified}</Modified>
      </ItemWrap>
    </Link>
  );
};

export default withRouter(TableBodyItem);
