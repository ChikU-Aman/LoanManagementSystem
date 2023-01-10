import React, { useEffect, useState } from 'react'
// import ProgressBar from 'react-bootstrap/ProgressBar';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Container, Table, Button } from 'reactstrap'

const value = 700
const CibilCheck = () => {
    const [cibil, setCibil] = useState([])
    const fetchCibil = async () => {
        const data = await fetch("http://localhost:5000/cibil")
        const response = await data.json()
        setCibil(response)
        // console.log(response)
    }
    useEffect(() => {
        fetchCibil()
    }, [])
    return (

        <div style={{ width: 200, height: 200 }}>
            
            <Table><tbody>
                {cibil.map((cibil) => {
                    return <tr>
                        <td>{cibil.id}</td>
                        <td>{cibil.name}</td>
                        {/* <td>{cibil.score}</td> */}
                        <td><CircularProgressbar value={cibil.score} maxValue={900} text={`${cibil.score * 1}%`} /></td>
                    </tr>
                })}
            </tbody>
            </Table>
        </div>
    );
}

export default CibilCheck