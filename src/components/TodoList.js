import React, { Component } from 'react';
import Item from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, handleClear, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item => (
          <Item
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        ))}
        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={handleClear}
        >
          clear list
        </button>
      </ul>
    );
  }
}
