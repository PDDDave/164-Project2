import React from 'react'
import mainHeaderImage from './images/pokeball2.png'
import { Search } from 'styled-icons/feather'

const images = {
    mainHeaderImage
}

const icons = {
    Search: <Search />
}

const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: {
        reds: {
            0: 'hsl(356, 100%, 45%)',
            1: 'hsl(356, 100%, 40%)',
            2: 'hsl(356, 100%, 35%)',
            3: 'hsl(356, 100%, 30%)',
            4: 'hsl(356, 100%, 25%)',
            5: 'hsl(356, 100%, 20%)'
        },

        grays: {
            0: 'hsl(208, 13%, 100%)',
            1: 'hsl(208, 13%, 95%)',
            2: 'hsl(208, 13%, 90%)',
            3: 'hsl(208, 13%, 85%)',
            4: 'hsl(208, 13%, 80%)',
            5: 'hsl(208, 13%, 75%)'
        }

    }
}

const variants = {
    iconButton: {
        primary: {
            color: theme.colors.grays[3]
        },
        contrast: {
            color: theme.colors.grays[0]
        }
    },
    header: {
        primary: {
            backgroundColor: theme.colors.reds[0]
        }
    }
}

export const Dex = {...theme, variants, images, icons}