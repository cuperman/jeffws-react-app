import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_NAME = 'World';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: ''
    };
  }

  onChange(event) {
    const target = event.target;
    const key = target.name;
    const value = target.value;

    this.setState({
      [key]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.setName(this.state.inputName);
    this.setState({
      inputName: ''
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Hello, {this.props.name || DEFAULT_NAME}</h1>
        </header>
        <section>
          <form onSubmit={(event) => this.onSubmit(event)}>
            <label>What is your name?</label>
            &nbsp;
            <input name="inputName" type="text" value={this.state.inputName} onChange={event => this.onChange(event)} />
          </form>
        </section>
      </div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func.isRequired
};

export default Greeting;
