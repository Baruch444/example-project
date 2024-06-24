import { TextField, Stack, Checkbox, FormControlLabel, Button, ButtonGroup, Typography, Box} from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SendIcon from '@mui/icons-material/Send';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import "./ContactUs.css";

function ContactUs(): JSX.Element {


    const columns:GridColDef[] = [
        { field: "name", headerName: "Name" },
        { field: "phone", headerName: "Phone"},
        { field: "email", headerName: "Email", width: 200}
    ];

    const rows = [
        { id: 1, name: "Bart", email: "Bart@simpson.com", phone: "0528823697"},
        { id: 2, name: "Lish", email: "Lish@simpson.com", phone: "0538523697"},
        { id: 3, name: "Homer", email: "Homer@simpson.com", phone: "0588523697"}
    ]


    return (
        <div className="ContactUs ">

			<Box className="box">

                <ContactPhoneIcon color="secondary" fontSize="large"/>
                <Typography fontWeight={600} variant="h4">Contact Us</Typography>
                <Typography mb={4} variant="body1">Please Fill The Form:</Typography>


                <Stack spacing={3} mt={4}>
                    <TextField variant="outlined" label="Full Name:"/>
                    <TextField variant="outlined" label="Email:" type="email"/>
                    <TextField variant="outlined" label="Message:" multiline rows={2}/>
                    <FormControlLabel label="I agree the terms and conditions" control={<Checkbox />}/>

                    <ButtonGroup fullWidth>
                        <Button color="success" startIcon={<SendIcon />} variant="contained">Send</Button>
                        <Button color="error" startIcon={<RestartAltIcon />} variant="outlined">Reset</Button>
                    </ButtonGroup>
                    
                </Stack>
            </Box>

            <Box className="box">
                <Typography mb={4} fontWeight={600} variant="h4">Information</Typography>
                <DataGrid  columns={columns} rows={rows} />
            </Box>


        </div>
    );
}

export default ContactUs;
