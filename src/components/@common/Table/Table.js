import React from 'react';
import { Wrap, TableHeader, HeaderItem, TableBody } from './Table.style';

import TableBodyItem from './TableBodyItem';

const Table = ({ items }) => {
  return (
    <Wrap>
      <TableHeader>
        <HeaderItem width={25} widthSm={60}>
          Name
        </HeaderItem>
        <HeaderItem width={5} widthSm={0}>
          Size
        </HeaderItem>
        <HeaderItem width={10} widthSm={0}>
          Type
        </HeaderItem>
        <HeaderItem width={20} widthSm={40}>
          Modified
        </HeaderItem>
        <HeaderItem width={50} widthSm={0} />
      </TableHeader>
      <TableBody>
        {items &&
          items.map(item => (
            <TableBodyItem
              key={item.id}
              title={item.title}
              modified={item.modified}
              id={item.id}
            />
          ))}
      </TableBody>
    </Wrap>
  );
};

export default Table;
