import React from 'react'
import Select from 'react-select'

const customStyles = {
    option: (provided) => ({
        ...provided
    }),
    container: (provided) => ({
        ...provided,
        width: '100%'
    })
}

const DropdownComponent = ({ onChange, options, isMulti, ...rest }) => {
    <Select
        styles={customStyles}
        options={options}
        menuPosition="absolute"
        onChange={onChange}
        isMulti={isMulti}
        {...rest}
    />
}

export default DropdownComponent