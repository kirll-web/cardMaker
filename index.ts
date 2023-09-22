//типы
type Char = {
    value: string,
    fontSize: number,
    fontFamily: string,
    color: string,
    bold: string
}

type Block = {
    id: string,
    xPos: number,
    yPos: number,
    width: number,
    height: number
}

type ImageBlock = Block & {
    type: 'image',
    data: string
}

type TextBlock = Block & {
    type: 'text',
}

type GraphicObject = Block & {
    type: 'graphic',
    data: Object
}

type Circle = Block &  {
    borderRadius: number
}

type Page = {
    id: string,
    name: string,
    width: number,
    height: number,
    blocks: Array<TextBlock|ImageBlock|GraphicObject>
}

type filter = {
    name: string,
    colorFilter: string
}

type Doc = {
    pages: Array<Page>
}

type selectionArea = {
    xPos: number,
    yPos: number,
    width: number,
    height: number
}

type buttonMenu = Block & {
    name: string
}

type menuBlock = Block & {
    buttons: Array<buttonMenu>
}

type command = Block & {
    name: string  
}

type historyBlock = Block & {
    history: Array<command>
}

type template = {
    id: string,
    name: string,
    blocks: Array<TextBlock|ImageBlock|GraphicObject>
}

type templatesMenu =  Block &{
    id: string,
    name: string,
    templates: Array<template>
}


type popup =  Block &{
    name: string,
    message: string
}


