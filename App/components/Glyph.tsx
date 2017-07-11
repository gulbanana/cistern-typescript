import * as React from 'react';

export function Glyph(props: {name: string}) {
    return <span className={'glyphicon glyphicon-' + props.name}></span>;
}
