import React, { Component } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from "react-bootstrap";

//const urlS = "http://localhost:3000/solicitudes"
const premios = [
    {N: 1, fecha_inicio: "2/07/22", Descripcion:'', Cantidad: 300,  fecha_fin: "2/10/22"},
    {N: 2, fecha_inicio: "2/07/22", Descripcion:'', Cantidad: 200, fecha_fin: "2/10/22"},
    {N: 3, fecha_inicio: "2/07/22", Descripcion:'', Cantidad: 100, fecha_fin: "2/10/22"},
]
class Premios extends Component {
    state={
        data: premios,
        form:{
            N: 0,
            fecha_inicio:'',
            Descripcion:'',
            Cantidad:0,
            fecha_fin:''
        },
        modalInsertar: false,
        modalEditar: false,
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
        this.setState({modalInsertar: true});
    }

    ocultarModalAsignarE=()=>{
        this.setState({modalInsertar: false});
    }

    mostrarModalEditar=(register)=>{
        this.setState({modalEditar: true, form: register});
    }

    ocultarModalEditar=()=>{
        this.setState({modalEditar: false});
    }

    insertar=()=>{
        var id = {...this.state.form};
        id.N = this.state.data.length+1;
        var list = this.state.data;
        list.push(id);
        this.setState({data: list})
    }

    editar=(dato)=>{
        var count=0;
        var list = this.state.data;
        list.map((register)=>{
            if(dato.N = register.N){
                list[count].fecha_inicio=dato.fecha_inicio;
                list[count].Descripcion=dato.Descripcion;
                list[count].Cantidad=dato.Cantidad;
                list[count].fecha_fin=dato.fecha_fin;
            }
            count++;
        });
        this.setState({data: list, modalEditar: false});
    }

    eliminar=(dato)=>{
        var option = window.confirm("Esta seguro de eliminar el registro"+dato.N);
        if(option){
            var contador=0;
            var list = this.state.data;
            list.map((registro)=>{
                if(registro.N==dato.N){
                    list.splice(contador, 1);
                }
                contador++;
            });
            this.setState({data: list})
        }
    }

    render(){
        return (
        <div className="Routes">
            <br/>
        <Container> 
            <br/> <br/>
            <table className = "table table/border text-center">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Fecha_inicio</th>
                        <th>Descripcion</th>
                        <th>Cantidad</th>
                        <th>Fecha_fin</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((e)=>(
                        <tr key={e.N}>
                            <td>{e.N}</td>
                            <td>{e.fecha_inicio}</td>
                            <td>{e.Descripcion}</td>
                            <td>{e.Cantidad}</td>
                            <td>{e.fecha_fin}</td>
                            <td>
                            <button type="button" className="btn btn-primary" onClick={()=> this.mostrarModalEditar(e)}>Editar</button>
                            <button type="button" className="btn btn-danger" onClick={()=> this.eliminar(e)}>Eliminar</button></td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        
        </Container>

        
            <div><h3> Premios</h3></div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="N">N:</label>
                    <div>
                        <input type="text" className="form-control" name="N" id="N" readOnly value={this.state.data.length+1}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="fecha_inicio">Fecha de Inicio:</label>
                    <div>
                        <input type="date" className="form-control" name="fecha_inicio" id="fecha_inicio" onChange={this.handleChange}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="descripcion">Descripcion:</label>
                    <div>
                        <input type="text" className="form-control" name="Descripcion" id="Descripcion" onChange={this.handleChange}/>
                    </div>
                </div>
                
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="cantidad">Cantidad:</label>
                    <div>
                        <input type="number" className="form-control" name="Cantidad" id="Cantidad" onChange={this.handleChange}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="fecha_fin">Fecha de Fin:</label>
                    <div>
                        <input type="date" className="form-control" name="fecha_fin" id="fecha_fin" onChange={this.handleChange}/>
                    </div>
                </div>

                <button type="button" id="enviar" className="btn btn-primary" onClick={()=>this.insertar()}>Enviar</button>
                <button type="button" id="cancelar" className="btn btn-danger" onClick={()=>this.ocultarModalAsignarE()}>Cancelar</button>

                <br></br>
                <div><h3>Editar Premios</h3></div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="N">N:</label>
                    <div>
                        <input type="text" className="form-control" name="N" id="N" readOnly value={this.state.form.N}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="fecha_inicio">Fecha de Inicio:</label>
                    <div>
                        <input type="date" className="form-control" name="fecha_inicio" id="fecha_inicio" onChange={this.handleChange} value={this.state.form.fecha_inicio}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="descripcion">Descripcion:</label>
                    <div>
                        <input type="text" className="form-control" name="Descripcion" id="Descripcion" onChange={this.handleChange} value={this.state.form.Descripcion}/>
                    </div>
                </div>
                
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="cantidad">Cantidad:</label>
                    <div>
                        <input type="number" className="form-control" name="cantidad" id="cantidad" onChange={this.handleChange} value={this.state.form.Cantidad}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="fecha_fin">Fecha de Fin:</label>
                    <div>
                        <input type="date" className="form-control" name="fecha_fin" id="fecha_fin" onChange={this.handleChange} value={this.state.form.fecha_fin}/>
                    </div>
                </div>

                <button type="button" id="editar" className="btn btn-primary" onClick={()=> this.editar(this.state.form)}>Editar</button>
                <button type="button" id="cancelar" className="btn btn-danger" onClick={()=> this.ocultarModalEditar()}>Cancelar</button>

        </div>

        
        )
    }
}
export default Premios