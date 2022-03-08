/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react'

export const fadeIn = keyframes`
    from {
        opacity:0;
        -webkit-transform:translateY(10px); /* Safari, Chrome and Opera > 12.1 */
        -moz-transform:translateY(10px); /* Firefox < 16 */
        -ms-transform:translateY(10px); /* Internet Explorer */
        -o-transform:translateY(10px); /* Opera < 12.1 */
        transform:translateY(10px); 
    }

    to {
        opacity:1;
        -webkit-transform:translateY(0%);
        -moz-transform:translateY(0%);
        -ms-transform:translateY(0%);
        -o-transform:translateY(0%);
        transform:translateY(0%);
    }
`
