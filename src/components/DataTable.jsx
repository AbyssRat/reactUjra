const DataTable = ({ adatok }) => {
    return(

        <div>
            <h2>
                data table
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>név</th>
                        <th>kor</th>
                        <th>belepes</th>
                    </tr>
                </thead>

                <tbody>
                    {adatok.map((adatsor) => (
                        <tr key = {adatsor.id}>
                            <td>{adatsor.id}</td>
                            <td>{adatsor.TeljesNev}</td>
                            <td>{adatsor.Eletkor}</td>
                            <td>{new Date(adatsor.BelepesDatuma).toLocaleDateString()}
                            </td>
                            
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;