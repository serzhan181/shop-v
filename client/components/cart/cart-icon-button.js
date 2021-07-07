import {IconButton, Badge, Center} from '@chakra-ui/react'
import {ShoppingCart} from 'react-feather'
import {observer} from "mobx-react-lite";
import {cart} from '@/stores/cart.state'

export const CartIconButton = observer(() => {
    return (
        <Center justify={'center'} position={'relative'}>
            {Boolean(cart.items.length) && <Badge zIndex={100} colorScheme={'red'} position={'absolute'} top={-1}
                                         right={0}>{cart.itemsLength}</Badge>}
            <IconButton isRound variant={'ghost'} icon={<ShoppingCart/>} aria-label={'cart'}/>
        </Center>
    )
})
