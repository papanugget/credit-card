import React from 'react';
import Container from '@material-ui/core/Container';
import  EntryForm from './components/EntryForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [
        {
            name: 'January',
            value: '01',
        },
        {
            name: 'February',
            value: '02',
        },
        {
            name: 'March',
            value: '03',
        },
        {
            name: 'April',
            value: '04',
        },
        {
            name: 'May',
            value: '05',
        },
        {
            name: 'June',
            value: '06',
        },
        {
            name: 'July',
            value: '07',
        },
        {
            name: 'August',
            value: '08',
        },
        {
            name: 'September',
            value: '09',
        },
        {
            name: 'October',
            value: '10',
        },
        {
            name: 'November',
            value: '11',
        },
        {
            name: 'December',
            value: '12',
        },
    ],
    expYear: null,
    cvv: null,
    cardName: null,
    cardNumber: null
    }
  }
  render() {
    return (
      <Container id="main-container">
        <EntryForm props={this.state}/>
      </Container>
    );
  }
}

export default App;