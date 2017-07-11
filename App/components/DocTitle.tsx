import * as React from 'react';
import * as withSideEffect from 'react-side-effect';

export interface DocTitleProps {
    title: string
}

class _DocTitle extends React.Component<DocTitleProps, {}> {
    public render() {
        if (this.props.children) {
            return React.Children.only(this.props.children);
        } else {
            return null;
        }
    }
}

function reducePropsToState(propsList: DocTitleProps[]) {
  var innermostProps = propsList[propsList.length - 1];
  if (innermostProps) {
    return innermostProps.title;
  }
}

function handleStateChangeOnClient(title: string) {
  var nextTitle = (typeof title === 'undefined') ? "Cistern" : "Cistern - " + title;
  if (nextTitle !== document.title) {
    document.title = nextTitle;
  }
}

export let DocTitle = withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(_DocTitle);

// hack: otherwise, the broken optimisation in react-side-effect will cut off context propagation and break routing!
(DocTitle.prototype as any).shouldComponentUpdate = () => true;