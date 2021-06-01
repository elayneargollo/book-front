import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { putUser } from "../../services/api/login";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    formulario: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function ServerModal({ user, setIsOpen }) {
    const classes = useStyles();
    const rootRef = React.useRef(null);
    const [role, setRole] = useState('');
    const history = useHistory();

    function handleClose() {
        setIsOpen(false);
    }

    function editUser() {

        let id =  user.id;
        let username =  user.username;
        let password = user.password;

        let userEdit = { "id":id, "username":username, "password":password, "role":role};

        async function deleteUserId() {
            const response = await putUser(userEdit);

            if(response != null)
            {
                swal("", "User edit with success", "success");
            }
            else{
                swal("", "Error", "error");
                history.replace('/'); 
            }
          }

          deleteUserId();
          refreshPage();
    }

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 1000);
      }
    
    return (
        <div className="edit">
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
                container={() => rootRef.current}
            >
                <div className={classes.paper}>
                    <form className={classes.formulario} noValidate>
                        <h1>Edit User</h1>
                        <div>
                            <TextField disabled id="standard-required" label="Username" defaultValue={user.username} />
                            <TextField disabled id="standard-disabled" label="Password" type='password' helperText="Minimum size of 5 characters" defaultValue={user.password} />
                            <TextField requerid id="standard-disabled" label="Role" type='text' defaultValue={user.role} onChange={(e) => setRole(e.target.value)}/>
                        </div>
                    </form>
                    <div className='edit'
>
                        <Button className='editButton'
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={editUser}>Edit</Button>
                            
                        <Button  className='editButton'
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={handleClose}>Cancel</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}