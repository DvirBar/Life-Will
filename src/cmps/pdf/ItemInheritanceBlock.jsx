import React from 'react'
import translation, { answers } from '../../store/translation'
import data from '../../store/sampleData'
import Subtitle from './Subtitle'
import ItemInheritance from './ItemInheritance'
import { View } from '@react-pdf/renderer'

function ItemInheritanceBlock({ itemKey }) {
    return (
        <View>
            <Subtitle>{translation[`${itemKey}_title`]}</Subtitle>
            {data[itemKey] === answers.yes && data[`${itemKey}_data`].map((item, index) =>
                <ItemInheritance item={item} itemKey={itemKey} index={index} numItems={data[`${itemKey}_data`].length} />
            )}
        </View>

    )
}

export default ItemInheritanceBlock