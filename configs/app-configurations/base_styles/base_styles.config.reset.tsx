// * Import Tools
import { css } from "@emotion/react";

export const BaseStylesConfigReset = css`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 10px;
    }
    body {
        text-align: right;
        direction: rtl;
    }
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    font,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
    }
    body {
        line-height: 1;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }

    /* remember to define focus styles! */
    :focus {
        outline: 0;
    }

    /* remember to highlight inserts somehow! */
    ins {
        text-decoration: none;
    }
    del {
        text-decoration: line-through;
    }

    /* tables still need 'cellspacing="0"' in the markup */
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;
