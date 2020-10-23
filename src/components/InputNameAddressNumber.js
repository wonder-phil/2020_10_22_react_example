import React from 'react';

class InputNameAddressNumber extends React.Component {

  constructor(props) {
      super(props);
      this.state = { name: '', address: '', number: '' };

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleAddressChange = this.handleAddressChange.bind(this);
      this.handleNumberChange = this.handleNumberChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
      this.setState({name: event.target.name});
      event.preventDefault();
    }

    handleAddressChange(event) {
      this.setState({address: event.target.address});
    }

    handleNumberChange(event) {
      this.setState({number: event.target.number});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name);
      alert('An address was submitted: ' + this.state.address);
      alert('An number was submitted: ' + this.state.number);
      event.preventDefault();
    }


  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Address:
          <input type="text" value={this.state.address} onChange={this.handleAddressChange} />
        </label>
        <label>
          Number:
          <input type="text" value={this.state.number} onChange={this.handleNumberChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
    }


}

export default InputNameAddressNumber;
