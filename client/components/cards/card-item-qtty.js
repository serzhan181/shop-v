import {HStack, Button, Input, useNumberInput} from "@chakra-ui/react";
import {observer} from 'mobx-react-lite'
import {cart} from '@/stores/cart.state'

export const CardItemQtty = observer(({id}) => {
    const value = cart.getItem(id)?.count || 0

    const {
        getInputProps,
        getIncrementButtonProps,
        getDecrementButtonProps,
    } = useNumberInput({
        step: 1,
        defaultValue: 1,
        value
    })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return Boolean(value) ? (
        <HStack size={'sm'} isAttached>
            <Button size={'sm'} {...inc}>+</Button>
            <Input size={'sm'} maxW={'12'} {...input} />
            <Button size={'sm'} {...dec}>-</Button>
        </HStack>
    ) : null
})