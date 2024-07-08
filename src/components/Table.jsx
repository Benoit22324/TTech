import { useSelector } from "react-redux"
import { selectDatas, selectLoading, selectStatus } from "../store/selector/data"

const Table = () => {
    const datas = useSelector(selectDatas);
    const status = useSelector(selectStatus);
    const loadingmsg = useSelector(selectLoading);

    return <>
        {
            status === 'loading' ? <p>{loadingmsg}</p>
            :
            status === 'rejected' && <p>{loadingmsg}</p>
        }
        <table>
            <thead>
                <tr><td>Year</td><td>Value</td></tr>
            </thead>
            <tbody>
                {
                    datas !== undefined &&
                    datas.length > 0 ? datas.map((data, index) => datas.value !== null && <tr key={index}><td>{data.date}</td> <td>${data.value}</td></tr>)
                    :
                    <tr><td>No Value</td> <td>No Value</td></tr>
                }
            </tbody>
        </table>
    </>
}

export default Table