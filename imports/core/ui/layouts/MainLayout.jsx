import React, { PureComponent } from 'react';

export class MainLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div id="main-layout">
        {React.cloneElement(children, this.props)}
      </div>
    )
  }
}

export default MainLayout;
