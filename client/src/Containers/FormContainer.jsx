import React, {Component} from 'react';

import Input from '../Components/Input';
import Select from '../Components/Select';
import Button from '../Components/Button'
import "./FormContainer.css";


class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

      newUser: {
        firstName: '',
        lastName:'',
        company:'',
        zipCode: '',
        phoneNumber: '',
        email:'',
        industry:'',
        area: ''
      },
      industryOptions: ['Construction', 'Education', 'Financial',
                        'Government', 'Healthcare', 'Hospitality',
                        'Manufacturing', 'NonProfit', 'Real Estate/Property Management',
                        'Retail', 'Services', 'Other'],
      areaOptions: ['0-4,999', '5,000-24,999', '25,000-49,999', '50,000-99,999',
                    '100,000-499,999', '500,000-999,999', '1,000,000+']

    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
       this.setState(prevState => ({ newUser :
            {...prevState.newUser, [name]: value
            }
          }), () => console.log(this.state.newUser))
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log(userData);
    this.setState({
      newUser: {
        firstName: '',
        lastName:'',
        company:'',
        zipCode: '',
        phoneNumber: '',
        email:'',
        industry:'',
        area: ''
      }
    });
    fetch('/users',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
  }


  render() {
    return (
      <form className="form-container" onSubmit={this.handleFormSubmit}>
      <p> </p>
      <div className="shortcontainer">
      <Input className="short"
             inputType={'text'}
             name= {'firstName'}
             value={this.state.newUser.firstName}
             placeholder = {'First Name*'}
             handleChange = {this.handleInput}
             />

     <Input className="short"
            inputType={'text'}
            name= {'lastName'}
            value={this.state.newUser.lastName}
            placeholder = {'Last Name*'}
            handleChange = {this.handleInput}
            />


      <Input className="short"
             inputType={'text'}
             name= {'company'}
             value={this.state.newUser.company}
             placeholder = {'Company Name*'}
             handleChange = {this.handleInput}
             />


       <Input className="short"
              inputType={'number'}
              name= {'zipCode'}
              value={this.state.newUser.zipCode}
              placeholder = {'ZIP Code*'}
              handleChange = {this.handleInput}
              />
      </div>

      <div className="longcontainer">
      <Input className="long"
             inputType={'number'}
             name= {'phoneNumber'}
             value={this.state.newUser.phoneNumber}
             placeholder = {'Phone Number*'}
             handleChange = {this.handleInput}
             />

       <Input className="long"
              inputType={'text'}
              name= {'email'}
              value={this.state.newUser.email}
              placeholder = {'Email Address*'}
              handleChange = {this.handleInput}
              />
      </div>

      <div className="selectcontainer">

      <Select name={'industry'}
              options = {this.state.industryOptions}
              value = {this.state.newUser.industry}
              placeholder = {'Industry Type*'}
              handleChange = {this.handleInput}
              />

      <Select name={'area'}
              options = {this.state.areaOptions}
              value = {this.state.newUser.area}
              placeholder = {'Square Footage*'}
              handleChange = {this.handleInput}
              />
      </div>

      <Button action = {this.handleFormSubmit}
              type = {'primary'}
              title = {'Submit'}
              />
      </form>

    );
}
}

export default FormContainer;
