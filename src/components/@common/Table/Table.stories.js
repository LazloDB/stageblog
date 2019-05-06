import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './Table';

const story = storiesOf('Table', module);

const items = [
  { title: 'Week 1: React test assignment' },
  { title: 'Dag 6: React hooks' },
  { title: 'Dag 7: React hooks 2.0' },
];

story.add('95', () => (
  <div
    style={{
      backgroundColor: 'rgb(206, 208, 207)',
      width: '100%',
      height: '100%',
      padding: '20px',
    }}
  >
    <Table items={items} />
  </div>
));
