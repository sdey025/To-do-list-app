import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Card,
  Button,
  Input,
  CardTitle,
  CustomInput,
  CardText,
  Row,
  Col,
  Form,
  Table
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import "antd/dist/antd.css";
import { TimePicker } from "antd";
import { MdDeleteForever } from 'react-icons/md';
import swal from "sweetalert";
import EdiText from 'react-editext'
function Main() {
  let [imp, setimp] = useState(false);
  const [list, setlist] = useState([]);
  /*  const [list2, setlist2] = useState([]); */
  const [task, settask] = useState("");
  const [time, settime] = useState("");
  console.log(task);
  /*   console.log(time._d); */
  const submit = (e) => {
    e.preventDefault();
    if (!task) {
      swal("Oops!", "Please don't leave any fields empty", "error");
    } else {
      setlist([...list, { id: Date.now(), text: task, imp: imp }]);
      /*  setlist2([...list2,{id:Date.now(),text2: time}]) */
      e.target.reset();
      console.log(list);
      console.log(imp);
    }
    /* setimp(imp=false) */
  };
  const remove = (id) => {
    setlist(list.filter(lists => lists.id !== id))
  }
  const setupdate = (text, id) => {
    const lists = list
    lists.map(list =>{
      if(list.id === id){
        list.text = text
      }
    })
    setlist({list:lists})
  }
  const handleSave = (text,id) => {
    /* val.preventDefault() */
    list.map(lists => {
      if(lists.id === id){
        setlist({text:text})
      }
    })
    
  }
  return (
    <div id="maindiv" className="container">
      <br/>
     <br/>
      <Row className="m-0">
        <Col sm="12">
        <h4 className="text-success text-center">Welcome to To Do App</h4>
          <Card body className="card text-center ">
            <CardTitle tag="h5" className="font-weight-bold">
              Your Assistant
            </CardTitle>
            <CardText>
              <Form onSubmit={submit}>
                <label className="float-left mt-4">Task: </label>
                <Input
                  placeholder="Enter Your Task"
                  onChange={(e) => {
                    e.preventDefault();
                    settask(e.target.value);
                  }}
                  required
                />
                {/*  <label className="float-left mt-4">Time: </label>
              <TimePicker  size="large" onChange={settime} style={{width:'100%'}}  required/> */}
                <CustomInput
                  type="switch"
                  className="mt-4 float-left"
                  onChange={(e) => setimp(!imp)}
                  id="exampleCustomSwitch2"
                  name="customSwitch"
                  label="This is very important"
                />
                <br />
                <br />
                <br />
                <Button
                  color="success"
                  type="submit"
                  className="mt-4 mx-auto d-flex"
                >
                  Add Task
                </Button>
              </Form>
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row className="m-0">
        <Col sm="12">
          <Card body className="card text-center ">
            <CardTitle tag="h5" className="font-weight-bold">
              Tasks
            </CardTitle>
            <Table bordered id="table">
              <thead>
                <tr>
                  <th>sno.</th>
                  <th>Tasks</th>
                  <th>Importance</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {list.map((lists,index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td> {lists.text}</td>
                  <td>{lists.imp == true ? "Important" : "Not important"}</td>
                  <td><MdDeleteForever id="delete" onClick={() => remove(lists.id)}/></td>
                </tr>
              ))}
              </tbody>
            </Table>
            <CardText>

            </CardText>
            {/*             <CardText>

            </CardText> */}
          </Card>
        </Col>
      </Row>
      <br/>
      <br/>
    </div>
  );
}

export default Main;
