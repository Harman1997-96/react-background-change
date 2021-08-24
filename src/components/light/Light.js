import React from 'react'
import onImage from '../../asserts/images/onImage.png'
import offImage from '../../asserts/images/offImage.png'
import {useDispatch, useSelector} from 'react-redux'
import { lightKey } from '../../redux/lightRedux/light.reducer'
import {fetchLight} from '../../redux/lightRedux/light.actions'

const Light = () => {

    // handle click
    let dispatch = useDispatch()

    let clickLight = () =>{
        dispatch(fetchLight())
    }
    // view store
    let viewLight = useSelector((state) =>{
        return state[lightKey]

    })
    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(viewLight)}</pre> */}
        <div className='row mt-5'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div className='card text-center'>
                    <div className='card-header'>
                        <h2 className='font-weight-bold'>LIGHT APP</h2>
                    </div>
                    <div className='card-body'>
                        {
                            (viewLight.switch==false)?
                            <img src={offImage} alt='onImage' width='220' height='280'/>: 
                            <img src={onImage} alt='onImage' width='220' height='280'/>
                        }
                     
                       
                    </div>

                    <div className='card-footer'>
                        {
                            (viewLight.switch==false)?
                            <button className='btn btn-success font-weight-bold' onClick={clickLight}>ON</button>:
                            <button className='btn btn-danger font-weight-bold' onClick={clickLight}>OFF</button>
                        }
                       
                        
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
            
        
    )
}

export default Light
