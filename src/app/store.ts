import {atom} from 'jotai';
import { Stats } from './types';

const catchAtom = atom<boolean>(false)
const pokeAtom = atom<string>('')
const isCatchingAtom = atom<boolean>(false)
const timer = atom<number>(20)
const next = atom<boolean>(false)
const stats = atom<Stats[]>([])

export {catchAtom, pokeAtom, isCatchingAtom, timer, next, stats}
