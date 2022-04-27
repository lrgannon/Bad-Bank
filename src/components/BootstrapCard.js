import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function BootstrapCard(props) {
        function classes(){
                const bg = props.bgcolor ? ' bg-' + props.bgcolor : '';
                const txt = props.txtcolor ? ' text--' + props.textcolor : ' text-black';
                return 'Card mb-3 ' + bg + txt;
        }
        return (
                
                <div className={classes()} style={{maxWidth: "30rem"}}>
                <div className="card-header">{props.header}</div>
                <div className="card-body">
                        {props.title && (<h5 className="card-title">{props.title}</h5>)}
                        {props.text && (<p className="card-text">{props.text}</p>)}
                        {props.body}
                        {props.status && (<div id="createStatus">{props.status}</div>)}
                        </div>
                        </div>
                 );
                }



export default BootstrapCard;