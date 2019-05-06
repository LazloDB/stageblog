import React, { useEffect, useState } from 'react';
import { Wrap, Icon, Paper } from './Document.style';
import TitleBar from '../@common/TitleBar';

import FileIcon from '../../assets/note.png';
import items from '../../assets/data';
import Paragraph from '../@common/Paragraph';

const Document = ({ match: { params } }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const { id } = params;
    const item = items.filter(item => item.id === parseInt(id))[0];

    item ? setItem(item) : setItem('error');
  }, [params]);

  if (!item) {
    return (
      <Wrap>
        <TitleBar>loading</TitleBar>
      </Wrap>
    );
  }

  console.info(item);

  return (
    <Wrap>
      <TitleBar>
        <Icon src={FileIcon} />
        {item.title}
      </TitleBar>
      <Paper>
        {item &&
          item.paragraphs.map((paragraph, key) => (
            <Paragraph key={key} data={paragraph} />
          ))}
      </Paper>
    </Wrap>
  );
};

export default Document;
