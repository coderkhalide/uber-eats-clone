import React from 'react'
import AppButton from '../AppButton'
import { useFormikContext } from 'formik'
 
export default function AppSubmitButton({title, ...rest}) {
    const {handleSubmit} = useFormikContext()

    return (
        <AppButton title={title} onPress={handleSubmit} {...rest}/>
    )
}

