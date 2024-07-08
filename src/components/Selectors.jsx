import { useSelector, useDispatch } from 'react-redux';
import { selectIndicator, selectRegion } from '../store/selector/data';
import { updateRegion, updateIndicator, fetchValues } from '../store/reducer/DataReducer';
import { useEffect } from 'react';

const Selectors = () => {
    const dispatch = useDispatch();
    const region = useSelector(selectRegion);
    const indicator = useSelector(selectIndicator);

    useEffect(() => {
        dispatch(fetchValues({region: region, indicator: indicator}))
    })

    return <>
        <input type="text" value={region} onChange={(e) => dispatch(updateRegion(e.target.value))} />
        <select id="indicator_select" value={indicator} onChange={(e) => dispatch(updateIndicator(e.target.value))}>
            <option value=''>No Selected</option>
            <option value='NY.GDP.MKTP.CD'>GDP</option>
            <option value='NE.IMP.GNFS.CD'>Imports of goods and services</option>
            <option value='NY.ADJ.NNTY.PC.CD'>Adjusted net national income per capita</option>
        </select>
    </>
}

export default Selectors