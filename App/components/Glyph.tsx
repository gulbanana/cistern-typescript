import * as React from 'react';

export interface GlyphProps {
    name: string
}

export class Glyph extends React.Component<GlyphProps, {}> {
    public render() {
        return <span className={'glyphicon glyphicon-' + this.props.name}></span>;
    }
}
