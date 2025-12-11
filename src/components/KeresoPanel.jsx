import { useEffect } from "react";

const KeresoPanel = ({filters, setFilters}) => {
    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });

    }
    return(
        <tr>
            <th><input type="number" name="id" id="id" onChange={handleChange}/></th>
            <th><input type="text" name="nev" id="TeljesNev" onChange={handleChange} /></th>
            <th><input type="number" name="kor" id="Eletkor" onChange={handleChange}/></th>
            <th><input type="date" name="belepesDatuma" id="BelepesDatuma" onChange={handleChange}/></th>
        </tr>
    )
}

export default KeresoPanel;