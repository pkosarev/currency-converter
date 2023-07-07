import { Grid, InputAdornment, TextField } from '@mui/material'
import { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'

const InputAmount = () => {
  const { firstAmount, setFirstAmount, codeFromCurrency } = useContext(CurrencyContext);

  return (
    <Grid item xs={12} md>
        <TextField
            value={firstAmount}
            onChange={e => setFirstAmount(e.target.value)}
            label="У меня есть"
            fullWidth
            InputProps={{
                type: "number",
                startAdornment: <InputAdornment position="start">{codeFromCurrency}</InputAdornment>
            }}
        />
    </Grid>
  )
}

export default InputAmount