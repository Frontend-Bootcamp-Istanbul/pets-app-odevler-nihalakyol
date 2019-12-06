import React from 'react';
import {getPetsDetay} from "../constants";



class Detay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            _pet: [],
            yukleniyor: true
        }
    }

    componentDidMount(){

        getPetsDetay(this.props.match.params.id).then((data) => {
            this.setState({
                _pet: data,
                yukleniyor: false
            })
        })
    }

    componentWillUnmount() {
        document.title = "Pets App";
    }
    render(){
        const {name, image, age, description, breed} = this.state._pet;
        // Hocaya sor.
        document.title = "Pets App | " + name + " - " + breed;

        if(this.state.yukleniyor){
            return <div className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        }else{
            return <div>
                <div className="container">
                    <div className="row justify-content-center my-4 py-5 bg-light">
                        <div className="col-10">
                            <div className="row">
                                <div className="col-md-6">
                                        <img className="img-fluid rounded" src={image} alt="" style={{height: "292px", width: "auto"}}/>
                                </div>

                                <div className="col-md-6 text-left">
                                    <h3 className="my-3">{name}</h3>
                                    <h6>Açıklama</h6>
                                    <p>{description}</p>
                                    <div>
                                        <b>Irk: </b>
                                        <a href="#"><span className="badge badge-primary" style={{fontSize: "12px"}}>{breed}</span></a>
                                        <br />
                                        <b>Yaş: </b>
                                        <a href="#"><span className="badge badge-warning" style={{fontSize: "12px"}}>{age}</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    </div>
        }
    }
}

export default Detay;
