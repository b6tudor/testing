import {SAVE_COMMENT} from './types'

export const saveComment = (text) => {
    return {
        type: SAVE_COMMENT,
        payload: text
    }
}