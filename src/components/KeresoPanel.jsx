const KeresoPanel = ({filters, setFilters}) => {
    return(
        <tr>
            <th><input type="number" name="id" id="id" /></th>
            <th><input type="text" name="nev" id="TeljesNev" /></th>
            <th><input type="number" name="kor" id="Eletkor" /></th>
            <th><input type="date" name="belepes" id="BelepesDatuma" /></th>
        </tr>
    )
}

export default KeresoPanel;