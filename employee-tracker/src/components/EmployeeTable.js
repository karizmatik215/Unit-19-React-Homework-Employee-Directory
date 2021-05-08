import React from 'react';
import '../styles/EmployeeTable.css';

function EmployeeTable({ headings, users, handleSort }) {
  return (
    <div className="employeetable mt-2">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {users[0] !== undefined && users[0].name !== undefined ? (
            users.map(({ login, name, picture, phone, email }) => {
              return (
                <tr key={login.uuid}>
                  <td data-th="Image" className="align-middle">
                    <img
                      src={picture.medium}
                      alt={'profile image for ' + name.first + ' ' + name.last}
                      className="img-responsive"
                    />
                  </td>
                  <td data-th="Name" className="name-cell align-middle">
                    {name.first} {name.last}
                  </td>
                  <td data-th="Phone" className="align-middle">
                    {phone}
                  </td>
                  <td data-th="Email" className="align-middle">
                    <a href={'mailto:' + email} target="__blank">
                      {email}
                    </a>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
