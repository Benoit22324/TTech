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
    </>
}

export default Table