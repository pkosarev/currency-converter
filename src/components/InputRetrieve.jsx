import { Grid, InputAdornment, TextField } from '@mui/material'
import { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'

const InputRetrieve = () => {
  const { resultCurrency, setResultCurrency, codeToCurrency, firstAmount } = useContext(CurrencyContext);

  return (
    <Grid item xs={12} md>
        <TextField
            value={(resultCurrency*firstAmount)}
            onChange={e => setResultCurrency(e.target.value)}
            label="Я получу"
            fullWidth
            InputProps={{
                type: "number",
                startAdornment: <InputAdornment position="start">{codeToCurrency}</InputAdornment>
            }}
        />
    </Grid>
  )
}

export default InputRetrieve