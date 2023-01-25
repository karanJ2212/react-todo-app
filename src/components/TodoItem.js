import React, { Component } from "react";

export default class TodoItem extends Component {
  checkboxClick = () => {
    console.log("click");
  };
  render() {
    return (
      <div>
        <li>
          {" "}
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.checkboxClick}
          />{" "}
          {this.props.todo.title}
        </li>
      </div>
    );
  }
}

// import React from "react";

// export default function TodoItem(props) {
//   return (
//     <div>
//       <input type="checkbox" /> <li>{props.todo.title}</li>
//     </div>
//   );
// }
