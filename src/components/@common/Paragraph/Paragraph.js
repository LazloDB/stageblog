import React from 'react';

import { Title, Wrap } from './Paragraph.style';

const Paragraph = ({ data }) => {
  const { title, p, url } = data;
  return (
    <Wrap>
      <Title>{title}</Title>
      {p && p.map((item, key) => <div key={key}>{item}</div>)}
      {url && (
        <a target="_blank" href="https://www.youtube.com/watch?v=SxyRzrTKBFE">
          https://www.youtube.com/watch?v=SxyRzrTKBFE
        </a>
      )}
    </Wrap>
  );
};

export default Paragraph;
