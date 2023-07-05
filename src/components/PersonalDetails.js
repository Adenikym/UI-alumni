import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const residences = [
  {
    value: 'ABH',
    label: 'Alexander brown hall',
  },
  {
    value: 'AWO',
    label: 'Awolowo hall',
  },
  {
    value: 'SBH',
    label: 'Bello hall',
  },
  {
    value: 'QIH',
    label: 'Idia hall',
  },
  {
    value: 'GIH',
    label: 'Independence hall',
  },
  {
    value: 'RKH',
    label: 'Kuti hall',
  },
  {
    value: 'KMH',
    label: 'Mellanby hall',
  },
  {
    value: 'NAH',
    label: 'Nnamdi Azikwe hall',
  },
  {
    value: 'QEH',
    label: 'Queen Elizabeth hall',
  },
  {
    value: 'LTH',
    label: 'Tedder hall',
  },
];


export default function PersonalDetails() {

    return(
        <div className="container pl-10"> 
           <div className="flex flex-col mb-2">
                <div className="text-label-text">Full Name</div>
                <div><input className="w-72 p-2 border border-[#00000066] rounded-sm text-sm" /></div>
           </div>
            
            <div className="flex flex-col mb-2"> 
              <div>
                <label className="text-label-text">Hall of Residence</label>
              </div>
              <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
            
                    helperText="Please select your hall of residence"
                    >
                    {residences.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
              </div>
                
                
            </div>
            
            <div className="flex flex-col">
              <div><label className="text-label-text">Year of Graduation</label></div>
              <div><input className="w-72 p-2 border border-[#00000066] rounded-sm text-sm" /></div>
                
            </div>
            

        </div>
    )
    
}