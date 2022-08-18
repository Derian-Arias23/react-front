import React, { Component } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from "react-bootstrap";

//const urlS = "http://localhost:3000/solicitudes"
const ranking = [
    {N: 1, Nombre:"Derian", fecha_inicio: "2/07/22", Cantidad: 350,  fecha_fin: "2/10/22"},
    {N: 2, Nombre:"Steven", fecha_inicio: "2/07/22", Cantidad: 170, fecha_fin: "2/10/22"},
    {N: 3, Nombre:"Roberto", fecha_inicio: "2/07/22", Cantidad: 90, fecha_fin: "2/10/22"},
]
class Ranking extends Component {
    state={
        data: ranking,
        modalInsertar: false,
        form:{
            N: 0,
            Nombre:'',
            fecha_inicio:'',
            Cantidad:0,
            fecha_fin:''
        },

    };

    handleChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    mostralModalAsignarE=()=>{
        this.setState({modalInsertar: true});
    }

    ocultarModalAsignarE=()=>{
        this.setState({modalInsertar: false});
    }

    render(){
        return (
        <div className="Routes">
        <Container>
            <br/>
          <button type="button" className="btn btn-success float-left" onClick={()=> this.mostralModalAsignarE()}> Historial</button>  
            <br/> <br/>

            <table className = "table table/border text-center">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Nombre</th>
                        <th>Fecha_inicio</th>
                        <th>Cantidad</th>
                        <th>Fecha_fin</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((e)=>(
                        <tr key={e.N}>
                            <td>{e.N}</td>
                            <td>{e.Nombre}</td>
                            <td>{e.fecha_inicio}</td>
                            <td>{e.Cantidad}</td>
                            <td>{e.fecha_fin}</td>
                            <td>
                            <button type="button" className="btn btn-primary">Estado</button>{"  "}
                            <button type="button" className="btn btn-danger">Eliminar</button></td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
                <div><h3> Premios</h3></div>
            </ModalHeader>

            <ModalBody>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="N">N:</label>
                    <div>
                        <input type="text" className="form-control" name="N" id="N" readOnly value={this.state.data.length+1}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="Nombre">Nombre:</label>
                    <div>
                        <input type="text" className="form-control" name="Nombre" id="Nombre" onChange={this.handleChange}/>
                    </div>
                </div>
                
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="fecha_inicio">Fecha de Inicio:</label>
                    <div>
                        <input type="date" className="form-control" name="fecha_inicio" id="fecha_inicio" onChange={this.handleChange}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="Cantidad">Cantidad de puntos:</label>
                    <div>
                        <input type="text" className="form-control" name="Cantidad" id="Camtodad" onChange={this.handleChange}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="fecha_fin">Fecha de Fin:</label>
                    <div>
                        <input type="date" className="form-control" name="fecha_fin" id="fecha_fin" onChange={this.handleChange}/>
                    </div>
                </div>

            </ModalBody>

            <ModalFooter>
                <button type="button" id="enviar" className="btn btn-primary">Enviar</button>
                <button type="button" id="cancelar" className="btn btn-danger" onClick={()=>this.ocultarModalAsignarE()}>Enviar</button>
            </ModalFooter>
        </Modal>

        </div>
        )
    }
}
export default Ranking