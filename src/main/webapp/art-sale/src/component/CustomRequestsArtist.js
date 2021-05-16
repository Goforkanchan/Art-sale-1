import React, { Component } from 'react'
import ArtRequest from './ArtRequest';
import axios from 'axios';
import { Fragment } from 'react';

class CustomRequestsArtist extends Component {

    constructor(props) {
        super(props);
        this.state ={
            requests: []
        }

        axios.get("http://localhost:8099/dashNavigationMenu/getAllCustOrders").then(res=>{
            console.log(res.data);
            console.log(res.status)
            this.setState({
                requests: res.data
            })
        }).catch(err=>{
            console.log(err);
        });
       
    }

    render() {
        const Requests = this.state.requests.map((request) => {
            return (
               <Fragment>
                {!request.artistDetails3 && 
                    <ArtRequest
                        key={request.custom_id}
                        custom_id={request.custom_id}
                        buyer={request.userMO.first_name +" "+ request.userMO.last_name}
                        refimg={request.ref_art_image}
                        type={request.type_of_art}
                        paper={request.paper_canvas}
                        quant={request.quantity}
                        loc={request.art_location}
                        use={request.art_use}
                        desc={request.description}
                        history= {this.props.history}
                    />
                }
            </Fragment>
            )
        })
        return (
            <div>

                    <div className="container">
                        {Requests}
                    </div>
            </div>
        )
    }
}
export default CustomRequestsArtist;