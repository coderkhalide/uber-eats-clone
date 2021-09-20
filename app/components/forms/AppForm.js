import { Formik } from 'formik'
import React from 'react'

export default function AppForm({initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>{children}</>
            )}
        </Formik>
    )
}
