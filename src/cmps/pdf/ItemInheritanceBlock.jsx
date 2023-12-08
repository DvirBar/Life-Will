import React from 'react'
import translation from '../../store/translation'
import Subtitle from './Subtitle'
import ItemInheritance from './ItemInheritance'
import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { globalData as data } from '../../store/context'

const styles = StyleSheet.create({
    wrappedView: {
        marginTop: 10
    }
})

function ItemInheritanceBlock({ itemKey }) {
    const title = translation[`${itemKey}_title`]
    const itemData = data[`${itemKey}_data`]

    if (itemData.length === 0) {
        return <></>
    }

    return (
        <View>
            <>
                {/* Subtitle is wrapped with first block - Makes sure that wrapped views won't 
                    leave subtitle in the previous page */}
                <View style={styles.wrappedView} wrap={false}>
                    <Subtitle>{title}</Subtitle>
                    {itemData?.length > 0
                        ? <ItemInheritance item={itemData[0]} itemKey={itemKey} index={0} numItems={data[`${itemKey}_data`].length} />
                        : <Text>{"אין"}</Text>
                    }
                </View>

                {itemData?.map((item, index) =>
                    index > 0 &&
                    <ItemInheritance item={item} itemKey={itemKey} index={index} numItems={data[`${itemKey}_data`].length} />
                )}
            </>
        </View>
    )
}

export default ItemInheritanceBlock