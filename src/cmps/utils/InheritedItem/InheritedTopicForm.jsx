import React from 'react'
import FormWrapper from '../FormWrapper'
import { inheritedItemValidation } from '../validation'
import InheritedTopic from './InheritedTopic'

function InheritedTopicForm({ name }) {
    const itemDataName = `${name}_data`

    return (
        <FormWrapper
            validationSchema={inheritedItemValidation(name)}
        >
            <InheritedTopic name={name} itemDataName={itemDataName} />
        </FormWrapper>

    )
}

export default InheritedTopicForm