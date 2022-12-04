import { Grid, Table, TableBody, TableCell, tableCellClasses, TableRow, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandCard from './ExpandCard';
import { styled } from '@mui/material/styles';
import styles from "./expand.module.css"
const data = [
  { name: "Website", link: "https://www.google.com" },
  { name: "Visitors ", link: "1M per month" },
  { name: "Twitter", link: "https://twitter.com/" },
  { name: "Facebook", link: "https:/facebook.com" },
  { name: "Linkedin", link: "https://www.linkedin.com" },
  { name: "Do-Follow Links", link: "No" },
  { name: "No-Follow Links", link: "Yes(2)" },
  { name: "Google News", link: "Google News" },
  { name: "Indexed Article", link: "Yes" },
  { name: "Social Share", link: "No" },
  { name: "SNo-Follow Links", link: "Yes(2)" },
]

function Expand() {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    width: "90%",
    margin: "auto",
    padding: "2em",
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <div className={styles.mainDiv}>
      <Grid className={styles.gridContainer} container spacing={2}>
        <Grid item xs={12} md={12}>

          <Typography
            variant='h6'
            fontWeight="bold"
          >
            <span><ArrowBackIcon /></span>
            Continue Shopping
          </Typography>
        </Grid>
        <Grid className={styles.expandCardGrid} item xs={12} md={4}>
          <ExpandCard name={"Name"} details={"About of the website"} price={10} />
        </Grid>
        <Grid item xs={12} md={8}>
          <div className='md:mx-10'>
            <Table className={styles.table}>

              <TableBody  >
                {data.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.link}</StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Expand