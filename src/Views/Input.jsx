import React, { Component, createRef } from 'react';
import './input.scss';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DateTimePicker from 'react-datetime-picker';
import logo from '../assets/images/mau.svg'
import logo1 from '../assets/images/mau1.svg'
import  { Link, NavLink, Redirect } from 'react-router-dom'
class Input_Bmi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tamthu: '',
            tamtruong: '',
            heart_rate: '',
            date: new Date(),
            height: '',
            weight: '',
            // result_bmi: createRef(),
            blood_sure: 0,
            blood_sugar: '',
            type : false
        };
        this.result_bmi =  createRef();
    }
    calcalatorBmi = (height, weight) => {
        height=(height/100)
        var BMI = weight/(height*height);
        BMI = BMI.toFixed(2);
        // console.log(BMI)
        // this.setState({
        //     result_bmi : BMI,
        // })
        this.result_bmi.current = BMI;
        this.forceUpdate();
        // console.log(this.result_bmi)
    }
    handleTamthu = e => {
        this.setState({
            tamthu : e.target.value,
        })
    }
    handleTamtruong = e => {
        this.setState({
            tamtruong : e.target.value,
        })
    }
    handleOnchangeHeight = e => {
        this.setState({
            height : e.target.value,
        })
    }

    handleHeartRate = e => {
        this.setState({
            heart_rate : e.target.value,
        })
    }

    handleOnchangeWeight = e => {
        this.setState({
            weight : e.target.value,
        })
    }
    handleBloodSugar = e => {
        this.setState({
            blood_sugar : e.target.value,
        })
    }

    handleOnBloodSure = (tamtruong, tamthu) => {
        var MAP = tamtruong+ (tamthu-tamtruong)/3;
        MAP = MAP.toFixed(2);
        // console.log(MAP);
        this.setState({
            blood_sure : MAP,
        })
    }
    
    render() {
        return (
            <div className='bmi-background-3'>
                <div className='bmi-container-3'>
                    <div className='bmi-content-3 row'>
                        <div className='col-12 text-bmi alert alert-success show" role="alert"'>
                            <strong className='text-center'>Yes! This calculator detects unit automatically ❤</strong>
                        </div>

                        <div className='row-12 mt-2'>
                            <div className='col-radio'>
                                <div className='row-radio'>
                                    <input
                                        type="radio"
                                        name="site_name"
                                        // value={'No'}
                                        className='radio-1'
                                        checked= {this.state.type}
                                
                                        onClick={e => {
                                            this.setState({
                                                type : ! this.state.type,
                                            })
                                        }}

                                    />
                                    <span className='text'>Bản Thân</span>
                                </div>

                                <div className='row-radio'>
                                    <input
                                        type="radio"
                                        name="site_name1"
                                        // value={'No'}
                                        className='radio-1'
                                        checked= {!this.state.type}
                                        onClick={e => {
                                            this.setState({
                                                type : ! this.state.type,
                                            })
                                        }}
                                    />
                                    <span className='text'>Người Khác</span>
                                </div>
                            </div>
                            <div className='datetime'>
                                <DateTimePicker 
                                    clearIcon={''}
                                    clearAriaLabel={''}
                                    
                                    onChange={e => this.setState({
                                            date : e,
                                        })}
                                    value={this.state.date}
                                    disabled= {false}
                                    maxDate = {new Date()}
                                />
                            </div>
                
                        </div>

                    <div className='row-12'>
                            
                        <div class="form-floating">
                            <input type="number" 
                                    step="any" 
                                    autocomplete="off" 
                                    class="form-control top removeScroller" 
                                    name="weight" id="floatingInput" 
                                    placeholder="Enter Weight"
                                    value={this.state.weight}
                                    onChange={e => {
                                        this.handleOnchangeWeight(e);
                                    }}
                                    required />
                            <label for="floatingInput">Weight (Kg)</label>
                        </div>

                        <div class="form-floating">
                            <input type="number" 
                                    step="any" autocomplete="off" 
                                    class="form-control bottom removeScroller" 
                                    name="height" id="floatingInput" 
                                    placeholder="Enter Height"
                                    value={this.state.height}
                                    onChange={e => {
                                        this.handleOnchangeHeight(e);
                                    }}
                                    required />
                            <label for="floatingInput">Height (cm)</label>
                        </div>
                    </div>
                        

                    {this.state.type && <div className='row-12'>
                            <span className='blood-text'>*Huyết Áp</span>
                            <div class="form-floating">
                                
                                <input type="number" 
                                        step="any" 
                                        autocomplete="off" 
                                        class="form-control top removeScroller" 
                                        name="weight" id="floatingInput" 
                                        placeholder="Tâm Trương"
                                        value={this.state.tamtruong}
                                        onChange={e => {
                                            this.handleTamtruong(e);
                                        }}
                                        required />
                                <label for="floatingInput">Tâm Trương (mmHg)</label>
                            </div>
    
                            <div class="form-floating">
                                <input type="number" 
                                        step="any" autocomplete="off" 
                                        class="form-control bottom removeScroller" 
                                        name="height" id="floatingInput" 
                                        placeholder="Tâm Thu"
                                        value={this.state.tamthu}
                                        onChange={e => {
                                            this.handleTamthu(e);
                                        }}
                                        required />
                                <label for="floatingInput">Tâm Thu (mmHg)</label>
                            </div>
                    </div> }


                    {this.state.type && <div className='row-12'>
                            <span className='blood-text'>*Tim và Đường Huyết</span>
                            <div class="form-floating">
                                <input type="number" 
                                        step="any" 
                                        autocomplete="off" 
                                        class="form-control top removeScroller" 
                                        name="weight" id="floatingInput" 
                                        placeholder="Enter Weight"
                                        value={this.state.heart_rate}
                                        onChange={e => {
                                            this.handleHeartRate(e);
                                        }}
                                        required />
                                <label for="floatingInput">Nhịp Tim(mmHg)</label>
                            </div>
    
                            <div class="form-floating">
                                <input type="number" 
                                        step="any" autocomplete="off" 
                                        class="form-control bottom removeScroller" 
                                        name="height" id="floatingInput" 
                                        placeholder="Enter Height"
                                        value={this.state.blood_sugar}
                                        onChange={e => {
                                            this.handleBloodSugar(e);
                                        }}
                                        required />
                                <label for="floatingInput">Đường Huyết(mmHg)</label>
                            </div>
                    </div> }


                    
                        <div className='col-12'>
                            <button 
                                className='btn-bmi mt-3 ml-50' onClick={() => {
                                    this.calcalatorBmi(this.state.height, this.state.weight);
                                    // this.handleOnBloodSure(this.state.tamtruong, this.state.tamthu);
                                    // console.log(this.state.result_bmi);
                                    // console.log(this.state.blood_sure);
                                    // console.log(this.state.blood_sugar);
                                    // console.log(this.state.heart_rate);
                                    // this.forceUpdate();
                                    console.log(this.result_bmi.current)
                                }}>
                                   <Link to ={{
                                        pathname: "/bmi",
                                        state: {id: this.result_bmi.current},
                                        }} className='text-btn'> Calculator BMI</Link>
                            </button>
                        </div>
                        <div className='col-12 text-center mt-1 text-orbmi'>
                        <p class="mt-0 mb-2"><a href="https://bit.ly/jashgro"><button class="btn">&copy;NhatQuang2k1</button></a></p>
                            {/* <span className='text-others'>OR bmi WITH</span> */}
                        </div>
                        
                    </div>
                   


                </div>
            </div>
        )
    }
}

export default Input_Bmi;
