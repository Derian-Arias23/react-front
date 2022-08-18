import React, { Component } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from "react-bootstrap";

//const urlS = "http://localhost:3000/solicitudes"
const data = [
    {N: 1, Usuario: "Derian", Geolocalizacion:'', Cantidad: 100, Imagen:'', Estado: '', fecha: "2/07/22"},
    {N: 2, Usuario: "Nicole", Geolocalizacion:'', Cantidad: 80, Imagen:'', Estado: '', fecha: "23/05/22"},
    {N: 3, Usuario: "Roberto", Geolocalizacion:'', Cantidad: 150, Imagen:'', Estado: '', fecha: "7/06/22"},
    {N: 4, Usuario: "Susana", Geolocalizacion:'', Cantidad: 200, Imagen:'', Estado: '', fecha: "10/09/22"},
    {N: 5, Usuario: "Joel", Geolocalizacion:'', Cantidad: 10, Imagen:'', Estado: '', fecha: "29/03/22"},
    {N: 6, Usuario: "Milena", Geolocalizacion:'', Cantidad: 20, Imagen:'', Estado: '', fecha: "1/04/22"},
    {N: 7, Usuario: "Steven", Geolocalizacion:'', Cantidad: 30, Imagen:'', Estado: '', fecha: "19/07/22"},
]
class Solicitudes extends Component {
    state={
        data: data,
        form:{
            N: 0,
            Usuario:'',
            Geolocalizacion:'',
            Cantidad:0,
            Imagen:'',
            Estado:'',
            fecha:''
        },
        modalInsertar: false,

    };

    handleChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    mostrarModalAsignarE=()=>{
        console.log("Hi");
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
          <button type="button" className="btn btn-success float-left"> Historial</button>  
            <br/> <br/>

            <table className = "table table/border text-center">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Usuario</th>
                        <th>Geolocalizacion</th>
                        <th>Cantidad</th>
                        <th>Imagen</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((e)=>(
                        <tr key={e.N}>
                            <td>{e.N}</td>
                            <td>{e.Usuario}</td>
                            <td>{e.Geolocalizacion}</td>
                            <td>{e.Cantidad}</td>
                            <td>{e.Imagen}</td>
                            <td>{e.Estado}</td>
                            <td>{e.fecha}</td>
                            <td>
                            <button type="button" className="btn btn-primary" onClick={()=> this.mostrarModalAsignarE()}>Estado</button>{"  "}
                            <button type="button" className="btn btn-danger">Eliminar</button></td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
                <div><h3> Asignar Estado</h3></div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                    <label>N:</label>
                    <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
                </FormGroup>

                <FormGroup>
                    <label>Estado:</label>
                    <input className="form-control" name="estado" type="text" id="estado" onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup>
                    <label>Fecha Solicitud:</label>
                    <input className="form-control" name="fecha" type="date" id="fecha" onChange={this.handleChange}/>
                </FormGroup>
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
export default Solicitudes
