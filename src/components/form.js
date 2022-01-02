import react, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
//import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    },
    typography: {
        color: 'red'
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue); 
    const [userError, setUserErrors] = useState({}); 
    const [isSubmit, setIsSubmit] = useState(false); 
    const classes = useStyles();
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

 
    const handleSubmit = (e) =>{
      setUserErrors(validate(user));
      setIsSubmit(true);
    }

    useEffect(() => {
      console.log(userError)
      if(Object.keys(userError).length === 0 && isSubmit){
        console.log(user)
        navigate('./all')
      }
    }, [userError]);

    const validate = (values) =>{
      const errors = {};
      const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!values.name){
        errors.name = "Name is required"
      }
      if(!values.username){
        errors.username = "User Name is required"
      }
      if(!values.email){
        errors.email = "Email is required"
      }else if(!regex.test(values.email)){
        errors.email = "This is not correct type of email"
      }
      if(!values.phone){
        errors.phone = "Phone is required"
      }

      return errors;
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name} id="my-input" />
            </FormControl>
            <Typography variant="p" className = {classes.typography}>{userError.name}</Typography>
            
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={user.username} id="my-input" />
            </FormControl>

            <Typography variant="p" className = {classes.typography}>{userError.username}</Typography>

            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} id="my-input"/>
            </FormControl>
            <Typography variant="p" className = {classes.typography}>{userError.email}</Typography>

            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} id="my-input" />
            </FormControl>
            <Typography variant="p" className = {classes.typography}>{userError.phone}</Typography>

            <FormControl>
                <Button variant="contained" color="primary" onClick={() => handleSubmit()}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;