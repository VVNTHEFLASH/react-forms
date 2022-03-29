import React, { Component } from 'react';
import "../components/form.css";

export default class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            personal: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                Country: "",
                IFSC_code: "",
                account_Number: "",
                Country_Id: "",
                city: "",
                postcode: "",
                address: "",
            },
            business: {
                businessName: "",
                email: "",
                phoneNumber: "",
            },
            category: "Personal",
            step: 1,
            country: "IN",
        }
    }

    switchToPersonal = () => {
        this.setState({ category: "Personal", step: 1 });
        console.log(this.state.category);
    }
    
    switchToBusiness = () => {
        this.setState({ category: "Business", step: 1 });
        console.log(this.state.category);
    }

    changeCourtryHandler = (e) => {
        this.setState({ country: e.target.value })
    }

    renderCategory = () => {
        let step = this.state.step;
        if(step === 1) {
            return(
                <div className='category'>
                    <div className={this.state.category === "Personal" ? "active" : "switch"}
                        onClick={this.switchToPersonal}>
                        Personal
                    </div>
                    <div className={this.state.category === "Business" ? "active" : "switch"}
                        onClick={this.switchToBusiness}>
                        Business
                    </div>
                </div>
            );
        }
        else{
            return <div></div>;
        }
    }

    renderFormOne = () => {
        let category = this.state.category;
        if(category === "Personal") {
            return(
                <div className='formOne'>
                    <input type="text" placeholder='First Name'
                    onInput={this.onchangeFirstName} />
                    <input type="text" placeholder='Last Name'
                    onInput={this.onchangeLastName} />
                    <input type="text" placeholder='Email'
                    onInput={this.onchangeEmail} />
                    <input type="text" placeholder='Phone Number'
                    onInput={this.onchangePhoneNumber} />
                </div>
            );
        }
        else if(category === "Business"){
            return(
                <div className='formOne'>
                    <input type="text" placeholder='Business Name'
                    onInput={this.onchangeBusinessName} />
                    <input type="text" placeholder='Email'
                    onInput={this.onchangeEmail}/>
                    <input type="text" placeholder='Phone Number'
                    onInput={this.onchangePhoneNumber}/>
                </div>
            )
        }
    }

    onchangeFirstName = (e) => {
        this.setState({ 
            personal: { ...this.state.personal, firstName: e.target.value },
        })
    }

    onchangeLastName = (e) => {
        this.setState({ 
            personal: { ...this.state.personal, lastName: e.target.value },
        })
    }

    onchangeBusinessName = (e) => {
        this.setState({
            business: { ...this.state.business, businessName: e.target.value },
        })
    }

    onchangeEmail = (e) => {
        if(this.state.category === "Personal"){
            this.setState({
                personal: { ...this.state.personal, email: e.target.value },
            })
        }
        else{
            this.setState({
                business: { ...this.state.business, email: e.target.value },
            })
        }
    }

    onchangePhoneNumber = (e) => {
        if(this.state.category === "Personal"){
            this.setState({
                personal: { ...this.state.personal, phoneNumber: e.target.value },
            })
        }
        else{
            this.setState({
                business: { ...this.state.business, phoneNumber: e.target.value },
            })
        }
    }
    renderFormTwo = () => {
        let country = this.state.country;
        let currency;
        if(country === "IN") {
            currency = "Indian rupee(INR)";
            return(
                <div className='formTwo'>
                    <div className='tag'>
                        <p className='tag-head'>Country</p>
                        <select name="country" id="country" onChange={this.changeCourtryHandler}>
                            <option value="IN" defaultChecked>India</option>
                            <option value="USA">United States of America</option>
                        </select>
                    </div>
                    <div className='tag'>
                        <p className='tag-head'>Currency</p>
                        <p>{currency}</p>
                    </div>
                    <div className='tag'>
                        <p className='tag-head'>Bank details format</p>
                        <p>Indian local</p>
                    </div>
                    <div className='tag' id='tag-child'>
                        <input type="text" placeholder='IFSC code' 
                        onChange={this.onchangeIFSCcode}
                        required />
                        <input type="text" placeholder='Account Number'
                        onChange={this.onchangeAccountNo}
                        required />
                    </div>
                </div>
            )
        }
        else{
            currency = "United Stated doller(USD)";
            return(
                <div className='formTwo'>
                    <div className='tag'>
                        <p className='tag-head'>Country</p>
                        <select name="country" id="country" onChange={this.changeCourtryHandler}>
                            <option value="IN">India</option>
                            <option value="USD" defaultChecked>United States of America</option>
                        </select>
                    </div>
                    <div className='tag'>
                        <p className='tag-head'>Currency</p>
                        <p>{currency}</p>
                    </div>
                    <div className='tag'>
                        <p className='tag-head'>Bank details format</p>
                        <input type="radio" name="bank" id="local" checked="checked" />Local bank details 
                        <input type="radio" name="bank" id="swift" />SWIFT code
                    </div>
                    <div className='tag' id='tag-child'>
                        <input type="text" placeholder='ACH routing number'
                        onChange={this.onchangeIFSCcode} />
                        <input type="text" placeholder='Account number'
                        onChange={this.onchangeAccountNo} />
                    </div>
                </div>
            )
        }
    }

    onchangeIFSCcode = e => {
        this.setState({
            personal: { ...this.state.personal, IFSC_code: e.target.value },
        })
    }

    onchangeAccountNo = e => {
        this.setState({
            personal: { ...this.state.personal, account_Number: e.target.value },
        })
    }
    renderFormThree = () => {
        let country = this.state.country;
        return(
            <div className='formOne'>
                <input type="text" placeholder={country}
                onChange={this.onchangeCountryID} />
                <input type="text" placeholder='City'
                onChange={this.onchangeCity} />
                <input type="text" placeholder='Post code'
                onChange={this.onchangePostcode} />
                <input type="text" placeholder='Address'
                onChange={this.onchangeAddress} />
            </div>
        )
    }

    onchangeCountryID = e => {
        this.setState({
            personal: { ...this.state.personal, Country_Id: e.target.value },
        })
    }

    onchangeCity = e => {
        this.setState({
            personal: { ...this.state.personal, city: e.target.value },
        })
    }
    
    onchangePostcode = e => {
        this.setState({
            personal: { ...this.state.personal, postcode: e.target.value },
        })
    }
    
    onchangeAddress = e => {
        this.setState({
            personal: { ...this.state.personal, address: e.target.value },
        })
    }
    
    nextBtn = (e) => {
        let step = this.state.step;
        if(step < 3){
            this.setState({ step: step + 1 });
            e.preventDefault();
        }
    }

    prevBtn = (e) => {
        let step = this.state.step;
        if(step > 1){
            this.setState({ step: step - 1 })
            e.preventDefault();
        }
    }
    submitBtn = (e) => {
        console.log(this.state);
        e.preventDefault();
    }

  render() {
    return (
      <>
        <div className='form-container'>
            <form className='form'>
                <div className='step'>
                    <div className='stepName'>
                        <p className={this.state.step <= 3 ? "stepActive" : "circle"}>
                            {this.state.step < 2 ? "1" : "✔"}
                        </p>
                        <p>Beneficiary</p>
                    </div>
                    <div className="dash">
                        _______________
                    </div>
                    <div className='stepName'>
                        <p className={this.state.step > 1 && this.state.step <= 3 ? "stepActive" : "circle"}>
                            {this.state.step < 3 ? "2" : "✔"}
                        </p>
                        <p>BankDetails</p>
                    </div>
                    <div className="dash">
                        _______________
                    </div>
                    <div className='stepName'>
                        <p className={this.state.step === 3 ? "stepActive" : "circle"}>
                            {this.state.step < 4 ? "3" : "✔"}
                        </p>
                        <p>Address</p>
                    </div>
                    <div className='gb'>
                        <span>GB</span>
                    </div>
                </div>
                {/* render catogory */}
                {this.renderCategory()}
                { this.state.step === 1 ? this.renderFormOne()
                : this.state.step === 2 ? this.renderFormTwo()
                : this.renderFormThree() }

                <div className='button'>
                    {this.state.step > 1 ? (
                        <button type="submit"
                        onClick={this.prevBtn}
                        className='prevBtn'>Prev</button>
                    ): ""}
                    {this.state.step === 3 ? (
                        <button type="submit" 
                        onClick={this.submitBtn}
                        className="nextBtn">Submit</button>
                    ): (
                        <button type="submit"
                        onClick={this.nextBtn}
                        className="nextBtn">Next</button>
                    )}
                </div>
            </form>
        </div>
      </>
    )
  }
}

// Found Bug in Onchange Event
// Autofilling the Forms is Problem
