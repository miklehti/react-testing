import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const intitialState = {
    comments: ['Comment1', 'Comment2']
  };
    wrapped = mount(
      <Root intitialState={intitialState}>
        <CommentList />
      </Root>
    );
});

it('cretes one LI per comment', ()=>{
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () =>{
  expect(wrapped.render().text()).toContain('Comment1');
  expect(wrapped.render().text()).toContain('Comment2');
})
