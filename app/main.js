import React from 'react';
import ReactDOM from 'react-dom'

function decor(target, name, descr) {
  return descr
}

class Test extends React.Component {
    render() {
	return <div>Hello World!</div>
    }
}

ReactDOM.render(<Test />, document.getElementById('app'));
