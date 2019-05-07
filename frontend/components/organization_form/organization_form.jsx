import React from 'react';

class OrganizationForm extends React.Component {
  componentDidMount() {
    this.props.requestUserOrgs();
    console.log(this.props);
  }

  render() {
    return (
      <>
        <h1>THIS IS THE ORGANIZATION FORM</h1>
      </>
    );
  }
}

export default OrganizationForm;
