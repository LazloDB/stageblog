import React from 'react';
import { Wrap, Icon, Toolbar, SpanStyled } from './FileExplorer.style';
import TitleBar from '../@common/TitleBar';

import OpenFolder from '../../assets/open_folder.png';
import items from '../../assets/data';
import Table from '../@common/Table';

const FileExplorer = () => {
  return (
    <Wrap>
      <TitleBar>
        <Icon src={OpenFolder} />
        Stageblog
      </TitleBar>
      <Toolbar>
        <SpanStyled>File</SpanStyled>
        <SpanStyled>Edit</SpanStyled>
        <SpanStyled>View</SpanStyled>
        <SpanStyled>Help</SpanStyled>
      </Toolbar>

      <Table items={items} />
    </Wrap>
  );
};

export default FileExplorer;
