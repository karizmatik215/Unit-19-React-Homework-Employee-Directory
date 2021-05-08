import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable';
import Nav from './Nav';
import API from '../utils/API';

class EmployeeData extends Component {
  state = {
    employees: [{}],
    order: 'descend',
    filteredEmployees: [{}],
  };

  headings = [
    { name: 'Image', width: '25%' },
    { name: 'Name', width: '25%' },
    { name: 'Phone', width: '25%' },
    { name: 'Email', width: '25%' },
  ];

  handleSort = (heading) => {
    switch (this.state.order) {
      case 'descend':
        this.setState({
          order: 'ascend',
        });
        break;
      default:
        this.setState({
          order: 'descend',
        });
        break;
    }

    const compareFunction = (a, b) => {
      if (this.state.order === 'ascend') {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === 'name') {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === 'name') {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    const sortedUsers = this.state.filteredEmployees.sort(compareFunction);
    this.setState({ filteredEmployees: sortedUsers });
  };

  handleSearch = (event) => {
    event.preventDefault();
    const filter = event.target.value;
    const filteredList = this.state.employees.filter((item) => {
      let values = Object.values(item).join('').toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredEmployees: filteredList });
  };

  componentDidMount() {
    API.getEmployees().then((results) => {
      this.setState({
        employees: results.data.results,
        filteredEmployees: results.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <Nav handleSearch={this.handleSearch} />
        <div className="data-area">
          <EmployeeTable
            headings={this.headings}
            users={this.state.filteredEmployees}
            handleSort={this.handleSort}
          />
        </div>
      </>
    );
  }
}

export default EmployeeData;
