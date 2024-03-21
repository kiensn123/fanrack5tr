
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import Add from '../common/Addlist';


import { Container } from "react-bootstrap";

import React, { useState, useEffect } from "react";

function Hentai(){
    const [mangchua,Setmangchua] = useState([])
    
    
    const goccay = 
    {
        Title : "",
        Author:"",
        Favourite:"false"
    }

 
  
    useEffect(function(){

    },[addtomang]);
  
    function yeuthich(e){
        goccay.Favourite = e.target.checked

    }

   
    function title(e){
       
        goccay.Title = e.target.value
       
        
    }
    function author(e){
        goccay.Author = e.target.value
      
    }
    function addtomang(){
   
        return(
            Setmangchua([...mangchua,goccay])
            
        )
        
      

       
     }

   
    return(
    <Container>
       
        
        <div className="themmoi">
                <div className="timkiem">    
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg></InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                
                    
                </div>
        
            <div className="listbook">
                <p id="tieude">A list of Books</p>
                    <ListGroup>

                        <Add data={mangchua} />
                      
                    </ListGroup> 
            
            </div>
            <div className="tacgia">
                <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                </Form.Select>
            </div>
        
            <div className="themsach">
                    <p id="tieude">Add a new Book</p>
                    <div>
                        <b> Title</b><br></br>
                        <input onChange={title} type="text" name="name" placeholder=""></input>
                    </div>
                    <div>
                        <b> Author</b>
                        <br></br>
                        <input onChange={author} type="text" name="name" placeholder=""></input>
                    </div>
            </div>
            <div className="add">
                    <div>
                        <b>Favourite</b>
                        <input type="checkbox" id="true-false" name="true-false" onChange={yeuthich} ></input>
                    </div>
                    <div>
                            <button onClick={addtomang}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                                Add</button>
                        </div>
                    </div>

        </div>
    </Container>
  
       
    )


}

export default Hentai