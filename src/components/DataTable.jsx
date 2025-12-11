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
            </table>
        </div>
    )
}

export default DataTable;