function getFormValues(fields){
    const values = {}
    fields.forEach(field => {
        const value = document.querySelector(`#${field}`).value;
        values[field] = value
    })
    return values
}

export default getFormValues